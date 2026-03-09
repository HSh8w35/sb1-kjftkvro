import { Building2, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function About() {
  const seoData = useSEOData('about');

  return (
    <>
      <SEO
        title={seoData?.title || "Independent Hotel Advisor | Heidi Stone Hospitality Leadership"}
        description={seoData?.description || "Heidi Stone is an independent hotel advisor specializing in hospitality leadership for owners and executives."}
        keywords={seoData?.keywords}
        url="https://heidistonehospitality.com/about"
      />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-[#F6F1E8] via-white to-[#F6F1E8]">
      <section className="pt-8 pb-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 relative">
            <div className="absolute inset-0 -mx-8 -my-8 opacity-[0.08] pointer-events-none"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6F47' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundSize: '60px 60px'
                 }}
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-[#2E2A26] leading-tight mb-12 text-center">
            About Our Founder
          </h1>

          <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#8B6F47]/20 shadow-md space-y-6">
                <p className="text-xl text-[#2E2A26] leading-relaxed">
                  Heidi Stone is an independent hospitality executive and advisor whose work centers on one core belief: independent hotels perform best when leadership, identity, and disciplined execution are aligned.
                </p>

                <p className="text-xl text-[#2E2A26] leading-relaxed">
                  In 2026, she formalized this work with the launch of <span className="font-semibold">Heidi Stone Hospitality LLC</span>, a boutique advisory practice partnering with owners and executive teams of independent hotels and resorts at moments requiring clarity, sound judgment, and decisive leadership.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#8B6F47]/20">
                <img
                  src="/gemini_generated_image_hu7jpthu7jpthu7j.webp"
                  alt="Heidi Stone, Founder of Heidi Stone Hospitality"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Work Is Rooted in Experience
            </h3>
            <p className="text-white/90 text-xl leading-relaxed mb-6 max-w-4xl mx-auto">
              My philosophy was not formed in a classroom. It was formed inside complex, high-risk, emotionally complicated turnarounds where failure was not theoretical.
            </p>
            <Link
              to="/story"
              className="inline-block bg-white text-[#8B6F47] font-semibold text-base px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              Read Heidi's Story →
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-6 lg:px-8 bg-gradient-to-b from-[#F6F1E8] via-white to-[#F6F1E8]">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-[#8B6F47]/10 shadow-sm">
              <h2 className="text-3xl font-bold text-[#2E2A26] mb-6 text-center">Leadership Grounded in Lived Experience</h2>
              <div className="space-y-4 text-xl text-[#2E2A26] leading-relaxed">
                <p>
                  For more than a decade, Stone served as President & CEO of Mountain Lake Lodge, leading one of the most notable independent lodging transformations of the past decade.
                </p>
                <p>
                  Under her leadership, the historic Virginia property—once slated for closure—was stabilized, re-imagined, and repositioned into a thriving, nationally recognized destination through disciplined long-term leadership. The 2,600-acre resort evolved through structured reinvestment, cultural stewardship, and a leadership philosophy that balanced creativity with operational rigor.
                </p>
                <p className="italic">
                  This work was not driven by trend or circumstance, but by clarity of direction, accountable governance, and sustained execution.
                </p>
                <p>
                  Years of evaluating complex decisions around leadership, investment, and positioning ultimately shaped the framework now used in the <span className="font-semibold">Possibility Assessment</span>, the structured engagement that often begins advisory work with hotel owners.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E8DCC8] to-[#D4C5A9] rounded-2xl p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-[#2E2A26] mb-6 text-center">Perspective Earned Over Time</h2>
              <p className="text-xl text-[#2E2A26] leading-relaxed">
                Before Mountain Lake Lodge, Stone held senior leadership roles across independent luxury hotels and global hospitality brands, including Disney, Peabody Hotels, Hilton, and Omni Resorts. These experiences sharpened her understanding of both branded scale and independent autonomy—insight that now informs her advisory work with owners navigating complexity without surrendering identity.
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#8B6F47] rounded-lg p-8 shadow-md">
              <div className="text-center">
                <svg className="w-8 h-8 text-[#8B6F47] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl text-[#2E2A26] leading-relaxed italic mb-3">
                  "Heidi Stone preserves what matters while building for long-term success."
                </p>
                <p className="text-[#8B6F47] font-semibold text-sm">
                  — Dr. Elizabeth J. Parkins, Former Board Member - Historic Resort
                </p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-[#8B6F47]/10 shadow-sm">
              <h2 className="text-3xl font-bold text-[#2E2A26] mb-4 text-center">Why This Work Matters Now</h2>
              <div className="flex justify-center mb-6">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
              </div>
              <div className="space-y-4 text-xl text-[#2E2A26] leading-relaxed">
                <p>
                  Independent hotels are operating in an environment defined by economic pressure, labor volatility, and accelerated brand consolidation. Owners are increasingly presented with options that promise scale and relief, often at the expense of margin control and long-term autonomy.
                </p>
                <p className="font-semibold">
                  Stone's work ensures independent hotels remain financially fortified, strategically assured, and sovereign in their direction—without compromising identity or stewardship.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] text-white rounded-2xl p-10 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Industry Engagement & Advocacy</h2>
              <div className="space-y-4 text-xl text-white/95 leading-relaxed">
                <p>
                  Stone is a trusted voice in conversations shaping the future of independent hospitality and small business leadership. Her advocacy is grounded in lived leadership, not ideology, and focuses on ensuring independent ownership perspectives remain present in policy, governance, and industry dialogue.
                </p>
                <p>
                  She engages selectively through national organizations, policy briefings, and public commentary—including a published op-ed in <em>The Richmond Times-Dispatch</em>—using her platform with restraint and intention.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F6F1E8] px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-4">
              Industry Leadership
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>
            <p className="text-xl text-[#2E2A26]/70 max-w-3xl mx-auto">
              Heidi remains actively engaged in national and regional conversations shaping the future of independent hospitality and small business leadership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-[#2E2A26] text-center">
            <div>
              <p className="text-lg font-semibold mb-1">American Hotel & Lodging Association</p>
              <p className="text-base text-[#2E2A26]/70">Inaugural Member, Independent & Boutique Committee (2024–Present)</p>
            </div>

            <div>
              <p className="text-lg font-semibold mb-1">National Small Business Association</p>
              <p className="text-base text-[#2E2A26]/70">Executive Committee (2026)</p>
              <p className="text-base text-[#2E2A26]/70">Vice Chair, Membership (2026)</p>
              <p className="text-base text-[#2E2A26]/70">Board Member (2025–Present)</p>
            </div>

            <div>
              <p className="text-lg font-semibold mb-1">Virginia Restaurant, Lodging & Travel Association</p>
              <p className="text-base text-[#2E2A26]/70">Chair, Blue Ridge Chapter (2025–2027)</p>
            </div>

            <div>
              <p className="text-lg font-semibold mb-1">Historic Hotels of America</p>
              <p className="text-base text-[#2E2A26]/70">Mountain Lake Lodge inducted into the Historic Hotels of America program (2025)</p>
            </div>

            <div>
              <p className="text-lg font-semibold mb-1">41-74 Club of New York — Executive Women in Travel</p>
              <p className="text-base text-[#2E2A26]/70">Member since 2008</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8 bg-gradient-to-b from-white to-[#F6F1E8]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 border-2 border-[#D4AF37] shadow-sm">
            <p className="text-xl text-[#2E2A26] leading-relaxed">
              Today, through Heidi Stone Hospitality, she works with owners and boards of independent, historic, and destination hotels facing pivotal moments—providing clear strategic perspective, leadership alignment, and stewardship that protects both identity and long-term value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <p className="text-[#E8DCC8] text-xs font-semibold tracking-wider uppercase mb-2">
              Featured Client Testimonial
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              What Industry Leaders Say
            </h2>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="mb-6">
              <svg className="w-10 h-10 text-[#8B6F47]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-[#2E2A26] leading-relaxed font-light italic">
                Heidi Stone is a rare breed of hotelier who combines sharp business acumen with an incredibly soulful approach to hospitality. I have witnessed her ability to take a historic property like Mountain Lake Lodge—which faced significant challenges—and transform it into a thriving, world-class destination. Heidi doesn't just lead a hotel group; she breathes life into its history and articulates a vision that inspires her entire team to follow her lead. In an era where many are turning to automation and AI, Heidi has what truly matters: a service model rooted in human connection and a sense of belonging, with technology used to reduce friction. Her leadership drives not only record-setting profitability but also a fierce loyalty from guests and staff alike.
              </p>
            </div>

            <div className="border-t-2 border-[#8B6F47]/10 pt-5">
              <p className="text-[#2E2A26] font-bold text-lg mb-1">
                Dina Belon-Sayre
              </p>
              <p className="text-[#8B6F47] font-semibold text-sm mb-1">
                President
              </p>
              <p className="text-[#2E2A26]/60 text-sm font-medium">
                STAYPINEAPPLE
              </p>
              <p className="text-[#2E2A26]/50 text-xs mt-1">
                New York City | Chicago | San Francisco | Boston | Seattle | Portland | San Diego
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
