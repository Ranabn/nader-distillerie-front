'use client';
import { Box, Flex, Text } from "@chakra-ui/react";
import { Navbar } from "@/app/components/navigation/navbar";
import Spirits from "../assets/images/Spirits.png";
import Wine from "../assets/images/wines.png";
import Vinegars from "../assets/images/vinegars.png";
import Eth from "../assets/images/ethanol.png";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import useLocomotiveScroll from '@/app/SmoothScroll';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";
import {Footer} from "@/app/components/footer/Footer";
import {OurStorySection} from "@/app/components/landing/OurStorySection";

const sections = [
    {
        id: 1,
        text: "Spirits",
        imageUrl: Spirits.src,
        description: "Description for Spirits"
    },
    {
        id: 2,
        text: "Wine",
        imageUrl: Wine.src,
        description: "Description for Wine"
    },
    {
        id: 3,
        text: "Vinegars",
        imageUrl: Vinegars.src,
        description: "Description for Vinegars"
    },
    {
        id: 4,
        text: "Ethanol",
        imageUrl: Eth.src,
        description: "Description for Ethanol"
    },
];

export default function Home() {
    // const { containerRef, scrollInstance } = useLocomotiveScroll();
    //
    // useEffect(() => {
    //     if (!scrollInstance) return;
    //
    //     const handleScroll = (args) => {
    //         const scrollY = args.scroll.y;
    //         // Apply parallax effect based on scroll position
    //         document.querySelectorAll('[data-parallax]').forEach((element) => {
    //             const speed = parseFloat(element.getAttribute('data-parallax'));
    //             element.style.transform = `translateY(${scrollY * speed}px)`;
    //         });
    //     };
    //
    //     scrollInstance.on('scroll', handleScroll);
    //     return () => {
    //         if (scrollInstance) {
    //             scrollInstance.off('scroll', handleScroll);
    //         }
    //     };
    // }, [scrollInstance]);

    return (
        <Box>
            <Navbar />
            <Box data-scroll-container >
                {sections.map((sec) => (
                    <Box
                        key={sec.id}
                        data-scroll-section
                        position="relative"
                        height="100vh"
                        width="100vw"
                        overflow="hidden"
                    >
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            position="sticky"
                            top={0}
                            height="100vh"
                            width="100vw"
                            overflow="hidden"
                            zIndex={1}
                        >
                            <motion.div
                                data-parallax="0.5" // Adjust the speed here
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden'
                                }}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: [1, 1, 1] }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            >
                                <Image
                                    src={sec.imageUrl}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={sec.text}
                                    priority
                                />
                            </motion.div>
                            <motion.div
                                data-parallax="0.2" // Adjust the speed here
                                style={{
                                    position: 'relative',
                                    textAlign: 'center',
                                    color: 'white',
                                    padding: '1rem',
                                    background: 'rgba(0, 0, 0, 1s)',
                                    borderRadius: '0.5rem',
                                    zIndex: 2
                                }}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            >
                                <Text
                                    fontWeight={800}
                                    fontFamily="EB Garamond"
                                    fontSize="4xl"
                                    mb={2}
                                >
                                    {sec.text}
                                </Text>
                                <Text fontSize="lg">
                                    {sec.description}
                                </Text>
                            </motion.div>
                        </Flex>
                    </Box>
                ))}
                <Box position="fixed" bottom="10px" width="100%" textAlign="center">
                    <ArrowDownIcon boxSize={6} color="white" />
                </Box>
            </Box>
            <OurStorySection/>
            <Footer/>
        </Box>
    );
}
