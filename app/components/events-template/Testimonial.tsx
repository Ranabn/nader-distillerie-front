'use client'
import {useState} from 'react';
import {Box, Flex, Text, IconButton, Image} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';

export const Testimonial = ({images, testimonial}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <Flex direction={{base: 'column', md: 'row'}} align="center" justify="space-between" p={12} gap={20}>
            <Box flex="1" mr={{base: 0, md: 4}} mb={{base: 4, md: 0}}>
                <Text fontSize="md" fontStyle="italic" mb={4}>
                    {testimonial.text}
                </Text>
                <Text fontWeight="bold">- {testimonial.author}</Text>
            </Box>
            <Box position="relative" width={{base: '100%', md: '50%'}}>
                <Image src={images[currentImageIndex]} alt="Carousel image"/>
                <IconButton
                    icon={<ChevronLeftIcon/>}
                    onClick={prevImage}
                    position="absolute"
                    left="2"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="1"
                    aria-label="Previous image"
                />
                <IconButton
                    icon={<ChevronRightIcon/>}
                    onClick={nextImage}
                    position="absolute"
                    right="2"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="1"
                    aria-label="Next image"
                />
            </Box>
        </Flex>
    );
};

