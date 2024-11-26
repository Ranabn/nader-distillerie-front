// @ts-nocheck
'use client'
import {Box, Button, Divider, Flex, Image, Link, Text, List, UnorderedList, ListItem} from "@chakra-ui/react";
import React from "react";
import {Btn} from "@/app/components/ui/Btn";
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";
import LabelDrinks from "@/app/assets/images/label-drinks.png"
import {FiChevronRight} from "react-icons/fi";
import gifts from "@/app/assets/images/gifts.png"
import testimony1 from "@/app/assets/images/testimony1.png";
import testimony2 from "@/app/assets/images/testimony2.png";
import quotes from "@/app/assets/images/quotes.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Pagination} from "swiper/modules";
import 'swiper/css/pagination';

export const Gifts = () => {

    return (
        <Box>
            <Box p={10} maxWidth="1200px" mx="auto">
                {/* Header Section */}
                <Flex flexDirection={"column"} align="stretch" fontSize={["18px"]}>
                    <Text fontSize={["5xl", "48px"]} mb={4} fontWeight="bold" fontFamily={"EB Garamond"}>
                        Personalization for memorable gifts
                    </Text>

                    <Text fontSize="md" mb={4}>
                        We believe that every gift should tell a story. Whether it’s a corporate event, a wedding
                        celebration, or a special occasion, we create unique and thoughtfully crafted presents that
                        leave a lasting impression.
                    </Text>
                    <Image mt={4}
                           src={gifts.src}
                           alt="Bottles"
                           width={'1100px'}
                           height={'618px'}
                    />
                </Flex>

                <Divider my={10}/>

                {/* Why Us and Our Process Section */}
                <Flex justify="space-between" flexDirection={["column", "column", "row"]} gap={12}>
                    {/* Why Us */}
                    <Flex w={'45%'} flexDir='column' align="flex-start" gap={2} fontSize={["18px"]}>
                        <Text fontSize={["4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"} mb={2}>
                            Engaging with our customers
                        </Text>
                        <Text>The best gifts are born from collaboration. When you choose us, we partner with you to
                            understand your vision. Is it a celebration, a thank-you gesture, or a special milestone?
                            Knowing this helps us tailor our offer. </Text>

                    </Flex>

                    )
                    {/* Our Process */}
                    <Flex w={'45%'} flexDir='column' align="flex-start" gap={2} fontSize={["18px"]}>
                        <Text fontSize={["4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"} mb={2}>
                            Our products complemented
                        </Text>
                        <Text>The wine or spirit bottle, whether regular-sized or a charming miniature, is at the heart
                            of our gift packages. Our expertise in wine and spirits ensures that each bottle matches the
                            occasion and adds sophistication to the gift. To enhance it further, we can add
                            complementary elements of your choice, or explore new ideas together.</Text>
                    </Flex>
                </Flex>

                {/* Call to Action */}
                <Flex flexDir='column' align="center" mt={24} gap={4} mb={14}>
                    <Text fontSize={["lg", "24px"]}>
                        Planning an upcoming event? Don’t wait until the last moment.
                    </Text>
                    <Btn variant='primaryBlack' size={"md"} text='Request a consultation'/>
                </Flex>
            </Box>
            <Flex flexDirection={"column"} p={10} gap={20}>
                <Flex justify={'center'} mb={14}>
                    <Text fontSize={'48px'} fontWeight="bold" fontFamily={"EB Garamond"}>Customer testimony</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center" gap={20}>
                    <Flex flexDirection={"column"} width={"44%"} gap={10}>
                        <Image
                            src={quotes.src}
                            alt="Our Story"
                            objectFit="cover"
                            width="49px"
                        />
                        <Text fontSize={"24px"} mb={4}>It was an absolute pleasure working with Nader
                            Distilleries on
                            these super special
                            customized
                            wedding giveaways. The attention to detail, dedication and care they put into each and every
                            aspect, even down to the packaging, was like no other. Guests were raving about these
                            giveaways
                            and still do to this day! I can&lsquo;t recommend them enough.</Text>
                        <Text fontWeight={"bold"} fontSize={"20px"} textAlign={"right"}>Melissa T.</Text>
                    </Flex>
                    <Box width={"44%"}>
                        <Swiper
                            pagination={{
                                clickable: true,
                                el: ".custom-pagination", // Attach to a custom element
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            spaceBetween={0}
                        >
                            <SwiperSlide>
                                <Image
                                    src={testimony1.src}
                                    alt="Our Story"
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={testimony1.src}
                                    alt="Our Story"
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className={"custom-pagination"} />
                    </Box>

                </Flex>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Flex flexDirection={"column"} width={"44%"} gap={10}>
                        <Image
                            src={quotes.src}
                            alt="Our Story"
                            objectFit="cover"
                            width="49px"
                        />
                        <Text fontSize={"24px"} mb={4}>It was an absolute pleasure working with Nader Distilleries on
                            We were absolutely thrilled with the wedding gifts from Nader Distilleries. The personalized
                            guidance and support in bringing our vision to life were invaluable. Nader Distilleries
                            exceeded
                            our expectations! The beautiful bottles and truly qualitative beverages left a lasting
                            impression, and our guests continued to inquire about them even after the wedding.</Text>
                        <Text fontWeight={"bold"} fontSize={"20px"} textAlign={"right"}>Nada C.</Text>

                    </Flex>
                    <Box width={"44%"}>
                        <Swiper
                            pagination={{
                                clickable: true,
                                el: ".custom-pagination-2", // Unique class for this Swiper
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            spaceBetween={0}
                        >
                            <SwiperSlide>
                                <Image
                                    src={testimony2.src}
                                    alt="Testimonial 2 Slide 1"
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={testimony2.src}
                                    alt="Testimonial 2 Slide 2"
                                    objectFit="cover"
                                    width="100%"
                                    height="100%"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className={"custom-pagination-2"} />
                    </Box>
                </Flex>
            </Flex>
            <Flex mb={12}>
                <Flex
                    width={"50%"}
                    m={10}
                    justifyContent={'center'}
                >
                    <Flex borderWidth="1px"
                          borderColor={'black'}
                          direction="column"
                          p={12}
                          pt={14}
                          pb={14}
                          alignContent={'center'}
                          justifyContent={'center'}
                          _hover={{cursor: 'pointer'}}

                    >
                        <Link href={'/contact'} _hover={{textDecoration: 'none'}}>
                            <Flex alignItems={'center'} justifyContent={'space-between'} mb={4}
                                  fontSize={["xl", "28px"]}>
                                <Text fontWeight="800" fontFamily={"EB Garamond"} color={"#333333"}>
                                    Craft your identity
                                </Text>
                                <FiChevronRight/>
                            </Flex>

                            <Text mb={2} fontSize={["md", "18px"]} color={"#333333"}>
                                Craft your unique identity with our private label offerings. Let us shape your brand
                                together.
                            </Text>
                        </Link>

                    </Flex>
                </Flex>
                <Flex
                    justifyContent={'center'}
                    m={10}
                    height={"250px"}
                    width={"50%"}
                >
                    <Flex borderWidth="1px"
                          borderColor={'black'}
                          direction="column"
                          p={12}
                          pt={14}
                          alignContent={'center'}
                          justifyContent={'center'}
                          height={"100%"}

                          pb={14}
                          _hover={{cursor: 'pointer'}}

                    >
                        <Link href={'/contact'} _hover={{textDecoration: 'none'}}>
                            <Flex alignItems={'center'} justifyContent={'space-between'} mb={4}
                                  fontSize={["xl", "28px"]}>
                                <Text fontWeight="800" fontFamily={"EB Garamond"} color={"#333333"}>
                                    Customize your gifts
                                </Text>
                                <FiChevronRight/>
                            </Flex>

                            <Text mb={2} fontSize={["md", "18px"]} color={"#333333"}>
                                Be it company gifts, wedding giveaways, or any special occasion, we design gifts that
                                leave
                                a lasting impression. Make your events memorable with our customized gifts.
                            </Text>
                        </Link>

                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}