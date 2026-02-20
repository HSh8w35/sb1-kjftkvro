import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { validateEmail } from '../utils/validation';

interface NewsletterSignupProps {
  source?: string;
}

function NewsletterSignup({ source = 'footer' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      setStatus('error');
      setMessage(emailValidation.error || 'Please enter a valid email address.');
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, source }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage('This email is already subscribed.');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error('Newsletter signup error:', error);
    }
  };

  return (
    <div className="w-full">
      <h4 className="text-[#2E2A26] font-semibold mb-4 flex items-center gap-2">
        <Mail className="w-5 h-5 text-[#8B6F47]" />
      </h4>
      <p className="text-[#2E2A26]/70 text-sm mb-4 leading-relaxed">
        Occasional reflections on leadership, independence, and stewardship—shared when perspective feels timely.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading'}
            className="w-full px-4 py-2.5 bg-white border border-[#8B6F47]/20 rounded-lg text-[#2E2A26] placeholder:text-[#2E2A26]/40 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/30 focus:border-[#8B6F47] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#8B6F47] text-white px-4 py-2.5 rounded-lg hover:bg-[#6F5838] transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <div
          className={`mt-3 p-3 rounded-lg text-sm ${
            status === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default NewsletterSignup;
