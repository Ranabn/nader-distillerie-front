// pages/index.js or wherever your Home component is
'use client'
import {Flex, Box} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {HeroBanner} from "@/app/components/landing/HeroBanner";
import {BrandsSection} from "@/app/components/landing/BrandsSection";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {ProductsSection} from "@/app/components/landing/ProductsSection";
import {useRef} from "react";
import ServiceSection from "@/app/components/landing/ServicesSection";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
    const ref = useRef(null);

    return (
        <Flex direction="column" maxWidth={'100%'}>
            <Navbar refer={ref}/>
            <Box ref={ref} id="brands-section">

                <HeroBanner/>
            </Box>

            <BrandsSection/>
            <OurStorySection/>
            <ProductsSection/>
            <ServiceSection />
            <Footer/>
        </Flex>
    );
}