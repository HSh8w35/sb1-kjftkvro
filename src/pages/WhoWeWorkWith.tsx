import { Building2, Users, TrendingUp, Clock, Shield, Target } from 'lucide-react';
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
              <p>
                We work exclusively with properties where ownership is personally invested in the long-term success and character of the hotel.
              </p>
              <p>
                Our clients value independent guidance, thoughtful stewardship, and strategic clarity—especially during moments that will shape the future of their property.
              </p>
              <p className="font-semibold text-[#2E2A26] text-xl md:text-2xl pt-4">
                If you're stewarding a property that matters—to you, your family, and your community—we're here to help.
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
