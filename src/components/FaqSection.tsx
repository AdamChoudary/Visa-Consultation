/**
 * Accessible FAQ accordion. Server component — uses native <details>/<summary>
 * so it needs no client JavaScript and renders in the initial HTML (important
 * so the visible Q&A exactly matches the FAQPage JSON-LD on the same page).
 */
export interface Faq {
  question: string;
  answer: string;
}

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  if (!faqs?.length) return null;

  return (
    <section className="mt-20 md:mt-28">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-[#d0a850] text-[11px] uppercase tracking-[0.4em] font-bold text-center mb-3">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold heading-serif text-white text-center mb-10 md:mb-14">
          {title}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-white/10 bg-[#16222c]/40 px-6 py-5 transition-colors hover:border-[#d0a850]/30 open:border-[#d0a850]/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base md:text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="shrink-0 text-[#d0a850] text-2xl leading-none transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-400 leading-[1.8] text-[15px] font-medium">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
