"use client";
import React, {useRef, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Mousewheel} from "swiper/modules";
import {Box, Text, Link, Flex} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/effect-fade";
import {gsap} from "gsap";
import {keyframes} from "@emotion/react";

export const Product3DSection = ({sections}: any) => {
    const textsRefs = useRef<Array<HTMLLIElement | null>>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSlideChange = (swiper: any) => {
        const activeIndex = swiper.activeIndex;
        const lastContentSlideIndex = sections.length - 1;

        // Animate the current slide's text
        if (textsRefs.current[activeIndex]) {
            gsap.fromTo(
                textsRefs.current[activeIndex],
                {y: 200, opacity: 1},
                {y: 0, opacity: 1, duration: 0.8, ease: "power3.out"}
            );
        }

        // Reset previous slides' text, but preserve the last content slide
        textsRefs.current.forEach((el, index) => {
            if (el && index !== activeIndex) {
                // Don't reset the last content slide's text if we're moving to the empty slide
                if (!(index === lastContentSlideIndex && activeIndex === sections.length)) {
                    gsap.set(el, {y: 100, opacity: 0});
                }
            }
        });

        // If moving back to the last content slide from the empty slide,
        // ensure its text is visible
        if (activeIndex === lastContentSlideIndex) {
            if (textsRefs.current[lastContentSlideIndex]) {
                gsap.to(textsRefs.current[lastContentSlideIndex], {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });
            }
        }
    };

    const lineAnimation = keyframes`
        0% {
            width: 0;
        }
        100% {
            width: 25%;
        }
    `;

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
                {sections.map((sec: any, index: number) => {
                    // Calculate font size
                    const fontSize = index === 0
                        ? "503px"
                        : index === 1
                            ? "536.28px"
                            : index === 2
                                ? "384.07px"
                                : index === 3
                                    ? "433px"
                                    : "120px";

                    return (
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
                                    backgroundSize:
                                        index === 1 ? "100%" : index === 3 ? "110%" : "cover",
                                    backgroundPosition:
                                        index === 1
                                            ? "bottom -800px right"
                                            : index === 3
                                                ? "top"
                                                : "center",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                    backgroundBlendMode: "overlay",
                                    transform: index === 1 ? "scaleX(-1)" : "none",
                                }}
                            />
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
                                    index === 2 ? "30%" : index === 3 ? "20%" : "25%",
                                ]}
                            >
                                <Text fontSize={["16px", "18px"]}>{sec.description}</Text>
                                {sec.description2 && (
                                    <Text fontSize={["16px", "18px"]} mt="15px">
                                        {sec.description2}
                                    </Text>
                                )}
                                <Link
                                    href="/brands"
                                    _hover={{
                                        textDecoration: "none",
                                        _after: {
                                            content: '""',
                                            display: 'block',
                                            width: '0',
                                            height: '0.8px',
                                            backgroundColor: 'currentColor',
                                            animation: `${lineAnimation} 0.3s forwards`,
                                        },
                                        position: 'relative',
                                        _before: {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '-2px',
                                            left: 0,
                                            width: '100%',
                                            height: '0.8px',
                                            backgroundColor: 'transparent',
                                        }
                                    }}
                                >
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
                            </Flex>
                            <Text
                                className="animated-text"
                                style={{
                                    position: "absolute",
                                    bottom: "15vh",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    color: "white",
                                    textAlign: "center",
                                    fontFamily: "EB Garamond",
                                    fontWeight: 800,
                                    lineHeight: "0.8",
                                }}
                                fontSize={fontSize}
                                ref={(el) => (textsRefs.current[index] = el)}
                            >
                                {sec.text}
                            </Text>
                        </SwiperSlide>
                    );
                })}
                <SwiperSlide>
                    <Box height="100vh"></Box>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};