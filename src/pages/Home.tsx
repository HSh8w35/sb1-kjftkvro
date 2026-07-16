import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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
                <div className="mt-24 px-4">
                  <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-[#8B6F47] mb-5">
                    Strategic Hospitality Advisory
                  </p>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal text-black leading-tight tracking-wide">
                    Seeing Possibility Where Others See Limits
                  </h1>
                </div>
                <div className="w-32 h-px bg-[#8B6F47]/40 mx-auto my-6" />
                <div className="space-y-3 text-lg md:text-xl font-semibold text-[#2E2A26] leading-relaxed max-w-2xl mx-auto px-4">
                  <p>Executive leadership and strategic advisory for owners, boards, and leadership teams at critical moments—when performance has plateaued, reinvestment is being considered, or the path forward is no longer clear.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Work With Heidi */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/possibilities" className="group no-underline flex flex-col items-center text-center bg-white rounded-2xl border-t-2 border-t-[#1F2A44] border border-[#E8E0D5] p-10 shadow-[0_4px_24px_rgba(139,111,71,0.08)] hover:shadow-[0_12px_40px_rgba(139,111,71,0.16)] hover:-translate-y-1 transition-all duration-300">
              <img src="/Transl_Key_only.webp" alt="" className="h-9 w-auto opacity-75 mb-6" />
              <span className="text-xs font-montserrat font-semibold tracking-[0.18em] uppercase text-[#B87333] mb-3">Advisory</span>
              <h3 className="text-xl font-bold text-[#1F2A44] mb-4 group-hover:text-[#8B6F47] transition-colors">Strategic Advisory</h3>
              <p className="text-[#2E2A26]/80 leading-relaxed flex-1 text-sm">Helping owners identify opportunity, strengthen performance, and make confident strategic decisions.</p>
              <span className="mt-6 flex items-center gap-1 text-xs font-montserrat font-semibold tracking-wider uppercase text-[#B87333] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <a href="/possibilities#executive-leadership" className="group no-underline flex flex-col items-center text-center bg-white rounded-2xl border-t-2 border-t-[#B87333] border border-[#E8E0D5] p-10 shadow-[0_4px_24px_rgba(139,111,71,0.08)] hover:shadow-[0_12px_40px_rgba(139,111,71,0.16)] hover:-translate-y-1 transition-all duration-300">
              <img src="/Transl_Key_only.webp" alt="" className="h-9 w-auto opacity-75 mb-6" />
              <span className="text-xs font-montserrat font-semibold tracking-[0.18em] uppercase text-[#B87333] mb-3">Leadership</span>
              <h3 className="text-xl font-bold text-[#1F2A44] mb-4 group-hover:text-[#8B6F47] transition-colors">Executive Leadership</h3>
              <p className="text-[#2E2A26]/80 leading-relaxed flex-1 text-sm">Fractional and interim executive leadership during periods of transition, growth, and organizational change.</p>
              <span className="mt-6 flex items-center gap-1 text-xs font-montserrat font-semibold tracking-wider uppercase text-[#B87333] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <a href="/possibilities#organizational-alignment" className="group no-underline flex flex-col items-center text-center bg-white rounded-2xl border-t-2 border-t-[#8B6F47] border border-[#E8E0D5] p-10 shadow-[0_4px_24px_rgba(139,111,71,0.08)] hover:shadow-[0_12px_40px_rgba(139,111,71,0.16)] hover:-translate-y-1 transition-all duration-300">
              <img src="/Transl_Key_only.webp" alt="" className="h-9 w-auto opacity-75 mb-6" />
              <span className="text-xs font-montserrat font-semibold tracking-[0.18em] uppercase text-[#B87333] mb-3">Alignment</span>
              <h3 className="text-xl font-bold text-[#1F2A44] mb-4 group-hover:text-[#8B6F47] transition-colors">Organizational Alignment</h3>
              <p className="text-[#2E2A26]/80 leading-relaxed flex-1 text-sm">Bringing leadership, operations, marketing, and commercial strategy together to unlock sustainable performance.</p>
              <span className="mt-6 flex items-center gap-1 text-xs font-montserrat font-semibold tracking-wider uppercase text-[#B87333] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-7 bg-[#F6F1E8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-12 h-px bg-[#8B6F47]/40 mx-auto mb-5" />
          <p className="text-2xl md:text-3xl font-playfair italic text-[#1F2A44] leading-relaxed mb-5">
            "Alignment is where possibility becomes performance."
          </p>
          <p className="text-sm font-montserrat font-semibold tracking-[0.18em] uppercase text-[#8B6F47]">Heidi Stone</p>
          <div className="w-12 h-px bg-[#8B6F47]/40 mx-auto mt-5" />
        </div>
      </section>

      {/* Heidi Stone bio box */}
      <section className="py-16 bg-[#F6F1E8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            to="/story"
            onClick={() => window.scrollTo(0, 0)}
            className="group bg-[#EDE8DF] border border-[#D4C5A9] text-[#2E2A26] rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden block"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
            <div className="flex flex-col md:flex-row items-stretch relative z-10">
              <div className="md:w-2/5 flex-shrink-0">
                <img
                  src="/gemini_generated_image_hu7jpthu7jpthu7j.webp"
                  alt="Heidi Stone"
                  className="w-full h-64 md:h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-bold text-2xl md:text-3xl text-[#1F2A44] mb-4">Experience Shapes Perspective</h3>
                <p className="text-[#2E2A26]/80 text-base md:text-lg leading-relaxed mb-4">The most valuable leadership isn't measured by years alone—it's measured by the challenges you've navigated, the organizations you've transformed, and the decisions you've helped owners make when the path forward wasn't clear.</p>
                <p className="text-[#2E2A26]/80 text-base md:text-lg leading-relaxed mb-6">For more than 35 years, Heidi Stone has led independent hotels and hospitality organizations through growth, reinvestment, operational change, and strategic transformation. Today, she partners with owners, boards, and leadership teams to help organizations recognize possibility, create alignment, and achieve lasting performance.</p>
                <p className="text-[#8B6F47] text-base md:text-lg font-semibold group-hover:text-[#6F5838] transition-colors">Read the Story →</p>
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
