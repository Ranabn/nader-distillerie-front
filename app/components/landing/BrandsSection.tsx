// @ts-nocheck

'use client';
import React, {useState, useEffect, useRef} from "react";
import {Box, Flex, Text, Radio, Divider, Link} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import Image from "next/image";
import {useSearchParams} from 'next/navigation';

export const BrandsSection = ({isLanding, brands, imageUrls}: any) => {
    const searchParams = useSearchParams();
    const scrollContainerRef = useRef(null);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

                // Show left scroll button if not at the start
                setShowLeftScroll(scrollLeft > 0);

                // Show right scroll button if not at the end
                // Add small buffer (1px) to account for rounding errors
                setShowRightScroll(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
            }
        };

        // Add scroll event listener
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll);
            // Initial check
            checkScroll();
        }

        // Cleanup
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

    // Convert Set to Array
    const uniqueCategories = Array.from(
        new Set(brands.flatMap(brand => brand.categories).filter(category => category !== 'Ethanol'))
    );
    const allCategories = ['All brands', ...uniqueCategories];

    if (brands.some(brand => brand.categories.includes('Ethanol'))) {
        allCategories.push('Ethanol');
    }

    // Get the query parameter and set initial selected category
    const getInitialCategory = () => {
        // Get first key from searchParams
        const firstKey = Array.from(searchParams.keys())[0];
        if (!firstKey) return 'All brands';

        // Check if the category exists in allCategories
        return allCategories.includes(firstKey) ? firstKey : 'All brands';
    };

    const [selectedCategory, setSelectedCategory] = useState(getInitialCategory());

    // Update selected category when URL changes
    useEffect(() => {
        const newCategory = getInitialCategory();
        setSelectedCategory(newCategory);
    }, [searchParams]);

    const brandData = brands.map((brand, index) => ({
        ...brand,
        imageUrl: imageUrls[index] || '/placeholder-image.jpg'
    }));

    const handleRadioClick = (category) => {
        setSelectedCategory(category);
        // Update URL when radio is clicked
        const url = new URL(window.location.href);
        if (category === 'All brands') {
            url.search = '';
        } else {
            url.search = `${category}=${category}`;
        }
        window.history.pushState({}, '', url);
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

    const filteredBrandData = brandData.filter(brand =>
        selectedCategory === 'All brands' || brand.categories.includes(selectedCategory)
    );

    return (
        <Box p={[4, 0, 8]} position="relative" overflow={'hidden'} bg={'white'} color={'#000000'}>
            <Flex gap={[4, 8]} alignContent={'center'} alignItems={'center'}>
                {allCategories.map((category) => (
                    <Radio
                        borderColor={'black'}
                        border={'1px solid black'}
                        key={category}
                        size="md"
                        value={category}
                        onChange={() => handleRadioClick(category)}
                        isChecked={selectedCategory === category}
                    >
                        <Text minWidth={["67px", "100%", "100%"]}
                              fontWeight={selectedCategory === category ? '800' : ''}
                              fontSize={['16px', '18px', '18px']}>
                            {category}
                        </Text>
                    </Radio>
                ))}
            </Flex>
            <Divider p={2} mb={8} color={'black'}/>
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
                mb={2}
            >
                {filteredBrandData.map((brand, index) => (
                    <Flex
                        key={index}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        m={[0, 4, 4]}
                        scrollSnapAlign="start"
                        flexShrink={0}
                        width={["260px", "280px", "400px"]}
                        height={['582px']}
                        gap={'12px'}
                    >
                        <Flex flexDirection='column' alignItems={'center'}>
                            <Box
                                width="149px"
                                height="320px"
                                position="relative"
                                mb={2}
                            >
                                <Image
                                    src={brand.imageUrl}
                                    alt={brand.brand_name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </Box>
                            <Text fontSize={["xs", "18px"]} color="gray.600" mt={4}>
                                {brand.brand_short_desc.toUpperCase()}
                            </Text>
                            <Text fontSize={["2xl", "32px"]} fontWeight="bold" fontFamily={"EB Garamond"}
                                  mb={10}>{brand.brand_name}</Text>
                        </Flex>

                        <Link _hover={{textDecoration: "none"}} href={`/brands/${brand.slug}`}>

                            <Btn size={'sm'} variant="secondary" text={`Discover ${brand.brand_name}`}/>
                        </Link>
                    </Flex>
                ))}
            </Flex>
            <Flex justifyContent={'end'} mt={12} gap={12}>
                {showLeftScroll && (
                    <Box _hover={{cursor: 'pointer'}}>
                        <svg onClick={scrollLeft} width="60" height="16" viewBox="0 0 69 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.79289 8.70711C1.40237 8.31658 1.40237 7.68342 1.79289 7.29289L8.15685 0.928932C8.54738 0.538408 9.18054 0.538408 9.57107 0.928932C9.96159 1.31946 9.96159 1.95262 9.57107 2.34315L3.91422 8L9.57107 13.6569C9.96159 14.0474 9.96159 14.6805 9.57107 15.0711C9.18054 15.4616 8.54738 15.4616 8.15685 15.0711L1.79289 8.70711ZM66.5 9H2.5V7H66.5V9Z"
                                fill="black"/>
                        </svg>
                    </Box>
                )}

                {showRightScroll && (
                    <Box _hover={{cursor: 'pointer'}}>
                        <svg onClick={scrollRight}
                             width="60" height="16" viewBox="0 0 69 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M67.2071 8.70711C67.5976 8.31658 67.5976 7.68342 67.2071 7.29289L60.8431 0.928932C60.4526 0.538408 59.8195 0.538408 59.4289 0.928932C59.0384 1.31946 59.0384 1.95262 59.4289 2.34315L65.0858 8L59.4289 13.6569C59.0384 14.0474 59.0384 14.6805 59.4289 15.0711C59.8195 15.4616 60.4526 15.4616 60.8431 15.0711L67.2071 8.70711ZM2.5 9H66.5V7H2.5V9Z"
                                fill="black"/>
                        </svg>
                    </Box>
                )}
            </Flex>
            {isLanding && (
                <Link _hover={{textDecoration: "none"}} href={`/brands`}>
                    <Box width={["100%", "100%", "18%"]} mt={[8, 0, 6]}>
                        <Btn size={'md'} variant={'primaryBlack'} text={'Discover our brands'}/>
                    </Box>
                </Link>
            )}
        </Box>
    );
};
