// @ts-nocheck

'use client';
import React, {useRef, useEffect} from "react";
import {Box, Flex, Heading, Link, Text} from "@chakra-ui/react";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";
import {keyframes} from "@emotion/react";
import {gsap} from "gsap";

import Spirits from "@/app/assets/images/products/spirits.png";
import Wines from "@/app/assets/images/wines.png";
import Vinegars from "@/app/assets/images/vinegars.png";
import Ethanol from "@/app/assets/images/products/ethanol.png";

const products = [
    {
        name: "Spirits",
        description: "Precision-crafted spirits: vodka, gin, whisky, arak, brandy. A legacy of excellence.",
        imgSrc: Spirits,
    },
    {
        name: "Wines",
        description: "Red, rosé, white wines: each a unique expression of its origin.\n",
        imgSrc: Wines,
    },
    {
        name: "Vinegars",
        description: "Sustainable apple cider and red wine vinegars: a tangy reflection of fresh fruits.",
        imgSrc: Vinegars,
    },
    {
        name: "Ethanol",
        description: "Industrial food-grade to grape ethanol: exceptional purity and character in every drop.",
        imgSrc: Ethanol,
    },
];

const lineAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

export const ProductsSection = () => {
    const arrowRefs = useRef(null);

    const handleMouseEnter = () => {
        console.log(arrowRefs.current); // Check if this logs the arrow element properly
        if (arrowRefs.current) {
            // First animation: move to the right and fade out
            gsap.to(arrowRefs.current, {
                x: 10, // Moves the arrow to the right
                opacity: 0,
                ease: "power1.inOut",
                onComplete: () => {
                    // Second animation: reset position and fade in from the left
                    gsap.fromTo(
                        arrowRefs.current,
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
        <Box p={[4, 8, 8]} bg={'white'}>
            <Flex alignItems="center" justifyContent="space-between" mb={4} alignContent={'center'}>
                <Heading fontSize={["28px", "48px", "48px"]} fontWeight="800" fontFamily="EB Garamond">
                    Our Products
                </Heading>
                <Flex
                    alignItems="center"
                    alignContent={'center'}
                    gap={2}
                    position="relative"
                    mt={[2, 0]} // Add spacing for smaller screens

                >
                    <Link
                        href={'/products'}
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
                        <Text fontSize={["16px", "sm", "18px"]} _hover={{cursor: 'pointer'}}>See all products</Text>
                    </Link>
                    <Box ref={arrowRefs}>
                        <FiArrowRight/>
                    </Box>
                </Flex>
            </Flex>

            <Flex
                wrap="wrap"
                gap={[4, 5, 6]}
                justify="space-between"
            >
                {products.map((product, index) => (

                    <Flex
                        key={index}
                        flexDir="column"
                        flexBasis={{base: "100%", md: "45%", lg: "23%"}}
                        mb={6}
                    >
                        <Link
                            href={`/brands?${product.name}=${product.name}`}>
                        <Box
                            width="342px"
                            height={"242.44px"}
                            mb={2}
                            overflow="hidden"
                            position="relative"
                        >

                                <Box
                                    width="100%"
                                    height="100%"
                                    transition="transform 0.3s ease-in-out"
                                    _hover={{
                                        transform: "scale(1.1)",
                                        cursor: 'pointer',
                                    }}
                                >

                                    <Image
                                        src={product.imgSrc}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </Box>
                        </Box>
                        <Text fontWeight="semi-bold" fontSize={["24px", "24px", "24px"]}
                              mt={2}>{product.name}</Text>
                        <Text fontSize={["16px", "sm", "18px"]} color="gray.600">
                            {product.description}
                        </Text>
                    </Link>

                    </Flex>
                    ))}
            </Flex>
        </Box>
    );
};