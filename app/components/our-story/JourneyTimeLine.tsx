'use client'
import {useRef, useEffect, useState} from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {motion, useScroll, useTransform} from "framer-motion";
import SmoothScroll from "@/app/SmoothScroll";

export const JourneyTimeline = ({timeline, x}) => {

    return (
        <Flex
            height="130vh"
            position="relative"
        >
            <Flex
                alignItems="center"
                height="100%"
                flexDirection="row"
            >
                <motion.div style={{x}}>

                    <Flex
                        gap={20}
                        pl={8}
                        alignItems={'center'}
                        flexDirection="row"
                    >

                        <Box minWidth="400px" fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold">
                            A journey of growth, skill, and unwavering dedication
                        </Box>
                        {timeline.map((item, index) => (

                            <Flex key={index} gap={10}>
                                <Flex flexDirection="column" minWidth="300px">
                                    <Box width={420} height={420}>
                                        <Image src={item.imageUrl} alt="drawing" width="100%" height="100%"
                                               objectFit="cover"/>
                                    </Box>
                                    <Flex flexDirection="column">
                                        <Text mt={4}>{item.year}</Text>
                                        <Text fontSize="4xl" fontFamily="EB Garamond"
                                              fontWeight="bold">{item.title}</Text>
                                        <Text mt={4}>{item.description}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))}

                    </Flex>

                </motion.div>

            </Flex>
        </Flex>
    );
};
