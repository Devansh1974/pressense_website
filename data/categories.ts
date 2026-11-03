import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "die-making-machines",
    name: "Packaging Machinery & Consumables",
    shortDescription:
      "Rigid box making machines, paper bag makers, Press Sense own-brand creasing matrix, and precision die cutters.",
    description:
      "Comprehensive packaging manufacturing equipment and consumables. Solutions include automated rigid box machines, paper bag makers, and our proprietary imported creasing matrix offering strong market acceptance and competitive value.",
    image: "/images/categories/die-making-machines.png",
  },
  {
    id: "cat-2",
    slug: "digital-offset-finishing-machines",
    name: "Pre-Press & Post-Press Finishing",
    shortDescription:
      "Thermal laminating machines, automatic paper banding, shrink wrapping, spiral binding, and electric corner cutters.",
    description:
      "High-performance pre-press and post-press finishing solutions for publishers, converters, and commercial binderies. Streamline thermal laminating, scoring, bundling, and shrink wrapping with dependable production throughput.",
    image: "/images/categories/digital-offset.jpg",
  },
  {
    id: "cat-3",
    slug: "offset-consumables-spare-parts",
    name: "Printing Consumables & Blankets",
    shortDescription:
      "DIC printing inks, Böttcher pressroom chemicals, in-house barred printing blankets, and anti-marking films.",
    description:
      "Selected for performance, application, and value. Featuring our in-house blanket baring facility for custom finished blankets (China Economical, Continental, UV, Acoma), genuine DIC inks, and Böttcher pressroom chemistry.",
    image: "/images/categories/offset-consumables.png",
  },
  {
    id: "cat-4",
    slug: "paper-cutting-knives",
    name: "Paper Cutting Machines & Knives",
    shortDescription:
      "New & pre-owned industrial guillotines, plus precision tool steel and tungsten carbide knives for Polar, Seypa & Kolbus.",
    description:
      "Industrial paper cutting machinery sourced according to format and budget, accompanied by ultra-durable, precision-ground guillotine blades and 3-knife trimmer sets engineered to eliminate paper drag.",
    image: "/images/categories/paper-cutting-knives.png",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
