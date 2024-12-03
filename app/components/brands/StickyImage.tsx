'use client'
import {Box, Text, Flex, IconButton, Image} from "@chakra-ui/react";
import {useEffect, useState, useRef} from "react";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// @ts-ignore
export const StickyImage = ({imageUrls, brandName}) => {
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
            y: 0,
            scrollTrigger: {
                trigger: element,
                start: "100px 100px", // Element sticks at the top of the viewport
                endTrigger: socialBrandsSection,
                end: "bottom bottom", // Element un-sticks when `socialBrandsSection` reaches top
                pin: true, // Make element sticky
                scrub: true, // Smooth scrolling effect
                // markers: true
            },
        });

        // Clean up on unmount
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <Box
            ref={ref}
            position={["relative", "absolute"]}
            top="-3%"
            right="0"
            h="calc(100vh - 100px)"
            w={["100%", "50%", "50%"]}
            zIndex={2}
        >
            <Flex
                color={'white'}
                flexDirection='column'
                alignItems={'center'}
                position="sticky"
            >
                <Box position="relative" mt={[0, 40, 40]} width="500px" height="600px" overflow="hidden">
                    <Image
                        src={imageUrls[currentImageIndex]}
                        alt={brandName}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
                <Flex alignItems={'center'} justifyContent={'center'} width={"100%"}>

                    <IconButton
                        aria-label="Previous image"
                        icon={<FiChevronLeft/>}
                        onClick={handlePrevImage}
                        variant="ghost"
                        width={"20%"}
                        color={["black", "white", "white"]}
                        _hover={{"background": "none"}}
                    />
                    <Box>
                        <Text color={["black", "white", "white"]} width={"100%"} fontSize={["28px","4xl", "48px"]}
                              fontFamily="EB Garamond"
                              fontWeight="800">{brandName}</Text>
                    </Box>
                    <IconButton
                        aria-label="Next image"
                        icon={<FiChevronRight/>}
                        onClick={handleNextImage}
                        variant="ghost"
                        color={["black", "white", "white"]}
                        width={"20%"}
                        _hover={{"background": "none"}}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};
