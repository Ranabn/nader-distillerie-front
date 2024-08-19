// @ts-nocheck

'use client'
import {useRef, useEffect} from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {motion, useTransform, useScroll} from "framer-motion";

export const JourneyTimeline = ({timeline}) => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

    useEffect(() => {
        const updateHeight = () => {
            const scrollContainer = targetRef.current;
            if (scrollContainer) {
                const scrollContent = scrollContainer.firstChild;
                const scrollContentWidth = scrollContent.scrollWidth;
                const viewportWidth = window.innerWidth;
                const heightPercentage = (scrollContentWidth / viewportWidth) * 90;
                scrollContainer.style.setProperty('--scroll-height', `${heightPercentage}vh`);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [timeline]);

    return (
        <Box
            ref={targetRef}
            height="var(--scroll-height)"
            position="relative"
            sx={{
                '--scroll-height': '50vh',
                '& > div': {
                    position: 'sticky',
                    top: 300,
                }
            }}
        >
            <Flex>
                <motion.div
                    style={{x}}
                    className="flex gap-10 absolute top-1/2 -translate-y-1/2"
                >
                    <Flex minWidth="400px" fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold"
                          alignItems={'center'}>
                        A journey of growth, <br/> skill, and unwavering dedication
                    </Flex>
                    {timeline.map((item, index) => (
                        <Flex key={index} flexDirection="column" minWidth="300px">
                            <Box width={420} height={420} position="relative" overflow="hidden">
                                <Image
                                    src={item.imageUrl}
                                    alt="drawing"
                                    width="100%"
                                    height="100%"
                                    objectFit="cover"
                                    transition="transform 0.3s"
                                    _hover={{transform: "scale(1.1)"}}
                                />
                            </Box>
                            <Flex flexDirection="column" mt={2}>
                                <Text>{item.year}</Text>
                                <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold">{item.title}</Text>
                                <Text mt={2}>{item.description}</Text>
                            </Flex>
                        </Flex>
                    ))}
                </motion.div>
            </Flex>
        </Box>
    );
};
