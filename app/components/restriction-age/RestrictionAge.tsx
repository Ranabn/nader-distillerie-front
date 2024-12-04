'use client';
import {useState, useRef, useEffect} from 'react';
import Background from '@/app/assets/images/age-restriction.jpeg';
import LogoSM from '@/app/assets/images/LogoSM.png';
import {Logo} from '@/app/components/ui/Logo';
import {useRouter} from "next/navigation";
import AlcoholRestrictionList from "@/utils/alcohol-restriction.json";
import '../../restriction-age.css';
import {Btn} from "@/app/components/ui/Btn";
import {Select, Text, useBreakpointValue, Image, Flex, Box, Input} from "@chakra-ui/react";

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
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newYear = [...year];
            newYear[index] = value;
            setYear(newYear);

            if (value && index < 3) {
                // @ts-ignore
                inputRefs[index + 1].current.focus();
            }
        }
    };

    useEffect(() => {
        // @ts-ignore
        inputRefs[0].current.focus();
    }, []);

    useEffect(() => {
        setIsBtnDisabled(!(selectedCountry?.country !== '' && year[3] !== ''));
    }, [selectedCountry?.country, year]);

    const isSmallScreen = useBreakpointValue({base: true, md: false});

    return (
        <Flex h={'100vh'} alignItems={'center'} alignContent={'center'} justify={'center'} overflow={'hidden'}>
            <Image
                src={Background.src}
                alt="background"
                objectFit="cover"
                transform={isSmallScreen ? "scale(1.3)" : "scale(1)"}
                width={'100%'}
                h={'100%'}
            />
            <div className="overlay"/>


            <Flex className="content-wrapper" justify={'justify-around'} gap={[10, 10]} mt={[0, 0]}>

                {isSmallScreen ? <Image width={'150px'} height={'145px'} src={LogoSM.src} alt={'logo'}/>
                    :
                        <Image width={'231px'} height={'223px'} src={LogoSM.src} alt={'logo'}/>
                }
                <Box className="content-section">
                    <Text className="description-text" fontSize={['16px', '18px']}>
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
                                ref={inputRefs[index]}
                                border={['0.27px white solid', '0.4px white solid']}
                                borderWidth="1px"
                                value={digit}
                                fontSize={['48px', '100px']}
                                onChange={(e) => handleYearChange(index, e.target.value)}
                                className="year-input"
                                _focusVisible={{borderColor: 'none', outline: 'none'}}
                                placeholder="Y"
                                type="text"
                                maxLength={1}
                            />
                        ))}
                    </Box>

                    <div className="country-select-container">
                        <div className="country-label">
                            <span>COUNTRY</span>
                            <span>{selectedCountry.country}</span>
                        </div>
                        <Select
                            className="country-select"
                            onChange={handleSelectChange}
                            borderRadius={'none'}
                            height={'64px'}
                        >
                            <option value="" hidden></option>
                            {AlcoholRestrictionList.countries.map((country, index) => (
                                <option key={index} value={country.country}>
                                    {country.country}
                                </option>
                            ))}
                        </Select>
                    </div>
                    {/*@ts-ignore*/}
                    <Btn text={"Enter the website"} size={'sm'} onClick={(e) => handleAgeResponse(Date.now())}
                         isDisabled={isBtnDisabled}/>

                    <p className="terms-text">
                        By entering this site, you are agreeing to our{' '}
                        <a href="#">Terms & Conditions</a>,{' '}
                        <a href="#">Privacy Policy</a> and{' '}
                        <a href="#">Cookies Policy</a>.
                    </p>
                </Box>
            </Flex>
        </Flex>
    );
};

export default RestrictionAge;