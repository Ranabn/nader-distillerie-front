import React from "react";
import {Flex, Box, Image} from "@chakra-ui/react";

export const Gallery = () => {
    // Array of image URLs for demonstration
    const images = [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
    ];

    return (
        <Flex wrap="wrap" gap={4} p={6} justify="center">
            {images.map((src, index) => (
                <Box key={index} w="30%" mb={4}>
                    <Image src={src} alt={`Image ${index + 1}`} objectFit="cover" width="100%"/>
                </Box>
            ))}
        </Flex>
    );
};

export default Gallery;
