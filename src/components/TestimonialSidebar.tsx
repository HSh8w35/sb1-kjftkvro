import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  client_name: string;
  client_title: string;
  client_property: string;
  quote: string;
}

interface TestimonialSidebarProps {
  count?: number;
  className?: string;
  skip?: number;
  excludeName?: string;
}

function TestimonialSidebar({ count = 2, className = '', skip = 0, excludeName }: TestimonialSidebarProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, [count, skip, excludeName]);

  const fetchTestimonials = async () => {
    try {
      let query = supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .eq('show_in_sidebar', true)
        .order('display_order', { ascending: true });

      if (excludeName) {
        query = query.neq('client_name', excludeName);
      }

      const { data, error } = await query.range(skip, skip + count - 1);

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="bg-white/50 p-6 rounded-xl border border-[#B87333]/20 animate-pulse">
          <div className="h-4 bg-[#B87333]/20 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-[#B87333]/20 rounded w-full mb-2"></div>
          <div className="h-4 bg-[#B87333]/20 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white p-8 rounded-xl border border-[#B87333]/20 shadow-md hover:shadow-lg transition-all"
        >
          <Quote className="w-10 h-10 text-[#B87333] mb-4" />
          <p className="text-lg text-[#2E2A26] leading-relaxed mb-4 italic">
            "{testimonial.quote}"
          </p>
          <div className="border-t border-[#B87333]/20 pt-3">
            <p className="font-bold text-[#1F2A44]">{testimonial.client_name}</p>
            <p className="text-[#8B6F47]">{testimonial.client_title}</p>
            <p className="text-[#2E2A26]/70 whitespace-pre-line">{testimonial.client_property}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialSidebar;
