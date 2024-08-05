'use client'
import {Box, Flex, Image, Text} from "@chakra-ui/react";

export const ResponsiveJourneyTimeline = ({timeline}) => {

    return (
        <Flex position="relative">
            <Flex
                alignItems="center"
                height="100%"
                flexDirection="row">
                <Flex
                    gap={20}
                    alignItems={'center'}
                    flexDirection={["column", "row"]}>
                    <Box fontSize="4xl" fontFamily="EB Garamond" fontWeight="bold">
                        A journey of growth, skill, and unwavering dedication
                    </Box>
                    {timeline.map((item, index) => (
                        <Flex key={index} gap={10}>
                            <Flex flexDirection="column" minWidth="300px">
                                <Box width={420} height={420}>
                                    <Image src={item.imageUrl} alt="drawing" width="100%" height="100%"
                                           objectFit="cover"/>
                                </Box>
                                <Flex flexDirection="column">
                                    <Text mt={4}>{item.year}</Text>
                                    <Text fontSize="4xl" fontFamily="EB Garamond"
                                          fontWeight="bold">{item.title}</Text>
                                    <Text mt={4}>{item.description}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}

                </Flex>


            </Flex>
        </Flex>
    );
};
