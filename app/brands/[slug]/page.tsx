// @ts-nocheck

import {Flex, Box, Text, Link, Icon} from "@chakra-ui/react";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {Navbar} from "@/app/components/navigation/navbar";
import {SocialBrands} from "@/app/components/brands/Social";
import {ExploreMore} from "@/app/components/brands/Explore";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {Footer} from "@/app/components/footer/Footer";
import {StickyImage} from "@/app/components/brands/StickyImage";
import {sanityFetch} from '@/app/sanity/client';
import {HeaderBrands} from "@/app/components/brands/Header";
import {urlFor} from '@/app/sanity/urlFor';
import OurStory from "@/app/assets/images/our_story_brands.png";
import {StickyImageMobile} from "@/app/components/brands/StickyImageMobile";

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
  mainImage{asset->, alt},
  secondaryImage{asset->, alt},
  tertiaryImage{asset->, alt},
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

    const imageUrls = [
        brand.mainImage ? urlFor(brand.mainImage).url() : null,
        brand.secondaryImage ? urlFor(brand.secondaryImage).url() : null,
        brand.tertiaryImage ? urlFor(brand.tertiaryImage).url() : null,
    ].filter(Boolean);

    const imageAlts = [
        brand.mainImage ? brand.mainImage.alt : null,
        brand.secondaryImage ? brand.secondaryImage.alt : null,
        brand.tertiaryImage ? brand.tertiaryImage.alt : null,
    ];

    if (!brand) {
        return <div>Brand not found</div>;
    }

    const storyImg = OurStory.src;

    return (
        <>
            <Navbar brands={brands}/>

            <Flex mt={[16, 32, 32]} flexDirection="column" position="relative" overflowX={'hidden'}>
                <HeaderBrands brand={brand}/>
                <Box display={['none', 'none','none', 'flex']}>
                    <StickyImage
                        imageAlts={imageAlts}
                        imageUrls={imageUrls}
                        brandName={brand?.brand_name}
                    />
                </Box>
                <Box display={['flex', 'flex', 'flex', 'none']}>
                    <StickyImageMobile imageAlts={imageAlts}
                                       imageUrls={imageUrls}
                                       brandName={brand?.brand_name}/>
                </Box>

                {/* Pass social media links as props to SocialBrands */}
                <SocialBrands
                    quote={brand?.brand_quote_social_section}
                    description={brand?.brand_description_first_p_technical}
                    technicalSheetUrl={brand?.link_to_technical_sheet || ""}
                    brandWebsiteUrl={brand?.link_to_brand}
                    facebookUrl={brand.link_to_brand_facebook || ""}
                    instagramUrl={brand.link_to_brand_instagram || ""}
                    brandName={brand?.brand_name}
                />
                <ExploreMore brands={brands}/>
                <OurStorySection storyImg={storyImg}/>
            </Flex>
            <Footer brands={brands}/>
        </>
    );
};

export default BrandPage;
