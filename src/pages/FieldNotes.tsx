import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Calendar, Clock, ArrowRight, Quote, Anchor, Video } from 'lucide-react';
import SEO from '../components/SEO';

interface FieldNote {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: number;
  published_at: string;
  is_flagship: boolean;
}

interface Testimonial {
  id: string;
  client_name: string;
  client_title: string;
  client_property: string;
  quote: string;
}

function FieldNotes() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<FieldNote[]>([]);
  const [selectedPost, setSelectedPost] = useState<FieldNote | null>(null);
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
    fetchTestimonial();
  }, []);

  useEffect(() => {
    if (slug && posts.length > 0) {
      const post = posts.find(p => p.slug === slug);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [slug, posts]);

  useEffect(() => {
    if (selectedPost) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPost]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('field_notes')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching field notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTestimonial = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .ilike('client_name', '%Chintan%')
        .maybeSingle();

      if (error) throw error;
      setTestimonial(data);
    } catch (error) {
      console.error('Error fetching testimonial:', error);
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

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Leadership': 'bg-[#8B6F47]',
      'Strategy': 'bg-[#6F5838]',
      'Revenue': 'bg-[#8B6F47]',
      'Brand': 'bg-[#6F5838]',
      'Operations': 'bg-[#8B6F47]'
    };
    return colors[category] || 'bg-[#8B6F47]';
  };

  if (selectedPost) {
    return (
      <>
        <SEO
          title={selectedPost.title}
          description={selectedPost.excerpt}
          url={`https://heidistonehospitality.com/field-notes/${selectedPost.slug}`}
        />
        <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#E8DCC8] to-[#D4C5A9] relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-[#6F5838]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => {
              setSelectedPost(null);
              navigate('/field-notes');
            }}
            className="mb-8 flex items-center text-[#8B6F47] hover:text-[#6F5838] transition-colors font-medium"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Back to All Notes
          </button>

          <div className="max-w-4xl mx-auto">
            <article>
              <div className="bg-white p-8 lg:p-12 rounded-xl border border-[#8B6F47]/20 shadow-lg">
                <div className="mb-6">
                  <span className={`${getCategoryColor(selectedPost.category)} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                    {selectedPost.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-6 leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center gap-6 text-[#2E2A26]/70 mb-8 pb-8 border-b border-[#8B6F47]/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(selectedPost.published_at)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{selectedPost.read_time} min read</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => {
                    const trimmedParagraph = paragraph.trim();

                    if (trimmedParagraph.startsWith('## ')) {
                      const headerText = trimmedParagraph.replace('## ', '');
                      return (
                        <h2 key={index} className="text-2xl font-bold text-[#8B6F47] mt-10 mb-6 first:mt-0">
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

                    // Check for diamond separator
                    if (trimmedParagraph === '◆ ◆ ◆') {
                      return (
                        <div key={index} className="text-center my-12">
                          <span className="text-[#8B6F47] text-2xl tracking-widest">
                            {trimmedParagraph}
                          </span>
                        </div>
                      );
                    }

                    // Check for specific gold-colored sentences
                    const goldSentences = [
                      'The Quiet Reality Inside the Portfolio',
                      'The Soft Brand Assumption',
                      'Where the Model Begins to Strain',
                      'What Often Goes Unseen',
                      'A Final Thought'
                    ];

                    if (goldSentences.includes(trimmedParagraph)) {
                      return (
                        <p key={index} className="text-xl text-[#8B6F47] leading-relaxed mb-6 font-semibold">
                          {trimmedParagraph}
                        </p>
                      );
                    }

                    const isHeading = trimmedParagraph === trimmedParagraph.toUpperCase() &&
                                     trimmedParagraph.length > 10 &&
                                     trimmedParagraph.length < 100 &&
                                     !trimmedParagraph.includes('.');

                    if (isHeading) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-[#8B6F47] mt-10 mb-6 first:mt-0">
                          {trimmedParagraph}
                        </h2>
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

                <div className="mt-12 pt-8 border-t border-[#8B6F47]/20">
                  <p className="text-xl text-[#2E2A26] italic mb-6">
                    Want to discuss how these insights apply to your property?
                  </p>
                  <a
                    href="/lets-talk"
                    className="inline-block bg-gradient-to-r from-[#8B6F47] to-[#6F5838] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
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
        title="Founder's Field Notes"
        description="Reflections from the field on independent hotel ownership, leadership challenges, and strategic decision-making. Grounded perspectives for executive leaders."
        url="https://heidistonehospitality.com/field-notes"
      />
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#E8DCC8] to-[#D4C5A9] relative overflow-hidden min-h-screen">
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-[#6F5838]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#8B6F47]/5 rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-[#6F5838]/5 rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="mb-8 relative">
            <div className="absolute inset-0 -mx-8 -my-8 opacity-[0.08] pointer-events-none"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B6F47' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundSize: '60px 60px'
                 }}
            />
            <div className="relative flex items-center justify-center gap-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#8B6F47]">
                Founder's Field Notes
              </h1>
              <img
                src="/Transl_Key_only.webp"
                alt="Decorative key divider"
                className="w-32 h-auto opacity-70"
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-3 text-left bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-[#8B6F47]/20 shadow-lg">
            <p className="text-lg text-[#2E2A26] leading-snug">
              Founder's Field Notes are reflections from the field—observations shaped by real conversations, boardroom discussions, conference calls, and the lived realities of independent hotel ownership. These notes are not trend forecasts or marketing commentary. They are grounded perspectives drawn from decades of operating, rebuilding, and stewarding independent hospitality assets through cycles of growth, disruption, and consolidation.
            </p>
            <p className="text-lg text-[#2E2A26] leading-snug">
              Founder's Field Notes are written for owners, presidents, and executive leaders who understand that independence is not maintained by instinct alone, but by disciplined decision-making and clarity of intent. The goal is not to offer quick fixes. These are not prescriptions. They are considerations—shared thoughtfully, with discretion, and with deep respect for the complexity of ownership.
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
              const flagship = posts.find(p => p.is_flagship);
              if (!flagship) return null;
              return (
                <>
                <div className="max-w-4xl mx-auto mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-5 h-5 text-[#8B6F47]" />
                    <span className="text-[#8B6F47] text-xs font-bold tracking-widest uppercase">Featured Conversation</span>
                    <div className="flex-1 h-px bg-[#8B6F47]/30" />
                  </div>
                  <div className="bg-gradient-to-br from-white to-[#F6F1E8] rounded-2xl border-2 border-[#8B6F47]/30 shadow-lg p-8 md:p-10">
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-[#1F2A44] rounded-lg mr-4 flex-shrink-0">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-montserrat font-semibold text-[#B87333] uppercase tracking-wider mb-1">
                          No Vacancy with Glenn Haussman
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#8B6F47] mb-3">
                          A Conversation with Glenn Haussman
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-[#2E2A26] leading-relaxed mb-6">
                      A wide-ranging conversation with Glenn Haussman about independent hospitality, leadership, reinvention, and what decades of operating hotels taught me about seeing possibility where others see limits.
                    </p>
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7493387600188289024/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#8B6F47] hover:bg-[#B87333] transition-colors text-white font-semibold px-6 py-3 rounded-lg"
                    >
                      <Video className="w-4 h-4" />
                      Watch the Conversation →
                    </a>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Anchor className="w-5 h-5 text-[#8B6F47]" />
                    <span className="text-[#8B6F47] text-xs font-bold tracking-widest uppercase">Flagship Perspective</span>
                    <div className="flex-1 h-px bg-[#8B6F47]/30" />
                  </div>
                  <article
                    className="relative bg-gradient-to-br from-[#2E2A26] to-[#3D3329] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-[#8B6F47]/40 hover:border-[#8B6F47]/70 transition-all hover:shadow-[0_20px_60px_rgba(139,111,71,0.25)]"
                    onClick={() => {
                      setSelectedPost(flagship);
                      navigate(`/field-notes/${flagship.slug}`);
                    }}
                  >
                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                      }}
                    />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B6F47]/40 to-transparent" />
                    <div className="relative p-8 lg:p-12">
                      <div className="flex items-start justify-between gap-6 mb-6">
                        <span className="bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#C9A96E] px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                          {flagship.category}
                        </span>
                        <div className="flex items-center gap-4 text-[#C9A96E]/60 text-sm shrink-0">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{formatDate(flagship.published_at)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{flagship.read_time} min</span>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8DCC8] mb-5 leading-tight group-hover:text-white transition-colors">
                        {flagship.title}
                      </h2>

                      <p className="text-lg text-[#C9A96E]/80 leading-relaxed mb-8 max-w-3xl">
                        {flagship.excerpt}
                      </p>

                      <div className="flex items-center gap-3 text-[#C9A96E] font-semibold group-hover:gap-5 transition-all">
                        <span>Read the Full Perspective</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </article>
                </div>
                </>
              );
            })()}

            {posts.filter(p => !p.is_flagship).length > 0 && (
              <div className="max-w-4xl mx-auto mb-6 flex items-center gap-3">
                <span className="text-[#8B6F47] text-xs font-bold tracking-widest uppercase">All Field Notes</span>
                <div className="flex-1 h-px bg-[#8B6F47]/30" />
              </div>
            )}

            <div className="max-w-4xl mx-auto space-y-6">
              {posts.filter(p => !p.is_flagship).map((post) => (
                <article
                  key={post.id}
                  className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border border-[#8B6F47]/30 hover:shadow-2xl hover:border-[#8B6F47]/50 transition-all cursor-pointer hover:scale-[1.02]"
                  onClick={() => {
                    setSelectedPost(post);
                    navigate(`/field-notes/${post.slug}`);
                  }}
                >
                  <div className="mb-4">
                    <span className={`${getCategoryColor(post.category)} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#8B6F47] mb-4 hover:text-[#6F5838] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xl text-[#2E2A26] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-[#2E2A26]/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.read_time} min</span>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-[#8B6F47] hover:text-[#6F5838] transition-colors font-medium">
                      Read More
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {testimonial && (
              <div className="max-w-4xl mx-auto mt-16">
                <div className="text-center mb-8">
                  <p className="text-[#8B6F47] text-xs font-semibold tracking-wider uppercase mb-2">
                    Featured Client Testimonial
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#8B6F47]">
                    What Industry Leaders Say
                  </h3>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-[#8B6F47]/30 shadow-2xl">
                  <Quote className="w-12 h-12 text-[#8B6F47] mb-6" />
                  <p className="text-lg md:text-xl text-[#2E2A26] leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-[#8B6F47]/20 pt-6">
                    <p className="font-bold text-[#1F2A44] text-lg">{testimonial.client_name}</p>
                    <p className="text-[#8B6F47] text-base font-medium">{testimonial.client_title}</p>
                    <p className="text-[#2E2A26]/70 text-base whitespace-pre-line">{testimonial.client_property}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
    </>
  );
}

export default FieldNotes;
