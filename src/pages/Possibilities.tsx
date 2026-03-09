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
              The Possibility Assessment
            </h1>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>
            <p className="text-xl md:text-2xl text-[#2E2A26]/80 leading-relaxed max-w-4xl mx-auto">
              A structured process for gaining clarity on what is working, what is stalling, and what is possible.
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                What It Is
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  The Possibility Assessment is a focused, diagnostic engagement designed to surface clarity at critical junctures.
                </p>
                <p>
                  It is not a generic audit. It is not consulting theater. It is a pragmatic, grounded process for examining how governance, strategy, and operations are functioning today—and what adjustments are needed to stabilize and strengthen the business moving forward.
                </p>
                <p>
                  It is for owners and leaders who know something must shift—but need an independent, experienced perspective to define what that shift should be.
                </p>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                When It's Needed
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>This assessment is most valuable during inflection points:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Before or After Leadership Transitions</strong>
                    <br />
                    When a General Manager or senior leader is departing or has recently arrived—and ownership needs to understand what is being inherited, what must be stabilized, and what must be addressed immediately.
                  </li>
                  <li>
                    <strong>Following Capital Investment or Renovation</strong>
                    <br />
                    When significant investment has been made—but financial performance has not yet responded as expected. Clarity is needed on what is working operationally, what requires refinement, and whether the strategy is positioned to deliver.
                  </li>
                  <li>
                    <strong>Amidst Performance Drift or Strategic Uncertainty</strong>
                    <br />
                    When the business is not in crisis—but performance has plateaued, roles have become unclear, or decision-making has become reactive rather than intentional. Owners know adjustments are needed but lack the objective perspective to act with confidence.
                  </li>
                  <li>
                    <strong>Ahead of Ownership or Structural Change</strong>
                    <br />
                    When a property is preparing for sale, transition to the next generation, or a shift in ownership structure—and leadership needs an independent evaluation of readiness, gaps, and risk.
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                How It Works
              </h2>
              <div className="space-y-6 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  The Possibility Assessment is conducted over 6–8 weeks and is structured in three phases:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Phase 1: Discovery & Observation</h3>
                    <p className="mb-3">
                      We begin by observing how decisions are being made, how information is flowing, and where accountability is clear—or unclear.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Confidential conversations with ownership, leadership, and key operational staff.</li>
                      <li>Review of financial performance, organizational structure, and operational documentation.</li>
                      <li>On-site observation to understand how processes, culture, and leadership dynamics are functioning in practice.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Phase 2: Diagnostic Analysis</h3>
                    <p className="mb-3">
                      We distill what we've learned and assess what is supporting the business—and what is constraining it.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Identification of structural misalignment, role confusion, or gaps in execution.</li>
                      <li>Clarity on where leadership energy is being consumed—and where it needs to be redirected.</li>
                      <li>Assessment of whether current strategy is actionable, realistic, and sufficiently supported.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">Phase 3: Recommendations & Path Forward</h3>
                    <p className="mb-3">
                      We present findings and recommendations—not as abstract strategy, but as practical, prioritized actions.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Clear identification of what is working and should be preserved.</li>
                      <li>Direct recommendations on what must change—and in what sequence.</li>
                      <li>A practical roadmap for restoring clarity, strengthening execution, and positioning the business for sustainable performance.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                What You Receive
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>At the conclusion of the assessment, ownership and leadership receive:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>A Diagnostic Summary</strong> identifying what is functioning, what is fragile, and what requires immediate attention.
                  </li>
                  <li>
                    <strong>Prioritized Recommendations</strong> outlining specific adjustments to governance, strategy, operations, or leadership.
                  </li>
                  <li>
                    <strong>A Roadmap for Action</strong> defining what should be addressed in the next 90 days, 6 months, and 12 months.
                  </li>
                  <li>
                    <strong>A Clear Decision Point</strong> on whether deeper, sustained advisory support is warranted—or if the business is positioned to move forward independently.
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl p-8 md:p-12 shadow-xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Why This Matters
              </h2>
              <div className="flex justify-center mb-8">
                <div className="h-px w-24 bg-white/60" />
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Independent, historic, and destination hotels often operate without a steady, independent voice at the table. In the absence of that perspective, small issues compound. Strategic drift goes unaddressed. Leadership fatigue becomes normalized.
                </p>
                <p>
                  The Possibility Assessment provides clarity before crisis becomes necessary. It offers a structured way to assess what is real, what is resolvable, and what actions will yield the greatest stability and momentum.
                </p>
                <p className="text-xl font-semibold pt-4 text-center">
                  If you sense that something is not quite right—but cannot yet define what must change—this is where we begin.
                </p>
              </div>
            </section>

            <div className="text-center pt-8">
              <Link
                to="/lets-talk"
                className="inline-block bg-[#8B6F47] text-white px-8 py-4 rounded-lg hover:bg-[#6F5838] transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                Let's Discuss Your Situation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Possibilities;
