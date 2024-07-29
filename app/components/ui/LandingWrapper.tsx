'use client'

import {Navbar} from "@/app/components/navigation/navbar";
import {Box} from "@chakra-ui/react";
import {HeroBanner} from "@/app/components/landing/HeroBanner";
import {useRef, useState, useEffect} from "react";


export const LandingWrapper = () => {
    const ref = useRef(null);


    return (
        <>
            <Navbar refer={ref}/>
            <Box ref={ref} id="brands-section">
                <HeroBanner/>
            </Box>
        </>

    )
}