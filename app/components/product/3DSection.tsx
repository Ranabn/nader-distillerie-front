// @ts-nocheck

"use client";
import React, {useRef, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Mousewheel} from "swiper/modules";
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

export const Product3DSection = ({sections}: any) => {
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const textsRefs = useRef<Array<HTMLLIElement | null>>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useBreakpointValue({base: true, md: false});
    const router = useSearchParams();
    const product = router.get("product");

    // Initialize arrow refs array
    useEffect(() => {
        arrowRefs.current = arrowRefs.current.slice(0, sections.length * 2);
    }, [sections.length]);

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
                        {
                            x: -10,
                            opacity: 0,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power1.inOut",
                        }
                    );
                },
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsTopOfPage(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    const handleSlideChange = (swiper: any) => {
        const activeIndex = swiper.activeIndex;
        const lastContentSlideIndex = sections.length - 1;

        if (textsRefs.current[activeIndex]) {
            gsap.fromTo(
                textsRefs.current[activeIndex],
                {y: 200, opacity: 1},
                {y: 0, opacity: 1, duration: 0.8, ease: "power3.out"}
            );
        }

        textsRefs.current.forEach((el, index) => {
            if (el && index !== activeIndex) {
                if (!(index === lastContentSlideIndex && activeIndex === sections.length)) {
                    gsap.set(el, {y: 100, opacity: 0});
                }
            }
        });

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
                height: isTopOfPage ? "100vh" : "50vh",
                transition: "height 1s ease-in-out",
                overflow: "hidden",
            }}
        >
            <Swiper
                modules={isTopOfPage ? [EffectFade, Mousewheel] : []}
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
                                backgroundPosition: isMobile ? sec.mobileBackgroundPosition || "center" : sec.backgroundPosition || "center",
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
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
                            <Text fontSize={["16px", "18px"]} >{sec.description}</Text>
                            {sec.description2 && (
                                <Text fontSize={["16px", "18px"]}  mt="15px">
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
                                <Flex
                                    alignItems="center"
                                    gap={2}
                                    mt={6}
                                >
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
                                    <Box ref={el => arrowRefs.current[index * 2] = el}>
                                        <FiArrowRight/>
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
                                        <Box ref={el => arrowRefs.current[index * 2 + 1] = el}>
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
                            fontSize={[sec.mobileFontSize, sec.fontSize]}
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
                            <Text
                                fontSize={["18px", "18px"]}
                                color="white"
                                fontWeight={400}
                            >
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
                <SwiperSlide>
                    <Box height="20vh"></Box>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};