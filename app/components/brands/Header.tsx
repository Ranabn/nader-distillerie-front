import {Flex, Text, Box} from "@chakra-ui/react";
import {PortableText} from '@portabletext/react';

export const HeaderBrands = ({brand}) => {
    if (!brand) {
        return null; // or some loading state
    }

    return (
        <Flex             minHeight={'350px'}
                          flexDirection="column" p={12} w={'50%'} mb={16}>
            <Text fontSize="5xl" fontFamily="EB Garamond" fontWeight="800">
                {brand.brand_name}
            </Text>
            <Text mb={4} fontSize="3xl" fontWeight="300">
                {brand.brand_quote}
            </Text>
            <Box mb={4}>
                <PortableText value={brand.brand_description_first_p}/>
            </Box>
            <Box>
                <PortableText value={brand.brand_description_sec_p}/>
            </Box>
        </Flex>
    );
};