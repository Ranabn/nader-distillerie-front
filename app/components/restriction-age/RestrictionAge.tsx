'use client';
import {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import {Flex, Box, Text, Button, Select, VStack, Input} from "@chakra-ui/react";
import Background from '@/app/assets/images/age-restriction.jpeg';
import {Logo} from '@/app/components/ui/Logo';
import {useRouter} from "next/navigation";
import AlcoholRestrictionList from "@/utils/alcohol-restriction.json";

export const RestrictionAge = () => {
    const [year, setYear] = useState(['', '', '', '']);
    const [selectedCountry, setSelectedCountry] = useState({country: '', alcoholRestrictionAge: null});
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const router = useRouter();


    const handleAgeResponse = (e) => {
        // Convert the timestamp `e` to a Date object for the current date
        const currentDate = new Date(e);
        // Extract the current year from the dates
        const currentYear = currentDate.getFullYear();
        const birthYear = parseInt(year.join(''), 10);
        // Calculate the age or difference in years
        const age = currentYear - birthYear;
        if (age >= 18 && (selectedCountry?.country !== '' && selectedCountry?.alcoholRestrictionAge !== 'Prohibited' && selectedCountry?.alcoholRestrictionAge !== undefined)) {
            localStorage.setItem('isAllowed', 'true')
            router.push("/")
        } else {
            localStorage.setItem('isAllowed', 'false')
            router.push("/restriction-age/not-allowed")
        }
    };


    const handleSelectChange = (event) => {
        const selectedCountryName = event.target.value;
        const countryInfo = AlcoholRestrictionList.countries.find(country => country.country === selectedCountryName);
        setSelectedCountry(countryInfo);
        console.log('Selected country:', countryInfo?.country);
        console.log('Alcohol restriction age:', countryInfo?.alcoholRestrictionAge);
    };

    const handleYearChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newYear = [...year];
            newYear[index] = value;
            setYear(newYear);

            if (value && index < 3) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    useEffect(() => {
        inputRefs[0].current.focus();
    }, []);

    useEffect(() => {
        if (selectedCountry?.country !== '' && year[3] !== '') {
            setIsBtnDisabled(false)
        } else {
            setIsBtnDisabled(true)

        }
    }, [selectedCountry?.country, year]);
    return (
        <Flex justify="center" align="center" width="100%" height="100vh" position="relative" overflow="hidden">
            <Image
                src={Background}
                alt={'background'}
                layout="fill"
                objectFit="cover"
                quality={100}

            />
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="blackAlpha.400" // Chakra's way of setting opacity
            />
            <Flex direction="column" align="center" gap={14} justify="center" position="absolute"
                  width={["100%", "45%"]} padding={[6, 0]}
                  height="100%">
                <Box textAlign="center">
                    <Logo/>
                </Box>
                <Box textAlign="center">
                    <Text color="white" fontSize={'sm'}>
                        To visit our website, you must be of legal drinking/purchasing age in your location of
                        residence. If there is no legal age for consuming alcohol in your location, you must be over 21.
                    </Text>
                </Box>
                <VStack width="100%">
                    <Flex mb={8} justifyContent={'space-around'} alignItems={'center'} alignContent={'center'}
                          width="100%">
                        {year.map((digit, index) => (
                            <Input
                                key={index}
                                ref={inputRefs[index]}
                                value={digit}
                                onChange={(e) => handleYearChange(index, e.target.value)}
                                textAlign="center"
                                fontSize="4xl"
                                color="white"
                                bg="transparent"
                                borderRadius={'none'}
                                border={"0.4px solid white"}
                                placeholder={'Y'}
                                width="100%"
                                height="140px"
                                _hover={{borderColor: "white"}}
                                _focus={{borderColor: "white", outline: "none"}}
                            />
                        ))}
                    </Flex>
                    <Select
                        mb={2}
                        placeholder="COUNTRY"
                        color="white"
                        bg="blackAlpha.600"
                        borderColor="white"
                        border={'1px'}
                        borderRadius={'none'}
                        _hover={{borderColor: "white"}}
                        onChange={handleSelectChange}
                    >
                        {AlcoholRestrictionList.countries.map((country, index) => (
                            <option key={index} value={country.country}
                                    style={{backgroundColor: 'black', color: 'white'}}>
                                {country.country}
                            </option>
                        ))}
                    </Select>
                    <Button isDisabled={isBtnDisabled} colorScheme="teal" size="lg" width="100%"
                            onClick={(e) => handleAgeResponse(Date.now())}>
                        Enter the website
                    </Button>
                    <Text color="white" fontSize="sm" textAlign="center" mt={4}>
                        By entering this site, you are agreeing to our <a href="#"
                                                                          style={{textDecoration: 'underline'}}>Terms &
                        Conditions</a>, <a href="#" style={{textDecoration: 'underline'}}>Privacy Policy</a> and <a
                        href="#" style={{textDecoration: 'underline'}}>Cookies Policy</a>.
                    </Text>
                </VStack>
            </Flex>
        </Flex>
    );
};
