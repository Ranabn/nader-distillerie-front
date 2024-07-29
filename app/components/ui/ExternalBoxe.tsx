// Import necessary Chakra UI components
import {Flex, Box, Text} from '@chakra-ui/react';
import {FiChevronRight} from "react-icons/fi";

export const ExternalBox = () => {
    return (
        <Flex
            m={12}

            justifyContent={'center'}
        >
            <Flex borderWidth="1px"
                  borderColor={'black'}
                  direction="column"
                  p={12}

            >
                <Flex alignItems={'center'} justifyContent={'space-between'} mb={4} fontSize="xl">
                    <Text fontWeight="bold" fontFamily={"EB Garamond"}>
                        Become a reseller
                    </Text>
                    <FiChevronRight/>
                </Flex>

                <Text mb={2}>
                    Distributors, retailers and food professionals—partner with us today.
                </Text>

            </Flex>

        </Flex>
    );
};
