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
export const ExploreMore = ({brands}: ExploreMoreProps) => {
    return (
        <Flex flexDirection="column" p={12} backgroundColor="#E8E5DC">
            <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="800">
                Explore more brands
            </Text>
            <Divider border="black" colorScheme="blackAlpha" mb={8}/>
            <Flex gap={8}>
                {brands.map((brand, index) => (
                    <Card key={index} boxShadow="none" borderRadius="none">
                        <CardBody>
                            <Flex flexDirection="column" justifyContent="center" textAlign="center">
                                <Text>{brand.category}</Text>
                                <Text fontSize="xl" fontFamily="EB Garamond" fontWeight="800">
                                    {brand.name}
                                </Text>
                                <Image src={brand.imageSrc} alt={brand.name} mr={8} ml="auto"/>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
};
