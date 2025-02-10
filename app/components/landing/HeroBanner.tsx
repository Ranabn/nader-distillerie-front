// @ts-nocheck

'use client'
import Background from "@/app/assets/images/landing.jpg";
import {Box, Flex, Text, Button, Heading, Icon, Image, useBreakpointValue, Link} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import {FiChevronDown} from "react-icons/fi"; // Import the arrow down icon

export const HeroBanner = () => {
    const isSmallScreen = useBreakpointValue({base: true, md: false});

    return (
        <Flex
            justify="center"
            align="center"
            width="100vw"
            height="100vh"
            position="relative"
            overflow="hidden"
        >
            <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                height="100%"
                width="100%"
            >
                <Image
                    src={Background.src}
                    alt={"background"}
                    quality={100}
                    objectFit="cover"
                    objectPosition={{base: 'center', md: 'bottom'}}
                    width="100%"
                    height="100%"
                    transform="scale(1)"
                />
                <Box
                    display={["flex", "flex", "none"]}
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    bg="rgba(0, 0, 0, 0.3)" // Adjust the opacity as needed
                />

            </Box>

            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="blackAlpha.100"

            />
            <Flex
                position={["relative", "absolute"]}
                color="white"
                textAlign="left"
                zIndex={1}
                maxWidth="800px"
                left={["0", "2.3%", "2.3%"]}
                flexDirection='column'
                p={[4, 0, 0]}
                gap={[6, 0, 0]}
            >
                <Heading fontFamily={"EB Garamond"} fontSize={["28px", "5xl", "48px"]} fontWeight="bold" mb={[4, 6, 8]}
                         lineHeight={["44.8px", "1.3em", '1.3em']}
                         as={"h2"}>
                    Master distillers and <br/> fermenters
                    for four generations
                </Heading>
                <Text fontSize={["20px", "md", "24px"]} mb={[4, 6, 10]} lineHeight={['32px', '38.4px']}>
                    We harvest the finest gifts of nature in a bottle, offering you{isSmallScreen ? ' ' : <br/>} the
                    perfect glass to celebrate
                    life&apos;s special moments.
                </Text>
                <Link href={'/contact'} _hover={{textDecoration: "none"}} >
                    <Box width={["100%", "30%", "30%"]}>
                        <Btn size={'md'} text="WORK TOGETHER" variant="primaryWhite"/>
                    </Box>
                </Link>
            </Flex>
            <Box
                position="absolute"
                bottom="20px"
                color="white"
                zIndex={1}
                width="100%"
                textAlign="center"
            >
                <Text fontSize={["18px", "18px"]}> Scroll down
                </Text>
                <Icon
                    as={FiChevronDown as any}
                    w={6}
                    h={6}
                    animation="upDownFade 2s infinite"
                />
            </Box>
            <style jsx global>{`
                @keyframes upDownFade {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-10px);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </Flex>
    );
};
