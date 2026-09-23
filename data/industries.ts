import { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    id: "ind-1",
    slug: "commercial-printing",
    name: "Commercial Printing",
    tagline: "High-volume sheetfed & web pressroom reliability",
    description:
      "From high-definition art books to commercial brochures, our precision Conti-Air blankets, barred blankets for Heidelberg, Komori, Mitsubishi, and pressroom consumables ensure consistent solid coverage, true dot fidelity, and minimal downtime.",
    image: "/images/categories/offset-consumables.png",
    applicableCategories: [
      "offset-consumables-spare-parts",
      "paper-cutting-knives",
    ],
    keyEquipment: [
      "Conti-Air High-Performance Blankets",
      "Barred Blankets for Heidelberg, Komori & Mitsubishi",
      "Polar & Seypa High-Speed Guillotine Knives",
      "Conductive Static Roller Brushes",
    ],
  },
  {
    id: "ind-2",
    slug: "packaging-folding-carton",
    name: "Packaging & Folding Carton",
    tagline: "Rigid carton, corrugated board & spot varnishing",
    description:
      "Packaging converting demands heavy-duty tooling and flawless surface embellishment. We supply strippable blankets for spot coating, heavy guillotine blades for multi-ply board, and corner rounders engineered for rigid boxes and luxury packaging.",
    image: "/images/categories/die-making-machines.png",
    applicableCategories: [
      "die-making-machines",
      "offset-consumables-spare-parts",
      "paper-cutting-knives",
    ],
    keyEquipment: [
      "Saphira Blanket Pro Strippable for Spot UV",
      "Paper Corner Rounder & Cutter Tools",
      "KBA Rapida 162a Large-Format Blankets",
      "Heavy-Duty Ream Trimming Knives",
    ],
  },
  {
    id: "ind-3",
    slug: "publishing-bookbinding",
    name: "Publishing & Bookbinding",
    tagline: "Precision three-knife book squaring & case bindery",
    description:
      "High-speed publication lines require razor-sharp trimmer knives and durable creasing units that eliminate spine fracture. Our matched sets for Kolbus, Wohlenberg, and Muller Martini trimmers deliver smooth, square book blocks every run.",
    image: "/images/categories/paper-cutting-knives.png",
    applicableCategories: [
      "paper-cutting-knives",
      "digital-offset-finishing-machines",
      "die-making-machines",
    ],
    keyEquipment: [
      "Kolbus HD 140 Matched Three-Knife Sets",
      "Industrial 3-Knife Trimmer Blade Sets",
      "Paper Creasing & Perforating Units",
      "Manual and Motorized Corner Rounders",
    ],
  },
  {
    id: "ind-4",
    slug: "print-finishing-post-press",
    name: "Print Finishing & Post-Press",
    tagline: "High-throughput scoring, cornering & perforation",
    description:
      "Post-press operations make or break the finished job. Our semi-automatic motorized corner cutters, benchtop creasing machines, and specialized punches deliver rapid turnaround on short and medium run print jobs without toner cracking.",
    image: "/images/categories/digital-offset.jpg",
    applicableCategories: [
      "digital-offset-finishing-machines",
      "die-making-machines",
      "paper-cutting-knives",
    ],
    keyEquipment: [
      "Motorized Round Corner Cutting Machine",
      "Paper Creasing & Perforating Machine",
      "Paper Corner Rounder & Cutter",
      "Polar 115 Precision Guillotine Blades",
    ],
  },
  {
    id: "ind-5",
    slug: "industrial-production",
    name: "Industrial Production & Newspaper Web",
    tagline: "24/7 continuous web presses & high-cycle manufacturing",
    description:
      "Engineered for round-the-clock newspaper houses and industrial slitting facilities. We supply robust consumables and web blankets compatible with Man Roland Cromoman towers and high-speed coldset web press configurations.",
    image: "/images/products/man-roland-cromoman.jpg",
    applicableCategories: [
      "offset-consumables-spare-parts",
      "paper-cutting-knives",
    ],
    keyEquipment: [
      "Man Roland Cromoman Web Blankets",
      "High-Tensile Industrial Slitter Blades",
      "High-Resilience Packings & Cylinder Jackets",
    ],
  },
];
