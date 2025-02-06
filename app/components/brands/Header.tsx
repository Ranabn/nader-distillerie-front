// @ts-nocheck

import {PortableText} from '@portabletext/react';
import {Box, Text} from "@chakra-ui/react";

const components = {
    block: {
        normal: ({children}) => <Text mb={4}>{children}</Text>, // Adds spacing
        h1: ({children}) => <Text as="h1" fontSize="2xl" fontWeight="bold">{children}</Text>,
        h2: ({children}) => <Text as="h2" fontSize="xl" fontWeight="semibold">{children}</Text>,
        h3: ({children}) => <Text as="h3" fontSize="lg" fontWeight="medium">{children}</Text>,
    },
};

export const HeaderBrands = ({brand}: { brand: Brand }) => {
    if (!brand) return null;

    return (
        <Box p={[4, 8]} w={['100%', '45%']} mb={[0, 6]}>
            <Text fontSize={["48px", "5xl", "60px"]} fontFamily="EB Garamond" fontWeight="800">
                {brand.brand_name}
            </Text>
            <Text mb={6} mt={4} fontSize={["24px", "3xl", "32px"]} fontWeight="300" textTransform='uppercase'>
                {brand.brand_quote}
            </Text>
            <Box fontSize={["16px", "18px"]}>
                <PortableText value={brand.brand_description_first_p} components={components}/>
            </Box>
        </Box>
    );
};
