// @ts-nocheck

"use client";
import React, {useRef, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Mousewheel, Parallax, Thumbs} from "swiper/modules";
import {
    Box,
    Text,
    Link,
    Flex,
    useBreakpointValue,
    Image,
} from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";
import ArrowDown from "@/app/assets/images/arrow-down-products.png";
import {useSearchParams} from "next/navigation";
import {gsap} from "gsap";
import {keyframes} from "@emotion/react";

import "swiper/css";
import "swiper/css/effect-fade";
import CustomBox from "@/app/components/ui/CustomBox";
import {CraftIdentity} from "@/app/components/product/CraftIdentity";
import {Footer} from "@/app/components/footer/Footer";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin with GSAP so that the scrollTo functionality is available.
gsap.registerPlugin(ScrollToPlugin);

export const Product3DSection = ({sections, isResponsive, brands, craftRef}: any) => {
    // Flag for when we are at the top of the page (used for overlay)
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    // Track scroll position for animation logic
    const [scrollYPosition, setScrollYPosition] = useState(0);
    // State to determine if the footer slide is active
    const [isFooterActive, setIsFooterActive] = useState(false);
    // Store the swiper instance so we can call updateAutoHeight later
    const [swiperInstance, setSwiperInstance] = useState(null);
    // Refs for arrow elements (for hover animations)
    const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
    // Refs for text elements (for GSAP animations)
    const textsRefs = useRef<Array<HTMLLIElement | null>>([]);
    // Ref for the main container wrapping the Swiper
    const containerRef = useRef<HTMLDivElement>(null);
    // Check for mobile responsiveness
    const isMobile = useBreakpointValue({base: true, md: false});
    // Get search params (for initial slide selection)
    const router = useSearchParams();
    const product = router.get("product");

    // Ensure arrowRefs array has a slot for each arrow (each section has two arrows)
    useEffect(() => {
        arrowRefs.current = arrowRefs.current.slice(0, sections.length * 2);
    }, [sections.length]);

    // Animate an arrow when user hovers over the corresponding text
    const handleArrowAnimation = (index: number) => {
        const arrowRef = arrowRefs.current[index];
        if (arrowRef) {
            gsap.to(arrowRef, {
                x: 10,
                opacity: 0,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.fromTo(
                        arrowRef,
                        {x: -10, opacity: 0},
                        {x: 0, opacity: 1, duration: 0.6, ease: "power1.inOut"}
                    );
                },
            });
        }
    };

    // Update scrollYPosition on window scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollYPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine the initial slide index based on the "product" query parameter
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

    // Calculate the footer slide index
    // We assume: sections slides + 1 slide for CraftIdentity, then the Footer slide.
    const footerSlideIndex = sections.length + 1;

    // Called when the slide changes
    const handleSlideChange = (swiper: any) => {
        // Get the current active slide index from the swiper instance.
        const activeIndex = swiper.activeIndex;
        // Calculate the last slide index based on the sections array length.
        const lastContentSlideIndex = sections.length - 1;

        // If the active index is 3 and craftRef.current exists, scroll to that element.
        if (activeIndex === 4 && craftRef) {
            // Calculate the element's position relative to the document.
            // getBoundingClientRect().top gives the position relative to the viewport.
            // window.pageYOffset adds the current vertical scroll position.
            const targetY = craftRef.current.getBoundingClientRect().top + window.pageYOffset;

            // Use GSAP's scrollTo plugin to animate the window scroll to the calculated position.
            gsap.to(window, {
                // The scrollTo property accepts an object with a numeric y value.
                scrollTo: { y: targetY, offsetY: 0 },
                duration: 2,         // Duration of the scroll animation in seconds.
                ease: "power3.out",    // Easing function for smooth animation.
            });
        }

        // Log the active slide index for debugging purposes.
        console.log(activeIndex);

        // If the active slide is not index 3, handle text animations.
        if (activeIndex !== 3) {
            // If the text reference for the active slide exists, animate it.
            if (textsRefs.current[activeIndex]) {
                gsap.fromTo(
                    textsRefs.current[activeIndex],
                    { y: 200, opacity: 1 },             // Starting properties: shifted down and visible.
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }  // Animate to original position.
                );
            }
            // Reset animations for text elements that are not active.
            textsRefs.current.forEach((el, index) => {
                if (el && index !== activeIndex) {
                    // Do not reset the animation for the last slide if activeIndex equals sections.length.
                    if (!(index === lastContentSlideIndex && activeIndex === sections.length)) {
                        gsap.set(el, { y: 100, opacity: 0 });
                    }
                }
            });
        }

        // Specifically animate the last content slide if it's active.
        if (activeIndex === lastContentSlideIndex && textsRefs.current[lastContentSlideIndex]) {
            gsap.to(textsRefs.current[lastContentSlideIndex], {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
            });
        }

        // Update isTopOfPage state based on the active slide index and scroll position.
        if (activeIndex === 4 && window.scrollY > scrollYPosition) {
            setIsTopOfPage(false);
        }
        if (activeIndex === 4 && window.scrollY === scrollYPosition) {
            setIsTopOfPage(true);
        }

        // If the active slide is the footer slide, update state and adjust swiper auto height.
        if (activeIndex === footerSlideIndex) {
            setIsFooterActive(true);
            // If the swiper instance exists, update its auto height for container adjustment.
            if (swiperInstance) {
                swiperInstance.updateAutoHeight();
            }
        } else {
            setIsFooterActive(false);
        }
    };

    // When isFooterActive changes, update the swiper's auto height
    useEffect(() => {
        if (isFooterActive && swiperInstance) {
            swiperInstance.updateAutoHeight();
        }
    }, [isFooterActive, swiperInstance]);

    // Keyframes for the link underline animation
    const lineAnimation = keyframes`
        0% {
            width: 0;
        }
        100% {
            width: 25%;
        }
    `;

    return (
        // Main container wraps the Swiper.
        // Its height and overflow adjust based on whether the footer is active.
        <Box
            ref={containerRef}
            style={{
                width: "100%",
                height: isFooterActive ? "auto" : "100vh",
                transition: "height 1s ease-in-out",
                overflow: isFooterActive ? "auto" : "hidden",
            }}
            postion="relative"
        >
            {/* Overlay box toggled by isTopOfPage */}
            <Box
                width={"100%"}
                height={"100vh"}
                position={"absolute"}
                background="white"
                zIndex={99999999}
                display={isTopOfPage ? "none" : "block"}
            ></Box>
            <Swiper
                onSwiper={setSwiperInstance} // Store the swiper instance here
                // Use different modules based on responsive state
                modules={isTopOfPage ? [isResponsive ? EffectFade : EffectFade, Mousewheel, Thumbs] : []}
                mousewheel={{sensitivity: 1, releaseOnEdges: true}}
                effect={isResponsive ? "fade" : "fade"}
                direction="vertical"
                slidesPerView={1}
                speed={1000}
                onSlideChange={handleSlideChange} // Handle slide changes
                initialSlide={getInitialSlideIndex(product)}
                style={{width: "100%", height: "100vh"}}
            >
                {sections.map((sec: any, index: number) => (
                    <SwiperSlide
                        key={sec.id}
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }}
                    >
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
                                top={["18%", index === 2 ? "30%" : index === 3 ? "18%" : "25%"]}
                            >
                                <Text fontSize={["16px", "18px"]}>{sec.description}</Text>
                                {sec.description2 && (
                                    <Text fontSize={["16px", "18px"]} mt="15px">
                                        {sec.description2}
                                    </Text>
                                )}
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
                                        <Box ref={(el) => (arrowRefs.current[index * 2] = el)}>
                                            <FiArrowRight/>
                                        </Box>
                                    </Flex>
                                </Link>
                                {sec.discover2 && (
                                    <Link href="/services/ethanol">
                                        <Flex alignItems="center" gap={2}>
                                            <Text
                                                onMouseEnter={() => handleArrowAnimation(index * 2 + 1)}
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
                                            <Box ref={(el) => (arrowRefs.current[index * 2 + 1] = el)}>
                                                <FiArrowRight/>
                                            </Box>
                                        </Flex>
                                    </Link>
                                )}
                            </Flex>
                        </CustomBox>
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
                            fontSize={[sec.mobileFontSize, isResponsive ? "16rem" : sec.fontSize]}
                            ref={(el) => (textsRefs.current[index] = el)}
                        >
                            {sec.text}
                        </Text>
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
                <SwiperSlide style={{height: "0vh"}}></SwiperSlide>

            </Swiper>
        </Box>
    );
};
