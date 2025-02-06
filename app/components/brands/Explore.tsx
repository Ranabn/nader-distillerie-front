'use client'

import {Card, Flex, Text, CardBody, Image, Box, Link} from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";
import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {keyframes} from "@emotion/react";
import CustomBox from "@/app/components/ui/CustomBox";
type ExploreMoreItem = {
    title: string;
    description: string;
    imageUrl: string;
    alt: string;
    link: string;
};

const lineAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

export const ExploreMore = ({exploreMore}) => {
    const arrowRefExplore = useRef(null);
    useEffect(() => {
        if (arrowRefExplore.current) {
            gsap.set(arrowRefExplore.current, { opacity: 1, x: 0 }); // Ensure initial state
        }
    }, []);
    const handleMouseEnter = () => {
        if (arrowRefExplore.current) {
            gsap.to(arrowRefExplore.current, {
                x: 10,
                opacity: 0,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.fromTo(
                        arrowRefExplore.current,
                        {
                            x: -10,
                            opacity: 0,
                        },
                        {
                            x: 0,
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
        <Flex flexDirection="column" p={[4, 12, 8]} pt={4} pb={[6, 8, 16]}>
            {/*<CustomBox>*/}
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
                            zIndex={9999}
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
                            <Text  fontSize={["16px", "sm", "18px"]} _hover={{cursor: 'pointer'}}>See all brands</Text>
                        </Link>
                        <Box ref={arrowRefExplore}>
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

                {/* Desktop/Tablet View */}
                <Flex
                    flexDirection={["column", "row", "row"]}
                    display={["none", "flex", "flex"]}
                    justifyContent={'space-between'}
                >
                    {exploreMore.map((item, index) => (
                        <Card
                            border={["2px", "0px", "0px"]}
                            borderColor={["#224452"]}
                            key={index}
                            boxShadow="none"
                            borderRadius="none"
                            width={["100%", "33%", "453px"]}
                            height={["469px", "624px", "624px"]}
                        >
                            <CardBody>
                                <Flex
                                    flexDirection="column"
                                    height={"100%"}
                                    justifyContent="space-between"
                                    textAlign="center"
                                >
                                    <Flex flexDirection="column">
                                        <Text fontSize={["xl", "18px"]}>
                                            {item.description}
                                        </Text>
                                        <Text fontSize={["xl", "32px"]} fontFamily="EB Garamond" fontWeight="800">
                                            {item.title}
                                        </Text>
                                    </Flex>
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.alt}
                                        width={["350px", "500px"]} // Increased width
                                        height={["350px", "550px"]} // Increased height
                                        objectFit={['cover', 'contain']}
                                        aspectRatio={1}
                                    />
                                    <Flex></Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    ))}
                </Flex>

                {/* Mobile View */}
                <Flex
                    width="max-content"
                    gap={8}
                    flexDirection={["row", "row", "row"]}
                    display={["flex", "none", "none"]}
                >
                    {exploreMore.map((item, index) => (
                        <Card
                            border={["2px", "0px", "0px"]}
                            borderColor={["#224452"]}
                            key={index}
                            boxShadow="none"
                            borderRadius="none"
                            width={["300px", "33%", "453px"]}
                            height={["469px", "624px", "624px"]}
                        >
                            <CardBody>
                                <Flex
                                    flexDirection="column"
                                    height={"100%"}
                                    justifyContent="space-between"
                                    textAlign="center"
                                >
                                    <Flex flexDirection="column">
                                        <Text fontSize={["xl", "18px"]}>
                                            {item.description}
                                        </Text>
                                        <Text fontSize={["xl", "32px"]} fontFamily="EB Garamond" fontWeight="800">
                                            {item.title}
                                        </Text>
                                    </Flex>
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.alt}
                                        objectFit="contain"
                                        width="100%"
                                        maxHeight="500px" // Increased height
                                        aspectRatio={1}
                                    />
                                    <Flex></Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    ))}
                </Flex>

                {/* Mobile "See all brands" link */}
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
                        <Text fontSize={["16px", "sm", "18px"]} zIndex={9999} _hover={{cursor: 'pointer'}}>See all
                            brands</Text>
                    </Link>
                    <Box display={['flex', 'none', 'none']} pb={1}>
                        <FiArrowRight/>
                    </Box>
                </Flex>
            {/*</CustomBox>*/}
        </Flex>
    );
};
