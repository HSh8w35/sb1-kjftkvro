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
        title={seoData?.title || "Independent Hotel Advisor for Independent, Historic & Destination Hotels | Heidi Stone Hospitality"}
        description={seoData?.description || "Strategic hospitality advisory for independent hotel owners navigating complexity, growth, and leadership decisions."}
        keywords={seoData?.keywords}
      />
      <section className="min-h-screen md:min-h-[85vh] flex items-center px-6 lg:px-8 relative overflow-hidden bg-[#F6F1E8]">
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
        <div className="absolute top-0 left-0 w-full flex justify-center pt-14 md:pt-16 z-10">
          <img
            src="/Translucent_Logo_on_home_page.webp"
            alt="Heidi Stone Hospitality"
            className="h-[7.19rem] md:h-[7.19rem] lg:h-[10.06rem] w-auto p-4"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col justify-center py-12 md:py-20 mt-8">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-playfair text-black leading-snug px-4 mt-24">
                  Seeing Possibility Where Others See Limits
                </h1>

                <div className="w-32 h-px bg-black/30 mx-auto my-6" />

                <div className="space-y-3 text-lg md:text-xl font-semibold text-[#2E2A26] leading-relaxed max-w-2xl mx-auto px-4">
                  <p>Heidi Stone Hospitality works with owners, boards, and leadership teams at critical moments—when performance has plateaued, following reinvestment, or when the path forward is no longer clear.</p>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-32 overflow-hidden bg-[#1E1A16]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBzdHJva2U9IiM4QjZGNDciIHN0cm9rZS1vcGFjaXR5PSIwLjA0IiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIxMDAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEwMCIgc3Ryb2tlPSIjOEI2RjQ3IiBzdHJva2Utb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-60" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#8B6F47]/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#8B6F47]/40 to-transparent" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#8B6F47]/20 to-transparent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#8B6F47]/20 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[#8B6F47] text-xs tracking-[0.35em] uppercase font-medium mb-6">Signature Engagement</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Possibility Assessment
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8B6F47]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8B6F47]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-[#8B6F47]/25 rounded-2xl overflow-hidden">
            <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-[#8B6F47]/25 flex flex-col justify-center">
              <p className="text-white/85 text-xl md:text-2xl leading-relaxed">
                A focused, one-week, on-site engagement designed to identify the revenue, positioning, and operational opportunities that already exist within a property—but are not yet fully realized.
              </p>
            </div>

            <div className="p-10 md:p-12 bg-[#8B6F47]/08 flex flex-col justify-center">
              <p className="text-[#C4A882] text-sm tracking-[0.3em] uppercase font-medium mb-7">Owners typically engage at specific moments</p>
              <ul className="space-y-6">
                {[
                  'When performance has plateaued',
                  'Following reinvestment without expected returns',
                  'During leadership or organizational transition',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full border border-[#8B6F47]/60 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
                    </span>
                    <span className="text-white/85 text-xl leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 italic">
              The outcome is a clear, prioritized assessment of where opportunity exists—and what to do next.
            </p>
            <Link
              to="/possibilities"
              onClick={() => window.scrollTo(0, 0)}
              className="group inline-flex items-center gap-3 border border-[#8B6F47] text-[#C4A882] px-10 py-4 rounded-full hover:bg-[#8B6F47] hover:text-white transition-all duration-300 text-sm tracking-widest uppercase font-medium"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-white to-[#F6F1E8] relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2E2A26] leading-tight">
              Who We Work With
            </h2>

            <div className="flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
            </div>

            <div className="space-y-3 text-base md:text-lg text-[#2E2A26]/80 leading-snug">
              <p>
                Heidi Stone Hospitality works with owners and boards stewarding distinctive independent properties—hotels where identity, place, and long-term value matter as much as performance.
              </p>
              <p>
                Our work is most valuable for privately held hotels facing pivotal decisions around leadership, positioning, capital investment, or brand affiliation.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/who-we-work-with"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 text-[#8B6F47] hover:text-[#6F5838] transition-colors text-base font-semibold group"
              >
                See Who We Work With
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#8B6F47] via-[#A08558] to-[#8B6F47] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="relative p-8 md:p-10">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white/90" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white/90" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white/90" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white/90" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Why This Work Matters Now
              </h2>
              <div className="flex justify-center mb-4">
                <div className="h-px w-20 bg-white/60" />
              </div>
              <div className="space-y-3 text-base md:text-lg text-white/95 leading-snug text-center">
                <p>
                  Independent, historic, and destination hotels are increasingly facing pivotal decisions.
                </p>
                <p>
                  Ownership transitions are accelerating. Capital demands are rising. Brand consolidation continues to reshape the landscape. And too often, important decisions are made under pressure rather than clarity.
                </p>
                <p>
                  Many of these properties are deeply personal assets—built over decades, rooted in place, and closely tied to the identity of their communities.
                </p>
                <p className="font-semibold text-white text-lg md:text-xl pt-2">
                  They deserve thoughtful stewardship.
                </p>
                <p>
                  Stewardship that protects the character of the property while strengthening its long-term performance and value.
                </p>
                <p className="font-semibold text-white text-lg md:text-xl pt-2">
                  This is the work of Heidi Stone Hospitality.
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
            When Clarity Exists at the Top, Independent Hotels Thrive
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
          </div>
          <p className="text-lg md:text-xl text-[#2E2A26]/80 leading-relaxed max-w-4xl mx-auto text-center mb-16">
            Independent, historic, and destination hotels perform best when leadership direction, strategy, and identity are aligned. Our work helps owners restore that clarity—ensuring decisions strengthen the asset and support long-term performance.
          </p>

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
                    When strategy, market positioning, and operational discipline align, independent hotels unlock their full potential—delivering sustainable performance and long-term asset strength.
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
                    Leadership That Holds
                  </h3>
                </div>
                <div className="space-y-4 text-base text-[#2E2A26] leading-relaxed text-center flex-grow">
                  <p>
                    Privately held hotels often place enormous responsibility on a small group of leaders. We serve as an experienced, independent voice—helping ownership and leadership maintain clarity and discipline during pivotal moments.
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
                    The strongest independent hotels are rooted in place. When identity, governance, and strategy align, a property becomes more than a destination—it becomes part of the story of its region.
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
            Ensuring independence remains intentional—not reactive.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
