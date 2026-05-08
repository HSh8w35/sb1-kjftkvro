import { Link } from 'react-router-dom';
import { TrendingUp, Users, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function Home() {
  const seoData = useSEOData('homepage');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const heroImages = [
    '/version_2_coastal_lobby_for_hsh_website_hero_section_home_page.webp',
    '/Revised_Home_Hero_HSH_Section.webp',
    '/Revised_Home_Hero_HSH_2.webp',
    '/Revised_Home_Hero_HSH_2 copy copy copy.webp'
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            console.log('Image loaded:', src);
            resolve(src);
          };
          img.onerror = (error) => {
            console.error('Image failed to load:', src, error);
            reject(error);
          };
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log('All images preloaded successfully');
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <>
      <SEO
        title={seoData?.title || "Hospitality Leadership Advisory for Independent Hotels"}
        description={seoData?.description || "Strategic hospitality advisory for independent hotel owners navigating complexity, growth, and leadership decisions."}
        keywords={seoData?.keywords}
      />
      <section className="min-h-[85vh] flex items-center px-6 lg:px-8 relative overflow-hidden bg-[#F6F1E8]">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#8B6F47] text-lg font-semibold">Loading images...</div>
          </div>
        )}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
              style={{
                opacity: imagesLoaded && currentImageIndex === index ? 0.35 : 0,
              }}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F1E8]/50 via-transparent to-[#F6F1E8]/70" />
        <div className="max-w-7xl mx-auto relative z-10 w-full py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                src="/Translucent_Logo_Dec_23,_2025,_08_38_22_AM.png"
                alt="Heidi Stone Hospitality LLC"
                className="h-40 md:h-52 w-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div className="mb-12">
              <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2E2A26] mb-6 leading-tight">
                Seeing Possibility Where Others See Limits
              </p>
              <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-3xl mx-auto">
                Heidi Stone Hospitality works with owners, boards, and leadership teams at critical moments—when performance has plateaued, as reinvestment is being considered, or when the path forward is no longer clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#F6F1E8] to-[#E8DCC8] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhCNkY0NyIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2A26] leading-tight">
              The Possibility Assessment
            </h2>

            <div className="flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>

            <p className="text-xl md:text-2xl text-[#2E2A26]/80 leading-relaxed max-w-3xl mx-auto font-light">
              The signature offering of Heidi Stone Hospitality, focused on uncovering the opportunities already present within a property—and what it is truly capable of<br />becoming.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8B6F47] via-[#A08558] to-[#8B6F47] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="relative p-12 md:p-16">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/90" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white/90" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white/90" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/90" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Why This Work Matters Now
              </h2>
              <div className="flex justify-center mb-8">
                <div className="h-px w-24 bg-white/60" />
              </div>
              <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed">
                <p>
                  Independent hotels are operating in an environment defined by economic pressure, labor volatility, and renewed brand consolidation. Many are being told—explicitly or implicitly—that independence is untenable without corporate flags, algorithms, or fee structures that quietly erode both margin and identity.
                </p>
                <p className="font-semibold text-white text-xl md:text-2xl pt-4">
                  Our work exists in direct response: to ensure independent hotels remain truly independent—financially fortified, strategically assured, and sovereign in their direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F6F1E8] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#8B6F47]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl" />

        <div className="px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] text-center mb-4">
            What Our Work Makes Possible
          </h2>
          <div className="flex justify-center mb-16">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <div className="group relative bg-gradient-to-br from-white to-[#F6F1E8] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[#8B6F47]/10 overflow-hidden h-full flex flex-col">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2E2A26] leading-tight text-center">
                    Performance That Endures
                  </h3>
                </div>
                <div className="space-y-4 text-base text-[#2E2A26] leading-relaxed text-center flex-grow">
                  <p>
                    Independent properties thrive when leadership is clear, aligned, and decisive. With the right perspective and discipline in place, independence becomes an advantage—unlocking stronger performance, new revenue pathways, and long-term stability.
                  </p>
                  <p>
                    Our work reshapes how leadership teams think, decide, and act, so momentum is no longer maintained—but directed.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#FAF8F3] to-[#E8DCC8] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[#8B6F47]/10 overflow-hidden h-full flex flex-col">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2E2A26] leading-tight text-center">
                    Leadership That Is Sustained
                  </h3>
                </div>
                <div className="space-y-4 text-base text-[#2E2A26] leading-relaxed text-center flex-grow">
                  <p>
                    In many independent hotels, the weight of performance rests on one executive carrying everything at once. Over time, even the most capable leaders can lose clarity, energy, and perspective.
                  </p>
                  <p>
                    We serve as the discreet strategic partner that senior leaders rarely have but deeply need—restoring confidence, focus, and creative stamina so leadership is renewed, not depleted.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#EDE4D3] to-[#D4C5A9] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[#8B6F47]/10 overflow-hidden h-full flex flex-col">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#8B6F47] to-[#6F5838] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2E2A26] leading-tight text-center">
                    Brands That Belong
                  </h3>
                </div>
                <div className="space-y-4 text-base text-[#2E2A26] leading-relaxed text-center flex-grow">
                  <p>
                    The strongest independent hotels are not manufactured. They are rooted—shaped by place, history, culture, and intention.
                  </p>
                  <p>
                    We help properties articulate and inhabit their identity so they become more than a destination. They become a gathering place, a point of pride, and a lasting part of the region they serve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Link
              to="/story"
              onClick={() => window.scrollTo(0, 0)}
              className="group bg-gradient-to-br from-[#8B6F47] to-[#6F5838] text-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-6 relative z-10">
                <img
                  src="/gemini_generated_image_hu7jpthu7jpthu7j.webp"
                  alt="Heidi Stone"
                  className="w-24 h-24 rounded-xl object-cover shadow-lg flex-shrink-0"
                />
                <div className="text-left">
                  <h3 className="font-bold text-xl mb-3">A Career Built on Restoring What Others Have Written Off</h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">I have spent my career being drawn to places the world once loved—and had begun to forget. Inside complexity and uncertainty, I see possibility.</p>
                  <p className="text-white text-base md:text-lg font-semibold">Read the Story →</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex justify-center mt-12">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#8B6F47]/10">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#8B6F47]/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base text-[#2E2A26] leading-relaxed font-light italic">
                  She provided thoughtful, strategic guidance during a period of growth and transition—bringing clarity, momentum, and grounded leadership to complex challenges.
                </p>
              </div>
              <div className="border-t border-[#8B6F47]/10 pt-4">
                <p className="text-[#2E2A26] font-bold text-sm mb-1">
                  Kim Davis
                </p>
                <p className="text-[#8B6F47] font-semibold text-xs">
                  Executive Director, Friends of Southwest Virginia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2E2A26] to-[#1F1B18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-3xl md:text-4xl font-light text-[#D4C5A9] italic leading-relaxed">
            Ensuring independence remains a strategic choice—not a compromise.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
