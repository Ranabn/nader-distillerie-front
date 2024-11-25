// @ts-nocheck

import {Box, Flex, Heading, Text, Button, Image, VStack} from "@chakra-ui/react";
import React from "react";
import Craft from "@/app/assets/images/services/usine01.png"
import Noel from "@/app/assets/images/services/usine02.png"
import {Btn} from "@/app/components/ui/Btn";

const SectionItem = ({subtitle, title, description, buttonText, imageSrc}) => (
    <Flex flexDirection={['column', 'column', 'row']} mt={[6, 20]} gap={[12, 32]} alignItems="center">
        <Image src={imageSrc} alt={title} width={650} minWidth={"815px"} objectFit="cover" height={"459px"}/>
        <Flex flexDirection={'column'}>
            <Text fontSize={["24px"]} color={'#12191F'}>{subtitle}</Text>
            <Flex flexDirection="column" gap={2}>
                <Heading fontSize={["4xl", "48px"]} fontWeight="bold" mb={0} fontFamily={"EB Garamond"}>{title}</Heading>
                <Text fontSize={"18px"}>{description}</Text>
                <Flex w={['100%', '40%', '40%']} display={['none', 'flex']} mt={2}>
                    <Btn size={'md'} variant="secondary" text={buttonText}/>
                </Flex>
                <Flex w={['100%', '40%', '40%']} display={['flex', 'none']} mt={2}>
                    <Btn size={'sm'} variant="secondary" text={buttonText}/>
                </Flex>
            </Flex>

        </Flex>
    </Flex>
);

const serviceSection = () => {
    return (
        <Box as="section" py={[6, 8, 12]} p={[4, 8, 8]} bg={'white'}>
            <Heading display={['flex', 'none']}
                     fontSize="4xl"
                     fontWeight="bold"
                     fontFamily='EB Garamond, serif'
            >
                Our Services
            </Heading>
            <SectionItem
                subtitle="Private Label"
                title="Craft your identity"
                description="Craft your unique identity with our private label offerings. We excel at tailoring products, whether premium or entry level, to meet the distinctive needs of our clients. Together we can shape your brand."
                buttonText="Build your brand"
                imageSrc={Craft.src}
            />

            <SectionItem
                subtitle="Raw Material"
                title="Ethanol for every industry"
                description="Supply your industry with our versatile ethanol. Catering to pharmaceuticals, perfumery, home care, and beverages, we provide the perfect ethanol solution for your specific needs."
                buttonText="Purchase ethanol"
                imageSrc={Noel.src}
            />

            <SectionItem
                subtitle="Events"
                title="Customize your gifts"
                description="Make your events memorable with our customized gifts. Be it company gifts, wedding giveaways, or any special occasion, we design gifts that leave a lasting impression. Your vision is our inspiration."
                buttonText="Order your gifts"
                imageSrc={Craft.src}
            />
        </Box>
    );
};

export default serviceSection;