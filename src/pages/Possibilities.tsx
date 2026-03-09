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
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2A26] mb-6">
              Possibilities
            </h1>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>
            <p className="text-xl md:text-2xl text-[#2E2A26]/80 leading-relaxed max-w-3xl mx-auto">
              What becomes possible when independent hotels are guided by clarity, discipline, and long-term vision
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                Performance That Endures
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  Independent, historic, and destination hotels thrive when clarity exists at the top.
                </p>
                <p>
                  When ownership and leadership are aligned in direction and discipline, independence becomes strength—unlocking sustainable performance, capital confidence, and long-term stability.
                </p>
                <p>
                  Our work brings measured perspective at pivotal moments, ensuring decisions strengthen the asset rather than strain it.
                </p>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                Leadership That Holds
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  In many privately held hotels, the responsibility for performance rests heavily on a small group of decision-makers—often one person.
                </p>
                <p>
                  Over time, even capable leaders can find clarity diluted by complexity.
                </p>
                <p>
                  We serve as a steady, independent voice at the table—restoring perspective, reinforcing discipline, and ensuring leadership energy is directed forward, not consumed by reaction.
                </p>
              </div>
            </section>

            <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-[#8B6F47]/10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-6">
                Brands That Belong
              </h2>
              <div className="space-y-4 text-lg text-[#2E2A26] leading-relaxed">
                <p>
                  The strongest independent hotels are not manufactured.
                </p>
                <p>
                  They are rooted—shaped by place, history, culture, and conviction.
                </p>
                <p>
                  When governance, strategy, and identity align, a property becomes more than a destination. It becomes part of the story of its region—respected locally and recognized beyond it.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl p-8 md:p-12 shadow-xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                The Foundation of What We Make Possible
              </h2>
              <div className="flex justify-center mb-8">
                <div className="h-px w-24 bg-white/60" />
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Independent hotels face inflection points that demand more than operational adjustment. They require strategic clarity, governance discipline, and leadership steadiness.
                </p>
                <p>
                  When these elements align, what was once reactive becomes intentional. What felt uncertain becomes sustainable. And what appeared complex begins to resolve.
                </p>
                <p className="text-xl font-semibold pt-4 text-center">
                  This is the work we do. This is what we make possible.
                </p>
              </div>
            </section>

            <div className="text-center pt-8">
              <Link
                to="/lets-talk"
                className="inline-block bg-[#8B6F47] text-white px-8 py-4 rounded-lg hover:bg-[#6F5838] transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
              >
                Let's Explore What's Possible
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Possibilities;
