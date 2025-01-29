// @ts-nocheck
'use client'

import {Card, Flex, Text, CardBody, Image, Box, Link} from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";
import React, {useRef} from "react";
import {gsap} from "gsap";
import {keyframes} from "@emotion/react";

interface Brand {
    category: string;
    name: string;
    imageSrc: string;
}

// Define the props type for the ExploreMore component
interface ExploreMoreProps {
    brands: Brand[];
}


const lineAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

// Define the ExploreMore component with typed props
export const ExploreMore = ({brands}: any) => {
    const arrowRef = useRef(null);

    const handleMouseEnter = () => {
        if (arrowRef.current) {
            // First animation: move to the right and fade out
            gsap.to(arrowRef.current, {
                x: 10, // Moves the arrow to the right
                opacity: 0,
                ease: "power1.inOut",
                onComplete: () => {
                    // Second animation: reset position and fade in from the left
                    gsap.fromTo(
                        arrowRef.current,
                        {
                            x: -10, // Start position (from the left)
                            opacity: 0,
                        },
                        {
                            x: 0, // Move to the initial position
                            opacity: 1,
                            duration: 0.6,
                            ease: "power1.inOut",
                        }
                    );
                },
            });
        }
    };
    return (
        <Flex flexDirection="column" p={[4, 12, 8]} pt={4} pb={[6, 8, 16]} backgroundColor="#F6F4ED">
            <Flex alignItems={'center'} alignContent={'center'} justifyContent={'space-between'} width={'100%'}>
                <Text mt={[4, 0, 0]} fontSize={["28px", "48px"]} fontFamily="EB Garamond" fontWeight="800">
                    Explore more brands
                </Text>
                <Flex
                    alignItems="center"
                    alignContent={'center'}
                    display={["none", "flex", "flex"]}
                    gap={2}
                    position="relative"
                    mt={[2, 0]}

                >
                    <Link
                        onMouseEnter={handleMouseEnter}

                        href={'/brands'}
                        _hover={{
                            textDecoration: "none",
                            _after: {
                                content: '""',
                                display: 'block',
                                width: '0',
                                height: '0.8px',
                                backgroundColor: 'currentColor',
                                animation: `${lineAnimation} 0.3s forwards`,
                            },
                            position: 'relative',
                            _before: {
                                content: '""',
                                position: 'absolute',
                                bottom: '-2px',
                                left: 0,
                                width: '100%',
                                height: '0.8px',
                                backgroundColor: 'transparent',
                            }
                        }}
                    >
                        <Text fontSize={["16px", "sm", "18px"]} _hover={{cursor: 'pointer'}}>See all brands</Text>
                    </Link>
                    <Box ref={arrowRef}>
                        <FiArrowRight/>
                    </Box>
                </Flex>
            </Flex>
            <Box
                backgroundColor="black"
                height="1px"
                width="100%"
                mb={10}
                mt={2}
            />
            <Flex
                flexDirection={["column", "row", "row"]} display={["none", "flex", "flex"]}
                justifyContent={'space-between'}>
                {/*@ts-ignore*/}
                {brands.slice(0, 3).map((brand, index) => ( // Limit to 3 items
                    <Card border={["2px", "0px", "0px"]} borderColor={["#224452"]} key={index} boxShadow="none"
                          borderRadius="none" width={["100%", "33%", "453px"]} height={["469px", "624px", "624px"]}>
                        <CardBody>
                            <Flex flexDirection="column" height={"100%"} justifyContent="space-between"
                                  textAlign="center">
                                <Flex flexDirection="column">
                                    {/*@ts-ignore*/}
                                    <Text
                                        fontSize={["xl", "18px"]}>{String(brand?.categories || '').toUpperCase()}</Text>
                                    <Text fontSize={["xl", "32px"]} fontFamily="EB Garamond" fontWeight="800">
                                        {brand.brand_name}
                                    </Text>
                                </Flex>
                                <Image
                                    src={brand.mainImage}
                                    alt={brand.name}
                                    width={["303px","453px"]}
                                    height={["303px","453px"]}
                                    objectFit={['cover', 'contain']}
                                    aspectRatio={1}
                                />
                                <Flex></Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </Flex>
            <Flex width="max-content" gap={8} flexDirection={["row", "row", "row"]} display={["flex", "none", "none"]}>
                {/*@ts-ignore*/}
                {brands.slice(0, 2).map((brand, index) => ( // Limit to 3 items
                    <Card border={["2px", "0px", "0px"]} borderColor={["#224452"]} key={index} boxShadow="none"
                          borderRadius="none" width={["300px", "33%", "453px"]} height={["469px", "624px", "624px"]}>
                        <CardBody>
                            <Flex flexDirection="column" height={"100%"} justifyContent="space-between"
                                  textAlign="center">
                                <Flex flexDirection="column">
                                    {/*@ts-ignore*/}
                                    <Text
                                        fontSize={["xl", "18px"]}>{String(brand?.categories || '').toUpperCase()}</Text>
                                    <Text fontSize={["xl", "32px"]} fontFamily="EB Garamond" fontWeight="800">
                                        {brand.brand_name}
                                    </Text>
                                </Flex>
                                <Image
                                    src={brand.mainImage}
                                    alt={brand.name}
                                    objectFit="contain"
                                    width="100%"
                                    maxHeight="400px"
                                    aspectRatio={1}
                                />
                                <Flex></Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}

            </Flex>
            <Flex
                alignItems="center"
                alignContent={'center'}
                gap={2}
                display={["flex", "none", "none"]}
                position="relative"
                mt={[10, 0]}
                justifyContent="flex-end"
                mb={[6, 0]}

            >
                <Link
                    href={'/brands'}
                    onMouseEnter={handleMouseEnter}
                    _hover={{
                        textDecoration: "none",
                        _after: {
                            content: '""',
                            display: 'block',
                            width: '0',
                            height: '0.8px',
                            backgroundColor: 'currentColor',
                            animation: `${lineAnimation} 0.3s forwards`,
                        },
                        position: 'relative',
                        _before: {
                            content: '""',
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '0.8px',
                            backgroundColor: 'transparent',
                        }
                    }}
                >
                    <Text fontSize={["16px", "sm", "18px"]} _hover={{cursor: 'pointer'}}>See all brands</Text>
                </Link>
                <Box display={['flex', 'none', 'none']} pb={1} ref={arrowRef}>
                    <FiArrowRight/>
                </Box>
            </Flex>
        </Flex>
    );
};
