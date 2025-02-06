// @ts-nocheck

// app/products/page.tsx
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { sanityFetch } from "@/app/sanity/client";
import HomeProduct from "@/app/components/product/HomeProduct";

const BRANDS_QUERY = `*[_type == "brands"] {
    brand_name,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title
}`;

export default async function ProductsPage() {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    }) || [];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeProduct brands={brands} />
        </Suspense>
    );
}
