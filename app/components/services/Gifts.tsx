// @ts-nocheck
'use client'
import {useRef, useEffect, useState} from "react";
import {Box, Divider, Flex, Image, Link, Text} from "@chakra-ui/react";
import React from "react";
import {Btn} from "@/app/components/ui/Btn";
import {FiChevronRight} from "react-icons/fi";
import gifts from "@/app/assets/images/gifts.png"
import testimony1 from "../../assets/images/gift-sliders/7.jpg";
import box from "../../assets/images/gift-sliders/7b.jpg";
import bottle5 from "../../assets/images/gift-sliders/10.jpg";
import pres3 from "../../assets/images/gift-sliders/8.jpg";
import pres4 from "../../assets/images/gift-sliders/9.jpg";
import testimony2 from "../../assets/images/gift-sliders/6.jpg";
import bottle3 from "../../assets/images/gift-sliders/4.jpg";
import bottle4 from "../../assets/images/gift-sliders/5.jpg";
import quotes from "@/app/assets/images/quotes.png";
import arrowright from "@/app/assets/images/arrowright.png";
import arrowleft from "@/app/assets/images/arrowleft.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Pagination} from "swiper/modules";
import 'swiper/css/pagination';
import CustomBox from "@/app/components/ui/CustomBox";

export const Gifts = () => {
    const swiperRef1 = useRef(2);
    const swiperRef2 = useRef(2);
    const paginationRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const updatePaginationPosition = (swiper) => {
        // Update active index
        setActiveIndex(swiper.activeIndex);

        // Center the active bullet
        const bullets = paginationRef.current?.children;
        if (bullets && bullets.length > 0) {
            const activeBullet = bullets[swiper.activeIndex];
            const paginationWidth = paginationRef.current.offsetWidth;
            const activeBulletLeft = activeBullet.offsetLeft;
            const centerPosition = paginationWidth / 2 - activeBullet.offsetWidth / 2;

            paginationRef.current.style.transform = `translateX(${
                centerPosition - activeBulletLeft
            }px)`;
        }
    };
    useEffect(() => {
        if (swiperRef1.current) {
            // Initialize the pagination position for the first render
            setActiveIndex(2)
            updatePaginationPosition(activeIndex);
            console.log(activeIndex)
        }
    }, []);

    return (
        <CustomBox>
            <Box>
                <Box p={[4, 8, 10]} maxWidth="1200px" mx="auto">
                    {/* Header Section */}
                    <Flex flexDirection={"column"} align="stretch" fontSize={["16px", "18px"]}>
                        <Text mt={[8, 0,0,0]}  fontSize={["28px", "5xl", "48px"]} mb={4} fontWeight="bold" fontFamily={"EB Garamond"}>
                            Personalization for memorable gifts
                        </Text>

                        <Text mb={4}>
                            We believe that every gift should tell a story. Whether it’s a corporate event, a wedding
                            celebration, or a special occasion, we create unique and thoughtfully crafted presents that
                            leave a lasting impression.
                        </Text>
                        <Image mt={4}
                               src={gifts.src}
                               alt="Bottles"
                               width={["335px", '1100px']}
                               height={["200px", '618px']}
                        />
                    </Flex>


                    {/* Why Us and Our Process Section */}
                    <Flex mt={[10, 32]} fontSize={["16px", "18px"]} justify="space-between"
                          flexDirection={["column", "column", "row"]}
                          gap={12}>
                        <Flex w={['100%', '70%', '45%']} flexDir='column' align="flex-start" gap={2}>
                            <Text fontSize={["28px", "4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"}
                                  mb={4}>
                                Engaging with our customers
                            </Text>
                            <Text>The best gifts are born from collaboration. When you choose us, we partner with you to
                                understand your vision. Is it a celebration, a thank-you gesture, or a special
                                milestone?
                                Knowing this helps us tailor our offer. </Text>

                        </Flex>

                        {/* Our Process */}
                        <Flex w={['100%', '70%', '45%']} flexDir='column' align="flex-start" gap={[0, 0, 2]}>
                            <Text fontSize={["28px", "4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"}
                                  mb={4}>
                                Our products<br/> complemented
                            </Text>
                            <Text>The wine or spirit bottle, whether regular-sized or a charming miniature, is at the
                                heart
                                of our gift packages. Our expertise in wine and spirits ensures that each bottle matches
                                the
                                occasion and adds sophistication to the gift. To enhance it further, we can add
                                complementary elements of your choice, or explore new ideas together.</Text>
                        </Flex>
                    </Flex>

                    {/* Call to Action */}
                    <Flex flexDir='column' align="center" mt={24} gap={4} mb={14}>
                        <Text fontSize={["20px", "lg", "24px"]} textAlign="center">
                            Planning an upcoming event? Don’t wait until the last moment.
                        </Text>
                        <Box w={["100%", "50%", "20%"]} mr={[0, 12]}>

                            <Link href={"/contact?CTA=gift"} _hover={{textDecoration: "none"}}>
                                <Btn variant='primaryBlack' size={"md"} text='Request a consultation'/>
                            </Link>
                        </Box>
                    </Flex>
                </Box>
                    <Flex flexDirection={"column"} p={[4, 8, 8]} gap={[4, 20]} mb={[20]}>
                        <Flex justify={'center'} mb={[4, 14]}>
                            <Text fontSize={["28px", "48px", '48px']} fontWeight="bold" fontFamily={"EB Garamond"}>Customer
                                testimony</Text>
                        </Flex>
                        <Flex flexDirection={["column", "row"]} justifyContent="space-between" alignItems="center"
                              gap={[6, 20]} mb={[10, 0]}>
                            <Flex flexDirection={"column"} width={["100%", "44%"]} gap={[2, 10]} order={[1, 0]}>
                                <Image
                                    display={["none", "inline"]}
                                    src={quotes.src}
                                    alt="Our Story"
                                    objectFit="cover"
                                    width="49px"
                                />
                                <Text fontSize={["16px", "24px"]} mb={[0, 4]}>It was an absolute pleasure working with
                                    Nader
                                    Distilleries on
                                    these super special
                                    customized
                                    wedding giveaways. The attention to detail, dedication and care they put into each
                                    and
                                    every
                                    aspect, even down to the packaging, was like no other. Guests were raving about
                                    these
                                    giveaways
                                    and still do to this day! I can&lsquo;t recommend them enough.</Text>
                                <Text fontWeight={"bold"} fontSize={["18px", "20px"]} textAlign={"right"}>Melissa
                                    T.</Text>
                            </Flex>
                            <Box width={["100%", "44%"]} order={[0, 1]}>
                                <Swiper
                                    onSwiper={(swiper) => {
                                        swiperRef1.current = swiper;
                                        swiper.slideTo(0, 0); // Set initial slide to 2 without animation
                                        setActiveIndex(2);   // Set the activeIndex state
                                        updatePaginationPosition(swiper); // Update the pagination position
                                    }}
                                    onSlideChange={(swiper) => {
                                        setActiveIndex(swiper.activeIndex);
                                        updatePaginationPosition(swiper);
                                    }}
                                    initialSlide={[0, 2]} // Ensure Swiper starts at index 2
                                    pagination={{
                                        clickable: true,
                                        el: ".custom-pagination",
                                        renderBullet: (index, className) => `<span class="${className}"></span>`,
                                    }}
                                    loop={true}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                    spaceBetween={0}
                                >
                                    <SwiperSlide>
                                        <Image
                                            src={box.src}
                                            alt="Our Story"
                                            objectFit="cover"
                                            margin={'0 auto'}
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Image
                                            src={pres3.src}
                                            alt="Our Story"
                                            objectFit="cover"
                                            objectPosition={"bottom"}
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>


                                    <SwiperSlide>
                                        <Image
                                            src={pres4.src}
                                            alt="Our Story"
                                            objectFit="cover"
                                            objectPosition={"center 70%"}
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src={bottle5.src}
                                            alt="Our Story"
                                            objectFit="cover"
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>
                                </Swiper>
                                <Flex
                                    mt={6}
                                    justifyContent="center" // Ensures everything is centered
                                    alignItems="center"     // Aligns items vertically centered
                                    gap={[0, 4]}            // Provides spacing between items
                                >
                                    <Image
                                        // display={["none", "inline"]}
                                        src={arrowleft.src}
                                        alt="Previous"
                                        width={["51px", "68px"]}
                                        height={["12px", "16px"]}
                                        onClick={() => swiperRef1.current?.slidePrev()}
                                        style={{cursor: "pointer"}}
                                        opacity={[0, 1]}

                                    />
                                    <div
                                        className="custom-pagination"
                                        style={{
                                            flex: 1,
                                            textAlign: "center"
                                        }} // Ensures this div takes the center space
                                    />
                                    <Image
                                        src={arrowright.src}
                                        alt="Next"
                                        width={["51px", "68px"]}
                                        height={["12px", "16px"]}
                                        onClick={() => swiperRef1.current?.slideNext()}
                                        style={{cursor: "pointer"}}
                                        mb={4}
                                    />
                                </Flex>

                            </Box>

                        </Flex>
                        <Flex flexDirection={["column", "row"]} justifyContent={"space-between"} alignItems={"center"}
                              gap={[6, 20]}>
                            <Flex flexDirection={"column"} width={["100%", "44%"]} gap={[2, 10]} order={[1, 0]}>
                                <Image
                                    display={["none", "inline"]}
                                    src={quotes.src}
                                    alt="Our Story"
                                    objectFit="cover"
                                    width="49px"
                                />
                                <Text fontSize={["16px", "24px"]} mb={[0, 4]}>It was an absolute pleasure working with
                                    Nader
                                    Distilleries on
                                    We were absolutely thrilled with the wedding gifts from Nader Distilleries. The
                                    personalized
                                    guidance and support in bringing our vision to life were invaluable. Nader
                                    Distilleries
                                    exceeded
                                    our expectations! The beautiful bottles and truly qualitative beverages left a
                                    lasting
                                    impression, and our guests continued to inquire about them even after the
                                    wedding.</Text>
                                <Text fontWeight={"bold"} fontSize={["18px", "20px"]} textAlign={"right"}>Nada C.</Text>

                            </Flex>
                            <Box width={["100%", "44%"]} order={[0, 1]}>
                                <Swiper
                                    onSwiper={(swiper) => {
                                        swiperRef2.current = swiper;
                                        swiper.slideTo(0, 0); // Set initial slide to 2 without animation
                                        setActiveIndex(2);   // Set the activeIndex state
                                        updatePaginationPosition(swiper); // Update the pagination position
                                    }}
                                    onSlideChange={(swiper) => {
                                        setActiveIndex(swiper.activeIndex);
                                        updatePaginationPosition(swiper);
                                    }}
                                    initialSlide={2} // Ensure Swiper starts at index 2
                                    pagination={{
                                        clickable: true,
                                        el: ".custom-pagination-2",
                                        renderBullet: (index, className) => `<span class="${className}"></span>`,
                                    }}
                                    loop={true}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                    spaceBetween={0}
                                >
                                    <SwiperSlide>
                                        <Image
                                            src={bottle3.src}
                                            alt="Testimonial 2 Slide 1"
                                            objectFit="cover"
                                            margin={'0 auto'}
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src={bottle4.src}
                                            alt="Testimonial 2 Slide 1"
                                            objectFit="cover"
                                            margin={'0 auto'}
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src={testimony2.src}
                                            alt="Testimonial 2 Slide 1"
                                            objectFit="cover"
                                            margin={'0 auto'}
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image
                                            src={testimony1.src}
                                            alt="Our Story"
                                            objectFit="cover"
                                            margin={'0 auto'}
                                            width={["335px","auto","100%"]}
                                            height={["335px","auto","600px"]}
                                        />
                                    </SwiperSlide>
                                </Swiper>
                                <Flex mt={6} justifyContent="center" gap={4}>
                                    <Image
                                        src={arrowleft.src}
                                        alt="Previous"
                                        width={["51px", "68px"]}
                                        height={["12px", "16px"]}
                                        onClick={() => swiperRef2.current?.slidePrev()}
                                        style={{cursor: "pointer"}}
                                        opacity={[0, 1]}

                                    />
                                    <div className={"custom-pagination-2"}/>
                                    <Image
                                        src={arrowright.src}
                                        alt="Next"
                                        width={["51px", "68px"]}
                                        height={["12px", "16px"]}
                                        onClick={() => swiperRef2.current?.slideNext()}
                                        style={{cursor: "pointer"}}
                                        mb={4}

                                    />
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex mb={12} flexDirection={['column', 'row']}>
                        <Flex
                            m={[4, 10]}
                            justifyContent={'center'}
                            height={["335px", "250px"]}
                            width={["auto", '50%']}

                        >
                            <Flex borderWidth="1px"
                                  borderColor={'black'}
                                  direction="column"
                                  p={[8, 12]}
                                  pt={[0, 14]}
                                  pb={[0, 14]}
                                  alignContent={'center'}
                                  justifyContent={'center'}
                                  _hover={{
                                      color: 'black',
                                      bg: '#D2CDBF',
                                      border: '1px solid transparent',
                                      textDecoration: "none",
                                      cursor: 'pointer',
                                      transition: 'all 0.3s ease'
                                  }}

                            >
                                <Link href={'/services/ethanol'} _hover={{textDecoration: 'none'}}>
                                    <Flex alignItems={'center'} justifyContent={'space-between'} mb={4}
                                          fontSize={["24px", "xl", "28px"]}>
                                        <Text fontWeight="800" fontFamily={"EB Garamond"} color={"#333333"}>
                                            Ethanol for every industry
                                        </Text>
                                        <FiChevronRight/>
                                    </Flex>

                                    <Text mb={2} fontSize={["16px", "md", "18px"]} color={"#333333"}>
                                        Our ethanol caters to various industries, including pharmaceuticals, perfumery,
                                        home
                                        care, and beverages. Discover the perfect ethanol solution for your industry
                                        with
                                        us.
                                    </Text>
                                </Link>

                            </Flex>
                        </Flex>
                        <Flex
                            justifyContent={'center'}
                            m={[4, 10]}
                            height={["335px", "250px"]}
                            width={["auto", '50%']}
                        >
                            <Flex borderWidth="1px"
                                  borderColor={'black'}
                                  direction="column"
                                  pl={[8, 12]}
                                  pr={[8, 12]}
                                  pt={[0, 14]}
                                  pb={[0, 14]}
                                  alignContent={'center'}
                                  justifyContent={'center'}
                                  height={"100%"}
                                  _hover={{
                                      color: 'black',
                                      bg: '#D2CDBF',
                                      border: '1px solid transparent',
                                      textDecoration: "none",
                                      cursor: 'pointer',
                                      transition: 'all 0.3s ease'
                                  }}

                            >
                                <Link href={'/services/label-drinks'} _hover={{textDecoration: 'none'}}>
                                    <Flex alignItems={'center'} justifyContent={'space-between'} mb={4}
                                          fontSize={["24px", "xl", "28px"]}>
                                        <Text fontWeight="800" fontFamily={"EB Garamond"} color={"#333333"}>
                                            Craft your identity
                                        </Text>
                                        <FiChevronRight/>
                                    </Flex>

                                    <Text mb={2} fontSize={["16px", "md", "18px"]} color={"#333333"}>
                                        Craft your unique identity with our private label offerings. Let us shape your
                                        brand
                                        together.
                                    </Text>
                                </Link>

                            </Flex>
                        </Flex>
                    </Flex>
            </Box>
        </CustomBox>

)
}