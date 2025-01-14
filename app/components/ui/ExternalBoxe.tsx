// @ts-nocheck

// Import necessary Chakra UI components
import {Flex, Box, Text, Link} from '@chakra-ui/react';
import {FiChevronRight} from "react-icons/fi";

export const ExternalBox = () => {
    return (
        <Flex
            m={[0, 12]}
            p={4}
            justifyContent={'center'}
        >
            <Flex borderWidth="1px"
                  borderColor={'black'}
                  direction="column"
                  pl={[8, 12]}
                  pr={[8, 12]}
                  pt={[8, 14]}
                  pb={[8, 14]}
                  width={["100%", "45%", '678px']}
                  _hover={{
                      color: 'black',
                      bg: '#D2CDBF',
                      border: '1px solid transparent' ,
                      textDecoration: "none",
                      cursor:'pointer',
                      transition: 'all 0.3s ease'
                  }}

            >
                <Link href={'/contact'} _hover={{textDecoration: 'none'}}>
                    <Flex alignItems={'center'} justifyContent={'space-between'} mb={4} fontSize={["xl", "28px"]}>
                        <Text fontWeight="800" fontFamily={"EB Garamond"}>
                            Become a reseller
                        </Text>
                        <FiChevronRight/>
                    </Flex>

                    <Text mb={2} fontSize={["md", "18px"]}>
                        Distributors, retailers and food professionals—partner with us today.
                    </Text>
                </Link>

            </Flex>
        </Flex>
    )
        ;
};
