import {Flex, Text, Box, Image} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import Background from "@/app/assets/images/background-brands.png";
import LinkTab from "@/app/assets/images/LinkTab.png";

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
            <Flex flexDirection="column" mt={[12, 0, 0]} p={[4, 8, 12]} w={["100%", "50%", "50%"]} gap={8}
                  justifyContent={'center'}>
                <Box>
                    <Text mb={4} fontSize={["24px", "3xl", "32px"]} fontWeight="300" textTransform='uppercase'>
                        {quote && (
                            quote
                        )}
                    </Text>
                    <Text mb={4} fontSize={["16px", "18px", "18px"]}>
                        {description && (
                            description
                        )}
                    </Text>
                </Box>

                <Box fontSize={"18px"}>
                    <Text fontSize={["20px", "24px", "24px"]}>Technical data</Text>
                    <Flex gap={4}>
                        <Text fontSize={['16px', '18px']}>Download our technical data sheets</Text>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.363 2C15.518 2 14 8 14 8C14 8 20 6.35 20 10.457V22H4V2H11.363ZM12.189 0H2V24H22V9.614C22 7.223 15.352 0 12.189 0ZM17 13H14.372V16.686H15.279V15.214H16.769V14.482H15.279V13.784H17V13ZM12.1 13H10.501V16.686H12.1C12.637 16.686 13.061 16.505 13.362 16.151C13.917 15.493 13.949 14.117 13.3 13.459C13.002 13.159 12.588 13 12.1 13ZM11.408 13.783H11.904C12.377 13.783 12.706 13.956 12.819 14.427C12.883 14.694 12.896 15.106 12.798 15.375C12.67 15.726 12.417 15.903 12.044 15.903H11.407V13.783H11.408ZM8.668 13H7V16.686H7.907V15.409H8.668C9.287 15.409 9.732 15.132 9.892 14.646C9.987 14.355 9.987 14.049 9.892 13.761C9.732 13.277 9.286 13 8.668 13ZM7.907 13.732H8.453C8.688 13.732 8.92 13.76 9.029 13.96C9.096 14.083 9.096 14.326 9.029 14.449C8.92 14.648 8.688 14.676 8.453 14.676H7.907V13.732Z"
                                fill="white"/>
                        </svg>
                    </Flex>
                </Box>
                <Box w="25%" mt={[4,0]}>
                    <Btn variant="primaryWhite" size="md" text="BECOME A RESELLER"/>
                </Box>
                <Flex mb={[8,0]} gap={4} alignItems={'center'}>
                    <Text fontSize={['16px', '18px']}>Learn more on Mystic Grove website</Text>
                    <Image width={"24px"} height={"24px"} src={LinkTab.src}/>
                </Flex>

            </Flex>
        </Flex>
    );
};
