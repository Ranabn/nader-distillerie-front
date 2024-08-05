import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Select,
    Text,
    Stack,
    Grid,
    GridItem
} from '@chakra-ui/react';
import {Navbar} from "@/app/components/navigation/navbar";
import {Footer} from "@/app/components/footer/Footer";
import {sanityFetch} from "@/app/sanity/client";

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;
const ContactPage = async () => {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    });

    return (
        <Flex direction="column">
            <Navbar brands={brands}/>
            <Flex mt={20} direction="column" justifyContent={'space-between'} p={8}>
                <Flex w={'100%'} gap={10}>
                    <Flex direction="column" w={'50%'}>
                        <Text fontSize="4xl" fontFamily="EB Garamond" fontWeight="800">Get in touch</Text>
                        <Text mb={8}>Explain your project, we will get back to you as soon as possible.</Text>

                        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                            <GridItem colSpan={2}>
                                <FormControl id="reason" mb={4}>
                                    <Select placeholder="Become a reseller">
                                        <option value="reseller">Become a reseller</option>
                                        <option value="support">Support</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </FormControl>
                            </GridItem>

                            <GridItem>
                                <FormControl id="name" mb={4}>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text"/>
                                </FormControl>
                            </GridItem>

                            <GridItem>
                                <FormControl id="mail" mb={4}>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email"/>
                                </FormControl>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <FormControl id="message" mb={4}>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea/>
                                </FormControl>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <Button colorScheme="blackAlpha" bg="black" color="white" width="full" mt={4}>Send
                                    message</Button>
                            </GridItem>
                        </Grid>
                    </Flex>
                    <Flex flexDirection='column' mt={8} direction="row" w={'50%'}>
                        <Box>
                            <Text fontSize="lg" fontWeight="bold">Addresses</Text>
                            <Text>Distillery: Mtein, Lebanon</Text>
                            <Text>Offices: 16, Street 44, Sector 4, Sin El Fil, Lebanon</Text>

                            <Text fontSize="lg" fontWeight="bold" mt={4}>Opening hours</Text>
                            <Text>Monday - Friday, 8am - 5pm (GMT +2)</Text>

                            <Text fontSize="lg" fontWeight="bold" mt={4}>Phone</Text>
                            <Text>+961 1 484 457</Text>
                            <Text>+961 1 482 500</Text>

                            <Text fontSize="lg" fontWeight="bold" mt={4}>Mail</Text>
                            <Text>contact@naderdistilleries.com</Text>
                        </Box>

                        <Box width="100%" height="300px">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Sin+El+Fil,Lebanon"
                                allowFullScreen
                            ></iframe>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Footer brands={brands}/>
        </Flex>

    );
}

export default ContactPage;
