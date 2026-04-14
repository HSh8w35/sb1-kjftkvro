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
        robots="index, nofollow"
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
                  <p className="text-lg text-[#2E2A26] leading-relaxed">
                    Most conversations begin at a point where something is no longer clear.
                  </p>
                  <p className="text-lg text-[#2E2A26] leading-relaxed">
                    If you are navigating a moment of complexity, transition, or uncertainty, we can begin with a conversation.
                  </p>
                  <p className="text-lg text-[#2E2A26] leading-relaxed">
                    Initial conversations are informal and focused on understanding where things stand—and whether a Possibility Assessment would be valuable.
                  </p>
                </div>
                <div className="flex-[2]">
                  <div className="relative rounded-lg overflow-hidden shadow-lg w-4/5 mx-auto">
                    <img
                      src="/gemini_generated_image_hu7jpthu7jpthu7j.webp"
                      alt="Professional conversation"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{
                      boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.15)'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

<div id="contact" className="max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-widest text-[#B87333] mb-2 font-medium">Contact</p>
              <a
                href="mailto:heidi@heidistonehospitality.com"
                className="inline-block text-base font-medium text-[#1F2A44] hover:text-[#B87333] transition-colors mb-1"
              >
                heidi@heidistonehospitality.com
              </a>
              <p className="text-sm text-[#5C4A32]/80">Direct outreach is always welcome.</p>
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
