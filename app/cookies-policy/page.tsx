// @ts-nocheck

import { Navigation } from "swiper/modules";
import { Navbar } from "@/app/components/navigation/navbar";
import { sanityFetch } from "@/app/sanity/client";
import { Text, Box, Heading } from "@chakra-ui/react";
import { Footer } from "@/app/components/footer/Footer";

const BRANDS_QUERY = `*[_type == "brands"] {
    brand_name,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title
}`;

const CookiePolicyPage = async () => {
    let brands = [];

    try {
        brands = (await sanityFetch({
            query: BRANDS_QUERY,
        })) || [];
    } catch (error) {
        console.error("Error fetching brands:", error);
    }

    return (
        <>
            <Navbar brands={brands} />
            <Box mt={32} p={5}>
                <Heading as="h1" size="xl" mb={4}>
                    Cookie Policy for Nader Distilleries
                </Heading>
                <Text fontSize="sm" mb={2}>
                    Last updated: 18.01.2025
                </Text>
                <Text fontSize="sm" mb={2}>
                    At Nader Distilleries, accessible from https://www.naderdistilleries.com, one of our main priorities is the privacy of our visitors. This Cookie Policy document will present the types of information that are collected, recorded, and used by us.
                </Text>

                <Heading as="h2" size="lg" mt={6} mb={3}>What are cookies?</Heading>
                <Text fontSize="sm" mb={2}>
                    Cookies are small text files that a website stores on your device when the website is loaded on your browser. They help websites function efficiently and provide data to site owners.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>How do we use cookies?</Heading>
                <Text fontSize="sm" mb={2}>
                    We use first-party cookies, which are set by us, and third-party cookies for advertising and marketing purposes. Our cookies include:
                </Text>
                <Text fontSize="sm" as="ul" pl={5}>
                    <li>Essential cookies: Necessary for website functionality.</li>
                    <li>Performance and analytics cookies: Help us understand visitor interactions.</li>
                    <li>Functional cookies: Improve website usability and remember preferences.</li>
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>Managing Cookies</Heading>
                <Text fontSize="sm" mb={2}>
                    You can manage cookies through your browser settings. Disabling cookies may affect website functionality.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>Third-Party Cookies</Heading>
                <Text fontSize="sm" mb={2}>
                    We use analytics providers like Google Analytics to collect anonymous visitor data for website improvements.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>Changes to Our Cookie Policy</Heading>
                <Text fontSize="sm" mb={2}>
                    We may update this Cookie Policy periodically. Any changes will be posted on this page.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>Contact Us</Heading>
                <Text fontSize="sm">
                    If you have any questions, contact us at:
                    <br />
                    <b>NADER DISTILLERIES CO S.A.R.L.</b> <br />
                    Mtein, Lebanon <br />
                    Email: <a href="mailto:contact@naderdistilleries.com">contact@naderdistilleries.com</a>
                </Text>
            </Box>
            <Footer brands={brands} />
        </>
    );
};

export default CookiePolicyPage;