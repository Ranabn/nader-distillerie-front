import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Import the arrow right icon

import Spirits from "@/app/assets/images/Spirits.png";
import Wines from "@/app/assets/images/wines.png";
import Vinegars from "@/app/assets/images/vinegars.png";
import Ethanol from "@/app/assets/images/ethanol.png";

const products = [
    {
        name: "Spirits",
        description: "Includes crafted spirits: vodka, gin, whisky, arak, brandy. A legacy of excellence.",
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

export const ProductsSection = () => (
    <Box my={16} p={12}>
        <Flex alignItems="center" justifyContent="space-between" mb={12}>
            <Heading fontSize="4xl" fontWeight="bold" fontFamily="EB Garamond">
                Our Products
            </Heading>
            <Flex alignItems="center" gap={4}>
                <Text fontSize="sm">See All Products</Text>
                <FiArrowRight />
            </Flex>
        </Flex>

        <Flex
            wrap="wrap"
            gap={6} // Space between product items
            justify="space-between"
        >
            {products.map((product, index) => (
                <Flex
                    key={index}
                    flexDir="column"
                    flexBasis={{ base: "100%", md: "45%", lg: "23%" }} // Adjust flex basis for responsive design
                    mb={6}
                >
                    <Box
                        width="100%"
                        height={180}
                        mb={2}
                        overflow="hidden" // Ensures images do not overflow their container
                        position="relative" // Required for the Image component's layout
                    >
                        <Image
                            src={product.imgSrc}
                            alt={product.name}
                            layout="fill" // Ensures image fills the container
                            objectFit="cover"
                        />
                    </Box>
                    <Text fontWeight="bold" >{product.name}</Text>
                    <Text fontSize="sm" color="gray.600" >
                        {product.description}
                    </Text>
                </Flex>
            ))}
        </Flex>
    </Box>
);
