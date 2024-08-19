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

    return (
        <>
            <Flex direction="column" maxWidth={'100%'} overflow={'hidden'} display={['none', 'flex']}>
                <JourneyTimeline
                    timeline={timelineWithImages}
                />
            </Flex>
            <Flex direction="column" overflow={'hidden'} display={['flex', 'none']}>
                <ResponsiveJourneyTimeline timeline={timelineWithImages}/>
            </Flex>
                <Gallery images={galleryWithImages}/>
                <Footer brands={brands}/> {/* Move the footer outside the Box */}

        </>
    );
};
