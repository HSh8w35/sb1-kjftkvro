import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

function Story() {
  const seoData = useSEOData('story');

  return (
    <>
      <SEO
        title={seoData?.title || "Heidi's Story | Independent Hotel Leadership"}
        description={seoData?.description || "The founder's story of Heidi Stone, independent hotel advisor and hospitality leader."}
        keywords={seoData?.keywords}
        url="https://heidistonehospitality.com/story"
      />
      <div className="pt-20 min-h-screen bg-[#FAF8F3]">
        <article className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-light text-[#2E2A26] mb-6 tracking-tight">
                Story
              </h1>
              <p className="text-2xl md:text-3xl font-serif italic text-[#2E2A26]/80 mb-10 font-light">
                Why I Do This Work
              </p>
              <p className="text-2xl md:text-3xl text-[#2E2A26] leading-relaxed mb-8">
                I have spent my career being drawn to places the world once loved—and had begun to forget.
              </p>
              <div className="flex justify-center">
                <div className="h-px w-48 bg-[#8B6F47]" />
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-20 space-y-8">
                <p className="text-xl md:text-2xl text-[#2E2A26] leading-loose">
                  Not because they are easy.
                </p>
                <p className="text-xl md:text-2xl text-[#2E2A26] leading-loose">
                  Not because they are tidy.
                </p>
                <p className="text-xl md:text-2xl text-[#2E2A26] leading-loose">
                  But because inside complexity, neglect, and uncertainty, I see something others often miss: possibility.
                </p>
                <p className="text-xl md:text-2xl text-[#2E2A26] leading-loose pt-6">
                  Places with history carry memory.
                </p>
                <p className="text-xl md:text-2xl text-[#2E2A26] leading-loose">
                  Places with memory deserve stewardship.
                </p>
                <div className="space-y-6 pt-12">
                  <p className="text-xl md:text-2xl text-[#2E2A26] leading-loose">
                    I have not advised from the sidelines. I have led from inside the weight of privately held, high-risk hospitality assets—where payroll, debt service, capital investment, and community impact were not abstract concepts, but daily realities.
                  </p>
                  <p className="text-xl md:text-2xl text-[#2E2A26] leading-loose">
                    For more than two decades, I have carried that weight.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-8 text-left">
                  Learning to Build an Independent Future
                </h2>
                <h3 className="text-base font-semibold text-[#2E2A26] mb-8 text-left">
                  High Peaks Resort, Lake Placid
                </h3>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    High Peaks Resort was built as a Hilton for the 1980 Winter Olympics in Lake Placid. For decades, the property performed reliably under the protection of a global brand. Ownership believed something more was possible: the creation of an upper-upscale independent hotel in a market dominated by mid-scale family-owned resorts and only one true four-diamond competitor.
                  </p>
                  <p>
                    I arrived in June of 2008—days before the Hilton flag was removed and in the middle of a massive renovation. The lobby was torn apart. Plastic sheeting hung from ceilings. Bare cement floors replaced carpet. Nothing about the space felt finished.
                  </p>
                  <p>
                    Within months, the global financial system collapsed.
                  </p>
                  <p>
                    High Peaks was opening as a brand-new independent hotel at the precise moment corporate travel evaporated, discretionary spending froze, and fear overtook optimism.
                  </p>
                  <p>
                    The decision to remove a global flag in the midst of economic collapse was not operational—it was existential. Ownership was betting on independence when the world was retreating to safety.
                  </p>
                  <p>
                    We were unplugging from a brand that had handled marketing, reservations, and data. Overnight, we had no guest database. No independent demand history. No institutional muscle memory for what independence required.
                  </p>
                  <p className="font-semibold">
                    We were starting from zero.
                  </p>
                  <p>
                    The decisions we made were not marketing experiments. They were survival decisions—capital decisions, staffing decisions, brand decisions that would either preserve ownership confidence or erode it.
                  </p>
                  <p>
                    We rebuilt digital infrastructure from scratch. We rebuilt culture. We rebuilt confidence.
                  </p>
                  <p>
                    By the end of 2010, we exceeded budget by more than 30 percent.
                  </p>
                  <p className="font-semibold">
                    The lesson was indelible: independence is not a vulnerability when guided by disciplined judgment at the ownership level.
                  </p>
                  <p>
                    One moment from that period still stays with me.
                  </p>
                  <p>
                    During the 2010 Winter Olympics, we hosted Al Michaels and members of the 1980 "Miracle on Ice" team. I arranged for a custom USA Hockey jersey to be waiting in Mr. Michaels' room. I then walked him through our private "Legends Room," covered in photographs from the 1980 Olympic Games.
                  </p>
                  <p>
                    He paused quietly, gazing at the photographs as if stepping back in time.
                  </p>
                  <p>
                    "These guys were my friends," he said.
                  </p>
                  <p>
                    In that moment, I felt his pride — and I felt his loss. Not all of those friends were still with us. The room felt still.
                  </p>
                  <p>
                    It struck me then that destination and historic hotels are more than properties. They are keepers of stories. They are treasured vaults of sacred memory.
                  </p>
                  <p>
                    And the responsibility we carry as hoteliers runs far deeper than ADR, STR reports, or the color of the floors in the bathroom.
                  </p>
                </div>
              </div>


              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-8 text-left">
                  Choosing to Save a Place Others Had Given Up On
                </h2>
                <h3 className="text-base font-semibold text-[#2E2A26] mb-8 text-left">
                  Mountain Lake Lodge
                </h3>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    When I first arrived at Mountain Lake Lodge in January, the wind was howling at 4,000 feet atop Salt Pond Mountain.
                  </p>
                  <p>
                    The famous Kellerman's Mountain House from <em>Dirty Dancing</em> stood cold, tired, and neglected.
                  </p>
                  <p>
                    The lake was gone. A massive dry crater sat at the center of the property. More than 50 buildings across 2,600 acres were in serious disrepair. Many should have been condemned. Mountain Lake Lodge was owned by an endowment. The last owner stipulated in her will that the property could never be sold. It must operate as a hotel - or close permanently.
                  </p>
                  <p>
                    By 2012, closure was very close.
                  </p>
                  <p>
                    Consultants recommended eliminating <em>Dirty Dancing</em> entirely, believing the property was trapped by the film.
                  </p>
                  <p>
                    Within months of listening to guests, I knew the opposite was true.
                  </p>
                  <p className="font-semibold">
                    <em>Dirty Dancing</em> was not a liability.<br />
                    It was an asset misunderstood.
                  </p>
                  <p>
                    But it needed to be treated with respect, discipline, and professionalism.
                  </p>
                  <p>
                    We paused the existing <em>Dirty Dancing</em> weekends. I personally called Lionsgate—one of the largest film rights holders in the world—and established a proper licensing agreement. Programming was completely reimagined. Events were limited, elevated, and curated.
                  </p>
                  <p>
                    Demand surged.
                  </p>
                  <p>
                    Weekends sold out a year in advance. A <em>Dirty Dancing</em> Festival was created. A one-of-a-kind Kellerman's gift shop followed. That single strategic decision has generated millions in revenue, two television mini-series, and billions of global impressions.
                  </p>
                  <p>
                    At the same time, we rebuilt everything else from the ground up.
                  </p>
                  <p>
                    There were no modern systems.<br />
                    No true management team.<br />
                    Four year-round employees.<br />
                    No uniforms. No name tags. No procedures.<br />
                    One salesperson. No marketing.<br />
                    Frozen food. Two-inch mattresses. Musty rooms.
                  </p>
                  <p>
                    Funding was minimal.
                  </p>
                  <p>
                    So we started with what costs nothing: culture.
                  </p>
                  <p>
                    We trained relentlessly. Established standards. Built leaders. I personally curated and hosted leadership retreats focused on honest, uncomfortable conversations.
                  </p>
                  <p>
                    Within five years, Mountain Lake Lodge went from arguably the most condemnable hotel in Virginia to Virginia Restaurant Lodging Travel Association's Hotel of the Year. That same year I was honored as the Hotelier of the Year.
                  </p>
                  <p>
                    More importantly, we changed how people felt about the place.
                  </p>
                  <p>
                    By the time the pandemic arrived, our team was seasoned at pivoting, adapting, and making decisions quickly. Independence allowed us to control our destiny. We filmed multiple television productions during the pandemic years and accelerated global brand recognition with billions seeing the resort for the first time in over 35 years.
                  </p>
                  <p>
                    Slowly, the narrative changed.
                  </p>
                  <p>
                    Mountain Lake Lodge was no longer a liability.
                  </p>
                  <p>
                    It became an economic engine.
                  </p>
                  <p>
                    An asset.
                  </p>
                  <p>
                    A place with a future.
                  </p>
                  <p>
                    Perhaps the most meaningful moment came in October 2025, when Mountain Lake Lodge was formally inducted into Historic Hotels of America.
                  </p>
                  <p>
                    To witness a property once considered among the most condemnable in Virginia recognized among the nation's most storied historic hotels was deeply personal.
                  </p>
                  <p>
                    Not because of a plaque.
                  </p>
                  <p>
                    But because it affirmed what our team had always believed: that this place mattered, that its history deserved protection, and that stewardship, when done with intention, can bring a legacy back to life.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-8 text-left">
                  The Pattern
                </h2>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    Looking back, the pattern is clear.
                  </p>
                  <p>
                    I am drawn to complex, high-risk, emotionally complicated assets with history.
                  </p>
                  <p>
                    Not to preserve them as museums.
                  </p>
                  <p>
                    But to make them viable, relevant, and profitable again—without stripping away their soul.
                  </p>
                  <p>
                    I rebuild belief systems.<br />
                    Leadership structures.<br />
                    Operating disciplines.<br />
                    Cultures that sustain performance long after the initial turnaround.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-8 text-left">
                  Why I Formed Heidi Stone Hospitality
                </h2>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    Independent hotel owners are operating in one of the most complex environments the industry has ever faced.
                  </p>
                  <p>
                    What they are often offered are tools.
                  </p>
                  <p className="font-semibold">
                    What they actually need is seasoned, disciplined judgment.
                  </p>
                  <p>
                    Someone who has carried weight before.<br />
                    Someone who understands both the romance and the rigor.<br />
                    Someone who knows that reports do not save hotels—leaders do.
                  </p>
                  <p>
                    Heidi Stone Hospitality exists to serve as that partner.
                  </p>
                  <p>
                    Not a vendor.<br />
                    Not a slide deck.<br />
                    Not a theoretical model.
                  </p>
                  <p>
                    A thinking partner embedded in the hard work of leadership.
                  </p>
                </div>
              </div>

              <div className="my-12 py-8 text-center">
                <p className="text-xl md:text-2xl font-serif italic text-[#2E2A26] leading-relaxed">
                  Because independence, when led well, is not a risk.<br />
                  It is power.
                </p>
              </div>

              <div className="text-center mt-20 pt-12 border-t border-[#8B6F47]/30">
                <Link
                  to="/lets-talk"
                  className="inline-block bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white font-semibold text-lg px-10 py-4 rounded-lg hover:from-[#6F5838] hover:to-[#8B6F47] transition-all shadow-lg"
                >
                  Let's Talk
                </Link>
                <p className="text-sm text-[#8B6F47] mt-3 italic">
                  Discreet, confidential conversations.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Story;
