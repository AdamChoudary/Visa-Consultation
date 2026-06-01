import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Adam Recommendation",
  path: "/adam-recommendation",
  description:
    "Crafting your journey to global success with precision and excellence. The definitive name in high-end visa and immigration solutions.",
});

export default function AdamRecommendationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
