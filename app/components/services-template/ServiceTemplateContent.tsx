// @ts-nocheck

import {Box, Button, Divider, Flex, Image, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {Btn} from "@/app/components/ui/Btn";
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";

export const ServiceTemplateContent = () => {

    return (
        <Box>
            <Box p={10} maxWidth="1100px" mx="auto">
                {/* Header Section */}
                <VStack spacing={4} align="stretch">
                    <Text fontSize="5xl" fontWeight="bold" fontFamily={"EB Garamond"}>
                        Craft your unique private label drinks
                    </Text>
                    <Text fontSize="md">
                        Creating your own beverage can be a complex task, but we are here to simplify it.
                    </Text>
                    <Text fontSize="md">
                        With our extensive industry experience, we are equipped to bring your brand vision to life.
                        Whether
                        you are seeking premium or entry-level products, we specialize in customizing offerings to meet
                        your
                        unique needs.
                    </Text>
                    <Image mt={4}
                           src="https://images.unsplash.com/photo-1508253730651-e5ace80a7025?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                           alt="Bottles"
                           width={'100%'}
                    />
                </VStack>

                <Divider my={10}/>

                {/* Why Us and Our Process Section */}
                <Flex justify="space-between" flexDirection={["column", "column", "row"]} gap={12}>
                    {/* Why Us */}
                    <Flex w={'70%'} flexDir='column' align="flex-start" gap={2}>
                        <Text fontSize="4xl" fontWeight="bold" fontFamily={"EB Garamond"} mb={4}>
                            Why us?
                        </Text>
                        <Text fontSize="md">
                            <strong>Wide Product Range:</strong> Build a full comprehensive portfolio.
                        </Text>
                        <Text fontSize="md">
                            <strong>Quality Commitment:</strong> Consistently align your brand with excellence.
                        </Text>
                        <Text fontSize="md">
                            <strong>Trust and Transparency:</strong> A seamless journey in shaping your brand.
                        </Text>
                    </Flex>

                    {/* Our Process */}
                    <Flex flexDir='column' align="flex-start" gap={2}>
                        <Text fontSize="4xl" fontWeight="bold" fontFamily={"EB Garamond"} mb={4}>
                            Our process
                        </Text>
                        <Text fontSize="md">
                            <strong>1. Consultation:</strong> We start by understanding your needs, target market, and
                            brand
                            vision.
                        </Text>
                        <Text fontSize="md">
                            <strong>2. Development:</strong> Based on your input, we develop a product that aligns with
                            your
                            brand vision.
                        </Text>
                        <Text fontSize="md">
                            <strong>3. Production:</strong> Once the product development is approved, we move to
                            production,
                            ensuring quality at every step.
                        </Text>
                        <Text fontSize="md">
                            <strong>4. Delivery:</strong> We deliver the finished product, ready for you to introduce to
                            your market.
                        </Text>
                    </Flex>
                </Flex>

                {/* Call to Action */}
                <Flex flexDir='column' align="center" mt={20} gap={4}>
                    <Text fontSize="lg">
                        Ready to build your brand with us?
                    </Text>
                    <Btn variant='primaryBlack' text='Request a consultation'/>


                </Flex>
            </Box>
            <Flex>
                <ExternalBox/>
                <ExternalBox/>
            </Flex>
        </Box>
    )
}