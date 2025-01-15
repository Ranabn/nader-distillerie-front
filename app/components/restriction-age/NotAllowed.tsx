'use client'
import {Box, Button, Flex, Input, Select, Text, VStack, Link, useBreakpointValue, Image} from "@chakra-ui/react";
import Background from "@/app/assets/images/age-restriction-not-allowed.png";
import {Logo} from "@/app/components/ui/Logo";
import LogoSM from '@/app/assets/images/LogoSM.png';

export const NotAllowed = () => {

    const isSmallScreen = useBreakpointValue({base: true, md: false});

    return (

        <>
            <Flex justify="center" height="100vh" position="relative" overflow="hidden">
                <Image
                    src={Background.src}
                    alt={'background'}
                    objectFit="cover"
                    width={'100%'}
                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    bg="blackAlpha.400" // Chakra's way of setting opacity
                />
                <Flex p={[4, 0]} direction="column" justifyContent={'top'} gap={10} position="absolute"
                      width={["100%", "70%"]}
                      height="80%">
                    <Flex justify={'center'}>
                        {isSmallScreen ?
                            <Flex justify={'center'} width={'150px'} height={'145px'}><Image src={LogoSM.src} alt={'logo'}/></Flex>
                            :
                            <Box mt={20} mb={16}>
                                <Logo/>
                            </Box>
                        }
                    </Flex>
                    <Box textAlign="center" p={4}>
                        <Text color="white" fontSize={["28px", "48px"]} as={"h1"}>
                            Unfortunately, due to your age or location <br/>
                            we cannot let you enter our site at this time
                        </Text>
                    </Box>

                    <Text textAlign="center" color="white" fontSize={["16px", "18px"]} style={{marginTop: '20px'}}>
                        This info is all part of our commitment to responsible drinking. <br/> More information on {' '}
                        <Link href={'http://www.responsibledrinking.org/'} textDecoration="underline">responsibledrinking.org</Link>
                    </Text>

                </Flex>
            </Flex>
        </>
    )
}

