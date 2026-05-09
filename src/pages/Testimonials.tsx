import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Quote } from 'lucide-react';
import SEO from '../components/SEO';

interface Testimonial {
  id: string;
  client_name: string;
  client_title: string;
  client_property: string;
  quote: string;
  display_order: number;
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Client Perspectives"
        description="Reflections from independent hotel owners, board members, and executives who have worked with Heidi Stone in advisory leadership roles."
        url="https://heidistonehospitality.com/testimonials"
      />
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="/Testimonals_page_header.webp"
          alt="Hotel Leadership Professional"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Board & Client Perspective
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              The following reflections come from leaders who have worked with Heidi Stone in advisory, board, and executive capacities. They speak to how the work shows up—in moments of pressure, transition, and long-term decision-making.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-6 lg:px-12">
        <div className="mx-auto">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B6F47]"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl border border-[#B87333]/20 shadow-lg hover:shadow-xl transition-all"
              >
                <Quote className="w-10 h-10 text-[#B87333] mb-2" />
                <p className="text-[#2E2A26] leading-relaxed text-xl italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#B87333]/20 pt-3">
                  <p className="font-bold text-[#1F2A44] text-lg">{testimonial.client_name}</p>
                  <p className="text-[#8B6F47] mt-1">{testimonial.client_title}</p>
                  <p className="text-[#2E2A26]/70 whitespace-pre-line mt-1">{testimonial.client_property}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <div className="bg-white p-12 rounded-xl max-w-4xl mx-auto shadow-xl border border-[#B87333]/20">
            <h2 className="text-3xl font-bold mb-4 text-[#1F2A44]">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-[#2E2A26]">
              Join the independent hotel and resort executives who have elevated their leadership and their properties through strategic partnership.
            </p>
            <a
              href="/lets-talk#contact"
              className="inline-block bg-[#B87333] text-white px-10 py-4 rounded-lg hover:bg-[#8B6F47] transition-all shadow-xl font-semibold text-lg"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Testimonials;
