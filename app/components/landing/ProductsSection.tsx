'use client'
import React from "react";
import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi"; // Import the arrow right icon

import Spirits from "@/app/assets/images/products/spirits.png";
import Wines from "@/app/assets/images/wines.png";
import Vinegars from "@/app/assets/images/vinegars.png";
import Ethanol from "@/app/assets/images/products/ethanol.png";
import {keyframes} from "@emotion/react";

const products = [
    {
        name: "Spirits",
        description: "Accroche en une phrase ipsum dolor sit amet, consectetur adipiscing elit, urna sit fermentum est purus bibendum.",
        imgSrc: Spirits,
    },
    {
        name: "Wines",
        description: "Aged vinegars, red wine, white wine. A unique synthesis of foreign.",
        imgSrc: Wines,
    },
    {
        name: "Vinegars",
        description: "Specially produced to grade to enhance compatibility and character in every drop.",
        imgSrc: Vinegars,
    },
    {
        name: "Ethanol",
        description: "Specially produced to grade to enhance compatibility and character in every drop.",
        imgSrc: Ethanol,
    },
    // Add more products as needed
];
const lineAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

export const ProductsSection = () => (
    <Box p={[4, 8, 8]} bg={'white'}>
        <Flex alignItems="center" justifyContent="space-between" mb={2} alignContent={'center'}>
            <Heading fontSize="4xl" fontWeight="800" fontFamily="EB Garamond">
                Our Products
            </Heading>
            <Flex
                alignItems="center"
                gap={2}
                position="relative"
                _hover={{
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        height: "0.8px",
                        backgroundColor: "currentColor",
                        animation: `${lineAnimation} 0.3s forwards`
                    }
                }}
            >
                <Text fontSize="sm" _hover={{cursor: 'pointer'}}>See All Products</Text>
                <FiArrowRight/>
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
                    <Box
                        width="100%"
                        height={180}
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
                    <Text fontWeight="semi-bold" fontSize="xl">{product.name}</Text>
                    <Text fontSize="sm" color="gray.600">
                        {product.description}
                    </Text>
                </Flex>
            ))}
        </Flex>
    </Box>
);