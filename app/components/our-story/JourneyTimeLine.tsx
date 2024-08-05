'use client'
import { useRef, useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const JourneyTimeline = ({ timeline, onScrollProgress }) => {
    const containerRef = useRef(null);
    const [containerTop, setContainerTop] = useState(0);
    const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);
    const [hasReachedEnd, setHasReachedEnd] = useState(false);

    const timelineWidth = timeline.length * 350 + 1000; // 1000px for the initial text and extra space

    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 1000, damping: 100 });

    useEffect(() => {
        const updateContainerTop = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setContainerTop(rect.top + window.scrollY);
            }
        };

        updateContainerTop();
        window.addEventListener('resize', updateContainerTop);
        return () => window.removeEventListener('resize', updateContainerTop);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const containerRect = containerRef.current.getBoundingClientRect();

            if (scrollPosition >= containerTop && !hasReachedEnd) {
                setIsHorizontalScrolling(true);
                window.scrollTo(0, containerTop);
            } else {
                setIsHorizontalScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [containerTop, hasReachedEnd]);

    const handleWheel = (e) => {
        if (isHorizontalScrolling) {
            e.preventDefault();
            const newX = springX.get() - e.deltaY;
            const limitedX = Math.max(-(timelineWidth - window.innerWidth), Math.min(0, newX));
            x.set(limitedX);

            const progress = Math.abs(limitedX) / (timelineWidth - window.innerWidth);
            onScrollProgress(progress);

            if (progress >= 1 && !hasReachedEnd) {
                setHasReachedEnd(true);
                setIsHorizontalScrolling(false);
            }
        }
    };

    return (
        <Box
            ref={containerRef}
            height="100vh"
            overflow="hidden"
            position="relative"
            mt={24}
            onWheel={handleWheel}
        >
            <Flex
                as={motion.div}
                style={{ x: springX }}
                alignItems="center"
                height="100%"
                flexDirection="row"
            >
                <Flex
                    gap={20}
                    pl={8}
                    alignItems={'center'}
                    flexDirection="row"
                    width={`${timelineWidth}px`}
                >
                    <Box minWidth="400px" fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold">
                        A journey of growth, skill, and unwavering dedication
                    </Box>
                    {timeline.map((item, index) => (
                        <Flex key={index} gap={10}>
                            <Flex flexDirection="column" minWidth="300px">
                                <Box width={420} height={420}>
                                    <Image src={item.imageUrl} alt="drawing" width="100%" height="100%" objectFit="cover" />
                                </Box>
                                <Flex flexDirection="column">
                                    <Text mt={4}>{item.year}</Text>
                                    <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold">{item.title}</Text>
                                    <Text mt={4}>{item.description}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};