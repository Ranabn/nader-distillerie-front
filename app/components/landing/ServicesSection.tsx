// @ts-nocheck
'use client'
import {Box, Flex, Heading, Text, Button, Image, VStack, Link, useQuery} from "@chakra-ui/react";
import React from "react";
import Craft from "@/app/assets/images/services/craft-your-identity.jpg"
import craft2 from "@/app/assets/images/services/usine02.jpg"
import Noel from "@/app/assets/images/noel.jpg"

import {Btn} from "@/app/components/ui/Btn";
import {usePathname} from "next/navigation";
import CustomBox from "../ui/CustomBox";

export const SectionItem = ({subtitle, title, description, buttonText, imageSrc, link, isLast}) => (
    <Flex
        width={'100%'}
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        mt={8}
        mb={isLast ? [20, 6, 20] : [0, 6, 20]}
        gap={[4, 12, 32]}
        alignItems="center"
    >
        <Box width={["100%", "100%", "100%", "100%", 650]} minWidth={["100vw", "400px","400px", "815px"]}>
            <Image src={imageSrc} alt={title} objectFit="cover"
                   height={["200px", "459px", "459px"]}/>
        </Box>

        <Flex flexDirection={'column'} width={'100%'}>
            <Text fontSize={["20px", "24px", "24px"]} color={'#12191F'}>{subtitle}</Text>
            <Flex flexDirection="column" gap={2}>
                <Heading fontSize={["28px", "4xl", "48px"]} fontWeight="bold" mb={0}
                         fontFamily={"EB Garamond"}>{title}</Heading>
                <Text lineHeight={["24px", "28px"]} fontSize={["16px", "18px", "18px"]}>{description}</Text>
                <Box w={['100%', '40%', '40%']} display={['none', 'flex']} mt={2}>
                    <Link _hover={{textDecoration: "none"}} href={`/services/${link}`}>
                        <Btn size={'md'} variant="secondary" text={buttonText}/>
                    </Link>
                </Box>
                <Link _hover={{textDecoration: "none"}} href={`/services/${link}`}>
                    <Box w={['100%', '40%', '40%']} display={['flex', 'none']} mt={2}>
                        <Btn size={'md'} variant="secondary" text={buttonText}/>
                    </Box>
                </Link>
            </Flex>
        </Flex>
    </Flex>
);

const ServiceSection = () => {
    const pathname = usePathname()
    return (
        <Box as="section" mb={pathname === '/services' ? 10 : 0} py={[6, 8, 12]} p={[4, 8, 8]} bg={'white'}>
            <Heading display={[pathname === '/services' ? "none" : "flex", 'none']}
                     fontSize="28px"
                     mb={[10, 14, 14]}
                     fontWeight="bold"
                     fontFamily='EB Garamond, serif'
            >
                Our Services
            </Heading>
            <CustomBox>
                <SectionItem
                    subtitle="Private Label"
                    title="Craft your identity"
                    description="Craft your unique identity with our private label offerings. We excel at tailoring products, whether premium or entry level, to meet the distinctive needs of our clients. Together we can shape your brand."
                    buttonText="Build your brand"
                    link={"label-drinks"}
                    imageSrc={Craft.src}
                />

                <SectionItem
                    subtitle="Raw Material"
                    title="Ethanol for every industry"
                    description="Supply your industry with our versatile ethanol. Catering to pharmaceuticals, perfumery, home care, and beverages, we provide the perfect ethanol solution for your specific needs."
                    buttonText="Purchase ethanol"
                    link={"ethanol"}
                    imageSrc={craft2.src}
                />

                <SectionItem
                    subtitle="Events"
                    title="Customize your gifts"
                    description="Make your events memorable with our customized gifts. Be it company gifts, wedding giveaways, or any special occasion, we design gifts that leave a lasting impression. Your vision is our inspiration."
                    buttonText="Order your gifts"
                    link={"gift"}
                    imageSrc={Noel.src}
                    isLast={true}
                />
            </CustomBox>
        </Box>
    );
};

export default ServiceSection;