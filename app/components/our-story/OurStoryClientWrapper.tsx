'use client'
import { useState } from 'react';
import { Box, Flex } from "@chakra-ui/react";
import { JourneyTimeline } from "@/app/components/our-story/JourneyTimeLine";
import Gallery from "@/app/components/our-story/Gallery";
import { Footer } from "@/app/components/footer/Footer";

export const OurStoryClientWrapper = ({ timelineWithImages, galleryWithImages, brands }) => {
    const [timelineProgress, setTimelineProgress] = useState(0);

    return (
        <>
            <Flex direction="column" maxWidth={'100%'}>
                <Box overflowY="auto">
                    <JourneyTimeline
                        timeline={timelineWithImages}
                        onScrollProgress={setTimelineProgress}
                    />
                </Box>
            </Flex>
            <Box position="relative">
                <Gallery images={galleryWithImages} timelineProgress={timelineProgress}/>
                <Box position="relative" mt={["-90vh", "-120vh", "-40vh"]}>
                    <Footer brands={brands}/>
                </Box>
            </Box>
        </>
    );
};

