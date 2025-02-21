import { Navigation } from "swiper/modules";
import { Navbar } from "@/app/components/navigation/navbar";
import { sanityFetch } from "@/app/sanity/client";
import { Text, Box, Heading } from "@chakra-ui/react";
import {Footer} from "@/app/components/footer/Footer";

const BRANDS_QUERY = `*[_type == "brands"] {
    brand_name,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title
}`;

const PrivacyPolicyPage = async () => {
    let brands = [];

    try {
        // Fetch brands data from Sanity
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
                    Privacy Policy - 27/07/2024
                </Heading>

                <Text fontSize="sm" mb={2}>
                    The purpose of this Privacy Policy is to inform you how and why NADER DISTILLERIES CO S.A.R.L.
                    (“company”, “we”, “us” or “our”), Mtein - Lebanon, collects, stores, uses, shares (“processes”) your
                    information provided when you use our services. The policy will also help you understand your privacy
                    rights and choices.
                </Text>

                <Text fontSize="sm" mb={2}>
                    We keep this policy under regular review and may change it from time to time, so please check this page
                    for any updates. Last updated on 18.01.2025.
                </Text>

                <Heading as="h2" size="lg" mt={6} mb={3}>
                    Topics Covered:
                </Heading>
                <Text fontSize="sm" as="ul" pl={5}>
                    <li>1. What Personal Information do we collect?</li>
                    <li>2. How and why do we use tracking technologies?</li>
                    <li>3. For what purposes do we use your Personal Information and on which legal grounds?</li>
                    <li>4. What happens if you do not wish to provide your Personal Information?</li>
                    <li>5. To whom do we disclose Your Personal Information and why?</li>
                    <li>6. Is your Personal Information sent to recipients located in other countries and why?</li>
                    <li>7. How long do we keep your Personal Information?</li>
                    <li>8. How do we secure and store your Personal Information?</li>
                    <li>9. What are your rights regarding Personal Information?</li>
                    <li>10. How do we process children’s Personal Information?</li>
                    <li>11. Privacy policy of other websites</li>
                    <li>12. Changes to our privacy policy</li>
                    <li>13. How can you contact us or lodge a complaint to the relevant Supervisory Authority?</li>
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    1. What Personal Information do we collect?
                </Heading>
                <Text fontSize="sm">
                    We collect the following information which may be updated and vary depending on our activities:
                </Text>
                <Text fontSize="sm" as="ul" pl={5}>
                    <li>Names, phone numbers, email addresses, mailing addresses, usernames, passwords, contact preferences.</li>
                    <li>Automatically collected data: IP address, browser details, device info, operating system, location data.</li>
                    <li>Third-party data (Google, social media): Pages viewed, visit timestamps, interactions.</li>
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    2. How and why do we use tracking technologies?
                </Heading>
                <Text fontSize="sm">
                    We use tracking technologies such as cookies, IP Addresses, and Log files to tailor our website to your personal needs:
                </Text>
                <Text fontSize="sm" as="ul" pl={5}>
                    <li>
                        Cookies help us understand how visitors use our website and improve its functionality.
                    </li>
                    <li>
                        IP addresses help us maintain security and comply with legal restrictions.
                    </li>
                    <li>
                        Log files anonymously record browsing behavior to improve our services.
                    </li>
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    3. For what purposes do we use your Personal Information?
                </Heading>
                <Text fontSize="sm">
                    We process your Personal Information to:
                </Text>
                <Text fontSize="sm" as="ul" pl={5}>
                    <li>Respond to service requests or perform contractual obligations.</li>
                    <li>Send transactional or administrative communications.</li>
                    <li>Provide marketing content if you have consented.</li>
                    <li>Enhance our customer experience through analytics.</li>
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    4. What happens if you do not wish to provide your Personal Information?
                </Heading>
                <Text fontSize="sm">
                    If you choose not to provide Personal Information, some services may be unavailable, but you can still browse the website.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    5. To whom do we disclose your Personal Information?
                </Heading>
                <Text fontSize="sm">
                    We may share your data with:
                </Text>
                <Text fontSize="sm" as="ul" pl={5}>
                    <li>Affiliates worldwide for processing.</li>
                    <li>Third-party service providers for technical support.</li>
                    <li>Marketing partners with your consent.</li>
                    <li>Authorities when required by law.</li>
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    6. Is your Personal Information sent to recipients in other countries?
                </Heading>
                <Text fontSize="sm">
                    Yes, as we operate globally, but we take necessary security measures to protect your data.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    7. How long do we keep your Personal Information?
                </Heading>
                <Text fontSize="sm">
                    We retain your data as long as necessary for the intended purpose, in compliance with applicable regulations.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    8. How do we secure and store your Personal Information?
                </Heading>
                <Text fontSize="sm">
                    We implement technical and organizational security measures to protect your data from unauthorized access.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    9. Your Rights
                </Heading>
                <Text fontSize="sm">
                    You have the right to access, modify, delete, and object to the processing of your Personal Information.
                </Text>

                <Heading as="h3" size="md" mt={6} mb={2}>
                    10. How can you contact us?
                </Heading>
                <Text fontSize="sm">
                    If you have any concerns, contact us at:
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

export default PrivacyPolicyPage;
