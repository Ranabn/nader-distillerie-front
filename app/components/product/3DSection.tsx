// @ts-nocheck

"use client";
import React, { useRef, useEffect, useState } from "react";
// Import Swiper components for the carousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { EffectFade, Mousewheel, Parallax, Thumbs } from "swiper/modules";
// Import Chakra UI components for styling and layout
import { Box, Text, Link, Flex, useBreakpointValue, Image } from "@chakra-ui/react";
// Import an icon for the arrow
import { FiArrowRight } from "react-icons/fi";
// Import arrow image asset
import ArrowDown from "@/app/assets/images/arrow-down-products.png";
// Import Next.js hook to read URL search params
import { useSearchParams } from "next/navigation";
// Import GSAP for animations
import { gsap } from "gsap";
// Import keyframes from emotion for CSS animations
import { keyframes } from "@emotion/react";

// Import required Swiper CSS styles
import "swiper/css";
import "swiper/css/effect-fade";
// Import a custom component
import CustomBox from "@/app/components/ui/CustomBox";

export const Product3DSection = ({ sections }: any) => {
    // State to check if we're at the top of the page
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    // Initialize scrollYPosition with 0 to avoid using 'window' on the server side
    const [scrollYPosition, setScrollYPosition] = useState(0);
    // Refs to store arrow and text DOM elements for animation
    const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const textsRefs = useRef<Array<HTMLLIElement | null>>([]);
    // Ref for the container element
    const containerRef = useRef<HTMLDivElement>(null);
    // Determine if the device is mobile using Chakra UI's responsive hook
    const isMobile = useBreakpointValue({ base: true, md: false });
    // Get URL search parameters
    const router = useSearchParams();
    // Retrieve the "product" parameter from the URL
    const product = router.get("product");

    // Ensure that the arrowRefs array is the correct length based on the number of sections
    useEffect(() => {
        arrowRefs.current = arrowRefs.current.slice(0, sections.length * 2);
    }, [sections.length]);

    // useEffect to safely access the window object only on the client
    useEffect(() => {
        // Now that the component is mounted, update scrollYPosition with the current window.scrollY
        setScrollYPosition(window.scrollY);
    }, []);

    // Function to animate arrow elements on hover using GSAP
    const handleArrowAnimation = (index: number) => {
        const arrowRef = arrowRefs.current[index];
        if (arrowRef) {
            // Animate the arrow to move right and fade out
            gsap.to(arrowRef, {
                x: 10,
                opacity: 0,
                ease: "power1.inOut",
                onComplete: () => {
                    // Then animate the arrow coming from the left into view
                    gsap.fromTo(
                        arrowRef,
                        { x: -10, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: "power1.inOut" }
                    );
                },
            });
        }
    };

    // Listen to scroll events to update the scroll position state
    useEffect(() => {
        const handleScroll = () => {
            // Update scrollYPosition with current scroll value from window
            setScrollYPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine the initial slide index based on the product query parameter
    const getInitialSlideIndex = (product: string) => {
        switch (product) {
            case "Spirits":
                return 0;
            case "Wines":
                return 1;
            case "Vinegars":
                return 2;
            case "Ethanol":
                return sections.length - 1;
            default:
                return 0;
        }
    };

    // Function to handle slide change events in the Swiper component
    const handleSlideChange = (swiper: any) => {
        let activeIndex = swiper.activeIndex;
        const lastContentSlideIndex = sections.length - 1;
        console.log(activeIndex);

        // If not on a specific slide index (e.g., 3), animate the text into view
        if (activeIndex !== 3) {
            if (textsRefs.current[activeIndex]) {
                gsap.fromTo(
                    textsRefs.current[activeIndex],
                    { y: 200, opacity: 1 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
                );
            }

            // Reset the animation for all text elements that are not active
            textsRefs.current.forEach((el, index) => {
                if (el && index !== activeIndex) {
                    if (!(index === lastContentSlideIndex && activeIndex === sections.length)) {
                        gsap.set(el, { y: 100, opacity: 0 });
                    }
                }
            });
        }
        // Special handling for the last slide
        if (activeIndex === lastContentSlideIndex) {
            if (textsRefs.current[lastContentSlideIndex]) {
                gsap.to(textsRefs.current[lastContentSlideIndex], {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                });
            }
        }

        // Update isTopOfPage state based on scroll position changes for slide with activeIndex 4
        if (activeIndex === 4 && window.scrollY > scrollYPosition) {
            setIsTopOfPage(false);
        }
        if (activeIndex === 4 && window.scrollY === scrollYPosition) {
            setIsTopOfPage(true);
        }
    };

    // Define keyframes for the link underline animation using emotion's keyframes
    const lineAnimation = keyframes`
        0% {
            width: 0;
        }
        100% {
            width: 25%;
        }
    `;

    return (
        <Box
            ref={containerRef}
            style={{
                width: "100%",
                height: "100vh", // Full viewport height
                transition: "height 1s ease-in-out",
                overflow: "hidden",
            }}
            postion="relative"
        >
            {/* Overlay box that appears when not at the top of the page */}
            <Box
                width={"100%"}
                height={"100vh"}
                position={"absolute"}
                background="white"
                zIndex={99999999}
                display={isTopOfPage ? "none" : "block"}
            ></Box>
            {/* Swiper component for vertical slide functionality */}
            <Swiper
                modules={isTopOfPage ? [Parallax, Mousewheel, Thumbs] : []}
                mousewheel={{
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}
                effect="fade"
                direction="vertical"
                slidesPerView={1}
                speed={1000}
                onSlideChange={handleSlideChange}
                initialSlide={getInitialSlideIndex(product)}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
            >
                {/* Iterate over the sections array to create slides */}
                {sections.map((sec: any, index: number) => (
                    <SwiperSlide
                        key={sec.id}
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {/* Background image for the slide */}
                        <Box
                            style={{
                                backgroundRepeat: "no-repeat",
                                backgroundImage: `url(${sec.imageUrl})`,
                                backgroundSize: isMobile ? "cover" : sec.backgroundSize || "cover",
                                backgroundPosition: isMobile
                                    ? sec.mobileBackgroundPosition || "center"
                                    : sec.backgroundPosition || "center",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                backgroundBlendMode: "overlay",
                                transform: isMobile ? "none" : sec.transform || "none",
                            }}
                        />
                        <CustomBox>
                            {/* Text and link container */}
                            <Flex
                                flexDir="column"
                                gap={4}
                                pl={[4, 8, 8]}
                                width={["100%", "800px", "800px"]}
                                style={{
                                    position: "absolute",
                                    color: "white",
                                    zIndex: 9999,
                                }}
                                top={[
                                    "18%",
                                    index === 2 ? "30%" : index === 3 ? "18%" : "25%",
                                ]}
                            >
                                <Text fontSize={["16px", "18px"]}>{sec.description}</Text>
                                {sec.description2 && (
                                    <Text fontSize={["16px", "18px"]} mt="15px">
                                        {sec.description2}
                                    </Text>
                                )}
                                {/* Link with animated underline */}
                                <Link
                                    href={`/brands?filter=${sec.text}`}
                                    _hover={{
                                        textDecoration: "none",
                                        _after: {
                                            content: '""',
                                            display: "block",
                                            width: "0",
                                            height: "0.8px",
                                            backgroundColor: "currentColor",
                                            animation: `${lineAnimation} 0.3s forwards`,
                                        },
                                    }}
                                >
                                    <Flex alignItems="center" gap={2} mt={6}>
                                        <Text
                                            onMouseEnter={() => handleArrowAnimation(index * 2)}
                                            fontSize={["20px", "18px"]}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                fontWeight: 400,
                                            }}
                                        >
                                            {sec.discover}
                                        </Text>
                                        {/* Arrow icon with ref for animation */}
                                        <Box ref={(el) => (arrowRefs.current[index * 2] = el)}>
                                            <FiArrowRight />
                                        </Box>
                                    </Flex>
                                </Link>
                                {sec.discover2 && (
                                    <Link href="/services/ethanol">
                                        <Flex
                                            alignItems="center"
                                            alignContent="center"
                                            gap={2}
                                        >
                                            <Text
                                                onMouseEnter={() =>
                                                    handleArrowAnimation(index * 2 + 1)
                                                }
                                                fontSize={["20px", "18px"]}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontWeight: 400,
                                                    marginTop: "10px",
                                                }}
                                            >
                                                {sec.discover2}
                                            </Text>
                                            {/* Second arrow icon with ref */}
                                            <Box
                                                ref={(el) =>
                                                    (arrowRefs.current[index * 2 + 1] = el)
                                                }
                                            >
                                                <FiArrowRight />
                                            </Box>
                                        </Flex>
                                    </Link>
                                )}
                            </Flex>
                        </CustomBox>
                        {/* Animated text displayed on the slide */}
                        <Text
                            className="animated-text"
                            style={{
                                position: "absolute",
                                bottom: "17vh",
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: "white",
                                textAlign: "center",
                                fontFamily: "EB Garamond",
                                fontWeight: 800,
                                lineHeight: "0.8",
                            }}
                            fontSize={[sec.mobileFontSize, sec.fontSize]}
                            ref={(el) => (textsRefs.current[index] = el)}
                        >
                            {sec.text}
                        </Text>
                        {/* Scroll down indicator */}
                        <Flex
                            position="absolute"
                            bottom="20px"
                            width="100%"
                            justifyContent="center"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Text fontSize={["18px", "18px"]} color="white" fontWeight={400}>
                                Scroll down
                            </Text>
                            <Image
                                src={ArrowDown.src}
                                alt="arrow-down"
                                width="20px"
                                height="auto"
                                mt="10px"
                                animation="upDownFade 2s infinite"
                            />
                        </Flex>
                    </SwiperSlide>
                ))}
                {/* Extra slide for spacing */}
                <SwiperSlide>
                    <Box height="20vh"></Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};
