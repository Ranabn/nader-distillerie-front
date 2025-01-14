// @ts-nocheck

'use client'
import React, { useRef } from "react";
import { Box, Image, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Gallery = ({ images }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", isSmallScreen ? "0%" : "-10%"]);

    return (
        <Box mt={["250px", 0]} ref={ref} position="relative" bg="white" p={[4, 8]}>
            <motion.div
                style={{ y }}
                initial={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3 }} // Define column count for different breakpoints
                    spacing={4} // Spacing between grid items
                >
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            height="300px" // Set a fixed height for the image container
                            position="relative"
                            overflow="hidden"
                        >
                            <Image
                                src={image.imageUrl}
                                alt={`Image ${index + 1}`}
                                objectFit="cover"
                                width="100%"
                                height="100%" // Ensure the image covers the entire container
                            />
                        </Box>
                    ))}
                </SimpleGrid>
            </motion.div>
        </Box>
    );
};

export default Gallery;
