import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

function Possibilities() {
  return (
    <>
      <SEO
        title="Possibilities — The Possibility Assessment | Heidi Stone Hospitality"
        description="The Possibility Assessment is the signature offering of Heidi Stone Hospitality—uncovering what is already present, what is becoming possible, and what can be deliberately built within your independent hotel."
      />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-[#2E2A26] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E2A26] via-[#3A342E] to-[#2E2A26]" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8B6F47] font-semibold mb-6">
            The Signature Offering of Heidi Stone Hospitality
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Possibilities
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
          </div>
          <p className="text-xl md:text-2xl text-[#D4C5A9] font-light leading-relaxed max-w-3xl mx-auto">
            Every independent hotel contains opportunities that have not yet been named, resources that have not been fully activated, and a future that has not yet been clearly seen.
          </p>
          <p className="text-lg text-[#D4C5A9]/70 font-light leading-relaxed max-w-2xl mx-auto mt-4">
            The Possibility Assessment is how we find them.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 bg-[#F6F1E8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A26] mb-4">
              Three Dimensions of Possibility
            </h2>
            <div className="flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[#8B6F47]/10 flex flex-col">
              <div className="w-12 h-1 bg-[#8B6F47] rounded-full mb-6 group-hover:w-20 transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold mb-3">Dimension One</p>
              <h3 className="text-2xl font-bold text-[#2E2A26] leading-tight mb-4">
                What Is Already Present
              </h3>
              <p className="text-[#2E2A26]/70 text-base leading-relaxed font-light flex-grow">
                Most independent hotels are sitting on unrealized value. The Possibility Assessment surfaces what is already there—in the physical asset, the team, the market position, and the guest relationship—but has not yet been fully leveraged.
              </p>
              <p className="text-[#2E2A26]/70 text-base leading-relaxed font-light mt-4">
                We look at what you have built, and we see what it is truly worth.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group bg-[#2E2A26] rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-1 bg-[#8B6F47] rounded-full mb-6 group-hover:w-20 transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold mb-3">Dimension Two</p>
              <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                What Is Becoming Possible
              </h3>
              <p className="text-[#D4C5A9] text-base leading-relaxed font-light flex-grow">
                The hospitality landscape is shifting. New traveler expectations, evolving ownership structures, and emerging revenue models are creating openings for independent hotels willing to lead rather than follow.
              </p>
              <p className="text-[#D4C5A9] text-base leading-relaxed font-light mt-4">
                We identify the openings before they close—and position you to move through them with confidence.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[#8B6F47]/10 flex flex-col">
              <div className="w-12 h-1 bg-[#8B6F47] rounded-full mb-6 group-hover:w-20 transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold mb-3">Dimension Three</p>
              <h3 className="text-2xl font-bold text-[#2E2A26] leading-tight mb-4">
                What Can Be Deliberately Built
              </h3>
              <p className="text-[#2E2A26]/70 text-base leading-relaxed font-light flex-grow">
                Independence is not a default—it is a discipline. We work with ownership and leadership to construct the conditions for long-term strength: strategic clarity, financial fortitude, and a brand identity that cannot be replicated.
              </p>
              <p className="text-[#2E2A26]/70 text-base leading-relaxed font-light mt-4">
                We help you build what lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it delivers */}
      <section className="py-20 bg-gradient-to-br from-[#E8DCC8] to-[#F6F1E8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mb-4">What It Delivers</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A26] leading-tight mb-6">
                A Clear Picture of Where You Stand—and Where You Can Go
              </h2>
              <p className="text-lg text-[#2E2A26]/70 font-light leading-relaxed mb-6">
                The Possibility Assessment is not a standard audit. It is a rigorous, bespoke exploration of your property's strategic position—conducted by someone who has spent a career seeing what others overlook.
              </p>
              <p className="text-lg text-[#2E2A26]/70 font-light leading-relaxed">
                You receive not just findings, but a path forward—one that is grounded in your specific asset, your team, your market, and your ambition.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'An honest assessment of your current strategic position',
                'Identification of unrealized revenue and operational opportunities',
                'A clear-eyed analysis of leadership alignment and capacity',
                'Brand and identity recommendations rooted in place and purpose',
                'A prioritized roadmap with near-term and long-term actions',
                'A trusted thought partner throughout the process',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 bg-white/70 rounded-xl px-6 py-4 shadow-sm border border-[#8B6F47]/10">
                  <CheckCircle className="w-5 h-5 text-[#8B6F47] flex-shrink-0 mt-0.5" />
                  <p className="text-[#2E2A26] text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-[#2E2A26] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <svg className="w-10 h-10 text-[#8B6F47]/40 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#D4C5A9] font-light italic leading-relaxed mb-10">
            The question is never whether potential exists. The question is whether anyone has taken the time to find it.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#8B6F47]/50" />
            <p className="text-[#8B6F47] text-sm font-semibold tracking-[0.2em] uppercase">Heidi Stone</p>
            <div className="h-px w-16 bg-[#8B6F47]/50" />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-[#F6F1E8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mb-4">Who This Is For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A26] leading-tight">
              Built for Independent Hotels at a Crossroads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Performance Has Plateaued',
                body: 'Revenue is stable but growth has stalled. You know the property is capable of more—you just need a clear-eyed perspective on where the ceiling is and how to break through it.',
              },
              {
                title: 'Reinvestment Is Being Considered',
                body: 'Capital is on the table. Before committing to renovations, repositioning, or new programming, you want confidence that the investment is pointed in the right direction.',
              },
              {
                title: 'The Path Forward Is Unclear',
                body: 'Leadership is strong, but alignment is fragmented. Competing priorities have made it difficult to move with conviction. You need someone outside the organization to help you see clearly.',
              },
              {
                title: 'Independence Is Under Pressure',
                body: 'Brand affiliation conversations are happening. Ownership transitions are being considered. Before making irreversible decisions, you want to understand the full range of what independence still makes possible.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-[#8B6F47]/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-8 h-1 bg-[#8B6F47] rounded-full mb-4" />
                <h3 className="text-xl font-bold text-[#2E2A26] mb-3">{card.title}</h3>
                <p className="text-[#2E2A26]/70 text-base leading-relaxed font-light">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#8B6F47] via-[#A08558] to-[#8B6F47] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Ready to See What Your Property Is Truly Capable Of?
          </h2>
          <p className="text-lg text-white/85 font-light leading-relaxed mb-10">
            The Possibility Assessment begins with a conversation. Tell us where you are—and we will help you see where you can go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lets-talk"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F47] text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-full hover:bg-[#F6F1E8] transition-all duration-300 shadow-lg"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/our-approach"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white text-sm font-semibold tracking-wide uppercase px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Possibilities;
