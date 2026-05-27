import { Link } from 'react-router-dom';
import { Sparkles, Users, Building2, TrendingUp, Compass, Calendar, Layers, MessageSquare, HeartHandshake, BarChart2 } from 'lucide-react';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function Possibilities() {
  const seoData = useSEOData('possibilities');

  return (
    <>
      <SEO
        title={seoData?.title || "Possibilities | Heidi Stone Hospitality"}
        description={seoData?.description || "Discover what becomes possible when independent hotels are guided by clarity, discipline, and long-term vision."}
        keywords={seoData?.keywords}
      />
      <div className="bg-[#FAF7F2] pt-32 pb-12 border-b border-[#8B6F47]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-6">Work With Heidi</h1>
              <div className="w-16 h-0.5 bg-[#B87333] mb-8 mx-auto md:mx-0" />
              <p className="text-lg text-[#2E2A26] leading-relaxed">
                Heidi Stone Hospitality provides hospitality advisory services for independent hotels, historic properties, boutique hotels, and destination resorts navigating reinvestment, leadership transition, operational complexity, or stalled momentum. Working directly with owners, boards, and leadership teams, engagements are designed to strengthen alignment, uncover opportunities, and support long-term property performance and stewardship.
              </p>
            </div>
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative overflow-hidden shadow-lg" style={{ borderRadius: '50%', width: '220px', aspectRatio: '1/1' }}>
                <img
                  src="/gemini_generated_image_hu7jpthu7jpthu7j.webp"
                  alt="Professional conversation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.15)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#F6F1E8] via-[#EDE4D3] to-[#E8DCC8] pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#8B6F47] mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#2E2A26]">
                The Possibility Assessment™
              </h1>
              <Sparkles className="w-8 h-8 text-[#8B6F47] ml-3" />
            </div>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>
            <p className="text-xl md:text-2xl text-[#2E2A26]/80 leading-relaxed max-w-4xl mx-auto font-semibold">
              Most independent hotels contain revenue and opportunity that has simply never been uncovered. The <span className="font-bold">Possibility Assessment</span> is a structured engagement designed to evaluate the true potential of an independent hotel or resort.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B6F47] to-[#5A4A2D] opacity-100" />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[#FAF6EF] via-white to-[#F3EBD9]" />
            <div className="relative p-10 md:p-14">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B6F47]/30" />
                <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47]/70 font-medium">Featured Engagement</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#8B6F47]/30" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A26] mb-2 mt-4 tracking-tight">
                The Possibility Assessment
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-[#8B6F47] to-[#C9A96E] mb-8 rounded-full" />
              <p className="text-xl md:text-2xl text-[#2E2A26]/80 leading-relaxed mb-10 font-light">
                A focused, one-week, on-site engagement designed to identify the revenue, positioning, and operational opportunities that already exist within a property—but are not yet fully realized.
              </p>
              <p className="text-sm tracking-[0.15em] uppercase text-[#8B6F47] font-semibold mb-5">
                Owners typically engage at specific moments
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'When performance has plateaued',
                  'Following reinvestment without expected returns',
                  'During leadership or organizational transition',
                  'When a property does not fully align within a broader portfolio',
                  'When evaluating a potential brand or soft brand affiliation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[#2E2A26]/85">
                    <div className="w-5 h-5 rounded-full border border-[#8B6F47]/40 bg-[#8B6F47]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
                    </div>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#8B6F47]/15 pt-8 space-y-3">
                <p className="text-lg text-[#2E2A26] leading-relaxed">
                  The outcome is a clear, prioritized assessment of where opportunity exists—and what to do next.
                </p>
                <p className="text-lg text-[#8B6F47] leading-relaxed italic font-medium">
                  If you are navigating one of these moments, we can begin with a conversation.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/possibility-assessment"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-10 py-4 rounded-xl hover:from-[#6F5838] hover:to-[#5A4A2D] transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 duration-300"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Executive Strategy Session */}
          <div id="executive-strategy-session" className="max-w-4xl mx-auto scroll-mt-24">
            {/* Section divider */}
            <div className="flex items-center gap-6 mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#8B6F47]/25" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#8B6F47]/60 font-medium whitespace-nowrap">Additional Engagement</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#8B6F47]/25" />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Atmospheric image strip */}
              <div className="relative h-36 md:h-44 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Executives in a boardroom discussion"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A2218]/30 via-[#2A2218]/20 to-[#2A2218]/70" />
                <div className="absolute top-6 left-8">
                  <span className="text-base tracking-[0.2em] uppercase text-black font-bold">Focused Engagement</span>
                </div>
                <div className="absolute bottom-6 left-8 right-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-1 leading-tight">
                    Executive Strategy Session
                  </h2>
                </div>
              </div>

              {/* Content panel */}
              <div className="bg-gradient-to-br from-[#FAF6EF] via-white to-[#F3EBD9] border border-[#8B6F47]/15 border-t-0 rounded-b-2xl p-8 md:p-12">
                <div className="space-y-5 text-lg text-[#2E2A26] leading-relaxed mb-10">
                  <p>
                    A focused engagement designed for owners and leadership teams seeking experienced outside perspective before larger decisions are made. Executive Strategy Sessions provide strategic clarity around operational challenges, leadership alignment, guest experience, reinvestment priorities, seasonality, organizational structure, and emerging opportunities within the property.
                  </p>
                  <p className="text-[#5A4A3A] italic border-l-2 border-[#8B6F47]/40 pl-5">
                    Ideal for organizations seeking thoughtful guidance and a clearer path forward without the scope of a full Possibility Assessment™.
                  </p>
                </div>

                {/* Areas Often Explored */}
                <div className="mb-10">
                  <p className="text-sm tracking-[0.2em] uppercase text-[#8B6F47] font-semibold mb-6">
                    Areas Often Explored
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { icon: <Users className="w-4 h-4" />, label: 'Leadership Alignment & Organizational Clarity' },
                      { icon: <Building2 className="w-4 h-4" />, label: 'Independent Hotel & Resort Operations' },
                      { icon: <Compass className="w-4 h-4" />, label: 'Guest Experience & Property Identity' },
                      { icon: <Calendar className="w-4 h-4" />, label: 'Seasonality & Demand Strategy' },
                      { icon: <TrendingUp className="w-4 h-4" />, label: 'Reinvestment & Capital Priorities' },
                      { icon: <Layers className="w-4 h-4" />, label: 'Management Company Alignment' },
                      { icon: <BarChart2 className="w-4 h-4" />, label: 'Strategic Positioning & Market Perspective' },
                      { icon: <HeartHandshake className="w-4 h-4" />, label: 'Owner Fatigue & Operational Strain' },
                    ].map(({ icon, label }) => (
                      <div key={label} className="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-[#8B6F47]/5 border border-[#8B6F47]/12 hover:bg-[#8B6F47]/10 hover:border-[#8B6F47]/25 transition-all">
                        <span className="text-[#8B6F47] flex-shrink-0">{icon}</span>
                        <span className="text-sm text-[#2E2A26] font-medium leading-snug">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <a
                    href="mailto:heidi@heidistonehospitality.com?subject=Executive%20Strategy%20Session%20Inquiry"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-10 py-4 rounded-xl hover:from-[#6F5838] hover:to-[#5A4A2D] transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 duration-300"
                  >
                    Start a Conversation
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Relationships */}
          <div id="advisory-relationships" className="max-w-4xl mx-auto mt-14 scroll-mt-24">
            {/* Section divider */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#8B6F47]/25" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#8B6F47]/60 font-medium whitespace-nowrap">Ongoing Engagement</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#8B6F47]/25" />
            </div>

            {/* Header image — quiet, atmospheric */}
            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="/ChatGPT_Image_May_27,_2026,_10_33_09_AM.png"
                alt="Advisory relationship meeting in an elegant setting"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1C1710]/10 via-[#1C1710]/20 to-[#1C1710]/75" />
              <div className="absolute top-5 left-8">
                <span className="text-base tracking-[0.2em] uppercase text-white/80 font-bold">Ongoing Engagement</span>
              </div>
              <div className="absolute bottom-6 left-8 right-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Advisory Relationships</h2>
              </div>
            </div>

            {/* Body copy */}
            <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed mb-8">
              <p>
                Heidi Stone Hospitality works selectively with owners, boards, and leadership teams through ongoing advisory relationships designed to provide continued strategic perspective and trusted outside guidance over time.
              </p>
              <p className="text-[#5A4A3A] italic border-l-2 border-[#8B6F47]/40 pl-5">
                These engagements are tailored to the unique needs of each property and organization and are intentionally structured around thoughtful collaboration, alignment, and long-term stewardship.
              </p>
            </div>

            {/* Soft divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B6F47]/20 to-transparent mb-8" />

            {/* Advisory areas — editorial list */}
            <div className="mb-8">
              <p className="text-sm tracking-[0.2em] uppercase text-[#8B6F47]/70 font-semibold mb-6">
                Advisory Engagements May Include
              </p>
              <div className="space-y-0">
                {[
                  { bold: 'Strategic Leadership Guidance', rest: '' },
                  { bold: 'Owner Representation', rest: ' & Perspective' },
                  { bold: 'Operational & Organizational Review', rest: '' },
                  { bold: 'Independent Hotel Strategy', rest: '' },
                  { bold: 'Reinvestment', rest: ' & Capital Planning Perspective' },
                  { bold: 'Board & Leadership Facilitation', rest: '' },
                  { bold: 'Management Company', rest: ' Evaluation & Alignment' },
                  { bold: 'Historic & Destination Asset', rest: ' Stewardship' },
                  { bold: 'Experience & Positioning', rest: ' Evolution' },
                  { bold: 'Long-Term Property Planning', rest: '' },
                ].map((item, i) => (
                  <div key={i} className="flex items-baseline gap-0 py-3 border-b border-[#8B6F47]/10 last:border-0">
                    <span className="text-[10px] tracking-widest text-[#8B6F47]/40 font-medium mr-6 tabular-nums w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[#2E2A26] text-lg leading-relaxed">
                      <span className="font-semibold">{item.bold}</span>
                      <span>{item.rest}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B6F47]/20 to-transparent mb-8" />

            {/* Supporting image pair — quiet, evocative */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative h-40 md:h-48 rounded-xl overflow-hidden">
                <img
                  src="/ChatGPT_Image_Dec_26,_2025,_12_34_49_PM.png"
                  alt="Elegant historic hotel at dusk with fountain"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1C1710]/15" />
              </div>
              <div className="relative h-40 md:h-48 rounded-xl overflow-hidden">
                <img
                  src="/ChatGPT_Image_Dec_26,_2025,_12_34_46_PM.png"
                  alt="Grand hotel bar with marble columns and warm lighting"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1C1710]/15" />
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="mailto:heidi@heidistonehospitality.com?subject=Advisory%20Relationship%20Inquiry"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-10 py-4 rounded-xl hover:from-[#6F5838] hover:to-[#5A4A2D] transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 duration-300"
              >
                Start a Conversation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Possibilities;

