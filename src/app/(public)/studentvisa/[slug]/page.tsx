import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGraduationCap } from "react-icons/fa";

import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { regions, countryFaqs, type Region } from "@/data/student-visa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);
  if (!region) return {};
  return buildMetadata({
    title: `Study in ${region.name} — Student Visa Guide`,
    path: `/studentvisa/${slug}`,
    description: `Complete student visa guide for ${region.name}. ${region.desc}`,
    keywords: [`${region.name} student visa`, `study in ${region.name}`, `${region.name} study visa Pakistan`],
  });
}

export default async function CountryDetailPage({ params }: Props) {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);
  if (!region) notFound();

  const faqs = countryFaqs[region.name] ?? [];

  return (
    <div className="bg-[#0f1921] min-h-screen pt-8 md:pt-16 pb-16 md:pb-24 selection:bg-[#d0a850] selection:text-black">
      <JsonLd
        data={[
          serviceSchema({
            name: `Study in ${region.name} — Student Visa Service`,
            description: region.desc,
            path: `/studentvisa/${slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Student Visa", path: "/studentvisa" },
            { name: region.name, path: `/studentvisa/${slug}` },
          ]),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />
      <div className="container mx-auto px-4 md:px-6">
        {/* BREADCRUMB */}
        <div className="max-w-7xl mx-auto mb-8">
          <Link
            href="/studentvisa"
            className="inline-flex items-center gap-2 text-[#d0a850] text-sm font-semibold uppercase tracking-[0.2em] hover:text-white transition-colors no-underline group"
          >
            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
            Back to All Countries
          </Link>
        </div>

        {/* HERO */}
        <section className="min-h-[50vh] md:min-h-[60vh] flex items-center pb-12 md:pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">
                  Study in {region.name}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white heading-serif leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
                  {region.title}
                </h1>
              </div>
              <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                {region.desc}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                <Link
                  href="/contact"
                  className="bg-[#d0a850] text-[#0f1921] px-10 py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline shadow-2xl shadow-[#d0a850]/10"
                >
                  Free Consultation
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full relative flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-md lg:max-w-xl">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#d0a850] shadow-2xl">
                  <Image
                    src={region.img}
                    alt={region.name}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        {faqs.length > 0 && (
          <section className="py-16 md:py-24 border-t border-white/5 max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#d0a850] text-[11px] uppercase tracking-[0.4em] font-bold">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-bold heading-serif text-white mt-4 uppercase tracking-tight">
                Frequently Asked <span className="text-[#d0a850]">Questions</span>
              </h2>
              <p className="text-white/40 text-sm font-medium mt-4 max-w-xl mx-auto">
                Everything you need to know about studying in {region.name}
              </p>
            </div>
            <div className="space-y-4 px-4 md:px-0">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-white/10 bg-[#16222c]/40 px-6 py-5 transition-colors hover:border-[#d0a850]/30 open:border-[#d0a850]/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base md:text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 text-[#d0a850] text-2xl leading-none transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-gray-400 leading-[1.8] text-[15px] font-medium">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-24 border-t border-white/5 max-w-7xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[40px] p-8 md:p-24 text-center space-y-8 md:space-y-12">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#d0a850]/10 flex items-center justify-center text-[#d0a850] text-3xl">
                <FaGraduationCap />
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[#d0a850] text-[14px] md:text-sm font-bold uppercase tracking-[0.3em]">
                {region.name}
              </span>
              <h2 className="text-3xl md:text-7xl font-bold text-white heading-serif uppercase tracking-tight leading-tight">
                Ready to Start Your <span className="text-[#d0a850]">Journey?</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-white/40 font-medium max-w-2xl mx-auto">
              Let our expert consultants guide you through every step of your {region.name} student visa application.
            </p>
            <Link
              href="/contact"
              className="bg-[#d0a850] text-[#0f1921] px-10 md:px-12 py-4 rounded-full font-bold uppercase text-[14px] md:text-[14px] tracking-[0.2em] hover:bg-white hover:text-black transition-all no-underline inline-block shadow-2xl shadow-[#d0a850]/5"
            >
              Start Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
