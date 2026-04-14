import { Link } from 'react-router-dom';
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
          img.onload = () => resolve(src);
          img.onerror = (error) => reject(error);
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch {
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

      {/* Hero */}
      <section className="min-h-screen md:min-h-[85vh] flex items-center px-6 lg:px-8 relative overflow-hidden bg-[#F6F1E8]">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
              style={{ opacity: imagesLoaded && currentImageIndex === index ? 0.35 : 0 }}
            >
              <img src={image} alt="" className="w-full h-full object-cover" style={{ display: 'block' }} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F1E8]/50 via-transparent to-[#F6F1E8]/80" />
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
                <div className="w-32 h-px bg-[#8B6F47]/40 mx-auto my-6" />
                <div className="space-y-3 text-lg md:text-xl font-semibold text-[#2E2A26] leading-relaxed max-w-2xl mx-auto px-4">
                  <p>Heidi Stone Hospitality works with owners, boards, and leadership teams at critical moments—when performance has plateaued, as reinvestment is being considered, or when the path forward is no longer clear.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warm bridge */}
      <div className="h-2 bg-gradient-to-r from-[#D4C5A9] via-[#C4A882] to-[#D4C5A9]" />

      {/* The Possibility Assessment */}
      <section className="relative py-28 overflow-hidden bg-[#F0E8DA]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[#8B6F47] text-xs tracking-[0.35em] uppercase font-medium">Signature Engagement</span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#2E2A26] leading-tight">
            The Possibility Assessment
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8B6F47]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8B6F47]" />
          </div>

          <p className="text-[#2E2A26]/85 text-xl md:text-2xl leading-relaxed">
            A focused, one-week, on-site engagement designed to identify the revenue, positioning, and operational opportunities that already exist within a property—but are not yet fully realized.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-12 text-left">
            <div>
              <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-6">When Owners Call Me</p>
              <ul className="space-y-4">
                {[
                  'When performance has plateaued',
                  'As reinvestment is being considered',
                  'During leadership or organizational transition',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
                    <span className="text-[#2E2A26]/85 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-6">What You Receive</p>
              <ul className="space-y-4">
                {[
                  'A clear, prioritized assessment',
                  'Immediate and strategic opportunities',
                  'A defined path forward',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
                    <span className="text-[#2E2A26]/85 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-[#8B6F47]/20">
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-5">Next Step</p>
            <Link
              to="/possibilities"
              onClick={() => window.scrollTo(0, 0)}
              className="group inline-flex items-center gap-2 text-[#2E2A26] text-lg font-medium hover:text-[#8B6F47] transition-colors duration-300"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="mt-8 text-[#2E2A26]/60 text-base italic">
              If you are navigating one of these moments, we can begin with a conversation.
            </p>
          </div>
        </div>
      </section>


      {/* Heidi Stone bio box */}
      <section className="py-16 bg-[#F6F1E8]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
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
      </section>

      {/* Closing quote */}
      <section className="py-16 bg-gradient-to-br from-[#3D3228] to-[#2A2218] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
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
