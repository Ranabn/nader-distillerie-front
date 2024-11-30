"use client";
import React, {useState, useRef, useCallback} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Mousewheel} from "swiper/modules";
import {Text, Box, Icon} from "@chakra-ui/react";
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
                {sections.map((sec: any) => (
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
                                backgroundImage: `url(${sec.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {/* Content Section */}
                            <Box
                                style={{
                                    position: "absolute",
                                    top: "25%",
                                    left: "2.5%",
                                    color: "white",
                                    width: "800px",
                                    zIndex: 9999,
                                }}
                            >
                                <Text style={{fontSize: "18px", fontWeight: 800}}>{sec.description}</Text>
                                {sec.description2 && (
                                    <Text style={{fontSize: "18px", fontWeight: 800, marginTop: "15px"}}>
                                        {sec.description2}
                                    </Text>
                                )}
                                <Text
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "18px",
                                        fontWeight: 800,
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
                                {sec.discover2 && (
                                    <Text
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            fontSize: "18px",
                                            fontWeight: 800,
                                            marginTop: "10px",
                                        }}
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
                            </Box>
                            <Text
                                style={{
                                    position: "absolute",
                                    bottom: "0%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    color: "white",
                                    textAlign: "center",
                                    fontFamily: "EB Garamond",
                                    fontSize: sec.fontSize,
                                    fontWeight: 800,
                                }}
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
        </div>
    );
};