'use client'
import {Box, Text, Flex, IconButton} from "@chakra-ui/react";
import {motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import {useEffect, useState, useRef} from "react";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

export const StickyImage = ({imageUrls, brandName}) => {
    const {scrollY} = useScroll();
    const ref = useRef(null);
    const [elementTop, setElementTop] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const updateElementTop = () => {
        const element = document.getElementById("social-brands-section");
        if (element) {
            setElementTop(element.offsetTop);
        }
    };

    useEffect(() => {
        updateElementTop();
        window.addEventListener("resize", updateElementTop);
        return () => window.removeEventListener("resize", updateElementTop);
    }, []);

    const y = useTransform(scrollY,
        [0, elementTop - window.innerHeight, elementTop],
        [0, 0, 100]
    );

    const handlePrevImage = () => {
        setDirection(-1);
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setDirection(1);
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % imageUrls.length
        );
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,

        }),
    };

    return (
        <Box
            ref={ref}
            position="absolute"
            top="0%"
            right="0"
            h="calc(100vh - 100px)"
            w="40%"
            zIndex={2}
        >
            <Flex
                color={'white'}
                flexDirection='column'
                alignItems={'center'}
                as={motion.div as any}
                position="sticky"
                top="5%"
                style={{y}}
            >
                <Box position="relative" width="475px" height="475px" overflow="hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentImageIndex}
                            src={imageUrls[currentImageIndex]}
                            alt={brandName}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: {type: "spring", stiffness: 300, damping: 30},
                                opacity: {duration: 0.2},
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                objectFit: 'cover',
                            }}
                        />
                    </AnimatePresence>
                </Box>
                <Flex alignItems={'center'} gap={4} mt={4}>
                    <IconButton
                        aria-label="Previous image"
                        icon={<FiChevronLeft/>}
                        onClick={handlePrevImage}
                        variant="ghost"
                        color="white"
                        size="sm"
                        w={'10%'}
                    />
                    <Box>
                        <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="800">{brandName}</Text>
                        <Text textAlign='center'>{`Image ${currentImageIndex + 1} of ${imageUrls.length}`}</Text>
                    </Box>
                    <IconButton
                        aria-label="Next image"
                        icon={<FiChevronRight/>}
                        onClick={handleNextImage}
                        variant="ghost"
                        color="white"
                        size="sm"
                        w={'10%'}

                    />
                </Flex>
            </Flex>
        </Box>
    );
};