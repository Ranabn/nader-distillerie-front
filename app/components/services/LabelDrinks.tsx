// @ts-nocheck

import {Box, Button, Divider, Flex, Image, Link, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {Btn} from "@/app/components/ui/Btn";
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";
import LabelDrink from "@/app/assets/images/label-drinks.png"
import {FiChevronRight} from "react-icons/fi";

export const LabelDrinks = () => {

    return (
        <Box>
            <Box p={[4, 8, 10]} maxWidth="1200px" mx="auto">
                {/* Header Section */}
                <Flex flexDirection={"column"} align="stretch" fontSize={["16px", "18px"]}>
                    <Text fontSize={["28px", "5xl", "48px"]} mb={4} fontWeight="bold" fontFamily={"EB Garamond"}>
                        Craft your unique private label drinks
                    </Text>
                    <Text mb={4}>
                        Creating your own beverage can be a complex task, but we are here to simplify it.
                    </Text>
                    <Text mb={4}>
                        With our extensive industry experience, we are equipped to bring your brand vision to life.
                        Whether you are seeking premium or entry-level <br/> products, we specialize in customizing
                        offerings
                        to meet your unique needs.
                    </Text>
                    <Image mt={4}
                           src={LabelDrink.src}
                           alt="Bottles"
                           width={["335px", '1100px']}
                           height={["200px", '618px']}
                    />
                </Flex>


                {/* Why Us and Our Process Section */}
                <Flex mt={[16,16,32]} fontSize={["16px", "18px"]} justify="space-between" flexDirection={["column", "column", "row"]}
                      gap={12}>
                    {/* Why Us */}
                    <Flex w={['100%', '70%', '70%']} flexDir='column' align="flex-start" gap={2}>
                        <Text fontSize={["28px", "4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"} mb={4}>
                            Why us?
                        </Text>
                        <Text>
                            <strong>Wide Product Range:</strong> Build a full comprehensive portfolio.
                        </Text>
                        <Text>
                            <strong>Quality Commitment:</strong> Consistently align your brand with excellence.
                        </Text>
                        <Text>
                            <strong>Trust and Transparency:</strong> A seamless journey in shaping your brand.
                        </Text>
                    </Flex>

                    {/* Our Process */}
                    <Flex flexDir='column' align="flex-start" gap={[0,0,2]}  fontSize={["16px", "18px"]}>
                        <Text fontSize={["28px", "4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"} mb={4}>
                            Our process
                        </Text>
                        <Text>
                            <strong>1. Consultation:</strong> We start by understanding your needs, target market, and
                            brand
                            vision.
                        </Text>
                        <Text>
                            <strong>2. Development:</strong> Based on your input, we develop a product that aligns with
                            your
                            brand vision.
                        </Text>
                        <Text>
                            <strong>3. Production:</strong> Once the product development is approved, we move to
                            production,
                            ensuring quality at every step.
                        </Text>
                        <Text>
                            <strong>4. Delivery:</strong> We deliver the finished product, ready for you to introduce to
                            your market.
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    flexDir="column"
                    align="center"
                    width="100%"
                    justifyContent="center"
                    mt={24}
                    gap={4}
                    mb={10}
                >
                    <Text fontSize={["20px", "lg", "24px"]} textAlign="center">
                        Ready to build your brand with us?
                    </Text>
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="center"
                    >
                        <Box w={["100%", "50%", "20%"]} mr={[0, 10]}>
                            <Link href="/contact?CTA=brand" _hover={{textDecoration: "none"}}>
                                <Btn
                                    variant="primaryBlack"
                                    size="md"
                                    text="Request a consultation"
                                    width="100%" // Button spans the entire width of its container
                                />
                            </Link>
                        </Box>
                    </Box>
                </Flex>


            </Box>
            <Flex mb={12} flexDirection={['column', 'row']}          >
                <Flex
                    m={[4, 10]}
                    justifyContent={'center'}
                    height={["335px", "320px"]}

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
                              border: '1px solid transparent' ,
                              textDecoration: "none",
                              cursor:'pointer',
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
                                Our ethanol caters to various industries, including pharmaceuticals, perfumery, home
                                care,
                                and beverages. Discover the perfect ethanol solution for your industry with us.
                            </Text>
                        </Link>

                    </Flex>
                </Flex>
                <Flex
                    justifyContent={'center'}
                    m={[4, 10]}
                    height={["335px", "320px"]}
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
                              border: '1px solid transparent' ,
                              textDecoration: "none",
                              cursor:'pointer',
                              transition: 'all 0.3s ease'
                          }}

                    >
                        <Link href={'/services/gift'} _hover={{textDecoration: 'none'}}>
                            <Flex alignItems={'center'} justifyContent={'space-between'} mb={4}
                                  fontSize={["24px", "xl", "28px"]}>
                                <Text fontWeight="800" fontFamily={"EB Garamond"} color={"#333333"}>
                                    Customize your gifts
                                </Text>
                                <FiChevronRight/>
                            </Flex>

                            <Text mb={2} fontSize={["16px", "md", "18px"]} color={"#333333"}>
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