import {Navbar} from "@/app/components/navigation/navbar";
import {BrandsSection} from "@/app/components/landing/BrandsSection";
import {Footer} from "@/app/components/footer/Footer";
import {Box, Flex} from "@chakra-ui/react";
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";
import {sanityFetch} from "@/app/sanity/client";
import {urlFor} from "@/app/sanity/urlFor";
const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;
const BrandsPage = async () => {

    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    });
    const imageUrl = [
        brands.mainImage ? urlFor(brands.mainImage).url() : null,
    ].filter(Boolean);

    return (

        <Flex flexDir='column'>
            <Navbar/>
            <Box mt={28}>
                <BrandsSection isLanding={false} brands={brands} imageUrl={imageUrl}/>
            </Box>
            <ExternalBox/>
            <Footer/>
        </Flex>
    )
}

export default BrandsPage;