"use client";

import {Flex, Text, Box, Link} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import Background from "@/app/assets/images/background-brands.png";
import {FaFacebook, FaInstagram} from "react-icons/fa";

interface SocialBrandsProps {
    quote: string;
    description: string;
    technicalSheetUrl?: string;
    brandWebsiteUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
}

export const SocialBrands = ({
                                 quote,
                                 description,
                                 facebookUrl,
                                 instagramUrl,
                                 brandWebsiteUrl,
                                 technicalSheetUrl,
                                 brandName
                             }: SocialBrandsProps) => {
    return (
        <Flex
            mt={8}
            minHeight={"360px"}
            position="relative"
            background="#224452"
            color="white"
            overflow="hidden"
            _before={{
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: Background.src,
                backgroundSize: "cover",
                backgroundPosition: "top",
                opacity: 0.04,
            }}
        >
            <Flex flexDirection="column" w="100%" p={[4, 8, 8]} gap={8}>
                {(facebookUrl || instagramUrl) && (
                    <Flex gap={4} alignItems="center" mb={4} mt={4} zIndex={9999}>
                        {instagramUrl && (
                            <Link href={instagramUrl} isExternal>
                                <FaInstagram size="35px"/>
                            </Link>
                        )}
                        {facebookUrl && (
                            <Link href={facebookUrl} isExternal>
                                <FaFacebook size="35px"/>
                            </Link>
                        )}

                    </Flex>
                )}


                {/* Main Content Section */}
                <Flex
                    flexDirection="column"
                    mt={[12, 0, 0]}
                    w={["100%", "50%", "50%"]}
                    gap={8}
                    justifyContent="center"
                >
                    <Box>
                        <Text
                            fontSize={["24px", "3xl", "32px"]}
                            fontWeight="300"
                            textTransform="uppercase"
                        >
                            {quote}
                        </Text>
                        <Text fontSize={["16px", "18px", "18px"]}>
                            {description}
                        </Text>
                    </Box>

                    {technicalSheetUrl && (
                        <Link href={technicalSheetUrl}>
                            <Box fontSize="18px">
                                <Text fontSize={["20px", "24px", "24px"]} mb={2}>Technical data</Text>
                                <Flex gap={4}>
                                    <Text fontSize={["16px", "18px"]} mb={4}>
                                        Download our technical data sheets
                                    </Text>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.363 2C15.518 2 14 8 14 8C14 8 20 6.35 20 10.457V22H4V2H11.363ZM12.189 0H2V24H22V9.614C22 7.223 15.352 0 12.189 0ZM17 13H14.372V16.686H15.279V15.214H16.769V14.482H15.279V13.784H17V13ZM12.1 13H10.501V16.686H12.1C12.637 16.686 13.061 16.505 13.362 16.151C13.917 15.493 13.949 14.117 13.3 13.459C13.002 13.159 12.588 13 12.1 13ZM11.408 13.783H11.904C12.377 13.783 12.706 13.956 12.819 14.427C12.883 14.694 12.896 15.106 12.798 15.375C12.67 15.726 12.417 15.903 12.044 15.903H11.407V13.783H11.408ZM8.668 13H7V16.686H7.907V15.409H8.668C9.287 15.409 9.732 15.132 9.892 14.646C9.987 14.355 9.987 14.049 9.892 13.761C9.732 13.277 9.286 13 8.668 13ZM7.907 13.732H8.453C8.688 13.732 8.92 13.76 9.029 13.96C9.096 14.083 9.096 14.326 9.029 14.449C8.92 14.648 8.688 14.676 8.453 14.676H7.907V13.732Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Flex>
                            </Box>
                        </Link>
                    )}

                    <Flex flexDirection={'column'} mt={[4, 0]} zIndex={9999} id="social-brands-section">
                        <Box w="25%">
                            <Btn variant="tertWhite" size="md" text="BECOME A RESELLER"/>
                        </Box>
                        {brandWebsiteUrl && (
                            <Link href={brandWebsiteUrl}>
                                <Flex alignItems={'center'} gap={4}
                                >
                                    <Text mt={5} fontSize={["16px", "18px"]}>
                                        Learn more on {brandName} website
                                    </Text>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.66667 0C1.20925 0 0 1.20925 0 2.66667V21.3333C0 22.7908 1.20925 24 2.66667 24H21.3333C22.7908 24 24 22.7908 24 21.3333V12H21.3333V21.3333H2.66667V2.66667H12V0H2.66667ZM14.6667 0V2.66667H19.4479L7.05729 15.0573L8.94271 16.9427L21.3333 4.55208V9.33333H24V0H14.6667Z"
                                            fill="white"/>
                                    </svg>
                                </Flex>
                            </Link>
                        )}


                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    );
};
