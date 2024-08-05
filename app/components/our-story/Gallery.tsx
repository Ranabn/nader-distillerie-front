'use client'
import React from "react";
import {Flex, Box, Image} from "@chakra-ui/react";
import {motion} from "framer-motion";

export const Gallery = ({images, timelineProgress}) => {
    const y = `${-40 * timelineProgress}%`;

    return (
        <Box position="relative" overflow="visible" bg="white">
            <motion.div
                style={{y}}
                initial={{y: 0}}
                transition={{type: "spring", stiffness: 100}}
            >
                <Flex wrap="wrap" gap={4} justify="center" bg="white" pt={10} >
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            w="31%"
                            height="300px"
                            position="relative"
                            overflow="hidden"
                        >
                            <Image
                                src={image.imageUrl}
                                alt={`Image ${index + 1}`}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                layout="fill"
                            />
                        </Box>
                    ))}
                </Flex>
            </motion.div>
        </Box>
    );
};

export default Gallery;