// @ts-nocheck

'use client'
import React, {useRef} from "react";
import {Flex, Box, Image} from "@chakra-ui/react";
import {motion, useScroll, useTransform} from "framer-motion";

export const Gallery = ({images}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <Box ref={ref} position="relative" overflow="visible" bg="white">
            <motion.div
                style={{y}}
                initial={{y: 0}}
                transition={{type: "spring", stiffness: 100}}
            >
                <Flex wrap="wrap" gap={4} justify="center" bg="white">
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            w="31%"
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
                                layout="fill" // Ensure image fits container dimensions
                            />
                        </Box>
                    ))}
                </Flex>
            </motion.div>
        </Box>
    );
};

export default Gallery;
