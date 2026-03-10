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
      question: "Who do you work with?",
      answer: "I work with owners, boards, and senior leaders of independent hotels and resorts who understand that sustained performance is a leadership responsibility. My clients are decision-makers with the authority—and the commitment—to act."
    },
    {
      question: "Do you work with individual owners or ownership groups?",
      answer: "Both. Ownership structure matters far less than clarity of vision, decision-making authority, and commitment to accountability. The most effective partnerships involve leaders who are prepared to make consequential decisions."
    },
    {
      question: "Do you work internationally?",
      answer: "Yes. While most of my work is in North America, geography is secondary to alignment. Independence, leadership complexity, and stewardship challenges are universal."
    },
    {
      question: "How would you describe what you do?",
      answer: "I serve as a strategic leadership partner to owners and executive teams—often in an advisory or fractional capacity—during moments that require judgment, clarity, and alignment.\n\nThis is not project-based consulting. It is senior partnership."
    },
    {
      question: "If we currently have a management company, can we still engage a Possibility Assessment?",
      answer: "Yes. Many owners engage a Possibility Assessment while working with an existing management company.\n\nThe assessment is independent and designed to provide ownership with a clear, objective evaluation of the property's positioning, leadership alignment, guest experience, and long-term opportunity.\n\nThe goal is not to replace management, but to ensure ownership has the perspective needed to make informed decisions about the property's future."
    },
    {
      question: "Is the Possibility Assessment confidential?",
      answer: "Absolutely. All engagements are conducted with complete discretion and confidentiality.\n\nThe assessment is designed to provide ownership with an independent perspective, and findings are shared directly with the ownership group or board."
    },
    {
      question: "What types of hotels benefit most from a Possibility Assessment?",
      answer: "The assessment is particularly valuable for:\n\n• Independent and privately held hotels\n• Historic and legacy properties\n• Destination resorts with strong regional identity\n• Properties facing leadership, investment, or strategic transitions\n\nOwners often engage the assessment when considering repositioning, capital investment, or long-term governance decisions."
    },
    {
      question: "How long does the Possibility Assessment process typically take?",
      answer: "While each engagement is tailored to the property, most assessments are completed over several weeks and include both analytical review and on-property immersion.\n\nThe process concludes with a strategic briefing for ownership outlining key observations and recommended next steps."
    },
    {
      question: "Do you advise on new hotel development?",
      answer: "Yes—occasionally.\n\nWhile much of Heidi Stone Hospitality's work focuses on advising existing independent and historic hotels, Heidi is also sometimes asked to provide perspective during the early stages of new hospitality development.\n\nCommunities, planning teams, and investors exploring hotel projects in destination markets often benefit from an operational perspective early in the process. Heidi's experience leading a destination resort property for more than a decade allows her to help evaluate whether proposed concepts align with market realities, operational requirements, and the long-term character of the destination.\n\nThese engagements typically involve strategic guidance on positioning, scale, and operational considerations rather than traditional feasibility studies or development consulting.\n\nIn many cases, this early perspective helps ensure that the hotels being envisioned are not only attractive developments, but sustainable hospitality businesses."
    },
    {
      question: "How are engagements structured?",
      answer: "Engagements are limited and intentionally designed. I do not offer standardized packages.\n\nWork begins with a confidential conversation to assess alignment and determine whether a partnership makes sense. If so, we define a clear engagement focused on outcomes, accountability, and impact."
    },
    {
      question: "How involved do I need to be?",
      answer: "This work requires engagement from leadership. Access to decision-makers, honest dialogue, and willingness to act are essential. If you are seeking reports or recommendations without ownership involvement, we are not the right fit."
    },
    {
      question: "What if I'm not sure what I need yet?",
      answer: "That is often the right starting point. Many engagements begin with uncertainty, not answers. Through focused dialogue and assessment, clarity emerges quickly."
    },
    {
      question: "What makes your work different from other hospitality consultants?",
      answer: "I do not lead with frameworks, playbooks, or deliverables. I bring experienced judgment earned through decades of leadership in independent hospitality and work alongside owners and executives as a trusted partner."
    },
    {
      question: "How long do engagements typically last?",
      answer: "Engagements vary. Some are focused and time-bound; others evolve into longer-term advisory relationships. Structure and duration are determined by the leadership needs involved."
    },
    {
      question: "Is your work confidential?",
      answer: "Absolutely. Discretion is foundational. All conversations and engagements are treated with complete confidentiality."
    },
    {
      question: "How do we begin?",
      answer: "If the work described here resonates, the appropriate next step is a confidential conversation to determine alignment."
    }
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
