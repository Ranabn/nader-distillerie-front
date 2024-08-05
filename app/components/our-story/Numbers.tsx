import {Box, Flex, Text, VStack} from "@chakra-ui/react";

export const Stats = ({stats}) => {
    return (
        <Flex
            justify="space-around"
            align="flex-start"
            wrap="wrap"
            mt={20}
        >
            {stats.map((stat, index) => (
                <Flex key={index} textAlign="center">
                    <Flex flexDirection='column'>
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
