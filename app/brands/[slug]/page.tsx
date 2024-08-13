import {Flex, Box, Text} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {SocialBrands} from "@/app/components/brands/Social";
import {ExploreMore} from "@/app/components/brands/Explore";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {Footer} from "@/app/components/footer/Footer";
import {StickyImage} from "@/app/components/brands/StickyImage";
import {sanityFetch} from '@/app/sanity/client';
import {HeaderBrands} from "@/app/components/brands/Header";
import {urlFor} from '@/app/sanity/urlFor';
import SmoothScroll from "@/app/SmoothScroll"; // Import your helper function

type Brand = {
    brand_name: string;
    brand_quote: string;
    brand_description_first_p: string;
    brand_description_sec_p: string;
    link_to_brand_instagram: string;
    link_to_brand_facebook: string;
    brand_quote_social_section: string;
    brand_description_first_p_technical: string;
    link_to_technical_sheet?: string;
    link_to_brand: string;
    mainImage: any;
    secondaryImage: any;
    tertiaryImage: any;
    brand_short_desc: string;
    categories: { title: string }[];
};

type BrandFooter = {
    brand_name: string;
    slug: string;
    mainImage: string;
    categories: string[];
};

const BRAND_QUERY = `*[_type == "brands" && slug.current == $slug][0]{
  brand_name,
  brand_quote,
  brand_description_first_p,
  brand_description_sec_p,
  link_to_brand_instagram,
  link_to_brand_facebook,
  brand_quote_social_section,
  brand_description_first_p_technical,
  link_to_technical_sheet,
  link_to_brand,
  mainImage,
  secondaryImage,
  tertiaryImage,
  brand_short_desc,
  categories[]->{title},
}`;

const BRANDS_FOOTER = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;

const BrandPage = async ({params}: { params: { slug: string } }) => {
    const brand = await sanityFetch<Brand>({
        query: BRAND_QUERY,
        params: {slug: params.slug},
    });

    const brands = await sanityFetch<BrandFooter[]>({
        query: BRANDS_FOOTER,
    });

    // @ts-ignore
    const imageUrls = [
        brand.mainImage ? urlFor(brand.mainImage).url() : null,
        brand.secondaryImage ? urlFor(brand.secondaryImage).url() : null,
        brand.tertiaryImage ? urlFor(brand.tertiaryImage).url() : null,
    ].filter(Boolean);

    if (!brand) {
        return <div>Brand not found</div>;
    }

    return (
        <>
            <Navbar brands={brands}/>
            <SmoothScroll>
                <Flex mt={32} flexDirection="column" position="relative">
                    <HeaderBrands brand={brand}/>
                    <StickyImage imageUrls={imageUrls} brandName={brand?.brand_name}/>
                    <SocialBrands
                        quote={brand?.brand_quote_social_section}
                        description={brand?.brand_description_first_p_technical}
                        technicalSheetUrl={brand?.link_to_technical_sheet}
                        brandWebsiteUrl={brand?.link_to_brand}
                    />
                    {/* <ExploreMore brands={brand} /> */}
                    <OurStorySection/>
                </Flex>
                <Footer brands={brands}/>
            </SmoothScroll>
        </>
    );
};

export default BrandPage;
