// @ts-nocheck

'use client'
import {Box, Flex, Image, Text} from "@chakra-ui/react";

export const ResponsiveJourneyTimeline = ({timeline}) => {

    return (

        <Flex
            mt={40}
            gap={[10, 20, 20]}
            alignItems={'center'} alignContent={'center'}
            flexDirection={["column", "row"]} justifyContent={'center'}>
            <Box textAlign={'center'} fontSize={["24px"]} fontFamily="EB Garamond" fontWeight="bold">
                A journey of growth, skill, and unwavering dedication
            </Box>
            {timeline.map((item, index) => (
                <Flex key={index} gap={10} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                    <Flex flexDirection="column" justifyContent={'center'} alignItems={'center'}
                          alignContent={'center'}>
                        <Image src={item.imageUrl} alt={`drawing-${index}`} width={"100%"} height={"335px"}
                               objectFit="cover"/>
                        <Flex flexDirection="column">
                            <Text fontSize={"20px"} mt={4}>{item.year}</Text>
                            <Text fontSize="28px" fontFamily="EB Garamond"
                                  fontWeight="bold" width={'335px'}>{item.title}</Text>
                            <Text mt={4} fontSize={"16px"} width={'335px'}>{item.description}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            ))}

        </Flex>


    );
};
