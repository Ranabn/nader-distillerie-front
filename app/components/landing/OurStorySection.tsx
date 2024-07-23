// components/landing/OurStorySection.js

import React from "react";
import {Box, Flex, Text, Image, Button, Heading} from "@chakra-ui/react";
import OurStory from "@/app/assets/images/our-story.png"
import {Btn} from "@/app/components/ui/Btn";

export const OurStorySection = () => (
    <Box p={12}>
        <Flex direction={{base: "column", md: "row"}} align="center" mx="auto" gap={12}>
            <Flex flexDirection={'column'} gap={8} flex="1" pr={{base: 0, md: 8}} mb={{base: 4, md: 0}}>
                <Heading fontSize="4xl" fontWeight="bold" mb={2} fontFamily={"EB Garamond"}>Our Story</Heading>
                <Text mb={2}>
                    Established in 1950 in the picturesque mountain village of Mtein, Lebanon, our family-owned company
                    has woven a narrative deeply rooted in the distillation of Arak, our national aniseed spirit.
                </Text>
                <Text>
                    Evolving over the years, we have expanded our craft to encompass a diverse spectrum of spirits,
                    wines, and more.
                </Text>
                <Box w={100}>
                    <Btn variant="secondary" text="Discover our legacy"/>

                </Box>
            </Flex>
            <Box flex="1">
                <Image src={OurStory.src} alt="Our Story" objectFit="cover" height={500}/>
            </Box>
        </Flex>
    </Box>
);
