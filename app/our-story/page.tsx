import {Box, Flex} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {Footer} from "@/app/components/footer/Footer";
import {OurStoryHeader} from "@/app/components/our-story/Header";
import {Stats} from "@/app/components/our-story/Numbers";
import {JourneyTimeline} from "@/app/components/our-story/JourneyTimeLine";
import Gallery from "@/app/components/our-story/Gallery";
import SmoothScroll from "@/app/SmoothScroll";

const OurStoryPage = () => {
    return (
        <>
            <Navbar/>
            <SmoothScroll>
                <Flex direction="column" maxWidth={'100%'}>
                    <Box overflowY="auto">
                        <OurStoryHeader/>
                        <Stats/>
                        <JourneyTimeline/>
                        <Gallery/>
                        <Footer/>
                    </Box>
                </Flex>
            </SmoothScroll>
        </>

    );
};

export default OurStoryPage;