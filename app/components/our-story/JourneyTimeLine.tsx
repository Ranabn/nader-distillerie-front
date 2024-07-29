'use client'
import { useRef } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Drawing from "@/app/assets/images/drawing.png";

export const JourneyTimeline = () => {
    const containerRef = useRef(null);

    const timelineItems = [
        {
            year: "1950",
            title: "Family tradition begins",
            description: "Khalil Bou Nader starts distilling with his father in Mtein, continuing the family's artisan winemaking and arak distillation.",
        },
        {
            year: "1950",
            title: "Family tradition begins",
            description: "Khalil Bou Nader starts distilling with his father in Mtein, continuing the family's artisan winemaking and arak distillation.",
        },
        {
            year: "1950",
            title: "Family tradition begins",
            description: "Khalil Bou Nader starts distilling with his father in Mtein, continuing the family's artisan winemaking and arak distillation.",
        },
        {
            year: "1950",
            title: "Family tradition begins",
            description: "Khalil Bou Nader starts distilling with his father in Mtein, continuing the family's artisan winemaking and arak distillation.",
        },
        {
            year: "1950",
            title: "Family tradition begins",
            description: "Khalil Bou Nader starts distilling with his father in Mtein, continuing the family's artisan winemaking and arak distillation.",
        },
        // Additional timeline items...
    ];

    return (
        <Box
            ref={containerRef}
            height="100vh"
            overflow="hidden"
            position="relative"
        >
            <Flex
                as={motion.div}
                alignItems="center"
                height="100%"
                overflowX="auto"
                overflowY="hidden"
                flexDirection="row"
                drag="x" // Enable drag scrolling
                dragConstraints={{ left: -5000, right: 0 }} // Adjust constraints based on content width
            >
                <Flex
                    gap={20}
                    pl={12}
                    alignItems={'center'}
                    flexDirection="row"
                    minWidth={`${timelineItems.length * 350}px`} // Ensure enough width for items
                >
                    <Box minWidth="400px" fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold">
                        A journey of growth, skill, and unwavering dedication
                    </Box>
                    {timelineItems.map((item, index) => (
                        <Flex key={index} flexDirection="column" minWidth="300px">
                            <Box width={300}>
                                <Image src={Drawing.src} alt="drawing"/>
                            </Box>
                            <Flex flexDirection="column">
                                <Text mt={4}>{item.year}</Text>
                                <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold">{item.title}</Text>
                                <Text mt={4}>{item.description}</Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};
