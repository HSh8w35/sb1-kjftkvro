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
      question: "What types of hotels benefit most from a Possibility Assessment?",
      answer: "The assessment is particularly valuable for:\n\n• Independent and privately held hotels\n• Historic and legacy properties\n• Destination resorts with strong regional identity\n• Properties facing leadership, investment, or strategic transitions\n\nOwners often engage the assessment when considering repositioning, capital investment, or long-term governance decisions."
    },
    {
      question: "If we currently have a management company, can we still engage a Possibility Assessment?",
      answer: "Yes. Many owners engage a Possibility Assessment while working with an existing management company.\n\nThe assessment is independent and designed to provide ownership with a clear, objective evaluation of the property's positioning, leadership alignment, guest experience, and long-term opportunity.\n\nThe goal is not to replace management, but to ensure ownership has the perspective needed to make informed decisions about the property's future."
    },
    {
      question: "How long does the Possibility Assessment process typically take?",
      answer: "While each engagement is tailored to the property, most assessments are completed over several weeks and include both analytical review and on-property immersion.\n\nThe process concludes with a strategic briefing for ownership outlining key observations and recommended next steps."
    },
    {
      question: "Will the Possibility Assessment disrupt our current leadership team?",
      answer: "No. The Possibility Assessment is designed to provide clarity for ownership, not to disrupt day-to-day operations.\n\nThe process is conducted thoughtfully and respectfully, with the goal of understanding the property holistically while maintaining the stability of the existing team."
    },
    {
      question: "Is the Possibility Assessment confidential?",
      answer: "Absolutely. All engagements are conducted with complete discretion and confidentiality.\n\nThe assessment is designed to provide ownership with an independent perspective, and findings are shared directly with the ownership group or board."
    },
    {
      question: "Will the Possibility Assessment create tension with our leadership team or management company?",
      answer: "No. The Possibility Assessment is designed to support ownership by providing an independent perspective on the property's positioning, leadership alignment, and long-term opportunity.\n\nThe process is conducted thoughtfully and respectfully, with the goal of understanding the property holistically rather than disrupting day-to-day operations. In many cases, leadership teams find the process helpful in clarifying priorities and reinforcing alignment."
    },
    {
      question: "How is the Possibility Assessment different from a traditional consulting study or brand evaluation?",
      answer: "Traditional consulting studies often focus on a single dimension—market data, operations, or brand affiliation.\n\nThe Possibility Assessment takes a broader view of the property as an asset and institution. It evaluates leadership alignment, identity, guest experience, market positioning, and long-term stewardship alongside operational performance.\n\nThe goal is not simply to produce a report, but to help ownership understand the true opportunity and strategic direction of the property. We see opportunities where others see limitations."
    },
    {
      question: "Is the Possibility Assessment only for hotels experiencing challenges?",
      answer: "Not at all. Many of the strongest independent hotels engage a Possibility Assessment during periods of stability or growth.\n\nOwners often seek the assessment when considering long-term investments, leadership transitions, or opportunities to strengthen the property's identity and market position.\n\nThe process is designed to provide clarity at pivotal moments—not only during times of difficulty."
    },
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
      question: "How would you describe the work you do?",
      answer: "I work with owners and boards of independent, historic, and destination hotels during moments that require clarity and experienced judgment.\n\nMany engagements begin with a Possibility Assessment, a structured evaluation designed to help ownership understand the true potential of the property before significant decisions are made.\n\nFrom there, I often serve as a strategic leadership partner to ownership and executive teams—providing independent perspective, leadership alignment, and guidance through complex operational or investment decisions.\n\nThis work is not traditional project-based consulting. It is senior-level partnership focused on protecting the long-term strength and identity of the asset."
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
      answer: "My perspective is shaped by decades of leadership within independent hospitality—not from advising the industry from the outside.\n\nHaving led a historic destination resort through complex operational, financial, and strategic decisions, I understand the realities owners and leadership teams face when stewarding a hotel asset.\n\nMany engagements begin with a Possibility Assessment, providing ownership with an independent evaluation of the property's true potential. From there, my work often continues as a strategic partner to ownership and executive teams—offering experienced judgment and steady perspective during pivotal decisions.\n\nThis work is less about consulting deliverables and more about helping leadership protect the long-term strength and identity of the asset."
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
