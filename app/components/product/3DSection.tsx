"use client";
import React, {useState, useRef, useCallback} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Mousewheel} from "swiper/modules";
import {Text, Box, Icon, Link, Flex} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/effect-fade";
import {FiChevronDown} from "react-icons/fi";

export const Product3DSection = ({sections, children}: any) => {
    const swiperRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleSlideChange = useCallback(() => {
        if (!swiperRef.current) return;

        const swiper = swiperRef.current;
        const isLastSlide = swiper.activeIndex === sections.length - 1;
        const isFirstSlide = swiper.activeIndex === 0;

        // Enable/disable mousewheel based on slide position
        if (swiper.params) {
            swiper.params.mousewheel.releaseOnEdges = true;
        }
    }, [sections.length]);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <Swiper
                ref={swiperRef}
                modules={[EffectFade, Mousewheel]}
                mousewheel={{
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}
                effect="fade"
                direction="vertical"
                slidesPerView={1}
                speed={1000}
                onSlideChange={handleSlideChange}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
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
                                backgroundPosition: "center",
                                width: "100%",
                                height: "100%",
                            }}
                        >

                            <Box
                                className="responsive-image"
                                style={{
                                    backgroundImage: `url(${sec.imageUrl})`,
                                    backgroundSize: index === 1 ? "100%" : index === 3 ? "110%" : "cover",
                                    backgroundPosition: index === 1 ? "bottom -800px right" : index === 3 ? "top" : "center",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
                                    backgroundBlendMode: "overlay",
                                    transform: index === 1 ? "scaleX(-1)" : "none", // Flip only the second image
                                }}
                            />
                            {/* Content Section */}
                            <Flex
                                flexDir={"column"}
                                gap={4}
                                pl={[4, 8, 8]}
                                width={["100%", "800px", "800px"]}
                                style={{
                                    position: "absolute",
                                    color: "white",
                                    zIndex: 9999,
                                }}
                                top={["18%", index === 2 ? "30%" : index === 3 ? "20%" : "25%"]}
                            >
                                <Text fontSize={["16px", "18px"]}>{sec.description}</Text>
                                {sec.description2 && (
                                    <Text fontSize={["16px", "18px"]} mt={"15px"}>
                                        {sec.description2}
                                    </Text>
                                )}
                                <Link href={"/brands"} _hover={{textDecoration: "none"}}>
                                    <Text
                                        fontSize={["20px", "18px"]}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: 400,
                                            marginTop: "30px",
                                        }}
                                    >
                                        {sec.discover}
                                        <svg
                                            style={{marginLeft: "8px"}}
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Text>
                                </Link>
                                {sec.discover2 && (
                                    <Text
                                        style={{
                                            display: "flex",
                                            alignItems: "center",

                                            fontWeight: 400,
                                            marginTop: "10px",
                                        }}
                                        fontSize={["20px", "18px"]}
                                    >
                                        {sec.discover2}
                                        <svg
                                            style={{marginLeft: "8px"}}
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Text>
                                )}
                            </Flex>
                            <Text
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    color: "white",
                                    textAlign: "center",
                                    fontFamily: "EB Garamond",
                                    fontWeight: 800,
                                }}
                                bottom={[index === 2 ? "10%" : "8%", index === 2 ? "5%" : index === 1 ? "-5%" : index === 3 ? "-5%" : "0%"]}
                                fontSize={[index === 2 ? "90px" : index === 3 ? "100px" : "120px", "md", sec.fontSize]}
                            >
                                {sec.text}
                            </Text>
                        </Box>
                        <Box
                            position="absolute"
                            bottom="20px"
                            color="white"
                            zIndex={1}
                            width="100%"
                            textAlign="center"
                        >
                            <Text fontSize={["sm", "18px"]}>Scroll down</Text>
                            <Icon
                                as={FiChevronDown as any}
                                w={6}
                                h={6}
                                animation="upDownFade 2s infinite"
                            />
                        </Box>
                    </SwiperSlide>
                ))}

                <SwiperSlide>
                    <Box height={'100vh'}></Box>
                </SwiperSlide>
            </Swiper>
            <style jsx global>{`
                @keyframes upDownFade {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-10px);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
            <style jsx global>{`
                @media (max-width: 768px) {
                    .responsive-image {
                        background-size: cover !important;
                        background-position: center !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </div>
    );
};