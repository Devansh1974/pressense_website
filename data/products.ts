import { Product } from "@/lib/types";
import { categories } from "./categories";

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "paper-corner-rounder-cutter",
    name: "Paper Corner Rounder & Cutter",
    categorySlug: "die-making-machines",
    shortDescription:
      "Heavy-duty manual corner rounding machine with multi-radius interchangeable hardened dies for cardboard, plastics, and laminated documents.",
    description:
      "Engineered for print shops and packaging houses requiring precise corner profiles on book covers, playing cards, badges, and pouch cards. The high-leverage ergonomic handle operates smoothly through 30mm thick stacks with zero deflection, delivering clean, burr-free corner radii without tearing delicate print coatings.",
    images: [
      "/images/products/paper-corner-rounder-cutter.png",
      "/images/products/round-corner-cutting-machine.png",
      "/images/categories/die-making-machines.png",
    ],
    features: [
      "Precision-machined hardened tool steel cutting dies",
      "Interchangeable blade radiuses (R3.5, R6, R10 available)",
      "High-leverage cast alloy handle for effortless cut strokes",
      "Adjustable dual back-gauge stops for repetitive sheet registration",
      "Integrated waste chip collector tray",
      "Non-slip weighted base for secure benchtop placement",
    ],
    applications: [
      "Hardcover book casing corner treatment",
      "Cardboard games, packaging flaps, and business card rounding",
      "PVC identity badges and laminated menu finishing",
      "Point-of-Sale (POS) retail display cards",
    ],
    specifications: {
      "Max Cutting Stack Height": "30 mm (approx. 300 sheets 80gsm)",
      "Standard Radius Included": "R6 (6mm) & R10 (10mm)",
      "Optional Radii": "R3.5, R8, R13, Straight Flat 22mm",
      "Table Work Surface": "260 mm x 200 mm",
      "Operation Principle": "Manual progressive eccentric lever",
      "Machine Dimensions": "280 x 180 x 360 mm",
      "Net Weight": "8.5 kg",
    },
    featured: true,
    badge: "Popular Finishing Tool",
    modelCode: "PS-CR-30M",
  },
  {
    id: "prod-2",
    slug: "round-corner-cutting-machine",
    name: "Motorized Round Corner Cutting Machine",
    categorySlug: "digital-offset-finishing-machines",
    shortDescription:
      "High-throughput semi-automatic electric corner rounding machine featuring optical safety interlocks and foot-switch operation.",
    description:
      "Designed for busy commercial finishing facilities and binderies. The motorized electro-mechanical stroke cuts through a 50mm paper block in under 1.5 seconds. Controlled via an industrial ergonomic foot pedal, allowing the operator full two-handed control over stock alignment with automatic optical sheet clamping.",
    images: [
      "/images/products/round-corner-cutting-machine.png",
      "/images/products/paper-corner-rounder-cutter.png",
      "/images/categories/digital-offset.jpg",
    ],
    features: [
      "Motor-driven high-torque gear drive for quiet, vibration-free operation",
      "Hands-free electric foot switch trigger for maximum productivity",
      "Infrared optical sensor safety guard stops stroke instantly on obstruction",
      "Heavy-duty pneumatic or mechanical clamp automatically engages before blade enters stock",
      "Quick-change modular die holder system with micro-metric height adjustment",
      "Precision side guides with vernier scale alignment",
    ],
    applications: [
      "High-volume catalog and notebook corner trimming",
      "Heavy board packaging inserts and calendar finishing",
      "Polypropylene and synthetic substrate edging",
      "Commercial bindery contract work",
    ],
    specifications: {
      "Max Cutting Capacity": "50 mm stack height",
      "Stroke Speed": "30 – 35 cuts per minute",
      "Motor Rating": "0.75 kW, 220V Single Phase / 380V 3-Phase",
      "Die Radius Range": "R2 to R25 mm interchangeable",
      "Working Table Height": "820 mm (Ergonomic bench height)",
      "Machine Footprint": "520 mm x 420 mm x 680 mm",
      "Gross Weight": "65 kg",
    },
    featured: true,
    badge: "High Throughput",
    modelCode: "PS-ECR-50E",
  },
  {
    id: "prod-3",
    slug: "paper-creasing-perforating-machine",
    name: "Paper Creasing & Perforating Machine",
    categorySlug: "digital-offset-finishing-machines",
    shortDescription:
      "Multi-functional benchtop scoring, creasing, and perforating machine engineered to eliminate toner cracking on digital and offset stocks.",
    description:
      "Essential equipment for any modern print shop handling digital color prints or heavy cardstock. Produces crisp, deep micro-creases without cracking sensitive digital toner or offset varnishes along fold lines. Accommodates scoring, continuous perforation for tear-off coupons, and slit-scoring for kiss-cut applications.",
    images: [
      "/images/products/paper-creasing-perforating.png",
      "/images/categories/digital-offset.jpg",
      "/images/products/round-corner-cutting-machine.png",
    ],
    features: [
      "Dual tooling channel: creasing rule and rotary perforator bar",
      "Prevents substrate fracture and toner delamination on digitally printed cardstocks",
      "Magnetic repositionable paper guides with millimeter scales",
      "Sturdy alloy bed with anti-static surface treatment",
      "Variable crease depth adjustments to match 100gsm through 450gsm stocks",
      "Compact footprint suited for tight pressrooms and copy centers",
    ],
    applications: [
      "Digital greeting cards, wedding invitations, and flyers",
      "Booklet covers, report spines, and laminated fold-out brochures",
      "Perforated invoice books, raffle tickets, and tear-off vouchers",
      "Small-box carton protoypes and sample scoring",
    ],
    specifications: {
      "Maximum Feed Width": "460 mm (18.1 inches)",
      "Compatible Paper Weights": "80 gsm to 450 gsm",
      "Functions Supported": "Single Crease, Double Crease, Spine Crease, Tear-Off Perforation",
      "Perforation Teeth Pitch": "Standard 3:1 & 2:1 options",
      "Feed Mechanism": "Manual aligned feed with magnetic stops",
      "Dimensions": "600 x 500 x 280 mm",
      "Machine Weight": "34 kg",
    },
    featured: true,
    badge: "Digital Essential",
    modelCode: "PS-CPM-460",
  },
  {
    id: "prod-4",
    slug: "conti-air-printing-blankets",
    name: "Conti-Air High-Performance Printing Blankets",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Continental Conti-Air compressible offset blankets engineered for true 1:1 dot reproduction, minimum gauge loss, and outstanding smash resistance.",
    description:
      "Engineered by Continental ContiTech, Conti-Air printing blankets represent the world benchmark for offset lithography. Built with closed-cell compressible layers and precision-ground buffed elastomeric surfaces, they ensure immaculate ink split, sharp half-tone highlights, and instant recovery after accidental sheet jams or multi-sheet passes.",
    images: [
      "/images/products/conti-air-printing-blankets.png",
      "/images/products/saphira-blanket-pro-strippable.jpg",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Patented micro-cell compressible matrix provides superior smash recovery",
      "Ultra-fine ground surface texture ensures pinpoint dot fidelity and smooth solids",
      "High tensile modulus cotton-polyester fabric backing eliminates retensioning downtime",
      "High resistance to aggressive washing agents, UV inks, and fountain solutions",
      "Available in sheetfed, web offset, and UV-curable coating configurations",
      "Custom cut and pre-barred with factory aluminum or steel bars upon request",
    ],
    applications: [
      "High-speed sheetfed commercial offset printing (Heidelberg, Komori, KBA, Manroland)",
      "Folding carton and rigid packaging production with UV curable inks",
      "High-definition catalog, magazine, and art reproduction",
      "Continuous web commercial printing",
    ],
    specifications: {
      "Standard Gauges": "1.95 mm (0.077 in) & 1.70 mm (0.067 in)",
      "Surface Hardness": "78° Shore A ± 3°",
      "Surface Roughness (Ra)": "0.85 – 1.05 µm",
      "Tensile Strength": "> 4,500 N / 50mm",
      "Elongation at 500 N/5cm": "< 1.3%",
      "Compressibility at 100 N/cm²": "approx. 0.17 mm",
      "Color Coating": "Conti-Air Deep Blue / UV Black formulation",
    },
    featured: true,
    badge: "Continental Certified",
    modelCode: "CA-OFFSET-195",
  },
  {
    id: "prod-5",
    slug: "saphira-blanket-pro-strippable",
    name: "Saphira Blanket Pro Strippable",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Pre-engineered strippable coating blanket with dimensionally stable polyester backing for precision spot and flood UV varnishing.",
    description:
      "The Saphira Blanket Pro Strippable is formulated specifically for spot coating and varnishing units. The specially modified elastomer surface allows clean, razor-sharp manual or plotter cutting with effortless peel-back, leaving clean margins and crisp varnish boundaries without fibrous residue or tearing.",
    images: [
      "/images/products/saphira-blanket-pro-strippable.jpg",
      "/images/products/conti-air-printing-blankets.png",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Clean-strip top layer facilitates fast CAD plotter or hand cutting",
      "Dimensionally stable polyester reinforcement prevents stretching under cylinder tension",
      "Smooth transfer properties prevent orange peel texture in UV and water-based varnishes",
      "Compatible with all standard aqueous and solvent-free UV coating formulas",
      "Consistent thickness tolerance across entire blanket width",
    ],
    applications: [
      "Spot coating on luxury packaging and pharmaceutical cartons",
      "Gloss and matte selective varnish embellishment",
      "Book jacket and prestige catalog finishing",
    ],
    specifications: {
      "Nominal Gauge": "1.96 mm",
      "Peel Strength of Strippable Layer": "11 – 14 N / cm",
      "Cutting Depth": "Controlled 0.85 mm strip layer",
      "Backing Layer": "Reinforced polyester non-stretch base",
      "Compatible Coatings": "Water-based aqueous, UV, Soft-touch coatings",
      "Packaging Format": "Cut blankets with or without clamped bars",
    },
    featured: false,
    modelCode: "SPH-STRIP-230",
  },
  {
    id: "prod-6",
    slug: "polar-115-guillotine-knife",
    name: "Polar 115 High-Speed Guillotine Knife",
    categorySlug: "paper-cutting-knives",
    shortDescription:
      "Precision-machined industrial paper cutting blade manufactured from High-Speed Inlaid Steel (HPS) and Tungsten Carbide for Polar 115 cutters.",
    description:
      "Manufactured to exceed original equipment manufacturer tolerances, this guillotine knife for Polar 115 systems provides exceptional longevity and razor edge retention. The micro-lapped cutting edge minimizes dust generation and paper drag, ensuring square, uniform cuts through dense reams of newsprint, art paper, and rigid board.",
    images: [
      "/images/products/polar-115.png",
      "/images/products/seypa-115.png",
      "/images/products/kolbus-hd-140.png",
      "/images/categories/paper-cutting-knives.png",
    ],
    features: [
      "Factory precision hole pattern for Polar Mohr 115, 115 EMC, 115 XT, 115 ED",
      "Available in Standard High Speed Steel (18% Tungsten) or Tungsten Carbide inlaid edge",
      "Mirror-honed bevel angle engineered to prevent chipout on coated art papers",
      "High shock-absorbing backing steel absorbs violent cutting impact safely",
      "Corrosion-resistant protective rust prevention coating with safety wood sheath",
    ],
    applications: [
      "Polar Mohr 115 cm programmable high-speed cutters",
      "Large commercial ream trimming and publication bindery cutting",
      "Heavy cardboard and greyboard slitting",
    ],
    specifications: {
      "Overall Length": "1390 mm",
      "Knife Width": "160 mm",
      "Plate Thickness": "13.75 mm",
      "Hole Pattern": "24 Threaded Holes (Polar factory spec)",
      "Edge Metallurgy": "18% Tungsten HPS / Solid Tungsten Carbide",
      "Hardness": "62 – 64 HRC (HPS) / 91 HRA (Carbide)",
      "Standard Bevel Angle": "24° primary / 26° secondary double bevel",
    },
    featured: true,
    badge: "Polar Compatible",
    modelCode: "KN-POLAR-115",
  },
  {
    id: "prod-7",
    slug: "seypa-115-cutting-knife",
    name: "Seypa 115 Paper Cutting Knife",
    categorySlug: "paper-cutting-knives",
    shortDescription:
      "Heavy-duty replacement guillotine knife custom engineered for Seypa / Perfecta 115 paper cutters with prolonged edge sharpness.",
    description:
      "Specifically produced for Perfecta Seypa 115 paper cutters, featuring an optimized metallurgical balance between edge hardness and shock resistance. Engineered to withstand high continuous hydraulic loads on multi-shift cutting operations without chipping or micro-grooving.",
    images: [
      "/images/products/seypa-115.png",
      "/images/products/polar-115.png",
      "/images/categories/paper-cutting-knives.png",
    ],
    features: [
      "Exact OEM hole spacing and thread pitch for Seypa / Perfecta 115",
      "Uniform hardness throughout entire cutting zone prevents uneven wear dips",
      "Precision parallel ground to within ± 0.01 mm for flat, even blade seating",
      "Delivered in protective wooden storage crate with mounting bolts",
    ],
    applications: [
      "Seypa 115 and Perfecta 115 industrial paper guillotines",
      "High-volume book block trimming and paper conversion",
      "Plastics, vinyl sheeting, and calendar squaring",
    ],
    specifications: {
      "Blade Length": "1380 mm",
      "Blade Width": "140 mm",
      "Thickness": "12.0 mm",
      "Hole Configuration": "Seypa standardized pattern",
      "Hardness Range": "61 – 63 HRC",
      "Bevel Configuration": "23° primary single bevel with honed micro-facet",
    },
    featured: false,
    modelCode: "KN-SEYPA-115",
  },
  {
    id: "prod-8",
    slug: "kolbus-hd-140-trimmer-knives",
    name: "Kolbus HD 140 Three-Knife Trimmer Knives",
    categorySlug: "paper-cutting-knives",
    shortDescription:
      "Matched three-knife set (1 Front Knife + 2 Side Knives) for Kolbus HD 140 three-knife automatic book trimming lines.",
    description:
      "Set of precision-matched book trimmer knives engineered for Kolbus HD 140 and HD 150 automated hardcover bindery lines. Synchronized blade geometry ensures simultaneous, perpendicular cut faces on book heads, tails, and fore-edges with zero fraying of spine cloth or thread stitches.",
    images: [
      "/images/products/kolbus-hd-140.png",
      "/images/products/knives-overview.png",
      "/images/categories/paper-cutting-knives.png",
    ],
    features: [
      "Supplied as a fully balanced 3-piece set (Front + Head + Tail)",
      "High-chromium alloyed tool steel prevents dulling from bookbinding hot-melt adhesives",
      "Laser-etched identification codes and datum marks for rapid zero-positioning",
      "Proven performance on high-speed in-line casing systems",
    ],
    applications: [
      "Kolbus HD 140 / HD 150 automated three-knife trimmers",
      "Hardcover casing and softcover perfect-bound book production",
      "Diary, journal, and notebook manufacturing",
    ],
    specifications: {
      "Set Contents": "1 Front Knife + 2 Side (Head/Tail) Knives",
      "Front Knife Dimensions": "540 x 120 x 10 mm",
      "Side Knives Dimensions": "420 x 120 x 10 mm each",
      "Material Grade": "D2 Tool Steel / Premium Tungsten HPS",
      "Blade Hardness": "62 – 64 HRC",
    },
    featured: false,
    badge: "Matched Set",
    modelCode: "KN-KOLBUS-HD140",
  },
  {
    id: "prod-9",
    slug: "blanket-mitsubishi-diamond-3000r",
    name: "Blanket Mitsubishi Diamond 3000R",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Factory-barred and punched compressible offset blanket designed exclusively for Mitsubishi Diamond 3000 and 3000R presses.",
    description:
      "Custom configured with precision aluminum clamping bars and lock punches matching Mitsubishi Diamond 3000/3000R press cylinders. Ensures uniform radial tension without edge bowing, eliminating web drift and reducing makeready time between job changes.",
    images: [
      "/images/products/blanket-mitsubishi-diamond-3000r.webp",
      "/images/products/conti-air-printing-blankets.png",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Pre-installed factory aluminum lock bars riveted to exact Mitsubishi tolerances",
      "Four-ply composite fabric carcass with low elongation rate under high cylinder revs",
      "Formulated for alcohol-free and low-alcohol dampening chemistry",
      "Rapid smash recovery on heavyweight cartonboard stocks",
    ],
    applications: [
      "Mitsubishi Diamond 3000R sheetfed presses (B1 1020 x 720 mm)",
      "Commercial magazine inserts, brochures, and folding box packaging",
    ],
    specifications: {
      "Machine Fit": "Mitsubishi Diamond 3000 / 3000R Series",
      "Blanket Gauge": "1.95 mm ± 0.015 mm",
      "Bar Type": "Mitsubishi profile aluminum clamped bars",
      "Surface Color": "Sky Blue micro-buffed",
      "Ply Construction": "4-ply reinforced",
    },
    featured: false,
    modelCode: "BL-MITSU-3000R",
  },
  {
    id: "prod-10",
    slug: "blanket-komori-l28",
    name: "Blanket Komori Lithrone L28",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Pre-barred premium compressible blanket tailored for Komori Lithrone 28 (L28 / LS28) high-speed sheetfed presses.",
    description:
      "Manufactured to original Komori cylinder geometry. Provides exceptional solid density while retaining subtle 1% to 98% dot transitions on coated offset papers. Featuring heavy-duty riveted bar plates that seat effortlessly into Komori pneumatic clamp systems.",
    images: [
      "/images/products/blanket-komori-l28.webp",
      "/images/products/blanket-mitsubishi-diamond-3000r.webp",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Custom barred for Komori Lithrone 28 cylinder locks",
      "Engineered micro-porous face rubber absorbs surface imperfections without ghosting",
      "High chemical resistance to conventional and hybrid UV ink systems",
      "Long service life exceeding several million impressions under standard press maintenance",
    ],
    applications: [
      "Komori Lithrone L28 / LS28 / GL28 sheetfed offset presses",
      "High-speed commercial publishing and packaging",
    ],
    specifications: {
      "Target Machine": "Komori Lithrone L-28 series",
      "Overall Thickness": "1.90 mm",
      "Barring": "Factory fitted aluminum bars (front and rear)",
      "Layer Carcass": "Pre-stretched cotton/synthetic composite",
      "Surface Finish": "Non-directional micro-buffed",
    },
    featured: false,
    modelCode: "BL-KOMORI-L28",
  },
  {
    id: "prod-11",
    slug: "heidelberg-saphira-80c",
    name: "Rubber Plain Heidelberg Saphira 80C",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Heidelberg Saphira 80C precision-gauge blanket designed for Heidelberg GTO 52, Printmaster 52, and Speedmaster 52.",
    description:
      "The definitive pressroom standard for small-format commercial Heidelberg presses. Engineered with an 80° Shore A elastomer outer face that ensures sharp definition on fine typographics, security tint patterns, and crisp halftones without dot gain distortion.",
    images: [
      "/images/products/heidelberg-saphira-80c.webp",
      "/images/products/saphira-blanket-pro-strippable.jpg",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Heidelberg certified specification for SM 52, PM 52, and GTO 52 press cylinders",
      "High resilience rubber compound prevents permanent embossing from paper sheet edges",
      "Uniform thickness profile eliminates packing adjustment guesswork",
      "Excellent quick release of paper stock prevents wrap-arounds and tail-edge curl",
    ],
    applications: [
      "Heidelberg Speedmaster 52, Printmaster 52, GTO 52 units",
      "Stationery, envelopes, promotional brochures, and business documents",
    ],
    specifications: {
      "Compatible Equipment": "Heidelberg GTO-52 / PM-52 / SM-52",
      "Blanket Thickness": "1.90 mm",
      "Hardness": "80° Shore A",
      "Carcass Type": "3-ply reinforced fabric matrix",
      "Surface Finish": "Dark Blue smooth velvet",
    },
    featured: false,
    modelCode: "HD-SAPHIRA-80C",
  },
  {
    id: "prod-12",
    slug: "heidelberg-quickmaster-46di",
    name: "Heidelberg Quickmaster 46DI Plate & Roller Brushes",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "OEM replacement brush assemblies and static dissipation components for Heidelberg Quickmaster 46DI and Printmaster 46.",
    description:
      "Authentic spec brush units engineered to maintain optimal plate cleanliness and roller discharge on Heidelberg QM46 presses. Fabricated with conductive bristles that dissipate static buildup while picking up stray paper dust and ink mist before cylinder contamination occurs.",
    images: [
      "/images/products/heidelberg-quickmaster-46di.jpg",
      "/images/products/heidelberg-saphira-80c.webp",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Exact dimensional match for Heidelberg Quickmaster 46-2 and 46DI",
      "Conductive anti-static carbon fiber filament blend",
      "Corrosion-resistant structural composite mounting block",
      "Maintains clean imaging zone for direct digital imaging cylinders",
    ],
    applications: [
      "Heidelberg Quickmaster 46DI digital imaging offset press",
      "Heidelberg Printmaster QM 46-2 units",
    ],
    specifications: {
      "Press Model": "Quickmaster 46DI / Printmaster QM 46",
      "Mounting": "Direct screw fastener with locator pin",
      "Filament Material": "Natural bristle and carbon anti-static fibers",
      "Manufacturer Standard": "Heidelberg replacement specification",
    },
    featured: false,
    modelCode: "HD-QM46-BRUSH",
  },
  {
    id: "prod-13",
    slug: "man-roland-cromoman-press-unit",
    name: "Man Roland Cromoman Press Consumables & Blankets",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Heavy-duty web offset blankets, packing gauges, and consumable units engineered for continuous high-speed Man Roland Cromoman presses.",
    description:
      "Designed for newspaper publishers and high-speed coldset web pressrooms operating Man Roland Cromoman towers. Engineered to withstand continuous web speeds exceeding 70,000 copies per hour while maintaining tension equilibrium and minimal blanket heat generation.",
    images: [
      "/images/products/man-roland-cromoman.jpg",
      "/images/products/conti-air-printing-blankets.png",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Specially designed for web offset continuous newspaper lines",
      "Resists high web-break impacts without layer delamination",
      "Low heat buildup under round-the-clock continuous print operations",
      "Precision barred clamp profiles for rapid blanket cylinder changes",
    ],
    applications: [
      "Man Roland Cromoman double-width web offset newspaper presses",
      "High-circulation national daily publications and tabloid production",
    ],
    specifications: {
      "Machine Application": "Man Roland Cromoman Coldset Towers",
      "Web Speed Capability": "Up to 70,000 cph",
      "Blanket Gauge": "1.95 mm / 2.05 mm options",
      "Carcass": "High-modulus pre-stressed 4-ply carcass",
    },
    featured: false,
    modelCode: "MR-CROMOMAN-WEB",
  },
  {
    id: "prod-14",
    slug: "kba-rapida-162a-large-format",
    name: "KBA RAPIDA 162a-6 Consumables & Clamped Blankets",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Large-format sheetfed printing blankets and pressroom components for Koenig & Bauer KBA Rapida 162a-6 presses.",
    description:
      "Engineered for size 7 (1620 mm wide) large-format packaging and commercial presses. The vast cylinder width requires zero lateral elongation across the entire 1.6-meter span. These heavy-duty clamped blankets maintain razor dot accuracy across giant corrugated packaging sheets and poster print runs.",
    images: [
      "/images/products/kba-rapida-162a-6.jpg",
      "/images/products/conti-air-printing-blankets.png",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Engineered for KBA Rapida 162 and 162a large-format printing units",
      "Rigid stainless-steel tension bars eliminate center-sag on wide cylinders",
      "High ink release capability prevents paper curl on heavy solid coverage",
      "Certified for multi-color carton packaging applications",
    ],
    applications: [
      "KBA Rapida 162 / 162a 6-color presses with coater",
      "Corrugated litho-laminated boxes, displays, and jumbo posters",
    ],
    specifications: {
      "Press Format": "Format 7 / Size 1620 x 1200 mm",
      "Bar Length": "Full span factory steel barred",
      "Thickness Tolerance": "± 0.015 mm end-to-end",
      "Surface Quality": "High ink-transfer micro-buffed polymer",
    },
    featured: false,
    modelCode: "KBA-RAPIDA-162A",
  },
  {
    id: "prod-15",
    slug: "industrial-three-knife-trimmer-blades",
    name: "Industrial 3-Knife Trimmer Blade Sets",
    categorySlug: "paper-cutting-knives",
    shortDescription:
      "Tungsten carbide and HSS three-knife sets for Wohlenberg, Muller Martini, Horizon, and Kolbus automated bindery lines.",
    description:
      "Manufactured for heavy-duty automated three-knife trimmers used in softcover magazine lines and hardcover book manufacturing. Micro-honed cutting edges ensure glass-smooth book edges without frayed corners or spine glue smearing.",
    images: [
      "/images/products/knives-overview.png",
      "/images/products/polar-115.png",
      "/images/products/kolbus-hd-140.png",
      "/images/categories/paper-cutting-knives.png",
    ],
    features: [
      "Compatible sets for Wohlenberg, Muller Martini, Horizon, and Heidelberg trimmers",
      "Available in solid carbide and inlaid high-speed steel grades",
      "Precision-matched front and side knife bevel profiles",
      "Triple heat-treated to resist thermal stress from abrasive recycled stocks",
    ],
    applications: [
      "Commercial magazine saddle-stitching and perfect-binder three-knife trimming",
      "High-speed directory and telephone book manufacturing",
    ],
    specifications: {
      "Configurations Available": "Full sets (1 Fore-edge + 2 Head/Tail blades)",
      "Steel Grades": "HSS (18% W), Ultra-fine Tungsten Carbide Inlaid",
      "Parallelism": "Within 0.005 mm",
      "Edge Sharpness": "Razor mirror-buffed finish",
    },
    featured: true,
    badge: "Multi-Brand Trimmer Sets",
    modelCode: "KN-3KNIFE-SERIES",
  },
];

// Helper functions
export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductCountByCategory(categorySlug: string): number {
  return products.filter((p) => p.categorySlug === categorySlug).length;
}

export function getRelatedProducts(
  currentProductSlug: string,
  categorySlug: string,
  limit: number = 3
): Product[] {
  return products
    .filter((p) => p.categorySlug === categorySlug && p.slug !== currentProductSlug)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  if (!query || query.trim() === "") return [];
  const lower = query.toLowerCase().trim();
  return products.filter((p) => {
    return (
      p.name.toLowerCase().includes(lower) ||
      p.shortDescription.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.categorySlug.toLowerCase().includes(lower) ||
      p.features.some((f) => f.toLowerCase().includes(lower)) ||
      p.applications.some((a) => a.toLowerCase().includes(lower)) ||
      (p.modelCode && p.modelCode.toLowerCase().includes(lower)) ||
      Object.entries(p.specifications).some(
        ([k, v]) => k.toLowerCase().includes(lower) || v.toLowerCase().includes(lower)
      )
    );
  });
}
