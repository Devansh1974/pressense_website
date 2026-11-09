import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ProductDetailClient from "@/components/ProductDetailClient";

interface ProductPageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    product: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.product);
  if (!product) return {};

  const category = getCategoryBySlug(product.categorySlug);

  return {
    title: `${product.name} | Press Sense`,
    description: product.shortDescription,
    keywords: [
      product.name,
      category?.name || "",
      product.modelCode || "",
      "industrial machinery",
      "printing equipment",
      "Press Sense",
    ],
    openGraph: {
      title: `${product.name} | Press Sense Industrial Machinery`,
      description: product.shortDescription,
      images: product.images.map((img) => ({ url: img })),
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.product);

  if (!product || product.categorySlug !== resolvedParams.category) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);
  if (!category) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, category.slug, 3);

  // Schema.org Product structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => `https://pressense.com${img}`),
    description: product.shortDescription,
    sku: product.modelCode || product.slug,
    brand: {
      "@type": "Brand",
      name: "Press Sense",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "0",
      description: "Available upon inquiry via direct WhatsApp or quote request.",
      seller: {
        "@type": "Organization",
        name: "Press Sense",
      },
    },
  };

  return (
    <div className="bg-[#FAFBFB] text-slate-900 min-h-screen py-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Products Catalogue", href: "/products" },
            { label: category.name, href: `/products/${category.slug}` },
            { label: product.name },
          ]}
        />

        {/* Product Detail Interactive Content */}
        <div className="mt-4">
          <ProductDetailClient
            product={product}
            category={category}
            relatedProducts={relatedProducts}
          />
        </div>

        {/* Final WhatsApp CTA */}
        <WhatsAppCTA />
      </div>
    </div>
  );
}
