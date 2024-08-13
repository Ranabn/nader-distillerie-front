import {Flex, Image, Text, VStack, Box} from "@chakra-ui/react";
import React from "react";
import {Btn} from "@/app/components/ui/Btn";
import {Testimonial} from "@/app/components/events-template/Testimonial";
import {ExternalBox} from "@/app/components/ui/ExternalBoxe";
import craft from "@/app/assets/images/craft.png"
import wine from "@/app/assets/images/wines.png"

export const EventsTemplateContent = () => {

    //@ts-ignore
    const images = [
        craft.src,
        wine.src,

        // Add more image URLs as needed
    ];

    const testimonial = {
        text: "We were absolutely thrilled with the wedding gifts from Nader Distilleries. The personalized guidance and support in bringing our vision to life were invaluable. Nader Distilleries exceeded our expectations! The beautiful bottles and truly qualitative beverages left a lasting impression, and our guests continued to inquire about them even after the wedding.",
        author: "Nada C."
    };
    return (
        <Box>
            <Box p={10} maxWidth="1100px" mx="auto">
                {/* Header Section */}
                <VStack spacing={4} align="stretch">
                    <Text fontSize="5xl" fontWeight="bold" fontFamily={"EB Garamond"}>
                        Craft your unique private label drinks
                    </Text>
                    <Text fontSize="md">
                        Creating your own beverage can be a complex task, but we are here to simplify it.
                    </Text>
                    <Text fontSize="md">
                        With our extensive industry experience, we are equipped to bring your brand vision to life.
                        Whether
                        you are seeking premium or entry-level products, we specialize in customizing offerings to meet
                        your
                        unique needs.
                    </Text>
                    <Image mt={4}
                           src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                           alt="Bottles"
                           width={'100%'}
                    />
                </VStack>
                <Flex mt={20} mb={20} gap={8}>

                    <Flex flexDir='column' width={'50%'} gap={4}>
                        <Text fontSize="4xl" fontWeight="bold" fontFamily={"EB Garamond"}>
                            Engaging with our customers
                        </Text>
                        <Text fontSize="md">
                            The best gifts are born from collaboration. When you choose us, we partner with you to
                            understand your vision. Is it a celebration, a thank-you gesture, or a special milestone?
                            Knowing this helps us tailor our offer.
                        </Text>
                    </Flex>

                    <Flex flexDir='column' width={'50%'} gap={4}>
                        <Text fontSize="4xl" fontWeight="bold" fontFamily={"EB Garamond"}>
                            Our products complemented
                        </Text>
                        <Text fontSize="md">
                            The wine or spirit bottle, whether regular-sized or a charming miniature, is at the heart of
                            our gift packages. Our expertise in wine and spirits ensures that each bottle matches the
                            occasion and adds sophistication to the gift. To enhance it further, we can add
                            complementary elements of your choice, or explore new ideas together.
                        </Text>
                    </Flex>

                </Flex>
                <Flex flexDir='column' align="center" mt={20} gap={4}>
                    <Text fontSize="lg">
                        Ready to build your brand with us?
                    </Text>
                    <Btn variant='primaryBlack' text='Request a consultation'/>
                </Flex>

                <Flex mt={20} justifyContent={'center'}>
                    <Text fontSize="4xl" fontWeight="bold" fontFamily={"EB Garamond"}>
                        Engaging with our customers
                    </Text>
                </Flex>
            </Box>
            <Testimonial images={images} testimonial={testimonial}/>
            <Testimonial images={images} testimonial={testimonial}/>
            <Flex>
                <ExternalBox/>
                <ExternalBox/>
            </Flex>
        </Box>
    )
}
