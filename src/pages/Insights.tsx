import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { BookOpen, TrendingUp, Award, FileText, Target, MessageSquare, ArrowRight, Calendar, Anchor } from 'lucide-react';
import SEO from '../components/SEO';
import { useSEOData } from '../hooks/useSEOData';

interface Perspective {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  icon_name: string;
  display_order: number;
  pdf_url: string | null;
  published_at: string;
  is_flagship: boolean;
}

function Insights() {
  const seoData = useSEOData('perspectives');
  const articleSeoData = useSEOData('perspectives-articles');
  const [perspectives, setPerspectives] = useState<Perspective[]>([]);
  const [selectedPerspective, setSelectedPerspective] = useState<Perspective | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPerspectives();
  }, []);

  useEffect(() => {
    if (selectedPerspective) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPerspective]);

  const fetchPerspectives = async () => {
    try {
      const { data, error } = await supabase
        .from('perspectives')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPerspectives(data || []);
    } catch (error) {
      console.error('Error fetching perspectives:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      TrendingUp,
      Target,
      FileText,
      BookOpen,
      Award,
      MessageSquare
    };
    return icons[iconName] || BookOpen;
  };

  if (selectedPerspective) {
    const Icon = getIcon(selectedPerspective.icon_name);

    return (
      <>
        <SEO
          title={selectedPerspective.title}
          description={selectedPerspective.excerpt}
          keywords={articleSeoData?.keywords}
          url={`https://heidistonehospitality.com/perspectives/${selectedPerspective.slug}`}
        />
        <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#F6F1E8] via-white to-[#F6F1E8] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#B87333]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-[#8B6F47]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#B87333]/10 rounded-full" />
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-[#8B6F47]/10 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => setSelectedPerspective(null)}
            className="mb-8 flex items-center text-[#8B6F47] hover:text-[#B87333] transition-colors font-medium"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Back to All Perspectives
          </button>

          <div className="max-w-4xl mx-auto">
            <article>
              <div className="bg-white p-8 lg:p-12 rounded-xl border border-[#B87333]/20 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-3 bg-[#1F2A44] rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-[#1F2A44] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {selectedPerspective.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-8 leading-tight">
                  {selectedPerspective.title}
                </h1>

                <div className="prose prose-lg max-w-none">
                  {selectedPerspective.content.split('\n\n').map((paragraph, index) => {
                    const trimmedParagraph = paragraph.trim();

                    if (trimmedParagraph.startsWith('## ')) {
                      const headerText = trimmedParagraph.replace('## ', '');
                      return (
                        <h2 key={index} className="text-3xl md:text-4xl font-bold text-[#B87333] mt-10 mb-6 first:mt-0">
                          {headerText}
                        </h2>
                      );
                    }

                    if (trimmedParagraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
                      return (
                        <ul key={index} className="space-y-2 mb-6 ml-6">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-xl text-[#2E2A26] leading-relaxed list-disc">
                              {item.replace('- ', '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (trimmedParagraph.length === 0) return null;

                    return (
                      <p key={index} className="text-xl text-[#2E2A26] leading-relaxed mb-6">
                        {trimmedParagraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-[#B87333]/20">
                  <p className="text-xl text-[#2E2A26] italic mb-6">
                    Want to discuss how these insights apply to your property?
                  </p>
                  <a
                    href="/lets-talk"
                    className="inline-block bg-gradient-to-r from-[#1F2A44] to-[#2E3A54] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                  >
                    Let's Connect
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={seoData?.title || "Independent Hotel Leadership Insights | Hospitality Strategy"}
        description={seoData?.description || "Leadership insights and strategy perspectives for independent hotel owners. Thought leadership on hospitality independence, performance, and strategic decision-making."}
        keywords={seoData?.keywords}
        url="https://heidistonehospitality.com/perspectives"
      />
      <section className="pt-20 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#FFF8F0] to-[#F6F1E8] relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 relative">
          {/* Watermark Background */}
          <div className="absolute inset-x-0 -top-44 bottom-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <img
              src="/Transl_Key_only.webp"
              alt=""
              className="w-full h-full object-contain opacity-10 scale-[112.5%]"
            />
          </div>

          <div className="mb-2 relative z-10">
            <div className="flex items-center justify-center mb-2">
              <img
                src="/V_2_Transparent_Perspectives.png"
                alt="Perspectives"
                className="w-auto h-40 md:h-52"
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-3 text-center mb-6 relative z-10 bg-transparent">
            <p className="font-montserrat text-lg text-[#2E2A26] leading-snug bg-transparent">
              Perspectives are foundational statements that define how we think about leadership, independence, and long-term value in hospitality. They are not reactions to trends or commentary on the moment. They are positions shaped by experience, tested under pressure, and refined through years of executive leadership in independent hotels and resorts.
            </p>
            <p className="font-montserrat text-lg text-[#2E2A26] leading-snug bg-transparent">
              This body of work challenges conventional industry assumptions—particularly the belief that scale, affiliation, or standardization are the inevitable answers to complexity. Each Perspective is written for owners, boards, and senior leaders. Together, they form a framework for decision-making that prioritizes stewardship over speed, clarity over convenience, and leadership accountability over delegation.
            </p>
            <p className="font-montserrat text-lg text-[#2E2A26] leading-snug font-semibold bg-transparent">
              This is where we articulate the principles that guide our work—and the thinking we believe will shape the future of independent hospitality.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B6F47]"></div>
          </div>
        ) : (
          <>
            {(() => {
              const flagship = perspectives.find(p => p.is_flagship);
              if (!flagship) return null;
              return (
                <div className="max-w-4xl mx-auto mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <Anchor className="w-5 h-5 text-[#8B6F47]" />
                    <span className="text-[#8B6F47] text-xs font-bold tracking-widest uppercase">Flagship Perspective</span>
                    <div className="flex-1 h-px bg-[#8B6F47]/30" />
                  </div>
                  <article
                    className="relative bg-gradient-to-br from-[#1F2A44] to-[#2E3A54] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-[#8B6F47]/40 hover:border-[#C9A96E]/60 transition-all hover:shadow-[0_20px_60px_rgba(139,111,71,0.3)]"
                    onClick={() => setSelectedPerspective(flagship)}
                  >
                    <div className="absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

                    <div className="relative p-8 lg:p-12">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                        <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#C9A96E] px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                          {flagship.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[#C9A96E]/60 text-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formatDate(flagship.published_at)}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8DCC8] mb-6 leading-tight group-hover:text-white transition-colors">
                        {flagship.title}
                      </h2>

                      <p className="text-lg md:text-xl text-[#C9A96E]/80 leading-relaxed mb-10 max-w-3xl">
                        {flagship.excerpt}
                      </p>

                      <div className="flex items-center gap-3 text-[#C9A96E] font-semibold group-hover:gap-5 transition-all">
                        <span>Read the Full Perspective</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </article>
                </div>
              );
            })()}

            {perspectives.filter(p => !p.is_flagship).length > 0 && (
              <>
                <div className="max-w-4xl mx-auto mb-6 flex items-center gap-3">
                  <span className="text-[#8B6F47] text-xs font-bold tracking-widest uppercase">All Perspectives</span>
                  <div className="flex-1 h-px bg-[#8B6F47]/30" />
                </div>
                <div className="max-w-4xl mx-auto space-y-6 mb-16">
                  {perspectives.filter(p => !p.is_flagship).map((perspective) => (
                    <article
                      key={perspective.id}
                      className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border border-[#8B6F47]/30 hover:shadow-2xl hover:border-[#8B6F47]/50 transition-all cursor-pointer hover:scale-[1.02]"
                      onClick={() => setSelectedPerspective(perspective)}
                    >
                      <div className="mb-4">
                        <span className="bg-[#8B6F47] text-white px-4 py-1 rounded-full text-sm font-medium">
                          {perspective.category}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-[#8B6F47] mb-4 hover:text-[#6F5838] transition-colors">
                        {perspective.title}
                      </h2>

                      <p className="text-xl text-[#2E2A26] leading-relaxed mb-6">
                        {perspective.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-[#2E2A26]/70">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(perspective.published_at)}</span>
                          </div>
                        </div>

                        <button className="flex items-center gap-2 text-[#8B6F47] hover:text-[#6F5838] transition-colors font-medium">
                          Read Full Article
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}

            {perspectives.length > 0 && !perspectives.some(p => !p.is_flagship) && <div className="mb-16" />}
          </>
        )}

        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B6F47] mb-4">
              Commentary
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#B87333] to-transparent" />
            </div>
            <p className="text-lg text-[#2E2A26] max-w-2xl mx-auto">
              Thought leadership on policy, advocacy, and the broader impact of independent hospitality
            </p>
          </div>

          <a
            href="https://richmond.com/opinion/column/article_2d8c3941-befb-461f-9e50-df1b172f02a3.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-white to-[#F6F1E8] p-10 rounded-2xl border-2 border-[#8B6F47]/20 hover:shadow-xl transition-all group cursor-pointer"
          >
            <div className="flex items-start mb-6">
              <div className="p-3 bg-[#1F2A44] rounded-lg mr-4 group-hover:bg-[#8B6F47] transition-colors">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#8B6F47] mb-2 flex items-center gap-2">
                  Protect Virginia's Hidden Gems - Independent Hotels
                  <FileText className="w-5 h-5 text-[#B87333] flex-shrink-0" />
                </h3>
                <p className="text-xl text-[#1F2A44] font-medium mb-4">
                  A call to preserve the unique character and cultural significance of Virginia's independent hotels.
                </p>
              </div>
            </div>
            <p className="text-xl text-[#2E2A26] leading-relaxed">
              Independent hotels are more than just places to stay—they are anchors of local identity, economic drivers, and irreplaceable cultural assets. As consolidation threatens the hospitality landscape, protecting these properties requires intentional policy and community support.
            </p>
            <div className="mt-6 text-[#8B6F47] font-semibold flex items-center gap-2 group-hover:text-[#B87333] transition-colors">
              Read Full Article
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#8B6F47] to-[#6F5838] p-12 rounded-xl text-white border border-[#D4C5A9]/20 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              A Philosophy of Partnership
            </h2>
            <div className="space-y-4 leading-relaxed text-xl">
              <p>
                At Heidi Stone Hospitality, we believe enduring excellence in independent hospitality is built at the intersection of vision and execution—where creativity is matched with discipline, and strategy is grounded in real-world leadership.
              </p>
              <p>
                Our perspective is shaped by decades of experience leading independent hotels and resorts through moments of pressure, transition, and growth. The thinking shared here is not theoretical, nor is it templated. It reflects practical judgment formed at the helm of properties facing the same complexity, scrutiny, and responsibility owners and boards navigate today.
              </p>
              <p>
                Partnership, as we define it, is not prescriptive. It is collaborative, grounded in trust, and rooted in accountability. It begins with understanding the identity of the asset, the intent of ownership, and the leadership required to sustain long-term value.
              </p>
              <p>
                These Perspectives exist to clarify how we think, how we engage, and what we believe strong independent leadership demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Insights;
