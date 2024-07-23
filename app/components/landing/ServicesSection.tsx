import {Box, Flex, Heading, Text, Button, Image, VStack} from "@chakra-ui/react";
import React from "react";
import Craft from "@/app/assets/images/craft.png"
import Noel from "@/app/assets/images/noel.png"
import {Btn} from "@/app/components/ui/Btn";

const SectionItem = ({subtitle, title, description, buttonText, imageSrc}) => (
    <Flex flexDirection={['column', 'column', 'row']} mb={8} gap={10} alignItems="center">
        <Image src={imageSrc} alt={title} width={600} objectFit="cover" height={400} mr={6}/>
        <VStack align="start">
            <Text color={'gray.600'}>{subtitle}</Text>
            <Flex flexDirection="column" gap={4}>
                <Heading fontSize="4xl" fontWeight="bold" mb={2} fontFamily={"EB Garamond"}>{title}</Heading>
                <Text>{description}</Text>
                <Box>
                    <Btn variant="secondary" text={buttonText}/>
                </Box>
            </Flex>

        </VStack>
    </Flex>
);

const serviceSection = () => {
    return (
        <Box as="section" py={12} p={12}>
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