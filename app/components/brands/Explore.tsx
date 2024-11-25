// components/ExploreMore.jsx
'use client'

import {Card, Flex, Text, CardBody, Image, Divider} from "@chakra-ui/react";

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
        <Flex flexDirection="column" p={12} backgroundColor="#E8E5DC">
            <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="800">
                Explore more brands
            </Text>
            <Divider border="black" colorScheme="blackAlpha" mb={8}/>
            <Flex gap={8}>
                {/*@ts-ignore*/}
                {brands.slice(0, 3).map((brand, index) => ( // Limit to 3 items
                    <Card key={index} boxShadow="none" borderRadius="none" width={["33%", "453px"]} height={"624px"}>
                        <CardBody>
                            <Flex flexDirection="column" height={"100%"} justifyContent="space-between" textAlign="center">
                                <Flex flexDirection="column">
                                    <Text>{brand.categories}</Text>
                                    <Text fontSize="xl" fontFamily="EB Garamond" fontWeight="800">
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
