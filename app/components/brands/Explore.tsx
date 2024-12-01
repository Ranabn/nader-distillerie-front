// components/ExploreMore.jsx
'use client'

import {Card, Flex, Text, CardBody, Image, Box, Link} from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";
import React from "react";

interface Brand {
    category: string;
    name: string;
    imageSrc: string;
}

// Define the props type for the ExploreMore component
interface ExploreMoreProps {
    brands: Brand[];
}

// Define the ExploreMore component with typed props
export const ExploreMore = ({brands}: any) => {

    return (
        <Flex flexDirection="column" p={12} backgroundColor="#F6F4ED">
            <Flex alignItems={'center'} alignContent={'center'} justifyContent={'space-between'} width={'100%'}>
                <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="800">
                    Explore more brands
                </Text>
                <Link href={"/brands"}>

                    <Flex
                        alignItems={'center'} alignContent={'center'}
                        gap={2}
                        position="relative"
                        _hover={{
                            "&::after": {
                                content: '""',
                                // position: "absolute",
                                // bottom: "-2px",
                                left: 0,
                                height: "0.8px",
                                backgroundColor: "currentColor",
                                // animation: `${lineAnimation} 0.3s forwards`
                            }
                        }}
                    >
                        <Text fontSize={["sm", "18px"]} _hover={{cursor: 'pointer'}}>See all brands</Text>
                        <FiArrowRight/>
                    </Flex>
                </Link>

            </Flex>
            <Box
                backgroundColor="black"
                height="1px"
                width="100%"
                mb={10}
                mt={2}
            />
            <Flex gap={8}>
                {/*@ts-ignore*/}
                {brands.slice(0, 3).map((brand, index) => ( // Limit to 3 items
                    <Card key={index} boxShadow="none" borderRadius="none" width={["33%", "453px"]} height={"624px"}>
                        <CardBody>
                            <Flex flexDirection="column" height={"100%"} justifyContent="space-between"
                                  textAlign="center">
                                <Flex flexDirection="column">
                                    {/*@ts-ignore*/}
                                    <Text
                                        fontSize={["xl", "18px"]}>{String(brand?.categories || '').toUpperCase()}</Text>
                                    <Text fontSize={["xl", "32px"]} fontFamily="EB Garamond" fontWeight="800">
                                        {brand.brand_name}
                                    </Text>
                                </Flex>
                                <Image
                                    src={brand.mainImage}
                                    alt={brand.name}
                                    objectFit="contain"
                                    width="100%"
                                    maxHeight="400px"
                                    aspectRatio={1}
                                />
                                <Flex></Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
};
