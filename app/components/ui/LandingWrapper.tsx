// @ts-nocheck

'use client'

import {Navbar} from "@/app/components/navigation/navbar";
import {Box} from "@chakra-ui/react";
import {HeroBanner} from "@/app/components/landing/HeroBanner";
import {useRef, useState, useEffect} from "react";


export const LandingWrapper = ({brands}) => {
    const ref = useRef(null);


    return (
        <>
                <HeroBanner/>
        </>

    )
}