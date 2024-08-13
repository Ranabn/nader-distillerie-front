import {Flex, Text, Box} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import Background from "@/app/assets/images/background-brands.png";

// Define the TypeScript interface for the props
interface SocialBrandsProps {
    quote: string;
    description: string;
    technicalSheetUrl: string;
    brandWebsiteUrl: string;
}

// Define the SocialBrands component with typed props
export const SocialBrands = ({
                                 quote,
                                 description,
                             }: SocialBrandsProps) => {
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
                //@ts-ignore
                backgroundImage: Background.src, // Your PNG path here
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.04, // Adjust this to change the image opacity
            }}
        >
            <Flex flexDirection="column" p={12} w="60%" gap={8} justifyContent={'center'}>
                <Box>
                    <Text mb={4} fontSize="3xl" fontWeight="300" textTransform='uppercase'>
                        {quote && (
                            quote
                        )}
                    </Text>
                    <Text mb={4}>
                        {description && (
                            description
                        )}
                    </Text>
                </Box>

                <Box>
                    <Text>Technical data</Text>
                    <Text>Download our technical data sheets</Text>
                </Box>
                <Box w="25%">
                    <Btn variant="primaryWhite" size="md" text="BECOME A RESELLER"/>
                </Box>
                <Text>Learn more on Mystic Grove website</Text>
            </Flex>
        </Flex>
    );
};
