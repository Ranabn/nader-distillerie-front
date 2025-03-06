// @ts-nocheck
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import { sanityFetch } from "@/app/sanity/client";
import { Navbar } from "@/app/components/navigation/navbar";
import { Footer } from "@/app/components/footer/Footer";

const TermsConditionsPage = async () => {
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
                <Heading as="h1" size="xl" mb={6}>
                    Terms of Use
                </Heading>

                <Box>
                    <Heading as="h4" size="lg" mt={4} mb={2}>1. Introduction</Heading>
                    <Text  fontSize="sm">
                        Naderdistilleries.com (the “website” or “site”) is operated by NADER DISTILLERIES CO S.A.R.L. (“company”, “we”, “us” or “our”), a company duly organized under the laws of Lebanon, Mtein. Please read these terms of use carefully before using this website.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>2. Authorized Use</Heading>
                    <Text  fontSize="sm">
                        This website is for your own private use. We maintain this website for your personal entertainment, information, education, and communication.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>3. Intellectual Property Rights</Heading>
                    <Text  fontSize="sm">
                        This copyright notice applies to all content throughout this website including but not limited to, all text, graphics, videos, sounds, and all computer code associated therewith.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>4. Unaffiliated products and sites</Heading>
                    <Text  fontSize="sm">
                        Our website may contain links and references to other websites administered by unaffiliated third parties.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>5. Sweepstakes & Promotions</Heading>
                    <Text  fontSize="sm">
                        Any prize draws, contests, sweepstakes or similar promotions made available through this site may be governed by specific rules that are separate from these terms of use.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>6. Privacy Policy</Heading>
                    <Text  fontSize="sm">
                        For information about the collection and processing of your Personal Data, please refer to our Privacy Policy.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>7. Email Transmission</Heading>
                    <Text  fontSize="sm">
                        Email transmission cannot be guaranteed to be secure or error-free as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>8. No Warranties; Limitation of Liability</Heading>
                    <Text  fontSize="sm">
                        THIS SITE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>9. Indemnification</Heading>
                    <Text  fontSize="sm">
                        You agree to indemnify, defend and hold NADERCO S.A.R.L. harmless from and against any and all claims, actions, demands, causes of action.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>10. Transfer of Rights</Heading>
                    <Text  fontSize="sm">
                        We may transfer all rights and obligations to any successor of our company in the context of its business.
                    </Text>

                    <Heading  size="md" as="h4"mt={4} mb={2}>11. Termination</Heading>
                    <Text  fontSize="sm">
                        You agree that NADERCO S.A.R.L. may terminate your access to or use of the site at any time and for any reason.
                    </Text>

                    <Heading  size="md" as="h4" mt={4} mb={2}>12. Severability</Heading>
                    <Text  fontSize="sm">
                        If any provision of these terms of use shall be deemed to be unlawful, void or unenforceable, it shall not affect the validity of remaining provisions.
                    </Text>

                    <Heading  size="md" as="h4" mt={4} mb={2}>13. Governing Law and Forum</Heading>
                    <Text  fontSize="sm">
                        These terms of use shall be governed by and construed exclusively in accordance with the laws of Lebanon.
                    </Text>

                    <Heading  size="md" as="h4"  mt={4} mb={2}>14. Changes to Terms of Use</Heading>
                    <Text  fontSize="sm">
                        We may amend these terms of use from time to time in our sole discretion.
                    </Text>
                </Box>
            </Box>

            <Footer brands={brands} />
        </>
    );
};

export default TermsConditionsPage;
