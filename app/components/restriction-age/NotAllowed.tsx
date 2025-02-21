// @ts-nocheck

'use client'
import {Box, Button, Flex, Input, Select, Text, VStack, Link, useBreakpointValue, Image} from "@chakra-ui/react";
import Background from "@/app/assets/images/age-restriction-not-allowed.jpg";
import {Logo} from "@/app/components/ui/Logo";
import LogoSM from '@/app/assets/images/LogoSM.png';

export const NotAllowed = () => {

    const isSmallScreen = useBreakpointValue({base: true, md: false});

    return (

        <>
            <Flex justify="center" height="100vh" position="relative" overflow="hidden">
                <Box position="absolute" top={0} left={0} width="100%" height="100%"
                        backgroundImage={Background.src}
                        backgroundPosition={['42% 100%', 'center'] }
                        backgroundSize={['350%', 'cover']}
                        backgroundRepeat={'no-repeat'}
                        />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    bg="blackAlpha.200" // Chakra's way of setting opacity
                />
                <Flex p={[4, 0]} direction="column" justifyContent={'top'} gap={10} position="absolute"
                      width={["100%", "70%"]}
                      mt={"0px"}
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
                    <Box textAlign="center" p={0}>
                        <Text color="white" mt={10} fontSize={["28px", "48px"]} as={"h1"} lineHeight={["44.8px", "56px"]} >
                            Unfortunately, due to your age or location 
                            we cannot let you enter our site at this time
                        </Text>
                    </Box>

                    <Flex textAlign="center" color="white" fontSize={["16px", "18px"]} mt={['40px', '50px']} flexDirection={'column'}>
                        This info is all part of our commitment to responsible drinking. 
                        
                        <Text color={'white'}
                            mt={["20px", "0px"]}
                        > More information on {' '}
                        <Link href={'http://www.responsibledrinking.org/'} textDecoration="underline">responsibledrinking.org</Link></Text>
                    </Flex>

                </Flex>
            </Flex>
        </>
    )
}

