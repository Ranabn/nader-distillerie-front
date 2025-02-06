// @ts-nocheck

'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Box, Flex, Text, Image, Heading, Link, useMediaQuery} from '@chakra-ui/react';
import OurStory from '@/app/assets/images/our-story-landing.png';
import OurStory2 from '@/app/assets/images/our-story-landing-2.png';
import OurStory3 from '@/app/assets/images/our-story-landing-3.png';
import {Btn} from '@/app/components/ui/Btn';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useParams, usePathname} from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export const OurStorySection = ({storyImg}: any) => {
    const textRef = useRef(null);
    const testRef = useRef(null);
    const containerRef = useRef(null);
    const imageContainerRef = useRef(null);
    const pathname = usePathname();
    const params = useParams()
    const isBrandPage = pathname.includes('/brands');

    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const [isAbsoluteBars, setIsAbsoluteBars] = useState(false)

    useEffect(() => {
        setTimeout(() =>{
            setIsAbsoluteBars(true)
        }, 200)
    }, [isAbsoluteBars]);


    useEffect(() => {
        if (isSmallScreen) return; // Skip GSAP animations on small screens
        if (storyImg) return;

        const text = textRef.current;
        const container = containerRef.current;

        ScrollTrigger.create({
            trigger: container,
            start: "top-=200 top",
            end: 'bottom bottom',
            pin: text,
            pinSpacing: false,
            scrub: true,
        });

        return () => ScrollTrigger.killAll();
    }, [isSmallScreen]);


    return (

        <Box
            p={[4, 8, 8]} mb={[10, 10, 10]} mt={[16, 0, 20]} bg="white" ref={containerRef} color={'#000000'}

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
                width="100%"
                mt={[2, 10, 10]}
                gap={4}
                pb={4}
            >

                <Flex
                    flexDirection="column"
                    gap={[2, 2, 6]}
                    pr={{base: 0, md: 8}}
                    mb={{base: 4, md: 0}}
                    fontSize="18px"
                    ref={textRef}
                >

                    <Flex mt={20} flexDirection={'column'} justifyContent={'space-between'} gap={6}>
                        {!isBrandPage && (

                                <>
                                    <Box display={isAbsoluteBars ? "inline-block" : "none"} top={'-180px'} width={'100vw'} bg={'white'} position={'absolute'} height={'80px'}
                                    ></Box>
                                    <Box display={isAbsoluteBars ? "inline-block" : "none"} top={'600px'} width={'100vw'} bg={'white'} position={'absolute'} height={'520px'}
                                    ></Box>
                                </>

                        )}
                        <Heading
                            fontSize={['28px', '48px', '48px']}
                            fontWeight="bold"
                            mb={[0, 2, 2]}
                            fontFamily="EB Garamond, serif"
                        >
                            Our Story
                        </Heading>
                        <Text width={["100%", "460px", "460px"]}
                              mb={[4, 2, 2]} fontSize={['16px', '18px', '18px']} lineHeight={['25px', '28px']}>
                            Established in 1950 in the picturesque mountain village of Mtein, Lebanon, our
                            family-owned
                            company has woven a narrative deeply rooted in the distillation of Arak, our national
                            aniseed
                            spirit.
                        </Text>
                        <Text width={["100%", "460px", "460px"]}
                              fontSize={['16px', '18px', '18px']} lineHeight={['25px', '28px']}>
                            Evolving over the years, we have expanded our craft to encompass a diverse spectrum of
                            spirits,
                            wines, and more.
                        </Text>
                        <Box w={['100%', '40%', '40%']} mt={4}>
                            <Link _hover={{textDecoratiosn: 'none'}} href={'/our-story'}>
                                <Btn size="md" variant="secondary" text="Discover our legacy"/>
                            </Link>
                        </Box>
                        {!storyImg && (

                            <Box display={['none', 'none', 'inline']} width={'100vw'} height={'600px'} bg={'white'}
                                 position={'absolute'}
                                 bottom={'-500px'}></Box>)}
                    </Flex>
                </Flex>
                <Flex flexDir={'column'} gap={8}>
                    <Image
                        display={[params.slug ? "none" : "flex", "flex", "flex"]}
                        src={storyImg || OurStory.src}
                        alt="Our Story"
                        objectFit="cover"
                        width={["325px", "600px", "600px"]}
                        height={["325px", "600px", "600px"]}

                    />
                    {!isBrandPage && (
                        <>
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
                        </>
                    )}

                </Flex>
            </Flex>
            {!storyImg && (

                !isSmallScreen && (
                    <Flex justifyContent="space-between" ref={imageContainerRef}>

                        <Flex flexDirection="column" gap={8} mt={8}>

                        </Flex>
                    </Flex>
                )

            )}
        </Box>
    )
        ;
};