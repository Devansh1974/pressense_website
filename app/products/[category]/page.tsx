import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Sparkles } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);
  if (!category) return {};

  return {
    title: `${category.name} | Press Sense`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Press Sense Catalogue`,
      description: category.shortDescription,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Products Catalogue", href: "/products" },
            { label: category.name },
          ]}
        />

        {/* Category Hero Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 my-6 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FA7533] to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-mono font-bold text-[#FA7533] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Category Division</span>
                <span>•</span>
                <span className="text-slate-800">
                  {categoryProducts.length}{" "}
                  {categoryProducts.length === 1 ? "Product Listed" : "Products Listed"}
                </span>
              </div>

              <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                {category.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-2xl">
                {category.description}
              </p>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Enquire About This Division</span>
                </a>
              </div>
            </div>

            {/* Category Hero Visual */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="my-10">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
            <div>
              <h2 className="font-heading font-bold text-xl text-slate-900">
                Available Machinery &amp; Tooling
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 font-mono">
                Standard and custom configurations available for this category
              </p>
            </div>
            <span className="text-xs font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs">
              {categoryProducts.length} Items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 2}
              />
            ))}
          </div>
        </div>

        {/* Other Categories Quick Navigation */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 my-12 shadow-xs">
          <h3 className="font-heading font-bold text-base text-slate-900 mb-4">
            Explore Other Product Divisions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/products/${c.slug}`}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FA7533] hover:bg-orange-50/20 transition-all group"
                >
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#FA7533] transition-colors">
                    {c.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-mono">
                    {c.shortDescription}
                  </p>
                </Link>
              ))}
          </div>
        </div>

        <WhatsAppCTA />
      </div>
    </div>
  );
}
