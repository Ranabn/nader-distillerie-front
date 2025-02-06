// @ts-nocheck

'use client';
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chev from "@/app/assets/icons/chevronLeft.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const StickyImage = ({ imageUrls, imageAlts, brandName }) => {
    const ref = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % imageUrls.length
        );
    };

    useEffect(() => {
        const element = ref.current;
        const socialBrandsSection = document.getElementById("social-brands-section");

        if (!element || !socialBrandsSection) return;

        // Set up GSAP ScrollTrigger
        gsap.to(element, {
            y: 100,
            scrollTrigger: {
                trigger: element,
                start: "top top", // Element sticks at the top of the viewport
                endTrigger: socialBrandsSection,
                end: "bottom bottom", // Element un-sticks when socialBrandsSection reaches top
                pin: true, // Make element sticky
                scrub: true, // Smooth scrolling effect
                // markers: true,
            },
        });

        // Clean up on unmount
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <Box
            mt={6}
            ref={ref}
            position={["relative", "absolute"]}
            top="-4%"
            right="30px"
            h="calc(100vh - 100px)"
            w={["100%", "50%", "50%"]}
            zIndex={2}
        >
            <Flex
                color="white"
                flexDirection="column"
                alignItems="center"
                position="sticky"
            >
                <Box position="relative" mt={[0, 40, 24]} width="671px" height="671px" overflow="hidden">
                    <Image
                        src={imageUrls[currentImageIndex]}
                        alt={imageAlts[currentImageIndex] || `${brandName} image ${currentImageIndex + 1}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                            margin: "0 auto",
                        }}
                    />
                </Box>
                <Flex alignItems="center" justifyContent="center" width="100%" gap={14} mt={4}>
                    <Image
                        onClick={handlePrevImage}
                        w="2%"
                        src={Chev.src}
                        alt="Previous image"
                        cursor="pointer"
                    />
                    <Box textAlign="center">
                        <Text
                            color={["black", "white", "white"]}
                            width="100%"
                            fontSize={["28px", "4xl", "48px"]}
                            fontFamily="EB Garamond"
                            fontWeight="800"
                        >
                            {brandName}
                        </Text>
                        <Text
                            color={["black", "white", "white"]}
                            width="100%"
                            fontSize={["20px", "lg", "24px"]}
                        >
                            {imageAlts[currentImageIndex] || "No description available"}
                        </Text>
                    </Box>
                    <Image
                        style={{ transform: "rotate(180deg)" }}
                        w="2%"
                        onClick={handleNextImage}
                        src={Chev.src}
                        alt="Next image"
                        cursor="pointer"
                    />
                </Flex>
            </Flex>
        </Box>
    );
};
