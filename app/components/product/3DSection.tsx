// @ts-nocheck
'use client'


import {useEffect, useRef, useState} from 'react';
import {Box, Text} from "@chakra-ui/react";
import {motion, useViewportScroll} from "framer-motion";
import Image from "next/image";
import {ArrowDownIcon} from "@chakra-ui/icons";

// Custom hook to calculate font size
// @ts-ignore
const useFitText = (text) => {
    const [fontSize, setFontSize] = useState(100);
    const spanRef = useRef(null);

    useEffect(() => {
        const resizeText = () => {
            if (!spanRef.current) return;
// @ts-ignore
            const containerWidth = spanRef.current.offsetWidth;
            let low = 1;
            let high = 500;
            let mid;

            while (low <= high) {
                mid = Math.floor((low + high) / 2);
                spanRef.current.style.fontSize = `${mid}px`;
                if (spanRef.current.scrollWidth <= containerWidth) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }

            setFontSize(high);
        };

        resizeText();
        window.addEventListener('resize', resizeText);
        return () => window.removeEventListener('resize', resizeText);
    }, [text]);

    return {fontSize, spanRef};
};

export const Product3DSection = ({sections}: any) => {
    const {scrollY} = useViewportScroll();
    const [scrollYValue, setScrollYValue] = useState(0);
    const scrollRef = useRef();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrollYValue(latest);
        });
    }, [scrollY]);

    return (
        <Box ref={scrollRef as any} data-scroll-container>
            {sections.map((sec, index) => {
                const offset = index * window.innerHeight;
                const translateY = (scrollYValue - offset) * 0.2;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const {fontSize, spanRef} = useFitText(sec.text);

                return (
                    <Box
                        key={sec.id}
                        data-scroll-section
                        position="relative"
                        height="100vh"
                        width="100%"
                        overflow="hidden"
                    >
                        <Box
                            position="relative"
                            width="100%"
                            height="100%"
                        >
                            <Image
                                src={sec.imageUrl}
                                layout="fill"
                                objectFit="cover"
                                alt={sec.text}
                                priority
                            />
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                display="flex"
                                flexDirection="column"
                                justifyContent="flex-end"
                                alignItems="center"
                                padding="2rem"
                            >

                                <Text
                                    fontFamily="EB Garamond"
                                    ref={spanRef}
                                    fontSize={`${fontSize}px`}
                                    fontWeight="800"
                                    textAlign="center"
                                    width="100%"
                                    color="white"
                                    letterSpacing="wide"
                                    lineHeight="0.8"
                                    position="absolute"
                                    bottom="10%"
                                    left="0"
                                    right="0"
                                    whiteSpace="nowrap"
                                >
                                    {sec.text}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
            <Box position="fixed" bottom="10px" width="100%" textAlign="center">
                <ArrowDownIcon boxSize={{base: 4, md: 6}} color="white"/>
            </Box>
        </Box>
    );
}