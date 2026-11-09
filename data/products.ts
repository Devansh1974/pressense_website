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
      "/images/products/offset-feeder-brush-clean.jpg",
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
  {
    id: "prod-brochure-1",
    slug: "in-house-barred-printing-blankets",
    name: "In-House Barred Printing Blankets",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Precision-prepared printing blankets barred in our dedicated in-house facility. Economical China imports, Continental, UV, and Acoma options.",
    description:
      "Our in-house blanket baring facility allows us to prepare and finish blankets according to exact customer press dimensions, helping us maintain strict control over mechanical accuracy, tension consistency, and fast turnaround. Available in Economical Printing Blankets imported from China as a reliable, cost-effective option, Continental (Conti-Air) blankets, UV curing blankets, and Acoma solutions for Heidelberg, Mitsubishi, Ryobi, Sakurai, and Komori presses.",
    images: [
      "/images/products/conti-air-printing-blankets.png",
      "/images/products/saphira-blanket-pro-strippable.jpg",
      "/images/categories/offset-consumables.png",
    ],
    features: [
      "Custom prepared in our specialized In-House Blanket Baring Facility",
      "Economical Chinese blankets positioned as reliable, cost-effective option",
      "Continental (Conti-Air) blankets supplied to exact press specifications",
      "Dedicated UV printing blankets for UV ink curing and varnishing",
      "Acoma blanket options tailored to specific substrate requirements",
      "Guaranteed bar squareness, uniform clamping torque, and zero slippage",
    ],
    applications: [
      "Sheetfed commercial offset printing presses",
      "Packaging carton converters and folding board presses",
      "UV varnish and spot coating units",
      "High-speed publication and book work",
    ],
    specifications: {
      "Facility": "Press Sense In-House Blanket Baring Center",
      "Blanket Types": "China Economical, Continental, UV, Acoma",
      "Compatible Presses": "Heidelberg, Mitsubishi, Ryobi, Sakurai, Komori, KBA",
      "Thickness Range": "1.70 mm and 1.95 mm (4-ply compressible)",
      "Bar Materials": "Heavy-duty pre-drilled galvanized steel & aluminum",
      "Tolerances": "Calibrated thickness uniformity ±0.015 mm",
    },
    featured: true,
    badge: "In-House Baring Facility",
    modelCode: "PS-BLK-BAR",
  },
  {
    id: "prod-brochure-2",
    slug: "dic-printing-inks",
    name: "DIC Printing Inks",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Genuine DIC printing inks supplied for a wide range of commercial and packaging offset printing applications.",
    description:
      "We supply high-performance DIC printing inks selected for optimal pressroom runnability, vibrant color density, rapid oxidative setting, and dependable rub resistance. Suitable for high-speed multi-color sheetfed offset presses across paperboard, coated art stock, and uncoated paper.",
    images: [
      "/images/categories/offset-consumables.png",
      "/images/products/conti-air-printing-blankets.png",
    ],
    features: [
      "Official DIC printing inks for commercial and packaging applications",
      "High tinctorial strength and true dot fidelity",
      "Clean ink-water balance with minimal emulsification",
      "Excellent rub, scratch, and scuff resistance",
      "Available in 4-color process sets, Pantone matches, and metallic inks",
    ],
    applications: [
      "Folding cartons and FMCG packaging",
      "Commercial brochures, magazines, and marketing collaterals",
      "High-speed publication printing",
    ],
    specifications: {
      "Brand": "DIC",
      "Series": "Process CMYK & Specialized Color Inks",
      "Packaging": "1 kg, 2.5 kg, 20 kg vacuum sealed cans & drums",
      "Setting Time": "Ultra-fast oxidative setting on coated substrates",
      "Viscosity": "Controlled rheology for high-speed press runs",
    },
    featured: true,
    badge: "Authorized DIC Supply",
    modelCode: "PS-DIC-INK",
  },
  {
    id: "prod-brochure-3",
    slug: "boettcher-pressroom-chemicals",
    name: "Böttcher Pressroom Chemicals",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Böttcher pressroom chemicals supporting day-to-day printing requirements: washes, fountain solutions, and cleaners.",
    description:
      "Comprehensive range of Böttcher pressroom chemicals engineered to optimize printing press stability and maintain roller and blanket hygiene. From alcohol-reducing fountain solution additives to automatic blanket washes, calcium deglazers, and plate preservation cleaners.",
    images: [
      "/images/categories/offset-consumables.png",
      "/images/products/saphira-blanket-pro-strippable.jpg",
    ],
    features: [
      "Genuine Böttcher chemicals supporting daily printing operations",
      "Fountain solutions for alcohol-reduced and alcohol-free printing",
      "High-flashpoint automatic and manual blanket washes",
      "Calcium deglazing pastes for roller rejuvenation",
      "Non-abrasive plate cleaners and gumming solutions",
    ],
    applications: [
      "Daily press hygiene and scheduled preventative maintenance",
      "Commercial sheetfed offset and web presses",
      "Eliminating ink glazing and blanket piling",
    ],
    specifications: {
      "Brand": "Böttcher",
      "Product Line": "Fountain Additives, Blanket Washes, Deglazers",
      "Packaging Options": "5L, 25L, 200L industrial containers",
      "Flash Point": "FOGRA certified safety ratings",
    },
    featured: true,
    badge: "Böttcher Certified",
    modelCode: "PS-BOT-CHEM",
  },
  {
    id: "prod-brochure-4",
    slug: "anti-marking-film",
    name: "Non-Adhesive Anti-Marking Film",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Non-adhesive anti-marking film, imported from Japan and China, engineered for sheetfed transfer and delivery cylinders.",
    description:
      "Imported from leading manufacturers in Japan and China, our non-adhesive anti-marking films provide a microscopic glass-bead textured surface that eliminates fresh ink smear, marking, and static clinging on transfer drums and delivery cylinders.",
    images: [
      "/images/categories/offset-consumables.png",
      "/images/products/conti-air-printing-blankets.png",
    ],
    features: [
      "Imported directly from Japan and China for dependable performance",
      "Non-adhesive design for straightforward mechanical clamping",
      "Microscopic silicone-coated glass bead surface prevents ink adherence",
      "High wear resistance and easy cleaning with standard wash solutions",
      "Dramatically reduces sheet waste on two-sided printing jobs",
    ],
    applications: [
      "Transfer cylinders and delivery drums on sheetfed offset presses",
      "High-coverage commercial print work and packaging carton printing",
    ],
    specifications: {
      "Origin": "Imported from Japan & China",
      "Type": "Non-adhesive glass bead cylinder jacket film",
      "Roll Widths": "Available in custom press widths (up to 1250mm)",
      "Surface Property": "Oleophobic and antistatic treated",
    },
    featured: false,
    badge: "Imported Japan/China",
    modelCode: "PS-AMF-PRO",
  },
  {
    id: "prod-brochure-5",
    slug: "press-sense-creasing-matrix",
    name: "Press Sense Own-Brand Creasing Matrix",
    categorySlug: "die-making-machines",
    shortDescription:
      "Our own-brand creasing matrix is an imported product with strong market acceptance, offering a practical, competitively priced packaging solution.",
    description:
      "Press Sense proprietary own-brand creasing matrix is an imported product that has gained wide industry acceptance among folding carton manufacturers and packaging converters. Engineered for exceptional register accuracy, clean crease formation, and extended die-cutting tool life without delamination.",
    images: [
      "/images/categories/die-making-machines.png",
      "/images/products/paper-corner-rounder-cutter.png",
    ],
    features: [
      "Press Sense own-brand imported product with strong market acceptance",
      "Practical and competitively priced for carton packaging converters",
      "Micro-precise channel profiling ensures crisp folds without board cracking",
      "Engineered locator bridge guarantees accurate die-rule alignment",
      "Strong finger-lift adhesive backing ensures firm hold on cutting plates",
    ],
    applications: [
      "Folding carton die-cutting and creasing",
      "Corrugated board, fluted boxes, and luxury cosmetic cartons",
      "High-speed automatic platen die cutters and cylinder presses",
    ],
    specifications: {
      "Brand": "Press Sense (Own-Brand)",
      "Channel Profile": "Standard, Narrow, Off-Center, and Multi-Crease",
      "Base Material": "Engineered composite matrix with polymer locator",
      "Adhesive": "High-shear solvent-free finger-lift tape",
      "Packaging": "Standard boxes with matching locator strips",
    },
    featured: true,
    badge: "Own-Brand Market Leader",
    modelCode: "PS-MTX-PR",
  },
  {
    id: "prod-brochure-6",
    slug: "thermal-wet-dry-laminating-machines",
    name: "Thermal, Wet & Dry Laminating Machines",
    categorySlug: "digital-offset-finishing-machines",
    shortDescription:
      "Industrial thermal, wet and dry laminating machines supplied to printers in Chennai and nationwide, configured to format and volume.",
    description:
      "We supply high-efficiency thermal, wet, and dry laminating machines to commercial printers and packaging companies across India, including established installations in Chennai. Sourced and configured around your specific paper format, substrate thicknesses, production volume, and budget.",
    images: [
      "/images/categories/digital-offset.jpg",
      "/images/products/paper-creasing-perforating.png",
    ],
    features: [
      "Thermal (BOPP/thermal film), wet (water-based), and dry lamination modes",
      "Large-diameter mirror-finish hard chrome heated roller",
      "Pneumatic pressure system with sensitive pressure regulation",
      "Automatic sheet overlap feeder with precision flying-knife separator",
      "Supplied and serviced across Chennai, Delhi, and nationwide",
    ],
    applications: [
      "Book covers, catalogues, and luxury packaging cartons",
      "Thermal film gloss, matte, velvet soft-touch, and metallic finishes",
      "High-volume commercial print finishing",
    ],
    specifications: {
      "Working Widths": "520 mm / 720 mm / 920 mm / 1100 mm options",
      "Laminating Speed": "Up to 40–60 meters/min (volume dependent)",
      "Heating System": "Electromagnetic / oil-circulating precision roller",
      "Substrate Range": "100 gsm to 500 gsm paper and cardboard",
    },
    featured: true,
    badge: "Chennai & Pan-India Supply",
    modelCode: "PS-LAM-TD",
  },
  {
    id: "prod-brochure-7",
    slug: "rigid-box-making-machines",
    name: "Rigid Box Making Machines",
    categorySlug: "die-making-machines",
    shortDescription:
      "Automated and semi-automated rigid box making machinery for luxury packaging, gift boxes, and electronic device casings.",
    description:
      "Complete machinery solutions for high-end rigid-box production. Sourced around your production requirements, shop-floor space, and investment level. Includes corner pasting, grooving machines, automatic gluing, and visual position wrapping machines.",
    images: [
      "/images/categories/die-making-machines.png",
      "/images/products/paper-corner-rounder-cutter.png",
    ],
    features: [
      "Complete rigid box production lines (corner pasting, gluing & wrapping)",
      "High positioning precision with visual servo registration",
      "Seamless edge folding and air-bubble elimination rollers",
      "Quick job changeover for diverse luxury box dimensions",
      "New and pre-owned options sourced according to budget",
    ],
    applications: [
      "Smartphone and consumer electronic rigid boxes",
      "Luxury confectionery, perfume, and jewelry packaging",
      "Apparel gift boxes and hardcover book slipcases",
    ],
    specifications: {
      "Box Size Range": "Min: 80x60x15 mm | Max: 450x350x120 mm",
      "Production Speed": "15 to 25 boxes per minute",
      "Board Thickness": "1.0 mm to 3.5 mm greyboard",
      "Control": "Touchscreen PLC with servo drives",
    },
    featured: true,
    badge: "Packaging Machinery",
    modelCode: "PS-RBM-PRO",
  },
  {
    id: "prod-brochure-8",
    slug: "paper-bag-making-machines",
    name: "Paper Bag Making Machines",
    categorySlug: "die-making-machines",
    shortDescription:
      "Automated paper bag making machinery for retail carrier bags with square bottom, flat handle, and twisted handle configurations.",
    description:
      "Sourced around your production needs and capacity targets. We supply roll-fed and sheet-fed paper bag making machines capable of forming square-bottom grocery bags, luxury boutique retail bags, and takeaway food carriers with inline handle pasting.",
    images: [
      "/images/categories/die-making-machines.png",
      "/images/products/round-corner-cutting-machine.png",
    ],
    features: [
      "High-speed square-bottom paper bag forming with inline gluing",
      "Twisted handle and flat handle automatic attachment units",
      "Compatible with Kraft paper, white bleached paper, and recycled paper",
      "Application-led sourcing matched to required hourly output",
    ],
    applications: [
      "Retail fashion and shopping carrier bags",
      "Food delivery and bakery square-bottom grocery bags",
      "Eco-friendly corporate packaging",
    ],
    specifications: {
      "Feed Type": "Roll-fed / Sheet-fed options",
      "Paper Weight": "60 – 180 gsm Kraft paper",
      "Bag Width": "120 – 330 mm",
      "Speed": "Up to 150 – 220 bags/min (model dependent)",
    },
    featured: true,
    badge: "Eco-Packaging",
    modelCode: "PS-PBM-AUTO",
  },
  {
    id: "prod-brochure-9",
    slug: "pre-owned-offset-printing-machines",
    name: "Pre-Owned Printing Machines (Heidelberg, Mitsubishi, Ryobi, Sakurai)",
    categorySlug: "digital-offset-finishing-machines",
    shortDescription:
      "Internationally sourced pre-owned offset presses from established brands: Heidelberg, Mitsubishi, Ryobi, Sakurai.",
    description:
      "We source and supply printing machinery from international markets, specializing in pre-owned multi-color offset presses from established manufacturers such as Mitsubishi, Ryobi, Sakurai, and Heidelberg. Every machine is sourced around your format, production volume, and investment level with full technical verification.",
    images: [
      "/images/products/offset-feeder-brush-clean.jpg",
      "/images/products/kba-rapida-162a-6.jpg",
    ],
    features: [
      "Sourced directly from verified international printing markets",
      "Established brands: Heidelberg, Mitsubishi, Ryobi, Sakurai",
      "Mechanical and electronic inspection by experienced print engineers",
      "Tailored to production needs, available space, and investment budget",
      "Full installation assistance and spare parts backing",
    ],
    applications: [
      "Commercial sheetfed offset printing (2-color, 4-color, 5-color+)",
      "High-speed carton packaging production",
      "Publication, book, and brochure printing",
    ],
    specifications: {
      "Available Brands": "Heidelberg, Mitsubishi, Ryobi, Sakurai, Komori",
      "Format Sizes": "Quarter size, Half size, Full size (720mm, 1020mm)",
      "Color Configurations": "1 to 6 colors with coater units",
      "Service Support": "Pre-shipment inspection & in-house engineer setup",
    },
    featured: true,
    badge: "International Sourcing",
    modelCode: "PS-PREOWN-PRINT",
  },
  {
    id: "prod-brochure-10",
    slug: "automatic-paper-banding-machines",
    name: "Automatic Paper Banding Machines",
    categorySlug: "digital-offset-finishing-machines",
    shortDescription:
      "Automated paper and film banding machines for clean bundling of finished print materials, cartons, and labels.",
    description:
      "Automated bundling solutions designed for packaging and finished-product handling. Secures stacks of brochures, envelopes, pharmaceutical leaflets, banknotes, and folding cartons without marking delicate edges or creasing paper.",
    images: [
      "/images/categories/digital-offset.jpg",
      "/images/products/paper-creasing-perforating.png",
    ],
    features: [
      "Clean thermal weld sealing using paper tape or plastic film bands",
      "Tension adjustment from delicate touch to tight bundle hold",
      "Photo-eye sensor for automatic instantaneous cycle trigger",
      "Compact benchtop or stand-alone castor configurations",
    ],
    applications: [
      "Bundling folding cartons and blister card packaging",
      "Pharmaceutical leaflet and label bundle management",
      "Commercial bindery and mailing fulfillment",
    ],
    specifications: {
      "Arch Size": "420 x 200 mm (standard) / custom arches",
      "Tape Width": "20 mm / 30 mm kraft paper & BOPP film",
      "Cycle Speed": "Up to 25–30 bands per minute",
      "Operation": "Sensor, push button, or foot pedal",
    },
    featured: false,
    badge: "Bundling Solution",
    modelCode: "PS-BAND-AUTO",
  },
  {
    id: "prod-brochure-11",
    slug: "automatic-shrink-wrapping-machines",
    name: "Automatic Shrink Wrapping Machines",
    categorySlug: "digital-offset-finishing-machines",
    shortDescription:
      "High-speed automatic shrink wrapping machines and tunnels for finished print protection and transit bundling.",
    description:
      "Wrapping solutions engineered for packaging and finished-product handling. Combines automatic L-bar sealing with high-efficiency thermal shrink tunnels, delivering transparent, moisture-proof, and tamper-resistant protection for books, reams, and boxes.",
    images: [
      "/images/categories/digital-offset.jpg",
      "/images/products/round-corner-cutting-machine.png",
    ],
    features: [
      "Automatic infeed conveyor with optical product length sensing",
      "Continuous heat sealing with carbon fiber heating elements",
      "Even temperature air-circulation shrink tunnel for tight wraps",
      "Compatible with POF (polyolefin) and PE shrink films",
    ],
    applications: [
      "Book blocks, magazines, and multi-pack stationery wrapping",
      "Cosmetic packaging and retail display packs",
      "Moisture-proof warehouse storage and shipping protection",
    ],
    specifications: {
      "Sealing Dimensions": "500 x 400 mm / 600 x 500 mm options",
      "Max Package Height": "150 mm",
      "Speed": "15 – 35 packs/minute",
      "Tunnel Power": "Heavy-duty dual heating blowers",
    },
    featured: false,
    badge: "Post-Press Wrapping",
    modelCode: "PS-SHRINK-PRO",
  },
  {
    id: "prod-brochure-12",
    slug: "automatic-spiral-binding-machines",
    name: "Automatic Spiral Binding Machines",
    categorySlug: "digital-offset-finishing-machines",
    shortDescription:
      "High-production automatic spiral and double-loop wire binding machines for publishers and book producers.",
    description:
      "Engineered for publishers and book-production businesses requiring high-speed, consistent binding. Automates punching, wire inserting, and crimping for notebooks, desk calendars, diaries, and technical manuals.",
    images: [
      "/images/categories/digital-offset.jpg",
      "/images/products/paper-creasing-perforating.png",
    ],
    features: [
      "Automated book block feeding, punching, and spiral crimping",
      "Interchangeable punching dies for varied pitch ratios (3:1, 2:1)",
      "High consistency without manual wire feeding fatigue",
      "Essential for commercial notebook, calendar, and publishing lines",
    ],
    applications: [
      "School exercise books and spiral diaries",
      "Wall and desk calendar production",
      "Corporate reports, manuals, and flip charts",
    ],
    specifications: {
      "Binding Width": "Up to 520 mm",
      "Binding Thickness": "Up to 25 mm block height",
      "Speed": "Up to 1200 books/hour (operator dependent)",
      "Wire Sizes": "1/4 inch to 1-1/4 inch",
    },
    featured: false,
    badge: "Book Binding",
    modelCode: "PS-SPB-AUTO",
  },
  {
    id: "prod-brochure-13",
    slug: "spare-parts-service-support",
    name: "Spare Parts & In-House Engineer Support",
    categorySlug: "offset-consumables-spare-parts",
    shortDescription:
      "Comprehensive spare parts inventory and dedicated in-house service engineer support for troubleshooting and maintenance.",
    description:
      "Our relationship with customers continues beyond the sale. We supply genuine replacement spares for printing, packaging, and post-press machinery, backed by our dedicated in-house service engineers who provide on-site servicing, mechanical troubleshooting, calibration, and long-term preventative maintenance.",
    images: [
      "/images/categories/offset-consumables.png",
      "/images/products/conti-air-printing-blankets.png",
    ],
    features: [
      "Comprehensive supply of spares for printing, packaging & post-press equipment",
      "In-House Engineer for servicing, troubleshooting, and technical assistance",
      "Preventative maintenance support based on machine type and production hours",
      "Fast dispatch of critical wear components to minimize pressroom downtime",
      "Keeping your machinery running reliably throughout its working life",
    ],
    applications: [
      "Scheduled press servicing and cylinder alignment",
      "Emergency breakdown troubleshooting and board repairs",
      "Tooling replacement and mechanical refurbishing",
    ],
    specifications: {
      "Coverage": "Printing, packaging, cutting, and finishing machinery",
      "Support Team": "Factory-trained in-house service engineers",
      "Response Time": "Immediate WhatsApp and phone technical assistance",
      "Availability": "Spares stocked for immediate dispatch across India",
    },
    featured: true,
    badge: "In-House Service",
    modelCode: "PS-SPARE-SERV",
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
