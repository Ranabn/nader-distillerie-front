// @ts-nocheck


'use client';
import {useState, useRef, useEffect} from 'react';
import Background from '@/app/assets/images/age-restriction.jpg';
import LogoSM from '@/app/assets/images/LogoSM.png';
import {useRouter} from "next/navigation";
import AlcoholRestrictionList from "@/utils/alcohol-restriction.json";
import '../../restriction-age.css';
import {Btn} from "@/app/components/ui/Btn";
import {
    Text,
    useBreakpointValue,
    Image,
    Flex,
    Box,
    Input,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";

export const RestrictionAge = () => {
    const [year, setYear] = useState(['', '', '', '']);
    const [selectedCountry, setSelectedCountry] = useState({country: '', alcoholRestrictionAge: null});
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const router = useRouter();

    const handleAgeResponse = (e: any) => {
        const currentDate = new Date(e);
        const currentYear = currentDate.getFullYear();
        const birthYear = parseInt(year.join(''), 10);
        const age = currentYear - birthYear;

        if (age >= 18 && (
            selectedCountry?.country !== '' &&
            selectedCountry?.alcoholRestrictionAge !== 'Prohibited' &&
            selectedCountry?.alcoholRestrictionAge !== undefined
        )) {
            localStorage.setItem('isAllowed', 'true');
            router.push("/");
        } else {
            localStorage.setItem('isAllowed', 'false');
            router.push("/restriction-age/not-allowed");
        }
    };

    const handleSelectChange = (event: any) => {
        const selectedCountryName = event.target.value;
        const countryInfo = AlcoholRestrictionList.countries.find(
            country => country.country === selectedCountryName
        );
        setSelectedCountry(countryInfo as any);
        event.target.value = "";
    };

    // @ts-ignore
    const handleYearChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newYear = [...year];
            newYear[index] = value;
            setYear(newYear);

            // Se déplacer vers le champ suivant uniquement lorsque la saisie est valide (non vide)
            if (value !== '' && index < 3) {
                inputRefs[index + 1]?.current?.focus();
            }
            // En cas de suppression, ne changez pas le focus
        }
    };


    // @ts-ignore
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !year[index] && index > 0) {
            inputRefs[index - 1]?.current?.focus();
        } else if (e.key === "ArrowLeft" && index > 0) {
            inputRefs[index - 1]?.current?.focus();
        } else if (e.key === "ArrowRight" && index < 3) {
            inputRefs[index + 1]?.current?.focus();
        }
    };

    useEffect(() => {
        // @ts-ignore
        inputRefs[0].current.focus();
    }, []);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };


    useEffect(() => {
        setIsBtnDisabled(!(selectedCountry?.country !== '' && year[3] !== ''));
    }, [selectedCountry?.country, year]);

    const isSmallScreen = useBreakpointValue({base: true, md: false});

    return (
        <Flex maxHeight={'120vh'} alignItems={'top'} alignContent={'center'} justify={'center'} overflow={'hidden'}>
            <Image
                src={Background.src}
                alt="background"
                objectFit="cover"
                transform={isSmallScreen ? "scale(1.3)" : "scale(1)"}
                width={'100%'}
                h={['120vh', '100vh']}
            />
            <div className="overlay"/>
            <Flex className="content-wrapper" justify={'justify-around'} gap={[10, 10]} mt={["64px", "64px"]}>

                {isSmallScreen ? <Image width={'150px'} height={'145px'} src={LogoSM.src} alt={'logo'}/>
                    :
                    <Image width={'231px'} height={'223px'} src={LogoSM.src} alt={'logo'}/>
                }
                <Box className="content-section" mt={[0, 10, 12]}>
                    <Text className="description-text" fontSize={['16px', '18px']} style={{wordSpacing: '0.07164vw'}}>
                        To visit our website, you must be of legal drinking/purchasing age in your location of
                        <br/>residence. If there is no legal age for consuming alcohol in your location, you must be
                        over 21.
                    </Text>

                    <Box className="year-input-container">
                        {year.map((digit, index) => (
                            <Input
                                height={["93px", '204px']}
                                borderRadius={'none'}
                                key={index}
                                fontFamily={'EB Garamond'}
                                ref={inputRefs[index]}
                                border={['0.27px white solid', '0.4px white solid']}
                                borderWidth="1px"
                                value={digit}
                                fontSize={['48px', '100px']}
                                onChange={(e) => handleYearChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="year-input"
                                _focusVisible={{borderColor: 'none', outline: 'none'}}
                                placeholder="Y"
                                type="text"
                                maxLength={1}
                                inputMode="numeric"
                                pattern="\d*"
                            />
                        ))}
                    </Box>

                    <div className="country-select-container">
                        <Menu>
                            <MenuButton
                                as={Flex}
                                borderRadius="none"
                                height="64px"
                                width="100%"
                                border="1px solid white"
                                color="white"
                                className='country-select-btn'
                            >
                                <div className="country-label">
                                    <span>COUNTRY</span>
                                    <span>{selectedCountry.country}</span>
                                </div>
                                <Icon viewBox="0 0 24 24" w="24px" h="auto" width="20px" color="white" fill="none"
                                      stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                                      className='country-select-icon'>
                                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0L10 10L20 0H0Z" fill="white"/>
                                    </svg>
                                </Icon>
                            </MenuButton>
                            <MenuList bg="black" border="1px solid white" maxHeight="200px" overflowY="auto"
                                      className='country-select-list' borderRadius={'none'}>
                                {AlcoholRestrictionList.countries.map((country, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => handleCountrySelect(country)}
                                        border={'none'}
                                        color="white"
                                        bg="black"
                                        _hover={{bg: 'white', color: 'black'}}
                                        _focus={{bg: 'white', color: 'black'}}
                                    >
                                        {country.country}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </div>
                    {/*@ts-ignore*/}
                    <Btn text={"Enter the website"} size={'sm'}
                         onClick={(e) => isBtnDisabled ? e.preventDefault() : handleAgeResponse(Date.now())}
                        //  isDisabled={isBtnDisabled}
                    />

                    <p className="terms-text">
                        By entering this site, you are agreeing to our{' '}
                        <a href="/terms-condition">Terms & Conditions</a>,{' '}
                        <a href="/privacy-policy">Privacy Policy</a> and{' '}
                        <a href="/cookies-policy">Cookies Policy</a>.
                    </p>
                </Box>
            </Flex>
        </Flex>
    );
};

export default RestrictionAge;