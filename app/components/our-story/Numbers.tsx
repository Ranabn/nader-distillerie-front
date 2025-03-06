// @ts-nocheck
'use client'
import {Box, Flex, Text, VStack} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export const Stats = ({stats}) => {
    const [calculatedStats, setCalculatedStats] = useState(stats);

    useEffect(() => {
        // Calculate the number of years for the first stat based on the date
        if (calculatedStats && calculatedStats[0] && calculatedStats[0].date) {
            const statDate = new Date(calculatedStats[0].date);
            const currentDate = new Date();

            // Calculate difference in time
            const diffTime = Math.abs(currentDate - statDate);
            const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); // Difference in years

            // Update the first stat with the calculated value
            setCalculatedStats(prevStats => {
                const updatedStats = [...prevStats];
                updatedStats[0] = {
                    ...updatedStats[0],
                    value: diffYears.toString(), // Update the first stat's value
                };
                return updatedStats;
            });
        }
    }, [stats]);

    return (
        <Flex
            justifyContent={["center", "space-around"]}
            align="flex-start"
            wrap="wrap"
            mt={20}
            flexDirection={['column', 'column', 'row']}
            width={["100%", '100vw']}
            alignItems={['center', 'center', 'flex-start']}
            gap={[10, 10, 0]}
        >
            {calculatedStats.map((stat, index) => (
                <Flex key={index} textAlign="center" justifyContent="center" mb={[4, 4, 0]}>
                    <Flex alignItems="center" flexDirection='column'>
                        <Text fontSize={["5xl", "72px"]} fontWeight="bold" fontFamily={"EB Garamond"}>
                            {stat.value}
                        </Text>
                        <Text fontSize={["sm", "18px"]}>
                            {stat.label}
                        </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};
