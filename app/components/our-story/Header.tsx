'use client'
import {Box, Flex, Heading, Icon, Image, Text} from "@chakra-ui/react";
import Background from "@/app/assets/images/our-story.png";
import {Btn} from "@/app/components/ui/Btn";
import React from "react";
import {FiChevronDown} from "react-icons/fi";


export const OurStoryHeader = () => {


    return (
        <Flex
            justify="center"
            align="center"
            width="100vw"
            height="100vh"
            position="relative"
            overflow="hidden"
        >
            <Image
                src={Background.src}
                alt={"background"}
                layout="fill"
                objectFit="cover"
                quality={100}
                width="100vw"

            />

            <Flex
                position="absolute"
                zIndex={1}
                justifyContent={'center'}
                flexDirection='column'
                p={32}
            >
                <Heading color={'black'} fontFamily={"EB Garamond"} fontSize="4xl" fontWeight="bold" mb={8} as={"h2"}>
                    Our Purpose: Accompanying Special Moments
                </Heading>
                <Text fontSize="md" mb={8} color={'black'} >
                    From the heart of our family, we invite you to share in our passion. We are not just about our
                    products; we are about being there for life's special moments. Whether it is a heartfelt
                    conversation, a spontaneous toast, or a cherished celebration, our products are your companions in
                    these memorable experiences, bringing people together and creating lasting bonds.
                </Text>
                <Text fontSize="md" mb={8} color={'black'}>
                    Life’s precious moments deserve nothing less than perfection, nature crafted in a bottle.
                    Guided by enduring values of integrity, adaptability, and an unwavering commitment to quality, we
                    have earned a regional reputation for excellence and trust in the beverage industry, distributing
                    our products worldwide, and reaching enthusiasts across the globe.
                </Text>

            </Flex>
            <Box
                position="absolute"
                bottom="20px"
                color="black"
                zIndex={1}
                width="100%"
                textAlign="center"
            >
                <Text fontSize="sm">
                    Scroll down
                </Text>
                <Icon as={FiChevronDown} w={6} h={6}/>
            </Box>
        </Flex>
    )
}