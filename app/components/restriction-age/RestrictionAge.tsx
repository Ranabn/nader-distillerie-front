'use client';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Background from '@/app/assets/images/age-restriction.jpeg';
import { Logo } from '@/app/components/ui/Logo';
import { useRouter } from "next/navigation";
import AlcoholRestrictionList from "@/utils/alcohol-restriction.json";
import '../../restriction-age.css';

export const RestrictionAge = () => {
    const [year, setYear] = useState(['', '', '', '']);
    const [selectedCountry, setSelectedCountry] = useState({ country: '', alcoholRestrictionAge: null });
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

    return (
        <div className="restriction-container">
            <Image
                src={Background}
                alt="background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="background-image"
            />
            <div className="overlay" />

            <div className="content-wrapper">
                <div className="logo-container">
                    <Logo />
                </div>

                <div className="content-section">
                    <p className="description-text">
                        To visit our website, you must be of legal drinking/purchasing age in your location of
                        <br />residence. If there is no legal age for consuming alcohol in your location, you must be over 21.
                    </p>

                    <div className="year-input-container">
                        {year.map((digit, index) => (
                            <input
                                key={index}
                                ref={inputRefs[index]}
                                value={digit}
                                onChange={(e) => handleYearChange(index, e.target.value)}
                                className="year-input"
                                placeholder="Y"
                                type="text"
                                maxLength={1}
                            />
                        ))}
                    </div>

                    <div className="country-select-container">
                        <div className="country-label">
                            <span>COUNTRY</span>
                            <span>{selectedCountry.country}</span>
                        </div>
                        <select
                            className="country-select"
                            onChange={handleSelectChange}
                        >
                            <option value="" hidden></option>
                            {AlcoholRestrictionList.countries.map((country, index) => (
                                <option key={index} value={country.country}>
                                    {country.country}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        className={`enter-button ${isBtnDisabled ? 'disabled' : ''}`}
                        onClick={(e) => handleAgeResponse(Date.now())}
                        disabled={isBtnDisabled}
                    >
                        Enter the website
                    </button>

                    <p className="terms-text">
                        By entering this site, you are agreeing to our{' '}
                        <a href="#">Terms & Conditions</a>,{' '}
                        <a href="#">Privacy Policy</a> and{' '}
                        <a href="#">Cookies Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RestrictionAge;