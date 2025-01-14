'use client';

import React, {useEffect, useRef} from 'react';
import {Box, Flex, Text, Image, Heading, Link, useMediaQuery} from '@chakra-ui/react';
import OurStory from '@/app/assets/images/our-story-landing.png';
import OurStory2 from '@/app/assets/images/our-story-landing-2.png';
import OurStory3 from '@/app/assets/images/our-story-landing-3.png';
import {Btn} from '@/app/components/ui/Btn';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useParams, useRouter} from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export const OurStorySection = ({storyImg}: any) => {
    const textRef = useRef(null);
    const testRef = useRef(null);
    const containerRef = useRef(null);
    const imageContainerRef = useRef(null);
    const route = useRouter();
    const params = useParams();

    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if (isSmallScreen) return; // Skip GSAP animations on small screens

        const text = textRef.current;
        const container = containerRef.current;

        ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: 'bottom bottom',
            pin: text,
            pinSpacing: false,
            scrub: true,
        });

        return () => ScrollTrigger.killAll();
    }, [isSmallScreen]);


    return (
        <Box
             p={[4, 8, 8]} mb={[10, 10, 10]} mt={[20, 0, 0]} bg="white" ref={containerRef} color={'#000000'}
        >
            <Image
                display={[params.slug ? "flex" : "none", "none", "none"]}
                src={storyImg || OurStory.src}
                alt="Our Story"
                objectFit="cover"
                width={["325px", "800px", "800px"]}
                height={["200", "800px", "800px"]}
            />
            <Flex
                direction={{base: 'column', md: 'row'}}
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                mt={[4, 10, 10]}
                gap={4}
            >
                <Flex
                    flexDirection="column"
                    gap={6}
                    pr={{base: 0, md: 8}}
                    mb={{base: 4, md: 0}}
                    fontSize="18px"
                    ref={textRef}
                    alignSelf="center"
                >
                    <Heading
                        fontSize={['28px', '48px', '48px']}
                        fontWeight="bold"
                        mb={[0, 2, 2]}
                        fontFamily="EB Garamond, serif"
                    >
                        Our Story
                    </Heading>
                    <Text width={["100%", "460px", "460px"]}
                          mb={[-6, 2, 2]} fontSize={['16px', '18px', '18px']} lineHeight={['25px', '28px']}>
                        Established in 1950 in the picturesque mountain village of Mtein, Lebanon, our family-owned
                        company has woven a narrative deeply rooted in the distillation of Arak, our national aniseed
                        spirit.
                    </Text>
                    <Text width={["100%", "460px", "460px"]}
                          fontSize={['16px', '18px', '18px']} lineHeight={['25px', '28px']}>
                        Evolving over the years, we have expanded our craft to encompass a diverse spectrum of spirits,
                        wines, and more.
                    </Text>
                    <Box w={['100%', '40%', '40%']} mt={4}>
                        <Link _hover={{textDecoratiosn: 'none'}} href={'/our-story'}>
                            <Btn size="md" variant="secondary" text="Discover our legacy"/>
                        </Link>
                    </Box>
                    <Box width={'100vw'} height={'150px'} bg={'white'} position={'absolute'} bottom={'-420px'}></Box>
                </Flex>
                <Image
                    display={[params.slug ? "none" : "flex", "flex", "flex"]}
                    src={storyImg || OurStory.src}
                    alt="Our Story"
                    objectFit="cover"
                    width={["325px", "600px", "600px"]}
                    height={["325px", "600px", "600px"]}
                />
            </Flex>

            {!isSmallScreen && (
                <Flex justifyContent="space-between" ref={imageContainerRef}>
                    <Text></Text>

                    <Flex flexDirection="column" gap={8} mt={8}>
                        <Image
                            src={storyImg || OurStory2.src}
                            alt="Our Story"
                            objectFit="cover"
                            width="600px"
                            height="600px"
                        />
                        <Image
                            src={storyImg || OurStory3.src}
                            alt="Our Story"
                            objectFit="cover"
                            width="600px"
                            height="600px"
                        />
                    </Flex>

                </Flex>
            )}
        </Box>
    );
};