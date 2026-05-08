import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

function Possibilities() {
  return (
    <>
      <SEO
        title="The Possibility Assessment | Heidi Stone Hospitality"
        description="A focused advisory engagement for independent and experience-driven assets navigating complexity, reinvestment, or stalled performance."
      />

      {/* Hero */}
      <section className="min-h-[65vh] flex items-center bg-[#4A4540] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A4540] via-[#56504A] to-[#4A4540]" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-28 relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C4A882] font-semibold mb-3">
            Signature Advisory Engagement
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C4A882]/70 font-medium mb-8">
            The Possibility Assessment
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Seeing what others<br className="hidden md:block" /> no longer see.
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-px w-24 bg-[#C4A882]" />
          </div>
          <p className="text-xl md:text-2xl text-[#D4C5A9] font-light leading-relaxed max-w-2xl mx-auto">
            A focused advisory engagement for independent and experience-driven assets navigating complexity, reinvestment, or stalled performance.
          </p>
        </div>
      </section>

      {/* Opening premise */}
      <section className="py-20 bg-[#F6F1E8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#3A3530] leading-snug mb-8">
            Not every property lacking momentum is failing.
          </p>
          <div className="space-y-6 text-lg text-[#3A3530]/70 font-light leading-relaxed">
            <p>
              Many independent and experience-driven assets already possess the elements necessary for stronger performance—but the opportunities are no longer clearly visible from inside the organization.
            </p>
            <p>
              The Possibility Assessment was created to identify those opportunities and help clarify what a property is truly capable of becoming.
            </p>
          </div>
        </div>
      </section>

      {/* When owners engage */}
      <section className="py-20 bg-gradient-to-br from-[#EDE6D6] to-[#F6F1E8]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mb-4">When Owners Typically Engage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A3530] leading-tight mb-12">
            The moments that call for<br className="hidden md:block" /> a different perspective.
          </h2>
          <div className="space-y-4">
            {[
              'Performance has plateaued',
              'Reinvestment is being considered',
              'Leadership transition is underway',
              'The property no longer fully aligns operationally or strategically',
              'The asset feels more difficult than it should',
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-4 py-4 border-b border-[#8B6F47]/15 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] flex-shrink-0" />
                <p className="text-lg text-[#3A3530] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the engagement includes */}
      <section className="py-20 bg-[#4A4540] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-2xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C4A882] font-semibold mb-4">What the Engagement Includes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            A focused, on-site advisory engagement.
          </h2>
          <p className="text-[#D4C5A9] text-lg font-light leading-relaxed mb-2">
            The Possibility Assessment is designed to evaluate the property through multiple operational, strategic, experiential, and organizational lenses.
          </p>
          <p className="text-[#D4C5A9]/60 text-base font-light leading-relaxed mb-12">
            Each engagement is tailored to the individual property, its ownership structure, operational realities, and long-term objectives.
          </p>
          <div className="space-y-3">
            {[
              'On-site immersion and observation',
              'Conversations with ownership and leadership',
              'Operational and guest experience evaluation',
              'Positioning and market review',
              'Evaluation of identity, alignment, and organizational clarity',
              'Community and destination context assessment',
              'Strategic findings and prioritized recommendations',
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-4 bg-white/5 rounded-xl px-6 py-4 border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4A882] flex-shrink-0" />
                <p className="text-[#D4C5A9] text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes this different */}
      <section className="py-20 bg-[#F6F1E8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mb-4">What Makes This Different</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A3530] leading-tight mb-10">
            Not built around templates,<br className="hidden md:block" /> scorecards, or standardized models.
          </h2>
          <div className="space-y-6 text-lg text-[#3A3530]/70 font-light leading-relaxed">
            <p>
              The work is grounded in the belief that independent and experience-driven assets often require a different strategic lens—one rooted in leadership alignment, identity, operational clarity, and a deep understanding of place.
            </p>
            <p>
              Many properties are not underperforming because of a lack of effort.
            </p>
            <p className="text-[#3A3530] font-medium">
              They are underperforming because the full potential of the asset is no longer clearly visible from within the organization.
            </p>
            <p>
              The assessment is designed to help uncover those opportunities and create greater clarity around what the property is capable of becoming.
            </p>
          </div>
        </div>
      </section>

      {/* The outcome */}
      <section className="py-20 bg-gradient-to-br from-[#EDE6D6] to-[#F6F1E8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mb-4">The Outcome</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A3530] leading-tight mb-4">
            Not simply a report.
          </h2>
          <p className="text-lg text-[#3A3530]/70 font-light leading-relaxed mb-10">
            The engagement is designed to provide:
          </p>
          <div className="space-y-3 mb-12">
            {[
              'Clearer strategic direction',
              'Prioritized opportunities for growth and alignment',
              'Operational and organizational clarity',
              'Stronger positioning insight',
              "A more objective understanding of the property's potential",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] flex-shrink-0" />
                <p className="text-[#3A3530] text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="border border-[#8B6F47]/20 rounded-2xl px-10 py-8 bg-white/50">
            <p className="text-xl text-[#3A3530] font-light leading-relaxed italic">
              It is a more informed and aligned understanding of where opportunity exists—and what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#4A4540] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4C5A9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C4A882] font-semibold mb-6">Let's Talk</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Every engagement begins with a conversation.
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-px w-24 bg-[#C4A882]/50" />
          </div>
          <p className="text-lg text-[#D4C5A9] font-light leading-relaxed mb-10">
            If you are navigating complexity, reinvestment decisions, organizational transition, or a property that no longer feels fully aligned with its potential, we can begin there.
          </p>
          <Link
            to="/lets-talk"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-3 bg-[#8B6F47] hover:bg-[#7A6040] text-white text-sm font-semibold tracking-wide uppercase px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Possibilities;


export default Possibilities