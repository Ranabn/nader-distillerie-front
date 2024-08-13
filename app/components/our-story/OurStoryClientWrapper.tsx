// @ts-nocheck

'use client'
import {useState, useRef} from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {JourneyTimeline} from "@/app/components/our-story/JourneyTimeLine";
import Gallery from "@/app/components/our-story/Gallery";
import {Footer} from "@/app/components/footer/Footer";
import {motion, useScroll, useTransform, useMotionValue, useSpring} from "framer-motion";
import {ResponsiveJourneyTimeline} from "@/app/components/our-story/ResponsiveJourneyTimeline";

export const OurStoryClientWrapper = ({timelineWithImages, galleryWithImages, brands}) => {

    const targetRef = useRef(0)
    const {scrollYProgress} = useScroll({target: targetRef})
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"])

    return (
        <>
            <Flex ref={targetRef} direction="column" maxWidth={'100%'} overflow={'hidden'} display={['none', 'flex']}>
                <JourneyTimeline
                    x={x}
                    timeline={timelineWithImages}
                />
            </Flex>
            <Flex  direction="column"  overflow={'hidden'} display={['flex', 'none']}>
               <ResponsiveJourneyTimeline   timeline={timelineWithImages}/>
            </Flex>
            <Box position="relative">
                <Gallery images={galleryWithImages}/>

            </Box>

        </>
    );
};

