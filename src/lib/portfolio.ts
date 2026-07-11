import type { PortfolioCategory, PortfolioItem } from "@/lib/content-types";

export function filterPortfolioItems(
  items: PortfolioItem[],
  category: PortfolioCategory,
): PortfolioItem[] {
  const sorted = [...items].sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
  );
  if (category === "all") return sorted;
  return sorted.filter((item) => item.categories.includes(category));
}

export const portfolioFilters: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "french", label: "French" },
  { id: "gel", label: "Gel" },
  { id: "nail-art", label: "Nail Art" },
  { id: "short", label: "Short Nails" },
  { id: "long", label: "Long Nails" },
];
