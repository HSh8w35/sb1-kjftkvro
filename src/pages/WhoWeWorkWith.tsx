import { Building2, Users, TrendingUp, Clock, Shield, Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function WhoWeWorkWith() {
  const seoData = useSEOData('who-we-work-with');

  return (
    <>
      <SEO
        title={seoData?.title || "Who We Work With | Heidi Stone Hospitality"}
        description={seoData?.description || "Heidi Stone Hospitality works with owners and boards stewarding distinctive independent properties where identity, place, and long-term value matter."}
        keywords={seoData?.keywords}
      />
      <section className="py-20 bg-gradient-to-br from-[#F6F1E8] to-[#E8DCC8] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-[#8B6F47] hover:text-[#6F5838] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2A26] leading-tight">
              Who We Work With
            </h1>

            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>

            <div className="space-y-6 text-xl md:text-2xl text-[#2E2A26]/80 leading-relaxed max-w-4xl mx-auto">
              <p>
                Heidi Stone Hospitality works with owners and boards stewarding distinctive independent properties—hotels where identity, place, and long-term value matter as much as performance.
              </p>
              <p className="text-lg md:text-xl">
                Our work is most valuable for privately held hotels facing pivotal decisions around leadership, positioning, capital investment, or brand affiliation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A26] text-center mb-12">
            Properties We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F6F1E8] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8B6F47]/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2A26]">
                  Independent Hotels
                </h3>
                <p className="text-[#2E2A26]/80 leading-relaxed">
                  Privately held properties with distinctive character and strong local identity
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F6F1E8] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8B6F47]/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2A26]">
                  Historic Properties
                </h3>
                <p className="text-[#2E2A26]/80 leading-relaxed">
                  Hotels with rich heritage and deep connection to their communities
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F6F1E8] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8B6F47]/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2A26]">
                  Destination Hotels
                </h3>
                <p className="text-[#2E2A26]/80 leading-relaxed">
                  Properties that anchor regional tourism and drive visitation to their areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              When Our Work Is Most Valuable
            </h2>

            <div className="flex justify-center">
              <div className="h-px w-24 bg-white/60" />
            </div>

            <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed max-w-4xl mx-auto">
              <p>
                Our work is designed for owners and boards facing pivotal moments that require clarity, strategy, and independent guidance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Leadership Transitions</h3>
                  <p className="text-white/90 leading-relaxed">
                    Ownership succession, management changes, or shifts in governance structure
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Positioning Decisions</h3>
                  <p className="text-white/90 leading-relaxed">
                    Market repositioning, brand affiliation considerations, or competitive strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Capital Investment</h3>
                  <p className="text-white/90 leading-relaxed">
                    Major renovation planning, capital allocation, or investment strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Performance Challenges</h3>
                  <p className="text-white/90 leading-relaxed">
                    Revenue plateaus, market shifts, or operational inefficiencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B6F47]/30" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#8B6F47]/70 font-medium whitespace-nowrap">A Common Turning Point</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#8B6F47]/30" />
            </div>
            <div className="bg-gradient-to-br from-[#FAF6EF] via-white to-[#F3EBD9] border border-[#8B6F47]/15 rounded-2xl p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A26] mb-6">
                Management Company Transitions
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-[#8B6F47] to-[#C9A96E] mb-8 rounded-full" />
              <div className="space-y-5 text-lg text-[#2E2A26]/80 leading-relaxed">
                <p>
                  Changing hotel management companies is one of the most significant decisions an independent hotel owner can make. Whether a management agreement is ending, operational performance has fallen short of expectations, or ownership has decided to bring operations in-house, a successful transition requires experienced leadership, thoughtful planning, and an unwavering focus on protecting the long-term value of the asset.
                </p>
                <p>
                  Heidi Stone Hospitality serves as an independent executive advisor to owners navigating hotel management company transitions. Working exclusively in the owner's interest, Heidi provides objective guidance throughout the process—from evaluating the current operating environment and defining the future management structure to overseeing transition planning, leadership alignment, and operational continuity.
                </p>
                <p>
                  A management company transition is more than a contractual change. It is an opportunity to strengthen organizational alignment, improve commercial performance, protect revenue, and position the property for long-term success.
                </p>
                <p>
                  Throughout the engagement, Heidi Stone Hospitality remains aligned with one objective: helping ownership make confident decisions while ensuring the transition preserves momentum, protects the guest experience, and creates a stronger foundation for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F6F1E8] to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A26]">
              Our Commitment
            </h2>

            <div className="flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>

            <div className="space-y-6 text-lg md:text-xl text-[#2E2A26]/80 leading-relaxed">
              <p className="italic text-[#2E2A26] font-medium">
                Every engagement begins with a simple belief: hospitality is about stewardship.
              </p>
              <p>
                We work with owners, boards, and leadership teams who are committed to building organizations that are financially strong, operationally disciplined, and positioned for long-term success. Whether navigating transition, pursuing growth, or preparing for the future, our role is to provide experienced executive leadership, objective guidance, and a trusted perspective when the decisions matter most.
              </p>
              <p className="font-semibold text-[#2E2A26] text-xl md:text-2xl pt-4">
                If you believe your organization is capable of more—and you're looking for an experienced partner to help realize that potential—we would welcome the opportunity to begin the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2E2A26] to-[#1F1B18] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-2xl md:text-3xl font-light text-[#D4C5A9] italic leading-relaxed">
            Independent hotels deserve independent guidance—especially at pivotal moments.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhoWeWorkWith;
