// @ts-nocheck

'use client';
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chev from "@/app/assets/icons/chevronLeftBlack.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const StickyImageMobile = ({ imageUrls, imageAlts, brandName }) => {
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

    return (

            <Flex
                zIndex={1}
                mt={[0,8]}
                width={'100%'}
                color="white"
                flexDirection="column"
                alignItems="center"
                alignContent={'center'}
                mb={4}
            >
                <Box position="relative" mt={[0, 40, 24]} width="347px" height="347" overflow="hidden">
                    <Image
                        src={imageUrls[currentImageIndex]}
                        alt={imageAlts[currentImageIndex] || `${brandName} image ${currentImageIndex + 1}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Box>
                <Flex p={2} alignItems="center" justifyContent="center" width="100%" gap={12}>
                    <Image
                        onClick={handlePrevImage}
                        w="2%"
                        src={Chev.src}
                        alt="Previous image"
                        cursor="pointer"
                    />
                    <Box textAlign="center">
                        <Text
                            color={["black", "black", "black",'white']}
                            width="100%"
                            fontSize={["28px", "4xl", "48px"]}
                            fontFamily="EB Garamond"
                            fontWeight="800"
                        >
                            {brandName}
                        </Text>
                        <Text
                            color={["black", "black", "black",'white']}
                            width="250px"
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
    );
};
