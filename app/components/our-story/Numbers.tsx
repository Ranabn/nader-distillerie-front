import {Box, Flex, Text, VStack} from "@chakra-ui/react";

export const Stats = () => {
    const stats = [
        {value: "74", label: "Years of experience"},
        {value: "30", label: "Countries served"},
        {value: "84K", label: "Bottles per day capacity"},
        {value: "15 000 m²", label: "Of premises"},
    ];

    return (
        <Flex
            justify="space-around"
            align="flex-start"
            wrap="wrap"
            p={20}
        >
            {stats.map((stat, index) => (
                <Flex key={index} textAlign="center">
                    <Flex flexDirection='column'>
                        <Text fontSize="5xl" fontWeight="bold" fontFamily={"EB Garamond"}>
                            {stat.value}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            {stat.label}
                        </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};

