import {Flex, Text, Box} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import Background from "@/app/assets/images/background-brands.png";

export const SocialBrands = ({quote, description, technicalSheetUrl, brandWebsiteUrl}) => {
    return (
        <Flex
            minHeight={'550px'}
            id="social-brands-section"
            position="relative"
            background="#224452"
            color="white"
            overflow="hidden" // Ensures the pseudo-element doesn't overflow the Flex container
            _before={{
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: Background.src, // Your PNG path here
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.04, // Adjust this to change the image opacity
            }}
        >
            <Flex flexDirection="column" p={12} w="60%" gap={8} justifyContent={'center'}>
                <Box>
                    <Text mb={4} fontSize="3xl" fontWeight="300">
                        {quote && (
                            quote
                        )}
                    </Text>
                    <Text mb={4}>
                        {description}
                    </Text>
                </Box>

                <Box>
                    <Text>Technical data</Text>
                    <Text>Download our technical data sheets</Text>
                </Box>
                <Box w="25%">
                    <Btn variant="primaryWhite" text="BECOME A RESELLER"/>
                </Box>
                <Text>Learn more on Mystic Grove website</Text>
            </Flex>
        </Flex>
    );
};
