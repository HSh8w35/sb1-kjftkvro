import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { validateEmail, validateName, validateMessage, validatePhone, validateTextField } from '../utils/validation';

interface FormData {
  name: string;
  email: string;
  property_name: string;
  role: string;
  phone: string;
  inquiry_type: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    property_name: '',
    role: '',
    phone: '',
    inquiry_type: '',
    message: '',
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

    const messageValidation = validateMessage(formData.message);
    if (!messageValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(messageValidation.error || 'Invalid message');
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

    const propertyValidation = validateTextField(formData.property_name, 200);
    if (!propertyValidation.isValid) {
      setSubmitStatus('error');
      setErrorMessage(propertyValidation.error || 'Property name is too long');
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

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            property_name: formData.property_name || null,
            role: formData.role || null,
            phone: formData.phone || null,
            inquiry_type: formData.inquiry_type || null,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          property_name: formData.property_name,
          role: formData.role,
          phone: formData.phone,
          inquiry_type: formData.inquiry_type,
          message: formData.message,
        }),
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        property_name: '',
        role: '',
        phone: '',
        inquiry_type: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your inquiry. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-10 rounded-xl border-2 border-[#1F2A44] shadow-lg">
      <div className="mb-8 pb-8 border-b-2 border-[#B87333]/20">
        <h2 className="text-2xl font-bold text-[#1F2A44] mb-4 text-center">
          What to Include in Your Message
        </h2>
        <div className="space-y-3 text-xl text-[#2E2A26] leading-relaxed">
          <p>
            A brief introduction to your property, your role, and the leadership or organizational challenge you are navigating is helpful but not required. Even a simple expression of interest is sufficient to begin the dialogue.
          </p>
          <p>
            All correspondence is treated with complete discretion.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F2A44] mb-2">
        <a
          href="mailto:heidi@heidistonehospitality.com"
          className="hover:text-[#B87333] transition-colors underline"
        >
          Send Us a Message
        </a>
      </h2>
      <p className="text-lg text-[#2E2A26]/70 mb-6">
        Complete the form below and we'll respond within 48 hours.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-semibold text-lg">Message Sent</p>
          </div>
          <p className="text-green-700 text-center text-sm">Thank you!</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-semibold">Error submitting form</p>
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
              className="w-full px-4 py-3 border border-[#B87333]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
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
              className="w-full px-4 py-3 border border-[#B87333]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="property_name" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Property or Organization Name
            </label>
            <input
              type="text"
              id="property_name"
              name="property_name"
              value={formData.property_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#B87333]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="Property name"
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
              className="w-full px-4 py-3 border border-[#B87333]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="e.g., Owner, Board Member, GM"
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
              className="w-full px-4 py-3 border border-[#B87333]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="inquiry_type" className="block text-sm font-semibold text-[#2E2A26] mb-2">
              Type of Inquiry
            </label>
            <select
              id="inquiry_type"
              name="inquiry_type"
              value={formData.inquiry_type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#B87333]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all bg-white"
            >
              <option value="">Select one</option>
              <option value="consultation">Advisory Consultation</option>
              <option value="speaking">Speaking Engagement</option>
              <option value="partnership">Strategic Partnership</option>
              <option value="board">Board Advisory</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#2E2A26] mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border border-[#B87333]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your property, your role, and the leadership or organizational challenge you're navigating..."
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
                : 'bg-[#1F2A44] hover:bg-[#2E3A54]'
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
                Message Sent
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
