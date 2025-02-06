// @ts-nocheck

'use client'

import React, {useEffect, useState} from "react";
import {Link, Box, Flex, Text, SimpleGrid} from "@chakra-ui/react";
import {useRouter, usePathname} from "next/navigation";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal";
import {motion, AnimatePresence} from "framer-motion";

export const Navbar = ({brands}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const getInitialStyles = (path) => {
        return ["/", "/products"].includes(path)
            ? {color: "white", background: "transparent"}
            : {color: "black", background: "white"};
    };

    const [styles, setStyles] = useState(getInitialStyles(pathname));

    useEffect(() => {
        if (!localStorage.getItem("isAllowed")) {
            router.push("/restriction-age");
        }
    }, [router]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen && ["/", "/products"].includes(pathname)) {
                setStyles(window.scrollY > 0 ? {color: "black", background: "white"} : getInitialStyles(pathname));
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname, isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Flex
            display={['none','flex','flex']}
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            transition="background-color 0.3s ease, color 0.3s ease"
            backgroundColor={isOpen ? "#12191F" : styles.background}
            color={isOpen ? "white" : styles.color}
            height="auto"
            alignItems="center"
            justifyContent="space-between"
            p={4}
        >
            <Link href='/'>
                <LogoHorizontal background={styles.color}/>
            </Link>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} color={styles.color}/>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, x: "100%"}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: "100%"}}
                        transition={{duration: 0.3}}
                        style={{
                            position: "fixed",
                            top: 0,
                            right: 0,
                            width: "100%",
                            height: "100vh",
                            background: "#12191F",
                            color: "white",
                            zIndex: 999,
                            display: "flex",
                            flexDirection: "column",
                            padding: "20px",
                        }}
                    >
                        <Flex justifyContent="space-between" alignItems="center" mb={8}>
                            <Text fontSize="48px" fontWeight="bold" fontFamily={"EB Garamond"}>Menu</Text>
                        </Flex>
                        <SimpleGrid columns={[2, 2]} spacing={10}>
                            <Flex flexDirection="column" gap={4}>
                                <Link href={'/brands'}>
                                    <Text fontWeight="bold" fontSize="18px">Brands</Text>
                                </Link>
                                {brands.map((brand, index) => (
                                    <Link key={index} href={`/brands/${brand.slug}`} color="white">
                                        <Text fontSize="16px">{brand.brand_name}</Text>
                                    </Link>
                                ))}
                            </Flex>
                            <Flex flexDirection="column" gap={6}>
                                <Link href="/products">
                                    <Text fontWeight="bold" fontSize="18px">Products</Text>
                                </Link>
                            </Flex>
                            <Flex flexDirection="column" gap={4}>
                                <Link href={'/services'}><Text fontWeight="bold" fontSize="18px">Services</Text></Link>
                                <Link href="/services/label-drinks" color="white"><Text fontSize="16px">Private Label</Text></Link>
                                <Link href="/services/ethanol" color="white"><Text fontSize="16px">Raw Material</Text></Link>
                                <Link href="/services/gift" color="white"><Text fontSize="16px">Events</Text></Link>
                            </Flex>
                            <Flex flexDirection="column" gap={2}>
                                <Link href="/our-story">
                                    <Text fontWeight="bold" fontSize="18px">Our Story</Text>
                                </Link>
                            </Flex>
                        </SimpleGrid>
                    </motion.div>
                )}
            </AnimatePresence>
        </Flex>
    );
};

const MenuToggle = ({toggle, isOpen, color}) => (
    <Box
        display={{base: "block", md: "none"}}
        zIndex={9999}
        role="button"
        onClick={toggle}
    >
        <Text fontSize="24px" fontWeight="bold" cursor="pointer">
            {isOpen ? <CloseIcon close={toggle}/> : <MenuIcon color={color}/>}
        </Text>
    </Box>
);

const MenuIcon = ({color}) => (
    <svg width="36" height="25" viewBox="0 0 36 25" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 24.7622H36V20.7622H0V24.7622ZM0 14.7622H36V10.7622H0V14.7622ZM0 0.762207V4.76221H36V0.762207H0Z" />
    </svg>
);

const CloseIcon = ({close}) => (
    <Box cursor="pointer" onClick={close}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6668 2.6835L21.3168 0.333496L12.0002 9.65016L2.6835 0.333496L0.333496 2.6835L9.65016 12.0002L0.333496 21.3168L2.6835 23.6668L12.0002 14.3502L21.3168 23.6668L23.6668 21.3168L14.3502 12.0002L23.6668 2.6835Z" />
        </svg>
    </Box>
);
