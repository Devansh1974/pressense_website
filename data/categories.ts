import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "die-making-machines",
    name: "Die Making Machines & Consumables",
    shortDescription:
      "Precision corner rounders, creasing rules, punches, and heavy-duty tooling for packaging and die production.",
    description:
      "Engineered tooling and specialized machinery for post-press die making, carton manufacturing, and custom finishing operations. Built for high mechanical repeatability and exact edge tolerances.",
    image: "/images/categories/die-making-machines.png",
  },
  {
    id: "cat-2",
    slug: "digital-offset-finishing-machines",
    name: "Digital-Offset Finishing Machines",
    shortDescription:
      "Motorized round corner cutters, electric creasing units, and versatile bindery equipment for high-throughput finishing.",
    description:
      "High-performance finishing hardware designed for commercial pressrooms and digital quick-print production lines. Streamline trimming, scoring, and edge rounding with minimal setup times.",
    image: "/images/categories/digital-offset.jpg",
  },
  {
    id: "cat-3",
    slug: "offset-consumables-spare-parts",
    name: "Offset Consumables & Spare Parts",
    shortDescription:
      "Premium Conti-Air blankets, Saphira stripping blankets, Heidelberg replacement brushes, and pressroom essentials.",
    description:
      "Comprehensive inventory of genuine pressroom consumables engineered to ensure consistent dot reproduction, stable tensioning, and prolonged cylinder jacket life on leading commercial press systems.",
    image: "/images/categories/offset-consumables.png",
  },
  {
    id: "cat-4",
    slug: "paper-cutting-knives",
    name: "Paper Cutting Knives",
    shortDescription:
      "Hardened steel guillotine blades and trimmer knives compatible with Polar, Seypa, Kolbus, and Wohlenberg.",
    description:
      "Ultra-durable, precision-ground industrial cutting knives manufactured from high-grade tool steel and tungsten carbide. Engineered to maintain razor sharpness and eliminate paper drag over extensive cut cycles.",
    image: "/images/categories/paper-cutting-knives.png",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
