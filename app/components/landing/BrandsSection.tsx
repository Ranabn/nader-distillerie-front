'use client'
import React, {useRef, useState} from "react";
import {Box, Flex, Text, IconButton, Input, Checkbox, Radio, Divider} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import Images from "next/image";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import AdonisImg from "@/app/assets/images/Adonis.png";

const brands = [
    {name: "Adonis", type: "White Wine, Red Wine", imgSrc: AdonisImg},
    {name: "Arak Al Assi", type: "Regular, Extra", imgSrc: AdonisImg},
    {name: "Al Assi Vinegar", type: "Apple Cider, Red Grape Wine", imgSrc: AdonisImg},
    {name: "Brand 4", type: "Sample Type", imgSrc: AdonisImg},
    {name: "Brand 5", type: "Sample Type", imgSrc: AdonisImg},
    // Add more brands as needed
];

export const BrandsSection = () => {
    const scrollContainerRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('All brands');


    const handleRadioClick = (category) => {
        setSelectedCategory(category);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({left: -200, behavior: "smooth"});
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({left: 200, behavior: "smooth"});
        }
    };

    return (
        <Box py={10} position="relative" pl={12}>
            <Flex gap={8}>
                <Radio value='All brands' onChange={() => handleRadioClick('All brands')}
                       isChecked={selectedCategory === 'All brands'}>
                    All brands
                </Radio>
                <Radio value='Spirits' onChange={() => handleRadioClick('Spirits')}
                       isChecked={selectedCategory === 'Spirits'}>
                    Spirits
                </Radio>
                <Radio value='Wine' onChange={() => handleRadioClick('Wine')} isChecked={selectedCategory === 'Wine'}>
                    Wine
                </Radio>
                <Radio value='Vinegars' onChange={() => handleRadioClick('Vinegars')}
                       isChecked={selectedCategory === 'Vinegars'}>
                    Vinegars
                </Radio>
                <Radio value='Ethanod' onChange={() => handleRadioClick('Ethanod')}
                       isChecked={selectedCategory === 'Ethanod'}>
                    Ethanol
                </Radio>
            </Flex>
            <Divider p={2} mb={8}/>

            <Flex
                ref={scrollContainerRef}
                overflowX="auto"
                scrollSnapType="x mandatory"
                mx="auto"
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
                mb={2}>
                {brands.filter((brand) =>
                    selectedCategory === 'All brands' ? true : brand.type.includes(selectedCategory)).map((brand, index) => (
                    <Flex
                        key={index}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        m={4}
                        scrollSnapAlign="start"
                        flexShrink={0}
                        width="280px"
                    >
                        <Images
                            src={brand.imgSrc}
                            alt={brand.name}
                            boxSize="200px"
                            objectFit="cover"
                            mb={2}
                            width="100"
                            height="100"
                            quality={100}
                        />
                        <Text fontWeight="bold">{brand.name}</Text>
                        <Text fontSize="sm" color="gray.600" mb={4}>
                            {brand.type}
                        </Text>
                        <Btn variant="secondary" text="Discover our brand"/>
                    </Flex>
                ))}
            </Flex>
            <Flex justifyContent={'end'} p={12}  mb={2} gap={12}>
                <Box _hover={{cursor: 'pointer'}}>
                    <svg onClick={scrollLeft} width="69" height="16" viewBox="0 0 69 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.79289 8.70711C1.40237 8.31658 1.40237 7.68342 1.79289 7.29289L8.15685 0.928932C8.54738 0.538408 9.18054 0.538408 9.57107 0.928932C9.96159 1.31946 9.96159 1.95262 9.57107 2.34315L3.91422 8L9.57107 13.6569C9.96159 14.0474 9.96159 14.6805 9.57107 15.0711C9.18054 15.4616 8.54738 15.4616 8.15685 15.0711L1.79289 8.70711ZM66.5 9H2.5V7H66.5V9Z"
                            fill="black"/>
                    </svg>
                </Box>
                <Box _hover={{cursor: 'pointer'}}>
                    <svg onClick={scrollRight}
                         width="69" height="16" viewBox="0 0 69 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M67.2071 8.70711C67.5976 8.31658 67.5976 7.68342 67.2071 7.29289L60.8431 0.928932C60.4526 0.538408 59.8195 0.538408 59.4289 0.928932C59.0384 1.31946 59.0384 1.95262 59.4289 2.34315L65.0858 8L59.4289 13.6569C59.0384 14.0474 59.0384 14.6805 59.4289 15.0711C59.8195 15.4616 60.4526 15.4616 60.8431 15.0711L67.2071 8.70711ZM2.5 9H66.5V7H2.5V9Z"
                            fill="black"/>
                    </svg>
                </Box>
            </Flex>
            <Flex>
                <Btn variant={'primaryBlack'} text={'Discover our brands'}/>
            </Flex>
        </Box>
    );
};
