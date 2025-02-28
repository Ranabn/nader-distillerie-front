// @ts-nocheck

'use client'
import {Box, Flex, Image, Text} from "@chakra-ui/react";

export const ResponsiveJourneyTimeline = ({timeline}) => {

    return (

        <Box
            mt={40}
            alignItems={'center'} alignContent={'center'}
            flexDirection={["column", "row"]} justifyContent={'center'}>
            <Box textAlign={'center'} fontSize={["24px"]} fontFamily="EB Garamond" fontWeight="bold">
                A journey of growth, skill, and unwavering dedication
            </Box>
            {timeline.map((item, index) => (
                <Box key={index} justifyContent={'center'} alignItems={'center'} alignContent={'center'} my={10}
                >
                    <Box flexDirection="column" justifyContent={'center'} alignItems={'center'}
                          alignContent={'center'}
                    >
                        <Image src={item.imageUrl} alt={`drawing-${index}`} width={"100%"} height={"335px"}
                               objectFit="cover"/>
                        <Flex flexDirection="column" 
                        >
                            <Text fontSize={"20px"} mt={4}>{item.year}</Text>
                            <Text fontSize="28px" fontFamily="EB Garamond"
                                  fontWeight="bold" >{item.title}</Text>
                            <Text mt={4} fontSize={"16px"} >{item.description}</Text>
                        </Flex>
                    </Box>
                </Box>
            ))}

        </Box>


    );
};
