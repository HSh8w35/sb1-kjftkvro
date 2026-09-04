import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function Services() {
  const seoData = useSEOData('services');

  return (
    <>
      <SEO
        title={seoData?.title || "Hospitality Leadership Advisory for Owners & Executive Teams"}
        description={seoData?.description || "Leadership advisory for independent hotel owners and executive teams. Strategic alignment, executive advisory, and owner advisory."}
        keywords={seoData?.keywords}
        url="https://heidistonehospitality.com/lets-talk"
        robots="index, follow"
      />
      <section className="pt-28 pb-16 px-6 lg:px-8 relative">
      <div className="absolute inset-0 -top-48 opacity-20 pointer-events-none">
        <img
          src="/version_2_coastal_lobby_for_hsh_website_hero_section_home_page.webp"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#B87333]"></div>
            <div className="mx-4 w-3 h-3 rotate-45 border-2 border-[#B87333]"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#B87333]"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-6">
            Let's Talk
          </h1>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-[#F5EDE0]/60 backdrop-blur-sm p-8 rounded-xl border border-[#B87333]/20 shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-[3] space-y-4">
                  <p className="text-xl text-[#2E2A26] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    Most conversations begin at a point where something is no longer clear.
                  </p>
                  <p className="text-xl text-[#2E2A26] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    If you are navigating a moment of complexity, transition, or uncertainty, we can begin with a conversation.
                  </p>
                  <p className="text-xl text-[#2E2A26] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    Initial conversations are informal and focused on understanding where things stand—and whether a Possibility Assessment would be valuable.
                  </p>
                </div>
                <div className="flex-[2] flex justify-center items-start">
                  <div className="relative overflow-hidden shadow-lg" style={{ borderRadius: '50%', width: '70%', aspectRatio: '1/1' }}>
                    <img
                      src="/gemini_generated_image_hu7jpthu7jpthu7j.webp"
                      alt="Strategic advisory conversation about how to increase revenue at an independent hotel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{
                      boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.15)'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

<div id="contact" className="text-center py-6">
              <p className="text-sm uppercase tracking-widest text-[#B87333] mb-4 font-medium">Contact</p>
              <a
                href="mailto:heidi@heidistonehospitality.com"
                className="inline-block text-2xl md:text-3xl font-medium text-[#1F2A44] hover:text-[#B87333] transition-colors mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                heidi@heidistonehospitality.com
              </a>
              <p className="text-base text-[#5C4A32]/80">Direct outreach is always welcome.</p>
              <p className="text-base text-[#5C4A32]/80 mt-4">Or</p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Services;
