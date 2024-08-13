// @ts-nocheck

import {Box, Flex, Text, VStack} from "@chakra-ui/react";

export const Stats = ({stats}) => {
    return (
        <Flex
            justifyContent={["center", "space-around"]}
            align="flex-start"
            wrap="wrap"
            mt={20}
            flexDirection={['column', 'column', 'row']}
            width={'100vw'}
            alignItems={['center', 'center', 'flex-start']}
            gap={[10, 10, 0]}
        >
            {stats.map((stat, index) => (
                <Flex key={index} textAlign="center" justifyContent="center" mb={[4, 4, 0]}>
                    <Flex alignItems="center" flexDirection='column'>
                        <Text fontSize="5xl" fontWeight="bold" fontFamily={"EB Garamond"}>
                            {stat.value}
                        </Text>
                        <Text fontSize="sm">
                            {stat.label}
                        </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};
