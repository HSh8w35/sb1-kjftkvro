import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Users, Building2, Lightbulb, MapPin } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-[#F6F1E8] via-[#EDE4D3] to-[#E8DCC8] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#8B6F47] mr-3" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2A26]">
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
                <a
                  href="mailto:heidi@heidistonehospitality.com?subject=I'd%20like%20to%20talk%20with%20you%20about%20The%20Possibility%20Assessment"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-10 py-4 rounded-xl hover:from-[#6F5838] hover:to-[#5A4A2D] transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 duration-300"
                >
                  Let's Talk
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#8B6F47]/20 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6 text-center">
                What the <strong>Possibility Assessment</strong> Explores
              </h2>
              <div className="space-y-6 text-lg text-[#2E2A26] leading-relaxed">
                <p className="text-center">
                  Each engagement is tailored to the specific property, but the exploration typically includes several key dimensions.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-[#8B6F47]/5 to-white rounded-xl p-6 border border-[#8B6F47]/20 hover:border-[#8B6F47]/40 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-8 h-8 text-[#8B6F47] flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-[#8B6F47]">Identity & Place</h3>
                    </div>
                    <p className="mb-3">
                      Every independent hotel has a narrative shaped by its geography, history, and the community around it. Over time that identity can become diluted or underutilized.
                    </p>
                    <p>
                      The assessment explores how the property's setting, regional character, and history can shape a clearer sense of place—allowing the hotel to operate not just as lodging, but as a natural gathering point for the region it serves.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B6F47]/5 to-white rounded-xl p-6 border border-[#8B6F47]/20 hover:border-[#8B6F47]/40 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-8 h-8 text-[#8B6F47] flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-[#8B6F47]">Revenue & Market Opportunities</h3>
                    </div>
                    <p>
                      Independent hotels often rely on familiar patterns of business. The assessment examines where new sources of revenue may exist, particularly through programming, partnerships, experiences, and strategic positioning that create new reasons for guests to visit.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B6F47]/5 to-white rounded-xl p-6 border border-[#8B6F47]/20 hover:border-[#8B6F47]/40 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 flex items-center justify-center text-[#8B6F47] flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#8B6F47]">Seasonality</h3>
                    </div>
                    <p>
                      Many destination properties experience pronounced seasonal fluctuations that place pressure on revenue, staffing, and operations. The assessment explores how programming, partnerships, and strategic operational planning can create stronger performance across the full calendar year—stabilizing demand beyond traditional peak periods.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B6F47]/5 to-white rounded-xl p-6 border border-[#8B6F47]/20 hover:border-[#8B6F47]/40 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-[#8B6F47] flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-[#8B6F47]">Guest Experience</h3>
                    </div>
                    <p>
                      Memorable experiences are often what differentiate independent properties from branded hotels. The assessment considers how amenities, signature experiences, and the overall guest journey contribute to both reputation and revenue.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B6F47]/5 to-white rounded-xl p-6 border border-[#8B6F47]/20 hover:border-[#8B6F47]/40 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-8 h-8 text-[#8B6F47] flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-[#8B6F47]">Operational Alignment</h3>
                    </div>
                    <p>
                      Operational structures quietly shape performance over time. Leadership alignment, staffing patterns, and organizational clarity are explored to identify opportunities for improvement.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B6F47]/5 to-white rounded-xl p-6 border border-[#8B6F47]/20 hover:border-[#8B6F47]/40 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-8 h-8 text-[#8B6F47] flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-[#8B6F47]">Strategic Opportunity</h3>
                    </div>
                    <p>
                      Finally, the assessment identifies opportunities that may exist within the property's current assets—ideas capable of unlocking new revenue, strengthening positioning, and activating the hotel's full potential.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-[#8B6F47]/10 via-[#8B6F47]/15 to-[#8B6F47]/10 rounded-xl p-8 border-y-4 border-[#8B6F47]/30 shadow-lg">
                  <p className="italic text-[#8B6F47] text-xl text-center leading-relaxed font-medium">
                    Often these opportunities are hiding in plain sight—overlooked not because they lack potential, but because the property has grown accustomed to seeing its limitations more clearly than its possibilities.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#8B6F47]/20 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-8 text-center">
                How the Assessment Works
              </h2>
              <div className="space-y-6 text-lg text-[#2E2A26] leading-relaxed">
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6F5838] flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Initial Conversation</h3>
                      <p>
                        The process begins with a confidential conversation with ownership to understand the property, its history, and the questions currently being considered.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#8B6F47] to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6F5838] flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">On-Property Immersion</h3>
                      <p>
                        A focused, on-site, one week engagement at the property allows a fully immersive experience—from guest arrival through operations, amenities, and leadership conversations.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#8B6F47] to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6F5838] flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Opportunity Mapping</h3>
                      <p>
                        Following the visit, observations and insights are synthesized to identify potential opportunities and strategic considerations.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#8B6F47] to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6F5838] flex items-center justify-center text-white font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Owner Conversation</h3>
                      <p>
                        The assessment concludes with a detailed conversation with ownership, along with a written summary outlining key observations and opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8B6F47]/10 to-[#8B6F47]/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border-2 border-[#8B6F47]/30 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <TrendingUp className="w-10 h-10 text-[#8B6F47]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47]">
                  What Owners Gain
                </h2>
              </div>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p className="text-center">
                  Owners who invite a <strong>Possibility Assessment</strong> often walk away with opportunities capable of influencing performance immediately.
                </p>
                <p className="font-semibold pt-4">The work frequently reveals:</p>
                <ul className="space-y-3 my-6 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B6F47] text-2xl leading-none">-</span>
                    <span>New revenue opportunities that can be implemented quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B6F47] text-2xl leading-none">-</span>
                    <span>Programming concepts that generate fresh demand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B6F47] text-2xl leading-none">-</span>
                    <span>Operational refinements that improve profitability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B6F47] text-2xl leading-none">-</span>
                    <span>Positioning adjustments that elevate the guest experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B6F47] text-2xl leading-none">-</span>
                    <span>Strategic clarity around future reinvestment</span>
                  </li>
                </ul>
                <div className="bg-white/80 rounded-xl p-6 my-6 border-2 border-[#8B6F47]/30">
                  <p className="text-center italic text-[#8B6F47]">
                    In many cases, a single idea uncovered through the assessment can generate returns that far exceed the investment in the work itself.
                  </p>
                </div>
                <p className="font-semibold text-center text-xl pt-4">
                  More importantly, owners gain a renewed understanding of the potential already present within their property.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8B6F47]/10 to-[#8B6F47]/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border-2 border-[#8B6F47]/30 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6 text-center">
                When the Possibility Is Something New
              </h2>
              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
              </div>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  Occasionally the most important question is not how an existing hotel can evolve, but whether a new hospitality project should be created at all.
                </p>
                <p>
                  Communities, investors, and planning teams sometimes seek independent guidance when exploring new hotel development in destination markets. In these situations, Heidi Stone Hospitality can provide strategic perspective on positioning, scale, operational realities, and long-term viability—helping ensure that what is envisioned can succeed not only on paper, but as a functioning hospitality business.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl p-8 md:p-10 shadow-xl text-white max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Start the Conversation
              </h2>
              <div className="flex justify-center mb-6">
                <div className="h-px w-24 bg-white/60" />
              </div>
              <div className="space-y-5 text-xl leading-relaxed text-center">
                <p>
                  Every <strong>Possibility Assessment</strong> begins with a conversation.
                </p>
                <p>
                  The purpose of that conversation is simply to understand your property, the questions currently facing ownership, and whether a <strong>Possibility Assessment</strong> would provide meaningful value.
                </p>
                <p>
                  In some cases it makes sense to move forward. In others, the conversation itself may offer useful perspective.
                </p>
                <p className="text-2xl font-semibold pt-2">
                  Either way, the goal is the same: clarity about the opportunities that may exist within your property.
                </p>
                <p className="text-white/90 italic pt-2 text-lg">
                  Discreet. Confidential. Intentional.
                </p>
              </div>
            </section>

            <div className="text-center pt-8">
              <Link
                to="/lets-talk#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-10 py-5 rounded-xl hover:from-[#6F5838] hover:to-[#5A4A2D] transition-all shadow-xl hover:shadow-2xl text-lg font-semibold transform hover:scale-105 duration-300"
              >
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Possibilities;
