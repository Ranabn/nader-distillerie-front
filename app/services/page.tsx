import {Box, Flex} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {Footer} from "@/app/components/footer/Footer";
import ServicesSection from "@/app/components/landing/ServicesSection";
import {sanityFetch} from "@/app/sanity/client";
import SmoothScroll from "@/app/SmoothScroll";

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;
const OurServicePage = async () => {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    });
    return (
        <Flex flexDir='column'>
            <Navbar/>
            <SmoothScroll>
                <Box mt={16}>
                    <ServicesSection/>
                </Box>
                <Footer brands={brands}/>
            </SmoothScroll>
        </Flex>
    )
}

export default OurServicePage;