// @ts-nocheck
import {useEffect, useRef} from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const JourneyTimeline = ({timeline}: any) => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;

        // Ensure the effect runs after DOM is ready
        // @ts-ignore
        const scrollWidth = container.scrollWidth - window.innerWidth;

        // Destroy existing ScrollTrigger instances to prevent conflicts
        // @ts-ignore
        ScrollTrigger.getAll().forEach(t => t.kill());

        // Horizontal scrolling animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: () => `+=${scrollWidth}`,
                scrub: 1, // Smoother scrubbing
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true // Recalculate on resize
            }
        });

        tl.to(container, {
            x: -scrollWidth,
            ease: "none"
        });

        // Cleanup function
        return () => {
            tl.scrollTrigger.kill();
        };
    }, [timeline]); // Add timeline to dependency array

    return (
        <Box ref={wrapperRef} position="relative" height="100vh" width="100%">
            <Box
                ref={containerRef}
                display="flex"
                height="100%"
                position="absolute"
                top={0}
                left={0}
                right={0}
            >
                <Flex
                    gap={'120px'}
                    width="max-content"
                    px={8}
                    alignItems="center"
                >
                    <Flex
                        width="490px"
                        fontSize={["4xl", "48px"]}
                        fontFamily="EB Garamond"
                        fontWeight="bold"
                        mr={'45px'}
                        mb={40}
                    >
                        A journey of growth, <br/> skill, and unwavering dedication
                    </Flex>
                    {timeline.map((item, index) => (
                        <Flex
                            key={index}
                            flexDirection="column"
                            width="420px"
                            height={"703px"}
                        >
                            <Box
                                width={420}
                                height={420}
                                position="relative"
                                overflow="hidden"
                            >
                                <Image
                                    src={item.imageUrl}
                                    alt="drawing"
                                    width="420px"
                                    height="420px"
                                    objectFit="cover"
                                    transition="transform 0.3s"
                                    _hover={{transform: "scale(1.1)"}}
                                />
                            </Box>
                            <Flex flexDirection="column" >
                                <Text lineHeight="0" mt={12}  fontSize={["24px"]}>{item.year}</Text>
                                <Text  fontSize={["4xl", "48px"]} fontFamily="EB Garamond" fontWeight="bold">
                                    {item.title}
                                </Text>
                                <Text mt={2} fontSize={["18px"]}>{item.description}</Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
