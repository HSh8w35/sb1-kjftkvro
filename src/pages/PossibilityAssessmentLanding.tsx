import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Users, Building2, MapPin } from 'lucide-react';

function PossibilityAssessmentLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F1E8] via-[#EDE4D3] to-[#E8DCC8]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#3D3228] to-[#2A2218] pt-32 pb-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-7 h-7 text-[#C9A96E]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              The Possibility Assessment™
            </h1>
            <Sparkles className="w-7 h-7 text-[#C9A96E]" />
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-[#D4C5A9] leading-relaxed font-light max-w-3xl mx-auto">
            A structured, immersive engagement designed to evaluate the true potential of an independent hotel or resort—and surface the opportunities already present within it.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 space-y-14">

        {/* What the Possibility Assessment Explores */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#8B6F47]/20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-4 text-center">
            What the Possibility Assessment Explores
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto mb-10" />
          <p className="text-lg text-[#2E2A26] text-center mb-10 leading-relaxed">
            Each engagement is tailored to the specific property, but the exploration typically includes several key dimensions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <MapPin className="w-7 h-7 text-[#8B6F47] flex-shrink-0" />,
                title: 'Identity & Place',
                body: 'Every independent hotel has a narrative shaped by its geography, history, and the community around it. Over time that identity can become diluted or underutilized. The assessment explores how the property\'s setting, regional character, and history can shape a clearer sense of place—allowing the hotel to operate not just as lodging, but as a natural gathering point for the region it serves.',
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-[#8B6F47] flex-shrink-0" />,
                title: 'Revenue & Market Opportunities',
                body: 'Independent hotels often rely on familiar patterns of business. The assessment examines where new sources of revenue may exist, particularly through programming, partnerships, experiences, and strategic positioning that create new reasons for guests to visit.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#8B6F47] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                ),
                title: 'Seasonality',
                body: 'Many destination properties experience pronounced seasonal fluctuations that place pressure on revenue, staffing, and operations. The assessment explores how programming, partnerships, and strategic operational planning can create stronger performance across the full calendar year—stabilizing demand beyond traditional peak periods.',
              },
              {
                icon: <Users className="w-7 h-7 text-[#8B6F47] flex-shrink-0" />,
                title: 'Guest Experience',
                body: 'Memorable experiences are often what differentiate independent properties from branded hotels. The assessment considers how amenities, signature experiences, and the overall guest journey contribute to both reputation and revenue.',
              },
              {
                icon: <Building2 className="w-7 h-7 text-[#8B6F47] flex-shrink-0" />,
                title: 'Operational Alignment',
                body: 'Operational structures quietly shape performance over time. Leadership alignment, staffing patterns, and organizational clarity are explored to identify opportunities for improvement.',
              },
              {
                icon: <Sparkles className="w-7 h-7 text-[#8B6F47] flex-shrink-0" />,
                title: 'Strategic Opportunity',
                body: 'Finally, the assessment identifies opportunities that may exist within the property\'s current assets—ideas capable of unlocking new revenue, strengthening positioning, and activating the hotel\'s full potential.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-gradient-to-br from-[#8B6F47]/5 to-white rounded-xl p-6 border border-[#8B6F47]/20 hover:border-[#8B6F47]/40 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h3 className="text-xl font-bold text-[#8B6F47]">{title}</h3>
                </div>
                <p className="text-[#2E2A26] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gradient-to-r from-[#8B6F47]/10 via-[#8B6F47]/15 to-[#8B6F47]/10 rounded-xl p-8 border-y-4 border-[#8B6F47]/30">
            <p className="italic text-[#8B6F47] text-xl text-center leading-relaxed font-medium">
              Often these opportunities are hiding in plain sight—overlooked not because they lack potential, but because the property has grown accustomed to seeing its limitations more clearly than its possibilities.
            </p>
          </div>
        </section>

        {/* How the Assessment Works */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#8B6F47]/20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-4 text-center">
            How the Assessment Works
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto mb-10" />
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Initial Conversation',
                body: 'The process begins with a confidential conversation with ownership to understand the property, its history, and the questions currently being considered.',
              },
              {
                step: 2,
                title: 'On-Property Immersion',
                body: 'A focused, on-site, one week engagement at the property allows a fully immersive experience—from guest arrival through operations, amenities, and leadership conversations.',
              },
              {
                step: 3,
                title: 'Opportunity Mapping',
                body: 'Following the visit, observations and insights are synthesized to identify potential opportunities and strategic considerations.',
              },
              {
                step: 4,
                title: 'Owner Conversation',
                body: 'The assessment concludes with a detailed conversation with ownership, along with a written summary outlining key observations and opportunities.',
              },
            ].map(({ step, title, body }, i, arr) => (
              <div key={step} className="relative flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6F5838] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#8B6F47]/40 to-transparent mt-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-xl font-bold text-[#8B6F47] mb-2">{title}</h3>
                  <p className="text-[#2E2A26] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Owners Gain */}
        <section className="bg-gradient-to-br from-[#8B6F47]/10 to-[#8B6F47]/5 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-[#8B6F47]/30">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-9 h-9 text-[#8B6F47]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47]">What Owners Gain</h2>
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto mb-10" />
          <div className="text-lg text-[#2E2A26] leading-relaxed space-y-6">
            <p className="text-center">
              Owners who invite a <strong>Possibility Assessment</strong> often walk away with opportunities capable of influencing performance immediately.
            </p>
            <p className="font-semibold">The work frequently reveals:</p>
            <ul className="space-y-3 pl-2">
              {[
                'New revenue opportunities that can be implemented quickly',
                'Programming concepts that generate fresh demand',
                'Operational refinements that improve profitability',
                'Positioning adjustments that elevate the guest experience',
                'Strategic clarity around future reinvestment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#8B6F47] text-xl leading-none mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white/80 rounded-xl p-6 border-2 border-[#8B6F47]/30">
              <p className="text-center italic text-[#8B6F47]">
                In many cases, a single idea uncovered through the assessment can generate returns that far exceed the investment in the work itself.
              </p>
            </div>
            <p className="font-semibold text-center text-xl pt-2">
              More importantly, owners gain a renewed understanding of the potential already present within their property.
            </p>
          </div>
        </section>

        {/* When the Possibility Is Something New */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#8B6F47]/20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-4 text-center">
            When the Possibility Is Something New
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent mx-auto mb-10" />
          <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
            <p>
              Occasionally the most important question is not how an existing hotel can evolve, but whether a new hospitality project should be created at all.
            </p>
            <p>
              Communities, investors, and planning teams sometimes seek independent guidance when exploring new hotel development in destination markets. In these situations, Heidi Stone Hospitality can provide strategic perspective on positioning, scale, operational realities, and long-term viability—helping ensure that what is envisioned can succeed not only on paper, but as a functioning hospitality business.
            </p>
            <p>
              In some cases it makes sense to move forward. In others, the conversation itself may offer useful perspective.
            </p>
          </div>
        </section>

        {/* Start the Conversation */}
        <section className="bg-gradient-to-br from-[#3D3228] to-[#2A2218] rounded-2xl p-8 md:p-12 shadow-xl text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start the Conversation</h2>
          <div className="h-px w-24 bg-white/40 mx-auto mb-8" />
          <div className="space-y-5 text-xl leading-relaxed text-[#D4C5A9]">
            <p>Every <strong className="text-white">Possibility Assessment</strong> begins with a conversation.</p>
            <p>
              The purpose of that conversation is simply to understand your property, the questions currently facing ownership, and whether a <strong className="text-white">Possibility Assessment</strong> would provide meaningful value.
            </p>
            <p>
              In some cases it makes sense to move forward. In others, the conversation itself may offer useful perspective.
            </p>
            <p className="text-2xl font-semibold text-white pt-2">
              Either way, the goal is the same: clarity about the opportunities that may exist within your property.
            </p>
            <p className="italic pt-1 text-[#C9A96E]">Discreet. Confidential. Intentional.</p>
          </div>
          <div className="mt-10">
            <a
              href="mailto:heidi@heidistonehospitality.com?subject=I'd%20like%20to%20talk%20with%20you%20about%20The%20Possibility%20Assessment"
              className="inline-flex items-center gap-3 bg-[#8B6F47] hover:bg-[#6F5838] text-white px-10 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:scale-105 duration-300"
            >
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Back link */}
        <div className="text-center pb-4">
          <Link
            to="/possibilities"
            className="text-[#8B6F47] hover:text-[#6F5838] font-medium underline underline-offset-4 transition-colors"
          >
            Back to Work With Heidi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PossibilityAssessmentLanding;
