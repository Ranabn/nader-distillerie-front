// @ts-nocheck

import {Box, Button, Divider, Flex, Image, Link, Text, List, UnorderedList, ListItem} from "@chakra-ui/react";
import React from "react";
import {Btn} from "@/app/components/ui/Btn";
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";
import LabelDrinks from "@/app/assets/images/label-drinks.png"
import {FiChevronRight} from "react-icons/fi";
import EthanolImg from "@/app/assets/images/ethanol_service.png"

export const Ethanol = () => {

    return (
        <Box>
            <Box p={[4, 8, 10]} maxWidth="1200px" mx="auto">
                {/* Header Section */}
                <Flex flexDirection={"column"} align="stretch" fontSize={["16px", "18px"]}>
                    <Text fontSize={["28px", "5xl", "48px"]} mb={4} fontWeight="bold" fontFamily={"EB Garamond"}>
                        Find the right ethanol grade for your needs
                    </Text>

                    <Text  mb={4}>
                        Finding the right ethanol grade is crucial for each industry. Catering to pharmaceuticals,
                        perfumery, home care, and beverages, we provide the perfect ethanol solution for your specific
                        needs.
                    </Text>
                    <Image mt={4}
                           src={EthanolImg.src}
                           alt="Bottles"
                           width={["335px", '1100px']}
                           height={["200px", '618px']}
                    />
                </Flex>

                <Divider my={10}/>

                {/* Why Us and Our Process Section */}
                <Flex fontSize={["16px", "18px"]} justify="space-between" flexDirection={["column", "column", "row"]}
                      gap={12}>

                    <Flex w={['100%', '70%', '45%']} flexDir='column' align="flex-start" gap={2}>
                        <Text fontSize={["28px", "4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"} mb={4}>
                            Ethanol grades
                        </Text>
                        <Text>Our broad selection of food-grade ethanol includes the following grades: </Text>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                <strong>Anhydrous Pure Grain Ethanol: </strong> Ideal for precise applications in
                                laboratories, chemical synthesis, and industrial processes.
                            </ListItem>
                            <ListItem>
                                <strong>Neutral Grain Ethanol:</strong> Perfect for blending, infusions, or other
                                culinary uses.
                            </ListItem>
                            <ListItem>
                                <strong>Neutral Molasses Ethanol:</strong> A versatile product for a range of
                                applications.
                            </ListItem>
                            <ListItem>
                                <strong>Grape Ethanol: </strong> Specifically used in the food and beverage industries.
                            </ListItem>
                        </UnorderedList>
                    </Flex>
                    {/* Our Process */}
                    <Flex flexDir='column' align="flex-start" gap={2} fontSize={["16px", "18px"]}>
                        <Text fontSize={["28px", "4xl", "48px"]} fontWeight="bold" fontFamily={"EB Garamond"} mb={4}>
                            Supply solutions
                        </Text>
                        <Text>We offer flexible packaging options, ranging from 10 to 30L jerricans,<br/> to 250L drums,
                            and
                            bulk supply in tankers.</Text>
                    </Flex>
                </Flex>

                {/* Call to Action */}
                <Flex flexDir='column' align="center" mt={24} gap={4} mb={10}>
                    <Text fontSize={["20px", "lg", "24px"]} textAlign="center">
                        Need ethanol? Contact us for the best solution.
                    </Text>
                    <Box w={["100%", "50%", "20%"]} mr={[0]}>
                        <Link href={"/contact"} _hover={{textDecoration: "none"}}>
                            <Btn variant='primaryBlack' size={"md"} text='Request a quote'/>
                        </Link>
                    </Box>
                </Flex>
            </Box>
            <Flex mb={12} flexDirection={['column', 'row']}>
                <Flex
                    m={[4, 10]}
                    justifyContent={'center'}
                    height={["335px", "250px"]}
                >
                    <Flex borderWidth="1px"
                          borderColor={'black'}
                          direction="column"
                          p={[8, 12]}
                          pt={[0, 14]}
                          pb={[0, 14]}
                          alignContent={'center'}
                          justifyContent={'center'}
                          _hover={{cursor: 'pointer'}}

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
                                Craft your unique identity with our private label offerings. Let us shape your brand
                                together.
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
                          _hover={{cursor: 'pointer'}}

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