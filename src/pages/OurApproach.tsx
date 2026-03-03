import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function OurApproach() {
  const seoData = useSEOData('our-approach');

  return (
    <>
      <SEO
        title={seoData?.title || "Strategic Hospitality Advisory Approach | Leadership-First"}
        description={seoData?.description || "Leadership advisory approach for independent hotels facing growth, transition, or misalignment."}
        keywords={seoData?.keywords}
        url="https://heidistonehospitality.com/our-approach"
      />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-[#F6F1E8] via-white to-[#F6F1E8]">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 relative">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 -mx-8 -my-8 opacity-[0.08] pointer-events-none"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6F47' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundSize: '60px 60px'
                 }}
            />
            <div className="relative">
              <div className="flex items-center justify-center gap-6 mb-8">
                <h1 className="text-5xl md:text-6xl font-light text-[#2E2A26] leading-tight">
                  Our Approach
                </h1>
                <img
                  src="/Transl_Key_only.webp"
                  alt="Decorative key divider"
                  className="w-32 h-auto opacity-70"
                />
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 mb-8 border border-[#8B6F47]/10 shadow-sm text-center">
              <p className="text-xl text-[#2E2A26] leading-relaxed mb-4">
                Independent hospitality does not suffer from a lack of ideas.
              </p>
              <p className="text-xl text-[#2E2A26] leading-relaxed mb-4">
                Independent, historic, and destination properties face moments when clarity at the ownership and leadership level becomes strained—by growth, transition, capital pressure, or complexity.
              </p>
              <p className="text-xl font-semibold text-[#8B6F47] leading-relaxed">
                Our work begins there.
              </p>
            </div>

            <div className="space-y-6 text-xl text-[#2E2A26] leading-relaxed mb-12 text-center">
              <p>
                We do not lead with tools, frameworks, or programs. We lead with perspective—earned through decades of executive leadership inside independent hospitality assets, where decisions carry weight and outcomes endure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] text-white rounded-2xl p-10 mb-12 shadow-xl text-center">
              <h2 className="text-3xl font-bold mb-6">Independence as an Advantage</h2>

              <div className="space-y-6 text-xl leading-relaxed">
                <p className="text-white/95">
                  Independent properties possess something rare: agility.
                </p>
                <p className="text-white/95">
                  Without layers of corporate mandate, independent hotels and resorts have the ability to respond decisively—to their guests, their markets, and their moment. When guided with clarity and strategic intention, independence becomes a competitive edge rather than a constraint.
                </p>
                <p className="text-white font-semibold">
                  When leadership is aligned, independence unlocks:
                </p>
                <ul className="space-y-3 text-lg inline-block text-left">
                  <li className="flex items-start">
                    <span className="mr-3 text-[#E8DCC8] font-bold">•</span>
                    <span>New revenue pathways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#E8DCC8] font-bold">•</span>
                    <span>Sharper positioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#E8DCC8] font-bold">•</span>
                    <span>Faster, more confident decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#E8DCC8] font-bold">•</span>
                    <span>Long-term stability grounded in purpose</span>
                  </li>
                </ul>
                <p className="text-white/95 italic pt-4">
                  Our role is to help leadership teams harness that advantage—so momentum is no longer maintained, but directed.
                </p>
              </div>
            </div>

            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#2E2A26] mb-6">Leadership as the Constraint—or the Multiplier</h2>

              <div className="space-y-6 text-xl text-[#2E2A26] leading-relaxed">
                <p>
                  In many independent hotels, the responsibility for performance rests heavily on one individual. That leader carries operations, finance, revenue strategy, technology, brand, culture, guest experience, people, and reputation—often simultaneously.
                </p>
                <p className="font-semibold text-[#8B6F47]">
                  Even the most capable visionaries can lose clarity under sustained pressure.
                </p>
                <p>
                  We serve as the discreet strategic partner that senior leaders rarely have, but deeply need.
                </p>
                <p>
                  Through calm perspective, direct counsel, and disciplined thinking, leadership regains:
                </p>

                <ul className="space-y-3 my-6 inline-block text-left">
                  <li className="flex items-start">
                    <span className="mr-3 text-[#8B6F47] font-bold">—</span>
                    <span className="font-semibold text-[#2E2A26] text-lg">Confidence in decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#8B6F47] font-bold">—</span>
                    <span className="font-semibold text-[#2E2A26] text-lg">Creative stamina</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#8B6F47] font-bold">—</span>
                    <span className="font-semibold text-[#2E2A26] text-lg">Strategic focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#8B6F47] font-bold">—</span>
                    <span className="font-semibold text-[#2E2A26] text-lg">The ability to lead forward, not reactively</span>
                  </li>
                </ul>

                <p className="italic">
                  The result is not incremental improvement, but renewal—an executive reenergized and prepared to guide the organization into its next phase of excellence.
                </p>
              </div>
            </div>

            <div className="relative bg-[#F6F1E8]/90 backdrop-blur-sm rounded-2xl p-10 mb-12 border border-[#8B6F47]/10 shadow-sm overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6F47' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                     backgroundSize: '60px 60px'
                   }}
              />
              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-[#2E2A26] mb-6">Brand as Lived Experience</h2>

                <div className="space-y-6 text-xl text-[#2E2A26] leading-relaxed">
                  <p>
                    Independent hospitality is at its strongest when it offers something that cannot be replicated.
                  </p>
                  <div className="my-6 inline-block pl-6 border-l-4 border-[#8B6F47] text-left">
                    <p className="font-semibold text-[#8B6F47]">
                      Not themed.<br />
                      Not manufactured.<br />
                      But rooted—deeply and authentically—in place.
                    </p>
                  </div>
                  <p>
                    The most enduring brands are expressions of culture, geography, history, and intention. They are not created through aesthetics alone, but through leadership choices that shape how a property shows up in the world.
                  </p>
                  <p className="font-semibold text-[#2E2A26]">
                    Our work helps organizations clarify and inhabit their identity so that:
                  </p>
                  <ul className="space-y-3 text-lg inline-block text-left">
                    <li className="flex items-start">
                      <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                      <span>Brand reflects values, not trends</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                      <span>Experience feels cohesive rather than curated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                      <span>The property becomes a gathering place—not just a destination</span>
                    </li>
                  </ul>
                  <p className="italic pt-4">
                    When done well, an independent hotel becomes part of the story of its region—respected locally and recognized globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm" style={{ border: '3px double #8B6F47' }}>
                <h2 className="text-3xl font-bold text-[#2E2A26] mb-3 text-center">How This Work Shows Up</h2>

                <p className="text-xl text-[#2E2A26] mb-3">
                  This approach is most valuable at moments that require judgment rather than instruction:
                </p>

                <div className="flex justify-center max-w-5xl mx-auto">
                  <div className="max-w-md">
                    <ul className="space-y-2 text-xl text-[#2E2A26]">
                      <li>When growth introduces complexity —</li>
                      <li>When leadership transition creates uncertainty —</li>
                      <li>When performance plateaus despite effort —</li>
                      <li>When brand and culture feel misaligned —</li>
                      <li>When independence needs clearer direction —</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 px-6 py-6 border-l-8 border-[#8B6F47] bg-gradient-to-r from-[#F6F1E8] to-white">
                  <p className="text-xl md:text-2xl text-[#2E2A26] leading-relaxed font-light mb-3">
                    In these moments, leadership does not need more information.
                  </p>
                  <p className="text-xl md:text-2xl text-[#8B6F47] leading-tight font-semibold">
                    It needs clarity, alignment, and an experienced voice at the table.
                  </p>
                </div>

                <div className="mt-4 px-5 py-4 bg-white/80 rounded-xl">
                  <p className="text-lg text-[#2E2A26] leading-relaxed">
                    Depending on the moment, our work may engage owners and boards, executive leadership, or senior operating teams. While strategic intent is often set at the ownership level, much of the work of building sustainable revenue, authentic brands, and high-performing organizations happens with the leaders closest to the business.
                  </p>
                </div>
            </div>

            <div className="my-12 bg-[#E8DCC8]/50 rounded-xl p-4 shadow-xl border-2 border-[#8B6F47]/30 max-w-xl mx-auto">
              <div className="text-center">
                <p className="text-lg text-[#2E2A26] leading-relaxed font-medium mb-2">
                  "She knows the hotel business—where to invest, and how to make a hotel profitable."
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="h-px w-8 bg-[#8B6F47]/30"></div>
                  <p className="text-sm text-[#8B6F47] font-semibold">
                    Bob Donovan
                  </p>
                  <div className="h-px w-8 bg-[#8B6F47]/30"></div>
                </div>
                <p className="text-xs text-[#2E2A26]/70 mt-0.5">
                  Owner, Bedford Falls Development, LLC
                </p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-[#8B6F47]/10 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-[#8B6F47]"></div>
                <h2 className="text-3xl font-bold text-[#2E2A26] text-center">What Makes This Work Different</h2>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-[#8B6F47]"></div>
              </div>

              <div className="flex gap-6">
                <div className="space-y-4 text-xl text-[#2E2A26] leading-relaxed flex-1">
                  <p className="text-xl font-semibold text-[#8B6F47]">
                    This is not consulting from the sidelines.
                  </p>
                  <p>
                    It is leadership partnership—measured, candid, and deeply engaged. It requires access, trust, and accountability. It is not outsourced, accelerated, or performed at a distance.
                  </p>
                  <p className="italic">
                    The work is intentionally selective, because its value depends on commitment from the top.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] text-white rounded-2xl p-10 mb-12 shadow-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Selected Outcomes</h2>

              <div className="space-y-4 text-xl leading-relaxed">
                <p className="text-white/95 italic">
                  Leadership clarity, when sustained, produces results that compound over time.
                </p>
                <p className="text-white/95">
                  While each engagement is distinct, the outcomes below reflect the kind of impact this work is designed to create.
                </p>

                <div className="space-y-3 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <p className="text-white/95 leading-relaxed">
                      Significant revenue acceleration achieved within the first eighteen months of leadership realignment at a historic mountain resort—following a period of prolonged instability.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <p className="text-white/95 leading-relaxed">
                      Multi-million-dollar annual revenue expansion driven by disciplined strategic repositioning, capital prioritization, and alignment across leadership, brand, and execution.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <p className="text-white/95 leading-relaxed">
                      Exceptional leadership continuity, with a senior executive team remaining intact for nearly a decade through growth, reinvestment, and operational complexity—an uncommon outcome in independent hospitality.
                    </p>
                  </div>
                </div>

                <p className="text-white font-semibold pt-3">
                  These results were not driven by short-term tactics or automation. They were the consequence of clear leadership, aligned decision-making, and disciplined execution sustained over time.
                </p>
              </div>
            </div>

            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-[#8B6F47]/10 shadow-sm overflow-hidden">
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6F47' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                     backgroundSize: '60px 60px'
                   }}
              />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6 text-[#2E2A26] text-center">Moving Forward</h2>

                <div className="space-y-6 text-xl leading-relaxed mb-8">
                  <p className="text-[#2E2A26]">
                    When this way of thinking resonates, the next step is not a proposal—it is a conversation.
                  </p>
                  <p className="text-[#2E2A26]">
                    That conversation determines whether alignment exists and whether partnership makes sense.
                  </p>
                </div>

                <Link
                  to="/lets-talk"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-8 py-4 rounded-full font-semibold hover:from-[#6F5838] hover:to-[#8B6F47] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Let's Start the Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default OurApproach;
