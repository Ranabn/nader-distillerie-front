'use client';

import React, {useEffect, useState} from 'react';
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    Box
} from '@chakra-ui/react';
import {Btn} from '@/app/components/ui/Btn';
import {usePathname, useSearchParams} from "next/navigation";

const ContactForm = () => {
    const searchParams = useSearchParams();
    const [isCTA, setIsCTA] = useState(searchParams.get('CTA') ? true : false);
    const [selectedReason, setSelectedReason] = useState(isCTA ? "reseller" : "");
    const inputStyles = {
        _focus: {
            borderColor: 'black',
            boxShadow: 'none'
        }
    };
    const handleReasonChange = (event) => {
        setSelectedReason(event.target.value);
    };
    useEffect(() => {
        // Load Google Maps API script
        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Flex direction="column" gap={6} fontSize="18px">
            <FormControl id="reason">
                <Select
                    placeholder=" "
                    value={selectedReason}
                    onChange={handleReasonChange}
                    borderRadius="none"
                    border="1px"
                    size="lg"
                    {...inputStyles}
                >
                    <option value="reseller">Become a reseller</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                </Select>
            </FormControl>

            <Flex gap={6} fontSize="16px" flexDirection={["column", "row"]}>
                <FormControl id="name" w={["100%", "50%"]}>
                    <FormLabel>Name</FormLabel>
                    <Input size="lg" type="text" borderRadius="none" border="1px"   {...inputStyles}/>
                </FormControl>

                <FormControl id="mail" w={["100%", "50%"]}>
                    <FormLabel>Email</FormLabel>
                    <Input size="lg" type="email" borderRadius="none"
                           border="1px"
                           {...inputStyles}
                    />
                </FormControl>
            </Flex>

            <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                    size="xl"
                    height="349px"
                    width={["100%", "566px"]}
                    borderRadius="none"
                    border="1px"
                    {...inputStyles}
                />
            </FormControl>

            <Flex justifyContent="flex-end">
                <Box>
                    <Btn size="md" variant="primaryBlack" text="Send message"/>
                </Box>
            </Flex>

        </Flex>
    );
};

export default ContactForm;
