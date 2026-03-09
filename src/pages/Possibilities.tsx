import { Link } from 'react-router-dom';
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
      <div className="min-h-screen bg-gradient-to-br from-[#F6F1E8] to-[#E8DCC8] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2A26] mb-6">
              The Possibility Assessment™
            </h1>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>
            <p className="text-xl md:text-2xl text-[#2E2A26]/80 leading-relaxed max-w-4xl mx-auto font-semibold">
              Most independent hotels contain revenue and opportunity that has simply never been uncovered.
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  Independent and historic hotels are rarely ordinary assets. They carry history, identity, and meaning that extend far beyond the balance sheet. Many have been shaped by decades of stewardship, evolving through changing markets, leadership transitions, and shifting guest expectations.
                </p>
                <p>
                  Over time, however, even the most distinctive properties can begin to operate within patterns. Certain assumptions become fixed. Operational habits settle in. Owners may hear that meaningful change requires major capital investment, brand affiliation, or structural transformation.
                </p>
                <p className="font-semibold">
                  In many cases, the most powerful opportunities already exist within the property itself.
                </p>
                <p>
                  The Possibility Assessment is designed to uncover those opportunities.
                </p>
                <p>
                  Drawing on more than three decades in the hospitality industry—including leadership inside complex independent destination hotels—the assessment brings the perspective of someone who has spent decades responsible for the performance of those properties, examining how a hotel's identity, experiences, operations, and market position can be activated in new ways.
                </p>
                <p>
                  Much of the transformation achieved throughout that career was not driven by massive capital investment, but by uncovering opportunities already present within the property itself.
                </p>
                <p className="font-semibold pt-4">
                  The work begins with a simple premise:
                </p>
                <p className="italic text-[#8B6F47] text-xl">
                  The most meaningful opportunities often emerge not from what a hotel lacks, but from what it has never fully activated.
                </p>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                Why Owners Invite a Possibility Assessment
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  Owners often explore a Possibility Assessment when they believe their property is capable of more but want an experienced perspective before committing to major decisions.
                </p>
                <p>The assessment is particularly valuable when:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>performance has plateaued</li>
                  <li>new revenue opportunities are needed</li>
                  <li>reinvestment decisions are approaching</li>
                  <li>a management company relationship is being evaluated</li>
                  <li>leadership transitions are occurring</li>
                  <li>the property's long-term direction is under consideration</li>
                </ul>
                <p>
                  In these moments, an independent perspective brings clarity to what the property is capable of becoming.
                </p>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                What the Possibility Assessment Explores
              </h2>
              <div className="space-y-6 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  Each engagement is tailored to the specific property, but the exploration typically includes several key dimensions.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Identity & Place</h3>
                    <p>
                      Every independent hotel has a narrative shaped by its geography, history, and the community around it. Over time that identity can become diluted or underutilized.
                    </p>
                    <p>
                      The assessment explores how the property's setting, regional character, and history can shape a clearer sense of place—allowing the hotel to operate not just as lodging, but as a natural gathering point for the region it serves.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Revenue & Market Opportunities</h3>
                    <p>
                      Independent hotels often rely on familiar patterns of business. The assessment examines where new sources of revenue may exist, particularly through programming, partnerships, experiences, and strategic positioning that create new reasons for guests to visit.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Seasonality</h3>
                    <p>
                      Many destination properties experience pronounced seasonal fluctuations that place pressure on revenue, staffing, and operations. The assessment explores how programming, partnerships, and strategic operational planning can create stronger performance across the full calendar year—stabilizing demand beyond traditional peak periods.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Guest Experience</h3>
                    <p>
                      Memorable experiences are often what differentiate independent properties from branded hotels. The assessment considers how amenities, signature experiences, and the overall guest journey contribute to both reputation and revenue.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Operational Alignment</h3>
                    <p>
                      Operational structures quietly shape performance over time. Leadership alignment, staffing patterns, and organizational clarity are explored to identify opportunities for improvement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Strategic Opportunity</h3>
                    <p>
                      Finally, the assessment identifies opportunities that may exist within the property's current assets—ideas capable of unlocking new revenue, strengthening positioning, and activating the hotel's full potential.
                    </p>
                    <p>
                      Often these opportunities are hiding in plain sight—overlooked not because they lack potential, but because the property has grown accustomed to seeing its limitations more clearly than its possibilities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                How the Assessment Works
              </h2>
              <div className="space-y-6 text-lg text-[#2E2A26] leading-relaxed">
                <div>
                  <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Initial Conversation</h3>
                  <p>
                    The process begins with a confidential conversation with ownership to understand the property, its history, and the questions currently being considered.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">On-Site Exploration</h3>
                  <p>
                    A multi-day visit allows the property to be experienced fully—from guest arrival through operations, amenities, and leadership conversations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Opportunity Mapping</h3>
                  <p>
                    Following the visit, observations and insights are synthesized to identify potential opportunities and strategic considerations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Owner Conversation</h3>
                  <p>
                    The assessment concludes with a detailed conversation with ownership, along with a written summary outlining key observations and opportunities.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                What Owners Gain
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  Owners who invite a Possibility Assessment often walk away with opportunities capable of influencing performance immediately.
                </p>
                <p>The work frequently reveals:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>new revenue opportunities that can be implemented quickly</li>
                  <li>programming concepts that generate fresh demand</li>
                  <li>operational refinements that improve profitability</li>
                  <li>positioning adjustments that elevate the guest experience</li>
                  <li>strategic clarity around future reinvestment</li>
                </ul>
                <p>
                  In many cases, a single idea uncovered through the assessment can generate returns that far exceed the investment in the work itself.
                </p>
                <p className="font-semibold">
                  More importantly, owners gain a renewed understanding of the potential already present within their property.
                </p>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                A Thoughtful Starting Point
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  The Possibility Assessment is intentionally designed as a starting point.
                </p>
                <p>
                  It allows ownership to explore the opportunities within the property before committing to major structural change, significant capital investment, or long-term advisory relationships.
                </p>
                <p>
                  Sometimes the insights stand on their own. In other cases, they lead to deeper strategic collaboration.
                </p>
                <p className="font-semibold">
                  Either way, the purpose remains the same:
                </p>
                <p className="italic text-[#8B6F47] text-xl">
                  Revealing the opportunities within independent hotels that others fail to see—and turning perceived limitations into defining strengths.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl p-8 md:p-12 shadow-xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Start the Conversation
              </h2>
              <div className="flex justify-center mb-8">
                <div className="h-px w-24 bg-white/60" />
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Every Possibility Assessment begins with a conversation.
                </p>
                <p>
                  The purpose of that conversation is simply to understand your property, the questions currently facing ownership, and whether a Possibility Assessment would provide meaningful value.
                </p>
                <p>
                  In some cases it makes sense to move forward. In others, the conversation itself may offer useful perspective.
                </p>
                <p className="text-xl font-semibold pt-4 text-center">
                  Either way, the goal is the same: clarity about the opportunities that may exist within your property.
                </p>
                <p className="text-center text-white/90 italic pt-4">
                  Discreet. Confidential. Intentional.
                </p>
              </div>
            </section>

            <div className="text-center pt-8">
              <Link
                to="/lets-talk"
                className="inline-block bg-[#8B6F47] text-white px-8 py-4 rounded-lg hover:bg-[#6F5838] transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Possibilities;
