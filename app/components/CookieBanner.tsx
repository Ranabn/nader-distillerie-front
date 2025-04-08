// @ts-nocheck

"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/app/lib/storage-helper";
import {
    Box,
    Button,
    Flex,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState<null | boolean>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
        setCookieConsent(storedCookieConsent);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage("cookie_consent", cookieConsent);
        }

        const newValue = cookieConsent ? "granted" : "denied";

        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: newValue,
            });
        }
    }, [cookieConsent]);

    if (isLoading || cookieConsent !== null) {
        return null;
    }

    return (
        <Flex
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.4)"
            justify="center"
            align="center"
            zIndex="overlay"
        >
            <Flex
                flexDirection={'column'}
                bg="white"
                p={16}
                gap={4}
                shadow="xl"
                maxW="md"
                textAlign="center"
            >
                <Text mb={10} fontSize="md">
                    This site uses cookies to enhance your experience. Do you accept?
                </Text>
                <Flex justify="center" gap={4}>
                    <Button colorScheme="gray" variant="outline" onClick={() => setCookieConsent(false)}>
                        Decline
                    </Button>
                    <Button variant="primaryBlack" size="md"onClick={() => setCookieConsent(true)}>
                        Accept
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}
