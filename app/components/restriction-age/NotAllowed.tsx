import {Box, Button, Flex, Input, Select, Text, VStack, Link} from "@chakra-ui/react";
import Image from "next/image";
import Background from "@/app/assets/images/age-restriction-not-allowed.png";
import {Logo} from "@/app/components/ui/Logo";

export const NotAllowed = () => {


    return (

        <>
            <Flex justify="center" align="center" width="100%" height="100vh" position="relative" overflow="hidden">
                <Image
                    src={Background}
                    alt={'background'}
                    layout="fill"
                    objectFit="cover"
                    quality={100}

                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    bg="blackAlpha.400" // Chakra's way of setting opacity
                />
                <Flex mb={20} direction="column" align="center"  justify="space-around" position="absolute"
                      width={["100%", "60%"]}
                      height="100%">
                    <Box  textAlign="center">
                        <Logo/>
                    </Box>
                    <Box textAlign="center">
                        <Text color="white" fontSize={"36px"} as={"h1"}>
                            Unfortunately, due to your age or location <br/>
                            we cannot let you enter our site at this time
                        </Text>
                    </Box>

                    <Text textAlign="center" color="white" fontSize={"sm"}>
                        This info is all part of our commitment to responsible drinking. <br/> More information on {' '}
                        <Link href={'responsibledrinking.org'} textDecoration="underline" >responsibledrinking.org</Link>
                    </Text>

                </Flex>
            </Flex>
        </>
    )
}

