import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

interface FAQItem {
  question: string;
  answer: string;
}

interface Testimonial {
  id: string;
  client_name: string;
  client_title: string;
  client_property: string;
  quote: string;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [bobTestimonial, setBobTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    fetchBobTestimonial();
  }, []);

  const fetchBobTestimonial = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .ilike('client_name', '%Bob%Donovan%')
        .maybeSingle();

      if (error) throw error;
      setBobTestimonial(data);
    } catch (error) {
      console.error('Error fetching Bob testimonial:', error);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "What types of organizations does Heidi Stone Hospitality work with?",
      answer: "Independent hotels, destination resorts, historic properties, family-owned hospitality businesses, management companies, municipalities, destination organizations, and boards responsible for hospitality or experiential assets."
    },
    {
      question: "What kinds of challenges do you help organizations solve?",
      answer: "• Leadership transitions\n• Revenue stagnation\n• Commercial performance\n• Organizational alignment\n• Growth planning\n• Reinvestment\n• Management company transitions\n• Operational change\n• Strategic decision-making"
    },
    {
      question: "What is the difference between strategic advisory and executive leadership?",
      answer: "Strategic advisory provides experienced guidance to owners, boards, and leadership teams while existing management continues leading the organization.\n\nExecutive leadership places Heidi in a more active leadership role—whether on a fractional or interim basis—to guide the organization through periods of transition, growth, or significant change."
    },
    {
      question: "Do you only work with hotels?",
      answer: "No.\n\nWhile independent hotels and resorts remain the foundation of the practice, Heidi Stone Hospitality also works with destination organizations, municipalities, hospitality portfolios, and organizations developing visitor experiences where executive leadership and strategic guidance are needed."
    },
    {
      question: "Can you work alongside our current management company?",
      answer: "Absolutely.\n\nMany engagements involve partnering with ownership while working collaboratively with an existing management company or executive team.\n\nThe objective is alignment—not replacement."
    },
    {
      question: "Do you serve as an interim executive?",
      answer: "Yes.\n\nDepending on the organization's needs, Heidi may serve in a fractional or interim executive leadership capacity during leadership transitions, organizational change, or executive searches."
    },
    {
      question: "What do you mean by \"Alignment is where possibility becomes performance?\"",
      answer: "Every organization has opportunities. The difference between organizations that realize those opportunities and those that don't is alignment. When leadership, operations, marketing, sales, finance, and ownership are working toward the same vision, organizations consistently outperform those operating in silos. Creating that alignment is central to every Heidi Stone Hospitality engagement."
    },
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Common questions about working with Heidi Stone Hospitality. Learn about our approach, engagement structure, and partnership philosophy for independent hotels."
        url="https://heidistonehospitality.com/faq"
        robots="index, nofollow"
      />
      <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#2E2A26] max-w-3xl mx-auto leading-relaxed">
            The questions below address common considerations from owners, boards, and senior leaders exploring a potential partnership. The answers are intended to clarify fit, expectations, and the nature of the work.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#B87333]/20 shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#F6F1E8] transition-colors"
              >
                <h3 className="text-lg font-bold text-[#1F2A44] pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#8B6F47] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#8B6F47] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-xl text-[#2E2A26] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {bobTestimonial && (
          <div className="mb-8 bg-white p-8 rounded-xl border border-[#B87333]/20 shadow-md">
            <div className="flex items-start gap-6">
              <Quote className="w-10 h-10 text-[#B87333] flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[#2E2A26] leading-relaxed mb-4 italic text-lg">
                  "{bobTestimonial.quote}"
                </p>
                <div className="border-t border-[#B87333]/20 pt-4">
                  <p className="font-bold text-[#1F2A44]">{bobTestimonial.client_name}</p>
                  <p className="text-[#8B6F47]">{bobTestimonial.client_title}</p>
                  <p className="text-[#2E2A26]/70 whitespace-pre-line">{bobTestimonial.client_property}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 bg-[#8B6F47] p-8 rounded-xl text-white text-center">
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Every property is unique, and you may have specific questions about how we can work together. Let's have a conversation.
          </p>
          <a
            href="/lets-talk"
            className="inline-block bg-white text-[#8B6F47] px-8 py-3 rounded-lg hover:bg-[#F6F1E8] transition-all shadow-lg font-semibold"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
    </>
  );
}

export default FAQ;
