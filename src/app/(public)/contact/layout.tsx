import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Contact Us",
  path: "/contact",
  description:
    "Get in touch with our expert visa consultants. Fill out our application form for professional guidance on your visa journey.",
  keywords: ["contact visa consultant", "visa consultancy contact", "immigration consultation"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
