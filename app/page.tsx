// pages/index.js or wherever your Home component is
import {Flex, Box, Text} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {HeroBanner} from "@/app/components/landing/HeroBanner";
import {BrandsSection} from "@/app/components/landing/BrandsSection";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {ProductsSection} from "@/app/components/landing/ProductsSection";
import ServiceSection from "@/app/components/landing/ServicesSection";
import {Footer} from "@/app/components/footer/Footer";
import SmoothScroll from "@/app/SmoothScroll";
import {sanityFetch} from '@/app/sanity/client';
import {LandingWrapper} from "@/app/components/ui/LandingWrapper";
import {urlFor} from "@/app/sanity/urlFor";


const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;
export default async function Home() {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    });
    const imageUrl = [
        brands.mainImage ? urlFor(brands.mainImage).url() : null,
    ].filter(Boolean);

    return (
        <>
            <Flex direction="column" maxWidth={'100%'}>
                <LandingWrapper/>

                <BrandsSection isLanding={true} brands={brands} imageUrl={imageUrl}/>
                <OurStorySection/>
                <ProductsSection/>
                <ServiceSection/>
                <Footer/>
            </Flex>
        </>
    );
}