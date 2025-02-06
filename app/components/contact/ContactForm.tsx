// @ts-nocheck

'use client';

import React, {useEffect, useState} from 'react';
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon
} from '@chakra-ui/react';
import {Btn} from '@/app/components/ui/Btn';
import {usePathname, useSearchParams} from "next/navigation";
import CustomBox from '../ui/CustomBox';

const CTAOptions ={
    "gift": "Order gifts",
    "reseller": "Become a reseller",
    "ethanol": "Purchase ethanol",
    "brand": "Build my brand",
}

const ContactForm = () => {
    const searchParams = useSearchParams();
    const [selectedReason, setSelectedReason] = useState("");
    const inputStyles = {
        _focus: {
            borderColor: 'black',
            boxShadow: 'none'
        }
    };
    const handleReasonSelect = (reason: string) => {
        setSelectedReason(reason);
    };
    useEffect(() => {
        // Load Google Maps API script
        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta";
        script.async = true;
        document.body.appendChild(script);
        const CTA = searchParams.get('CTA');
        if(CTA){
            setSelectedReason(CTAOptions[CTA]);
        }
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        
        <Flex direction="column" gap={6} fontSize="18px" maxWidth={"1512px"}>
                <FormControl id="reason">
                    <Flex className='reason-label' position={'relative'} alignItems={'center'} style={{cursor: 'pointer'}}>

                        <Menu>
                            <MenuButton
                                as={Flex}
                                borderRadius="none"
                                border="1px solid black"
                                height="50px"
                                width="100%"
                                textAlign="left"
                                bg="white"
                                {...inputStyles}
                            >
                            </MenuButton>

                            <MenuList border="1px solid black" borderRadius="none" bg={'black'}>
                                <MenuItem
                                    onClick={() => handleReasonSelect("Become a reseller")}
                                    bg={'black'}
                                    color={'white'}
                                    _hover={{bg: 'white', color: 'black'}}
                                    _focus={{bg: 'white', color: 'black'}}
                                >
                                    Become a reseller
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleReasonSelect("Purchase ethanol")}
                                    bg={'black'}
                                    color={'white'}
                                    _hover={{bg: 'white', color: 'black'}}
                                    _focus={{bg: 'white', color: 'black'}}
                                >
                                    Purchase ethanol
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleReasonSelect("Build my brand")}
                                    bg={'black'}
                                    color={'white'}
                                    _hover={{bg: 'white', color: 'black'}}
                                    _focus={{bg: 'white', color: 'black'}}
                                >
                                    Build my brand
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleReasonSelect("Order gifts")}
                                    bg={'black'}
                                    color={'white'}
                                    _hover={{bg: 'white', color: 'black'}}
                                    _focus={{bg: 'white', color: 'black'}}
                                >
                                    Order gifts
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleReasonSelect("Other")}
                                    bg={'black'}
                                    color={'white'}
                                    _hover={{bg: 'white', color: 'black'}}
                                    _focus={{bg: 'white', color: 'black'}}
                                >
                                    Other
                                </MenuItem>

                            </MenuList>
                        </Menu>
                        <Flex className='reason-label' position={'absolute'} left={4}>
                            {selectedReason ? selectedReason : "Select subject"}
                        </Flex>
                        <Flex className='reason-label' position={'absolute'} right={4}>
                            <Icon viewBox="0 0 24 24" w="24px" h="auto" color="white" fill="none" stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg" className='country-select-icon'>
                                <svg width="10" height="auto" viewBox="0 0 10 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L5 5L10 0H0Z" fill="black"/>
                                </svg>
                            </Icon>
                        </Flex>
                    </Flex>

                </FormControl>

                <Flex mt={[4, 0, 0]} gap={[4, 4, 6]} fontSize="16px" flexDirection={["column", "row"]}>
                    <FormControl id="name" w={["100%", "50%"]}>
                        <FormLabel p={0} m={0}>Name</FormLabel>
                        <Input size="lg" type="text" borderRadius="none" border="1px"   {...inputStyles}/>
                    </FormControl>

                    <FormControl id="mail" w={["100%", "50%"]}>
                        <FormLabel p={0} m={0}>Email</FormLabel>
                        <Input size="lg" type="email" borderRadius="none"
                            border="1px"
                            {...inputStyles}
                        />
                    </FormControl>
                </Flex>

                <FormControl mt={[4, 0, 0]} id="message">
                    <FormLabel p={0} m={0}>Message</FormLabel>
                    <Textarea
                        size="xl"
                        height="349px"
                        width={["100%", "566px"]}
                        borderRadius="none"
                        border="1px"
                        {...inputStyles}
                        px={4}
                    />
                </FormControl>

                <Flex justifyContent="flex-end">
                    <Box width={['100%', 200, 200]}>
                        <Btn size="md" variant="primaryBlack" text="Send message"/>
                    </Box>
                </Flex>
        </Flex>
    );
};

export default ContactForm;
