'use client'
import React, {useEffect, useRef} from "react";
import {Box, Flex, Text, Image, Heading, Link} from "@chakra-ui/react";
import OurStory from "@/app/assets/images/our-story-landing.png";
import OurStory2 from "@/app/assets/images/our-story-landing-2.png";
import OurStory3 from "@/app/assets/images/our-story-landing-3.png";
import {Btn} from "@/app/components/ui/Btn";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const OurStorySection = ({storyImg}: any) => {
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;
        const container = containerRef.current;

        ScrollTrigger.create({
            trigger: container,
            start: "top top", // Start pinning when the section reaches the top
            end: "bottom bottom", // Pin until all images scroll past
            pin: text, // Pin the text element
            pinSpacing: false, // Prevent additional spacing
            scrub: true, // Smooth scrolling
            // markers: true, // For debugging alignment
        });

        return () => ScrollTrigger.killAll(); // Cleanup on component unmount
    }, []);

    return (
        <Box p={[4, 8, 8]} mb={10} bg="white" ref={containerRef}>
            <Flex
                direction={{base: "column", md: "row"}}
                justifyContent="space-between"
                alignItems="center" // Align items at the top
                width="100%"
                mt={10}
                gap={40}
            >
                {/* Left Section: Pinned Text */}
                <Flex
                    flexDirection="column"
                    gap={6}
                    pr={{base: 0, md: 8}}
                    mb={{base: 4, md: 0}}
                    width={{base: "100%", md: "35%"}}
                    fontSize="18px"
                    ref={textRef} // Reference for pinning
                    alignSelf="center" // Align text at the start of the first image
                >
                    <Heading
                        fontSize={["4xl", "48px"]}
                        fontWeight="bold"
                        mb={2}
                        fontFamily="EB Garamond, serif"
                    >
                        Our Story
                    </Heading>
                    <Text mb={2} fontSize="18px">
                        Established in 1950 in the picturesque mountain village of Mtein, Lebanon, our family-owned
                        company has woven a narrative deeply rooted in the distillation of Arak, our national aniseed
                        spirit.
                    </Text>
                    <Text fontSize="18px">
                        Evolving over the years, we have expanded our craft to encompass a diverse spectrum of spirits,
                        wines, and more.
                    </Text>
                    <Flex w={["100%", "40%", "100%"]} mt={4}>
                        <Link _hover={{ textDecoration: "none" }} href={'/our-story'}>
                            <Btn size="md" variant="secondary" text="Discover our legacy"/>
                        </Link>
                    </Flex>
                </Flex>
                <Image
                    src={storyImg || OurStory.src}
                    alt="Our Story"
                    objectFit="cover"
                    width="800px"
                    height="800px"
                />
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Text></Text>
                <Flex flexDirection={"column"} gap={8} mt={8}>
                    <Image
                        src={storyImg || OurStory2.src}
                        alt="Our Story"
                        objectFit="cover"
                        width="800px"
                        height="800px"
                    />
                    <Image
                        src={storyImg || OurStory3.src}
                        alt="Our Story"
                        objectFit="cover"
                        width="800px"
                        height="800px"
                    />
                </Flex>

            </Flex>
        </Box>
    );
};
