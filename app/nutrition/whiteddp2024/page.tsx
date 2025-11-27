"use client";

import {
    Box,
    Container,
    Heading,
    Text,
    Table,
    Tbody,
    Tr,
    Td,
    VStack,
    Divider,
} from "@chakra-ui/react";

export default function WhiteWineNutrition() {
    return (
        <Box bg="white" minH="100vh" py={6}>
            <Container maxW="container.sm">
                <VStack spacing={4} align="stretch">
                    {/* Header */}
                    <Box textAlign="center">
                        <Heading
                            as="h1"
                            size="lg"
                            fontFamily="EB Garamond"
                            fontWeight="600"
                            mb={1}
                        >
                            DOMAINE DES PRINCES
                        </Heading>
                        <Text fontSize="md" fontFamily="Varta">
                            DRY WHITE WINE / VIN BLANC SEC
                        </Text>
                        <Text fontSize="md" fontFamily="Varta" fontStyle="italic">
                            Sauvignon Blanc
                        </Text>
                        <Text fontSize="lg" fontFamily="Varta" fontWeight="600" mt={2}>
                            2024
                        </Text>
                        <Text fontSize="xl" fontFamily="Varta" fontWeight="bold" mt={2}>
                            12% vol
                        </Text>
                    </Box>

                    <Divider borderColor="black" />

                    {/* Nutrition Table */}
                    <Box>
                        <Heading
                            as="h2"
                            size="sm"
                            fontFamily="Varta"
                            mb={2}
                            textAlign="center"
                        >
                            Average nutritional values / Valeurs nutritionnelles moyennes
                        </Heading>
                        <Text fontSize="sm" fontFamily="Varta" textAlign="center" mb={3}>
                            for 100 ml / pour 100 ml
                        </Text>

                        <Table variant="simple" size="sm">
                            <Tbody>
                                <Tr>
                                    <Td fontFamily="Varta" borderColor="gray.300">
                                        Energy / Energie
                                    </Td>
                                    <Td fontFamily="Varta" isNumeric borderColor="gray.300">
                                        297 kJ / 72 kcal
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td fontFamily="Varta" borderColor="gray.300">
                                        Fat / Mati&egrave;res grasses
                                    </Td>
                                    <Td fontFamily="Varta" isNumeric borderColor="gray.300">
                                        0g
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td
                                        fontFamily="Varta"
                                        pl={6}
                                        fontSize="xs"
                                        borderColor="gray.300"
                                    >
                                        of which saturates / dont acides gras satur&eacute;s
                                    </Td>
                                    <Td fontFamily="Varta" isNumeric borderColor="gray.300">
                                        0g
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td fontFamily="Varta" borderColor="gray.300">
                                        Carbohydrate / Glucides
                                    </Td>
                                    <Td fontFamily="Varta" isNumeric borderColor="gray.300">
                                        2g
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td
                                        fontFamily="Varta"
                                        pl={6}
                                        fontSize="xs"
                                        borderColor="gray.300"
                                    >
                                        of which sugars / dont sucres
                                    </Td>
                                    <Td fontFamily="Varta" isNumeric borderColor="gray.300">
                                        2g
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td fontFamily="Varta" borderColor="gray.300">
                                        Protein / Prot&eacute;ines
                                    </Td>
                                    <Td fontFamily="Varta" isNumeric borderColor="gray.300">
                                        0g
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td fontFamily="Varta" borderColor="gray.300">
                                        Salt / Sel
                                    </Td>
                                    <Td fontFamily="Varta" isNumeric borderColor="gray.300">
                                        0g
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>

                    <Divider borderColor="black" />

                    {/* Ingredients */}
                    <Box>
                        <Heading
                            as="h2"
                            size="sm"
                            fontFamily="Varta"
                            mb={2}
                        >
                            Ingredients:
                        </Heading>
                        <Text fontSize="sm" fontFamily="Varta" mb={3}>
                            Grapes, acidity regulator (tartaric acid), stabilizing agent
                            (cellulose gum), preservative (sulphites). Bottled under
                            protective atmosphere.
                        </Text>

                        <Heading
                            as="h2"
                            size="sm"
                            fontFamily="Varta"
                            mb={2}
                        >
                            Ingr&eacute;dients:
                        </Heading>
                        <Text fontSize="sm" fontFamily="Varta">
                            Raisins, r&eacute;gulateur d&apos;acidit&eacute; (acide tartrique),
                            agent stabilisateur (gomme de cellulose), conservateur
                            (sulfites). Mis en bouteille sous atmosph&egrave;re protectrice.
                        </Text>
                    </Box>

                    <Divider borderColor="black" />

                    {/* Lot Number */}
                    <Box textAlign="center">
                        <Text fontSize="sm" fontFamily="Varta" fontWeight="600">
                            Lot: 25A23
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
}
