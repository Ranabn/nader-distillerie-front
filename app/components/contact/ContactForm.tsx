// @ts-nocheck

'use client';
import React, { useState } from 'react';
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
    Icon,
    Button,
} from '@chakra-ui/react';

const ContactForm = () => {
    const [selectedReason, setSelectedReason] = useState("");
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const inputStyles = {
        _focus: {
            borderColor: 'black',
            boxShadow: 'none'
        }
    };

    const handleReasonSelect = (reason) => {
        setSelectedReason(reason);
        setFormData((prev) => ({ ...prev, subject: reason }));
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                const errData = await res.json();
                setError(errData.message || 'An error occurred while submitting the form.');
            }
        } catch (err) {
            console.error('Erreur:', err);
            setError('Unable to connect to the server. Please try again later.');
        }

        setLoading(false);
    };

    if (submitted) {
        return (
            <Flex direction="column" alignItems="center" justifyContent="center" p={8}>
                <Box fontSize="xl" fontWeight="bold">
                    Thank you for your message
                </Box>
            </Flex>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={6} fontSize="18px" maxWidth="1512px">
                {error && (
                    <Box color="red.500" fontWeight="bold" mb={2}>
                        {error}
                    </Box>
                )}

                <FormControl id="reason">
                    <Flex position="relative" alignItems="center" style={{ cursor: 'pointer' }}>
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
                            />
                            <MenuList border="1px solid black" borderRadius="none" bg="black">
                                {["Become a reseller", "Purchase ethanol", "Build my brand", "Order gifts", "Other"].map((option) => (
                                    <MenuItem
                                        key={option}
                                        onClick={() => handleReasonSelect(option)}
                                        bg="black"
                                        color="white"
                                        _hover={{ bg: 'white', color: 'black' }}
                                        _focus={{ bg: 'white', color: 'black' }}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <Flex position="absolute" left={4}>
                            {selectedReason ? selectedReason : "Select subject"}
                        </Flex>
                        <Flex position="absolute" right={4}>
                            <Icon viewBox="0 0 24 24" w="24px" h="auto" color="white" fill="none" stroke="currentColor">
                                <svg width="10" height="auto" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L5 5L10 0H0Z" fill="black"/>
                                </svg>
                            </Icon>
                        </Flex>
                    </Flex>
                </FormControl>

                <Flex mt={[4, 0, 0]} gap={[4, 4, 6]} fontSize="16px" flexDirection={["column", "row"]}>
                    <FormControl id="name" w={["100%", "50%"]}>
                        <FormLabel p={0} m={0}>Name</FormLabel>
                        <Input size="lg" type="text" borderRadius="none" border="1px" id="name" onChange={handleChange} {...inputStyles} />
                    </FormControl>
                    <FormControl id="email" w={["100%", "50%"]}>
                        <FormLabel p={0} m={0}>Email</FormLabel>
                        <Input size="lg" type="email" borderRadius="none" border="1px" id="email" onChange={handleChange} {...inputStyles} />
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
                        id="message"
                        onChange={handleChange}
                        {...inputStyles}
                        px={4}
                    />
                </FormControl>

                <Flex justifyContent="flex-end">
                    <Box width={['100%', 200, 200]}>
                        <Button type="submit" variant="primaryBlack" size="md" isLoading={loading}>
                            Send message
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </form>
    );
};

export default ContactForm;
