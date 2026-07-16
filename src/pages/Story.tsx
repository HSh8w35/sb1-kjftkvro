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
              <div className="flex justify-center mb-8">
                <div className="h-px w-48 bg-[#8B6F47]" />
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-20 space-y-4">
                <p className="text-lg md:text-xl text-[#2E2A26] leading-relaxed">
                  I have spent my career being drawn to places the world once loved—and had begun to forget.
                </p>
                <p className="text-lg md:text-xl text-[#2E2A26] leading-relaxed pt-4">
                  Not because they are easy or tidy. But because inside complexity, neglect, and uncertainty, I see something others often miss: possibility.
                </p>
                <p className="text-lg md:text-xl text-[#2E2A26] leading-relaxed pt-4">
                  Places with history carry memory.<br />
                  Places with memory deserve stewardship.<br />
                  And stewardship requires decisions that carry consequence.
                </p>
                <p className="text-lg md:text-xl text-[#2E2A26] leading-relaxed pt-4">
                  I have not advised from the sidelines. I have led from inside the weight of privately held, high-risk hospitality assets—where payroll, debt service, capital investment, and community impact were not abstract concepts, but daily realities.
                </p>
                <p className="text-lg md:text-xl text-[#2E2A26] leading-relaxed">
                  For more than three decades, I have carried that weight.
                </p>
              </div>

              {/* Pull quote */}
              <div className="mb-20 py-10 border-t border-b border-[#8B6F47]/30 text-center">
                <p className="text-2xl md:text-3xl font-serif italic text-[#1F2A44] leading-relaxed">
                  "Alignment Is Where Possibility Becomes Performance"
                </p>
              </div>

              <div className="mb-12 space-y-6 text-[#3A3632] leading-relaxed text-lg">
                <p>
                  Over the course of my career, I have learned something that shapes every engagement. Organizations rarely underperform because of a single problem. Marketing may be working while operations struggle. Leadership may be strong while departments move in different directions. Ownership may invest capital without a shared commercial vision.
                </p>
                <p>
                  The greatest opportunities are realized when leadership, operations, marketing, sales, culture, and ownership become aligned around a common purpose.
                </p>
                <p>
                  That is where possibility becomes performance.
                </p>
                <p>
                  It is the philosophy that guides every engagement at Heidi Stone Hospitality.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-3 text-left">
                  Learning to Build an Independent Future
                </h2>
                <h3 className="text-base font-semibold text-[#2E2A26] mb-8 text-left">
                  High Peaks Resort | Lake Placid, New York
                </h3>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    High Peaks Resort was built as a Hilton for the 1980 Winter Olympics in Lake Placid. For decades, the property performed reliably under the protection of a global brand. Ownership believed something more was possible: the creation of an upper-upscale independent hotel in a market dominated by mid-scale family-owned resorts and only one true four-diamond competitor.
                  </p>
                  <p>
                    I arrived in June 2008—days before the Hilton flag was removed and in the middle of a massive renovation. The lobby was torn apart. Plastic sheeting hung from ceilings. Bare cement floors replaced carpet. Nothing about the space felt finished.
                  </p>
                  <p>
                    Within months, the global financial system collapsed.
                  </p>
                  <p>
                    High Peaks was opening as a brand-new independent hotel at precisely the moment corporate travel evaporated, discretionary spending froze, and uncertainty overtook optimism. Removing a global flag during an economic crisis was not simply an operational decision. It was an ownership decision with enormous consequences. We suddenly had no guest database, no independent reservation history, and no institutional framework for operating outside a global brand.
                  </p>
                  <p>
                    We rebuilt everything.
                  </p>
                  <p>
                    The digital infrastructure. The culture. The commercial strategy. The confidence.
                  </p>
                  <p>
                    By the end of 2010, the resort exceeded budget by more than 30 percent.
                  </p>
                  <p>
                    That experience taught me something I have carried ever since: Independence is never the risk. Lack of clarity is.
                  </p>
                  <p>
                    One moment from that period remains especially meaningful.
                  </p>
                  <p>
                    During the 2010 Winter Olympics, we welcomed Al Michaels and members of the 1980 Miracle on Ice team. I arranged for a custom USA Hockey jersey to be waiting in his room and later walked him through our private Legends Room filled with photographs from those historic games.
                  </p>
                  <p>
                    He paused quietly. "These guys were my friends." In that moment I realized something that has shaped my career ever since. Destination and historic hotels are more than businesses. They are keepers of stories. And stewardship extends far beyond ADR, occupancy, or financial performance.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-3 text-left">
                  Choosing to Save a Place Others Had Given Up On
                </h2>
                <h3 className="text-base font-semibold text-[#2E2A26] mb-8 text-left">
                  Mountain Lake Lodge | Virginia
                </h3>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    When I arrived at Mountain Lake Lodge, the famous Kellerman's Mountain House from <em>Dirty Dancing</em> stood tired and neglected.
                  </p>
                  <p>
                    The lake was gone.
                  </p>
                  <p>
                    More than fifty buildings across 2,600 acres were in serious disrepair. Its ownership mandate was clear: Operate successfully—or close permanently.
                  </p>
                  <p>
                    Consultants recommended eliminating the <em>Dirty Dancing</em> connection entirely. After listening to guests, I reached the opposite conclusion. The film was not the problem. Its potential simply had not been fully understood.
                  </p>
                  <p>
                    We paused existing programming, negotiated an official licensing agreement with Lionsgate, and completely reimagined the guest experience.
                  </p>
                  <p>
                    Demand surged. Weekends sold out a year in advance. A destination festival emerged. A Kellerman's gift shop followed. That single strategic decision generated millions in revenue while introducing an entirely new generation of guests to Mountain Lake Lodge.
                  </p>
                  <p>
                    But the transformation went much deeper.
                  </p>
                  <p>
                    There were few systems. Little capital. Four year-round employees. No established leadership structure. So we began with what costs nothing.
                  </p>
                  <p>
                    Culture. Leadership. Standards. Accountability.
                  </p>
                  <p>
                    Over time, Mountain Lake Lodge became Hotel of the Year, an economic engine for the region, and in 2025 was inducted into Historic Hotels of America. That recognition affirmed something I had believed from the beginning. Stewardship, guided by disciplined leadership, can restore not only a property—but belief in what it can become.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-8 text-left">
                  The Pattern
                </h2>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    Looking back, the pattern is unmistakable. I am drawn to organizations facing meaningful decisions. Often privately held. Often historic. Often independent. Often carrying responsibilities that extend well beyond the balance sheet.
                  </p>
                  <p>
                    My work has never been about rescuing buildings. It has been about aligning people. Clarifying vision. Strengthening leadership. Building operating discipline. Creating cultures capable of sustaining performance long after the initial turnaround.
                  </p>
                  <p>
                    Because lasting performance is never created by one department alone.
                  </p>
                  <p>
                    It is created through alignment.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-base uppercase tracking-widest text-[#8B6F47] font-semibold mb-8 text-left">
                  Why I Founded Heidi Stone Hospitality
                </h2>
                <div className="space-y-6 text-[#3A3632] leading-relaxed text-lg">
                  <p>
                    Independent hospitality owners are operating in one of the most complex environments our industry has ever faced.
                  </p>
                  <p>
                    Markets evolve. Technology changes. Guest expectations rise. Capital becomes more expensive. Leadership transitions create uncertainty.
                  </p>
                  <p>
                    Many organizations are offered tools.
                  </p>
                  <p>
                    What they truly need is experienced judgment. Someone who understands the weight of ownership. Someone who has made consequential decisions when the path forward was uncertain. Someone who recognizes possibility—and knows how to align an organization to realize it.
                  </p>
                  <p>
                    That is why I founded Heidi Stone Hospitality.
                  </p>
                  <p>
                    Not as a consulting firm.
                  </p>
                  <p>
                    As an Executive Advisory Practice. A trusted partner for owners, boards, and leadership teams during the moments when experience matters most.
                  </p>
                  <p>
                    Because independence, when guided by clarity, alignment, and disciplined leadership, is not a risk.
                  </p>
                  <p>
                    It is a competitive advantage.
                  </p>
                </div>
              </div>

              <div className="mb-20 pt-12 border-t border-[#8B6F47]/30">
                <p className="text-xs uppercase tracking-widest text-[#8B6F47] font-semibold mb-8">In Conversation</p>
                <a
                  href="https://youtu.be/dwcCLT9QHZU?si=zhuy0XyNmaYgBt6o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#1F2A44] rounded-xl overflow-hidden shadow-xl group"
                >
                  <div className="aspect-video w-full relative bg-black">
                    <img
                      src={`https://img.youtube.com/vi/dwcCLT9QHZU/maxresdefault.jpg`}
                      alt="Don't Tell Me It's Impossible — Heidi Stone on Stove to Strategy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/dwcCLT9QHZU/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 group-hover:bg-red-500 transition-colors duration-300 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium tracking-wide">
                      Watch on YouTube
                    </div>
                  </div>
                  <div className="px-8 py-7">
                    <h3 className="text-xl font-bold text-[#E8DCC8] mb-2 leading-snug group-hover:text-[#C9A96E] transition-colors duration-200">
                      "Don't Tell Me It's Impossible"
                    </h3>
                    <p className="text-[#C9A96E]/80 text-sm leading-relaxed">
                      Heidi joins Stove to Strategy for a conversation about leadership, possibility, independent hospitality, and the lessons learned leading complex destination properties through transformation.
                    </p>
                  </div>
                </a>
              </div>

              <div className="text-center mt-20 pt-12 border-t border-[#8B6F47]/30">
                <Link
                  to="/lets-talk#contact"
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
