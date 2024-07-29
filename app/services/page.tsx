import {Box, Flex} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {OurStorySection} from "@/app/components/landing/OurStorySection";
import {Footer} from "@/app/components/footer/Footer";
import ServicesSection from "@/app/components/landing/ServicesSection";

const OurServicePage = () => {

    return (
        <Flex flexDir='column'>
            <Navbar/>
            <Box mt={28}>
                <ServicesSection/>
            </Box>
            <Footer/>
        </Flex>
    )
}

export default OurServicePage;