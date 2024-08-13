// @ts-nocheck

// Import necessary Chakra UI components
import {Flex, Box, Text, Link} from '@chakra-ui/react';
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
                  pt={14}
                  pb={14}
                  width={'45%'}
                  _hover={{cursor: 'pointer'}}

            >
                <Link href={'/contact'} _hover={{textDecoration: 'none'}}>
                    <Flex alignItems={'center'} justifyContent={'space-between'} mb={4} fontSize="xl">
                        <Text fontWeight="800" fontFamily={"EB Garamond"}>
                            Become a reseller
                        </Text>
                        <FiChevronRight/>
                    </Flex>

                    <Text mb={2}>
                        Distributors, retailers and food professionals—partner with us today.
                    </Text>
                </Link>

            </Flex>
        </Flex>
    )
        ;
};
