import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { validateEmail, validateName, validateMessage, validatePhone, validateTextField } from '../utils/validation';

interface FormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  phone: string;
  event_type: string;
  event_date: string;
  audience: string;
  context: string;
}

function SpeakingInquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    role: '',
    phone: '',
    event_type: '',
    event_date: '',
    audience: '',
    context: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const nameValidation = validateName(formData.name);
    if (!nameValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(nameValidation.error || 'Invalid name');
      setIsSubmitting(false);
      return;
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(emailValidation.error || 'Invalid email');
      setIsSubmitting(false);
      return;
    }

    const contextValidation = validateMessage(formData.context);
    if (!contextValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(contextValidation.error || 'Invalid context');
      setIsSubmitting(false);
      return;
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(phoneValidation.error || 'Invalid phone number');
      setIsSubmitting(false);
      return;
    }

    const orgValidation = validateTextField(formData.organization, 200);
    if (!orgValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(orgValidation.error || 'Organization name is too long');
      setIsSubmitting(false);
      return;
    }

    const roleValidation = validateTextField(formData.role, 100);
    if (!roleValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(roleValidation.error || 'Role is too long');
      setIsSubmitting(false);
      return;
    }

    const dateValidation = validateTextField(formData.event_date, 100);
    if (!dateValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(dateValidation.error || 'Event date is too long');
      setIsSubmitting(false);
      return;
    }

    const audienceValidation = validateTextField(formData.audience, 200);
    if (!audienceValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(audienceValidation.error || 'Audience description is too long');
      setIsSubmitting(false);
      return;
    }

    try{
      const { error } = await supabase
        .from('speaking_inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            organization: formData.organization || null,
            role: formData.role || null,
            phone: formData.phone || null,
            event_type: formData.event_type || null,
            event_date: formData.event_date || null,
            audience: formData.audience || null,
            context: formData.context,
          },
        ]);

      if (error) throw error;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-speaking-email`;
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          role: formData.role,
          phone: formData.phone,
          event_type: formData.event_type,
          event_date: formData.event_date,
          audience: formData.audience,
          context: formData.context,
        }),
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        phone: '',
        event_type: '',
        event_date: '',
        audience: '',
        context: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your speaking inquiry. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm p-10 rounded-2xl border border-[#8B6F47]/20 shadow-lg">
      <h2 className="text-3xl font-bold text-[#2E2A26] mb-2">
        Submit Speaking Inquiry
      </h2>
      <p className="text-lg text-[#2E2A26]/70 mb-8">
        Please provide details about your event, audience, and objectives. All inquiries are reviewed carefully.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-semibold">Thank you for your inquiry. It was successfully submitted. We will connect with you shortly.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-semibold">Error submitting inquiry</p>
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="organization" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Organization or Event Name
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="Organization name"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Your Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="e.g., Event Organizer, Board Member"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="event_type" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Event Type
            </label>
            <select
              id="event_type"
              name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all bg-white"
            >
              <option value="">Select one</option>
              <option value="conference">Industry Conference</option>
              <option value="retreat">Executive Retreat</option>
              <option value="forum">Leadership Forum</option>
              <option value="board">Board Meeting</option>
              <option value="panel">Panel Discussion</option>
              <option value="workshop">Workshop/Seminar</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="event_date" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Expected Date or Timeframe
            </label>
            <input
              type="text"
              id="event_date"
              name="event_date"
              value={formData.event_date}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="e.g., March 2026 or Q2 2026"
            />
          </div>

          <div>
            <label htmlFor="audience" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Audience Size & Type
            </label>
            <input
              type="text"
              id="audience"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="e.g., 200 independent hotel owners"
            />
          </div>
        </div>

        <div>
          <label htmlFor="context" className="block text-sm font-semibold text-[#2E2A26] mb-2">
            Event Context & Objectives <span className="text-red-500">*</span>
          </label>
          <textarea
            id="context"
            name="context"
            required
            value={formData.context}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border border-[#8B6F47]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all resize-none"
            placeholder="Please describe the event context, audience profile, and what you hope participants will gain from this engagement..."
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-[#2E2A26]/60">
            <span className="text-red-500">*</span> Required fields
          </p>
          <button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className={`px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-semibold text-white ${
              submitStatus === 'success'
                ? 'bg-[#B87333] hover:bg-[#B87333]'
                : 'bg-[#2E2A26] hover:bg-[#3E3A36]'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Inquiry Sent
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Inquiry
              </>
            )}
          </button>
        </div>

        <p className="text-sm text-[#2E2A26]/60 pt-2">
          All speaking inquiries are reviewed separately from advisory engagements and treated with complete confidentiality.
        </p>
      </form>
    </div>
  );
}

export default SpeakingInquiryForm;
