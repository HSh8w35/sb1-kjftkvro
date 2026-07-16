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

          {/* Strategic Advisory */}
          <div id="strategic-advisory" className="max-w-4xl mx-auto scroll-mt-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-36 md:h-44 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Executive advisory discussion"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A2218]/30 via-[#2A2218]/20 to-[#2A2218]/70" />
                <div className="absolute bottom-6 left-8 right-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-1 leading-tight">
                    Strategic Advisory
                  </h2>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FAF6EF] via-white to-[#F3EBD9] border border-[#8B6F47]/15 border-t-0 rounded-b-2xl p-8 md:p-12">
                <div className="space-y-5 text-lg text-[#2E2A26] leading-relaxed mb-10">
                  <p className="text-[#5A4A3A] italic border-l-2 border-[#8B6F47]/40 pl-5">
                    Not every challenge requires an interim executive. Sometimes what owners need most is an experienced thought partner.
                  </p>
                  <p>
                    Heidi Stone Hospitality provides objective executive counsel for organizations facing important decisions—from repositioning and reinvestment to growth planning, acquisitions, governance, and long-term strategic direction. Every engagement begins by understanding the organization's goals, challenges, and opportunities before developing a clear path forward.
                  </p>
                  <p>
                    Whether serving as a trusted advisor to an owner, board, or executive team, the focus remains the same: helping organizations make confident decisions that strengthen long-term performance.
                  </p>
                </div>

                <div className="flex justify-center">
                  <a
                    href="mailto:heidi@heidistonehospitality.com?subject=Strategic%20Advisory%20Inquiry"
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

          {/* Executive Leadership */}
          <div id="executive-leadership" className="max-w-4xl mx-auto mt-14 scroll-mt-24">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#8B6F47]/25" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#8B6F47]/60 font-medium whitespace-nowrap">Executive Leadership</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#8B6F47]/25" />
            </div>

            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="/ChatGPT_Image_May_27,_2026,_10_33_09_AM.png"
                alt="Executive leadership engagement"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1C1710]/10 via-[#1C1710]/20 to-[#1C1710]/75" />
              <div className="absolute bottom-6 left-8 right-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Executive Leadership</h2>
              </div>
            </div>

            <div className="space-y-5 text-lg text-[#2E2A26] leading-relaxed mb-8">
              <p className="text-[#5A4A3A] italic border-l-2 border-[#8B6F47]/40 pl-5">
                Periods of transition require more than temporary management—they require experienced leadership.
              </p>
              <p>
                Whether an organization is navigating a leadership vacancy, organizational change, accelerated growth, or a significant business transition, Heidi Stone Hospitality provides seasoned executive leadership that brings stability, confidence, and momentum.
              </p>
              <p>
                Engagements may include fractional executive leadership, interim executive leadership, executive coaching, or serving as a strategic partner alongside ownership and existing leadership teams. The role is always tailored to the organization's needs rather than forcing a predetermined model.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#8B6F47]/20 to-transparent mb-8" />

            <div className="flex justify-center">
              <a
                href="mailto:heidi@heidistonehospitality.com?subject=Executive%20Leadership%20Inquiry"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-10 py-4 rounded-xl hover:from-[#6F5838] hover:to-[#5A4A2D] transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 duration-300"
              >
                Start a Conversation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Organizational Alignment */}
          <div id="organizational-alignment" className="max-w-4xl mx-auto mt-14">

            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="/ChatGPT_Image_May_27,_2026,_10_15_48_AM.png"
                alt="Hotel lobby representing organizational alignment"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 40%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1C1710]/10 via-[#1C1710]/20 to-[#1C1710]/75" />
              <div className="absolute bottom-6 left-8 right-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Organizational Alignment</h2>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B6F47] to-[#5A4A2D] opacity-100" />
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-[#FAF6EF] via-white to-[#F3EBD9]" />
              <div className="relative p-10 md:p-14">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B6F47]/30" />
                  <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47]/70 font-medium">Organizational Alignment</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#8B6F47]/30" />
                </div>
                <div className="h-[2px] w-20 bg-gradient-to-r from-[#8B6F47] to-[#C9A96E] mb-8 mt-4 rounded-full" />
                <div className="space-y-5 text-lg text-[#2E2A26] leading-relaxed mb-10">
                  <p className="text-[#5A4A3A] italic border-l-2 border-[#8B6F47]/40 pl-5">
                    Alignment is where possibility becomes performance.
                  </p>
                  <p>
                    The strongest hospitality organizations succeed because leadership, operations, marketing, sales, finance, and guest experience are working toward the same vision.
                  </p>
                  <p>
                    When departments operate independently, opportunities are missed, priorities compete, and performance suffers. Creating alignment across the organization establishes clarity, accountability, and shared purpose—allowing every part of the business to move in the same direction.
                  </p>
                  <p>
                    Whether aligning leadership teams, commercial strategy, organizational culture, or portfolio objectives, Heidi Stone Hospitality helps organizations transform possibility into measurable results.
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  <a
                    href="mailto:heidi@heidistonehospitality.com?subject=Organizational%20Alignment%20Inquiry"
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

          <div className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-6 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#8B6F47]/25" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#8B6F47]/25" />
            </div>
            <p className="text-center text-lg md:text-xl text-[#5A4A3A] leading-relaxed italic">
              Every engagement is different because every organization is different. Some clients need strategic guidance. Others need executive leadership. Many need greater organizational alignment. The work always begins by understanding where the greatest opportunity exists.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Possibilities;

