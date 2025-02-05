// @ts-nocheck

"use client"
import React, {useState, useEffect, useRef} from "react";
import {Box, Flex, Text, Radio, Divider, Link} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import Image from "next/image";
import {useSearchParams} from 'next/navigation';

export const BrandsSection = ({isLanding, brands, imageUrls}: any) => {
    const searchParams = useSearchParams();
    const scrollContainerRef = useRef(null);

    const uniqueCategories = Array.from(
        new Set(brands.flatMap(brand => brand.categories).filter(category => category !== 'Ethanol'))
    );
    const allCategories = ['All brands', ...uniqueCategories];

    if (brands.some(brand => brand.categories.includes('Ethanol'))) {
        allCategories.push('Ethanol');
    }

    const getInitialCategory = () => {
        const firstKey = Array.from(searchParams.keys())[0];
        if (!firstKey) return 'All brands';
        return allCategories.includes(firstKey) ? firstKey : 'All brands';
    };

    const [selectedCategory, setSelectedCategory] = useState(getInitialCategory());
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [showArrows, setShowArrows] = useState(true);

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
        const url = new URL(window.location.href);
        if (category === 'All brands') {
            url.search = '';
        } else {
            url.search = `${category}=${category}`;
        }
        window.history.pushState({}, '', url);
    };

    const updateScrollState = () => {
        if (!scrollContainerRef.current) return;

        const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;

        // Check if all content is visible
        const isAllContentVisible = scrollWidth <= clientWidth;
        setShowArrows(!isAllContentVisible);

        // Only update scroll states if content is scrollable
        if (!isAllContentVisible) {
            setCanScrollLeft(scrollLeft > 1);
            setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
        } else {
            // If all content is visible, both scroll buttons should be hidden
            setCanScrollLeft(false);
            setCanScrollRight(false);
        }
    };

    useEffect(() => {
        updateScrollState();
        const handleResize = () => updateScrollState();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollState);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", updateScrollState);
            }
        };
    }, []);

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
        <Box position="relative" pb={8} bg={'white'} color={'#000000'}>
            <Flex pl={8} pt={[2, 2, 10]} gap={[4, 8]} alignContent={'center'} alignItems={'center'}>
                {allCategories.map((category) => (
                    <Radio
                        // borderColor={'black'}
                        // border={'none'}
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
            <Divider ml={8} pl={8} pt={4} mb={8} color={'black'}/>
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
                                width="309px"
                                height="350px"
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
                                  mb={[6, 0, 10]}>{brand.brand_name}</Text>
                        </Flex>

                        <Link display={['none', 'flex', 'flex']} _hover={{textDecoration: "none"}}
                              href={`/brands/${brand.slug}`}>
                            <Btn size={'sm'} variant="secondary" text={`Discover ${brand.brand_name}`}/>
                        </Link>
                        <Link display={['flex', 'none', 'none']} _hover={{textDecoration: "none"}}
                              href={`/brands/${brand.slug}`}>
                            <Btn size={'xs'} variant="secondary" text={`Discover ${brand.brand_name}`}/>
                        </Link>
                    </Flex>
                ))}
            </Flex>
            {showArrows && (
                <Flex justifyContent={'end'} gap={12} pr={8} pt={[0, 0, 8]} zIndex={9999}>
                    {canScrollLeft && (
                        <Box _hover={{cursor: 'pointer'}}>
                            <svg onClick={scrollLeft} width="60" height="16" viewBox="0 0 69 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.79289 8.70711C1.40237 8.31658 1.40237 7.68342 1.79289 7.29289L8.15685 0.928932C8.54738 0.538408 9.18054 0.538408 9.57107 0.928932C9.96159 1.31946 9.96159 1.95262 9.57107 2.34315L3.91422 8L9.57107 13.6569C9.96159 14.0474 9.96159 14.6805 9.57107 15.0711C9.18054 15.4616 8.54738 15.4616 8.15685 15.0711L1.79289 8.70711ZM66.5 9H2.5V7H66.5V9Z"
                                    fill="black"/>
                            </svg>
                        </Box>
                    )}

                    {canScrollRight && (
                        <Box _hover={{cursor: 'pointer'}}>
                            <svg onClick={scrollRight}
                                 width="60" height="16" viewBox="0 0 69 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M67.2071 8.70711C67.5976 8.31658 67.5976 7.68342 67.2071 7.29289L60.8431 0.928932C60.4526 0.538408 59.8195 0.538408 59.4289 0.928932C59.0384 1.31946 59.0384 1.95262 59.4289 2.34315L65.0858 8L59.4289 13.6569C59.0384 14.0474 59.0384 14.6805 59.4289 15.0711C59.8195 15.4616 60.4526 15.4616 60.8431 15.0711L67.2071 8.70711ZM2.5 9H66.5V7H2.5V9Z"
                                    fill="black"/>
                            </svg>
                        </Box>
                    )}
                </Flex>
            )}
            {isLanding && (
                <Link _hover={{textDecoration: "none"}} href={`/brands`}>
                    <Box width={["92%", "100%", "18%"]} mt={[8, 0, 6]} pl={6} ml={3}>
                        <Btn size={'md'} variant={'primaryBlack'} text={'Discover our brands'}/>
                    </Box>
                </Link>
            )}
        </Box>
    );
};