import {Flex, Text, Box} from "@chakra-ui/react";
import {PortableText} from '@portabletext/react';

// Define the TypeScript interface for the Brand object
interface Brand {
    brand_name: string;
    brand_quote: string;
    brand_description_first_p: any;
    brand_description_sec_p: any;
}

// Define the HeaderBrands component with typed props
export const HeaderBrands = ({brand}: { brand: Brand }) => {
    if (!brand) {
        return null; // or some loading state
    }

    return (
        <Flex minHeight={'350px'}
              flexDirection="column" mt={[4, 0, 0]} p={[4, 8, 8]} w={['100%', '45%', '45%']} mb={[0, 16, 16]}>
            <Text fontSize={["48px", "5xl", "60px"]} fontFamily="EB Garamond" fontWeight="800">
                {brand.brand_name}
            </Text>
            <Text mb={4} fontSize={["24px", "3xl", "32px"]} fontWeight="300" textTransform='uppercase'>
                {brand.brand_quote}
            </Text>
            <Box mb={4} fontSize={["16px", "18px"]}>
                <PortableText value={brand.brand_description_first_p}/>
            </Box>
            <Box fontSize={["16px", "18px"]}>
                <PortableText value={brand.brand_description_sec_p}/>
            </Box>
        </Flex>
    );
};