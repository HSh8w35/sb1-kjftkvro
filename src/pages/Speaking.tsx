import SpeakingInquiryForm from '../components/SpeakingInquiryForm';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function Speaking() {
  const seoData = useSEOData('speaking');

  return (
    <>
      <SEO
        title={seoData?.title || "Hospitality Leadership Speaker | Independent Hotel Keynote Speaker"}
        description={seoData?.description || "Heidi Stone speaks to hotel owners, boards, and executive teams on leadership, independence, and strategic clarity."}
        keywords={seoData?.keywords}
        url="https://heidistonehospitality.com/speaking"
      />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-[#F6F1E8] via-white to-[#F6F1E8]">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 relative">
            <div className="absolute inset-0 -mx-8 -my-8 opacity-[0.08] pointer-events-none"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6F47' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundSize: '60px 60px'
                 }}
            />
            <div className="relative">
              <div className="flex items-center gap-6 mb-8">
                <h1 className="text-5xl md:text-6xl font-light text-[#2E2A26] leading-tight">
                  Speaking & Engagements for Heidi Stone
                </h1>
                <img
                  src="/Transl_Key_only.webp"
                  alt="Decorative key divider"
                  className="w-32 h-auto opacity-70"
                />
              </div>
              <p className="text-2xl text-[#8B6F47] font-light">
                Leadership Perspective for Independent Hospitality and Stewardship-Driven Organizations
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 mb-8 border border-[#8B6F47]/10 shadow-sm">
              <p className="text-xl text-[#2E2A26] leading-relaxed mb-4">
                My speaking work is an extension of my leadership advisory practice. I engage selectively in forums where leadership, policy, and industry direction intersect—bringing perspective shaped by decades of operating, preserving, and growing independent hospitality assets.
              </p>
              <p className="text-xl text-[#2E2A26] leading-relaxed">
                These engagements are not motivational performances. They are grounded, experience-based conversations designed to sharpen thinking, elevate leadership standards, and contribute meaningfully to the long-term health of independent enterprise.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#2E2A26] mb-6">Where I Engage</h2>

              <p className="text-xl text-[#2E2A26] leading-relaxed mb-6">
                I speak in settings where thoughtful leadership dialogue matters most, including:
              </p>

              <ul className="space-y-3 ml-6 text-xl mb-6">
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Industry conferences and leadership forums</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Executive retreats and ownership gatherings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Board-level conversations and governance settings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Policy, advocacy, and economic stewardship forums</span>
                </li>
              </ul>

              <p className="text-xl text-[#2E2A26] leading-relaxed italic">
                Each engagement is evaluated individually for alignment, audience, and purpose.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] text-white rounded-2xl p-10 mb-12 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Perspectives I Address</h2>

              <p className="text-xl text-white/95 leading-relaxed mb-6">
                Rather than fixed presentations, my speaking centers on core perspectives shaped through lived leadership experience, including:
              </p>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-2">Independence as a Leadership Commitment</h3>
                  <p className="text-white/90">Why independence is not a brand position, but a disciplined leadership choice.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-2">Executive Decision-Making Under Pressure</h3>
                  <p className="text-white/90">Leading with clarity when complexity, fatigue, and consequence converge.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-2">Stewardship, Governance, and Long-Term Value</h3>
                  <p className="text-white/90">Balancing performance, identity, and responsibility in owner-led organizations.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-2">Leading Through Complexity Without Surrendering Identity</h3>
                  <p className="text-white/90">Navigating growth, disruption, and consolidation while remaining sovereign in direction.</p>
                </div>
              </div>

              <p className="text-xl text-white/95 leading-relaxed mt-6 italic">
                Content is always adapted to the context and the audience—never scripted, never generic.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#2E2A26] mb-6">Engagement Philosophy</h2>

              <p className="text-xl text-[#2E2A26] leading-relaxed mb-4">
                I approach speaking with the same standards that guide my advisory work:
              </p>

              <ul className="space-y-3 ml-6 text-xl mb-6">
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Selective participation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Respect for the audience's experience and intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Substance over performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#8B6F47] font-bold">•</span>
                  <span>Thoughtful preparation grounded in real-world leadership</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 mb-12 border border-[#8B6F47]/10 shadow-sm">
              <h2 className="text-3xl font-bold text-[#2E2A26] mb-6">Recent Engagements & Context</h2>

              <p className="text-xl text-[#2E2A26] leading-relaxed mb-4">
                I have been invited to contribute to national and industry-level conversations on independent hospitality, small business leadership, and economic stewardship—engaging with owners, executives, policymakers, and industry leaders in forums that shape how independence is understood and supported.
              </p>

              <p className="text-xl text-[#2E2A26] leading-relaxed italic">
                This work is approached with restraint and intention, ensuring the focus remains on ideas that materially affect organizations and communities.
              </p>
            </div>

            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="overflow-hidden rounded-t-2xl shadow-xl border border-[#8B6F47]/20 h-80">
                    <img
                      src="/dina_and_heidi_at_forward_conference.webp"
                      alt="Heidi Stone speaking at Forward Conference"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-[#F6F1E8] px-6 py-4 rounded-b-2xl border-x border-b border-[#8B6F47]/20">
                    <p className="text-base text-[#2E2A26] text-center">
                      Dina Belon-Sayre and Heidi Stone at AHLA FORWARD Conference, Atlanta 2025
                    </p>
                  </div>
                </div>

                <div className="group transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                  <div className="overflow-hidden rounded-t-2xl shadow-xl border border-[#8B6F47]/20 h-80">
                    <img
                      src="/heidi_speaking_conference.webp"
                      alt="Heidi Stone speaking at conference"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-[#F6F1E8] px-6 py-4 rounded-b-2xl border-x border-b border-[#8B6F47]/20">
                    <p className="text-base text-[#2E2A26] text-center">
                      Heidi Stone speaking at industry conference
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <SpeakingInquiryForm />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Speaking;
