// @ts-nocheck

'use client'

import React, {useEffect, useState} from "react";
import {Link, Box, Flex, Text, VStack, HStack, SimpleGrid, Menu, MenuList, MenuButton} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import {useRouter, useParams, usePathname} from "next/navigation";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal";
import {motion, AnimatePresence} from "framer-motion";

export const Navbar = ({brands}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const getInitialStyles = (path) => {
        return ["/", "/products"].includes(path)
            ? {color: "white", background: "transparent", buttonBg: "white", buttonColor: "black"}
            : {color: "black", background: "white", buttonBg: "black", buttonColor: "white"};
    };

    const [styles, setStyles] = useState(getInitialStyles(pathname));

    useEffect(() => {
        if (!localStorage.getItem("isAllowed")) {
            router.push("/restriction-age");
        }
    }, [router]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen && ["/", "/products"].includes(pathname)) {
                const scrollPosition = window.scrollY;
                setStyles(
                    scrollPosition > 0
                        ? {color: "black", background: "white", buttonBg: "black", buttonColor: "white"}
                        : getInitialStyles(pathname)
                );
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname, isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setStyles(isOpen ? getInitialStyles(pathname) : {color: "white", background: "black"});
    };

    return (
        <Flex
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            transition="background-color 0.3s ease, color 0.3s ease"
            backgroundColor={isOpen ? "#12191F" : styles.background}
            color={isOpen ? "white" : styles.color}
            height={isOpen ? "100vh" : "auto"}
            overflow={isOpen ? "hidden" : "visible"}
        >
            <NavBarContainer styles={styles} isOpen={isOpen}>
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} styles={styles}/>
                {!isOpen && <MenuLinks brands={brands} styles={styles}/>}
            </NavBarContainer>
        </Flex>
    );
};

const MenuToggle = ({toggle, isOpen, styles}) => (
    <Box display={{base: "block", md: "none"}} zIndex={9999} width="100%" role="button" onClick={toggle}>
        {!isOpen && <MenuIcon styles={styles}/>}
    </Box>
);

const MenuIcon = ({styles}) => (
    <Flex p={[2, 0]} justify="space-between" alignItems="center">
        <Link href="/">
            <Box display={['flex']} width={'120px'}>
                <LogoHorizontal background={styles.color}/>
            </Box>
        </Link>
    </Flex>
);
const MenuItemWithDropdown = ({label, items, to, isActive, styles}) => {
    const [isHovered, setIsHovered] = useState(false);

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -5,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: -5,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <Box
            position="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={to} _hover={{textDecoration: "none"}} position="relative">
                <Text
                    display={'flex'}
                    alignItems={'center'}
                    gap={3}
                    position="relative"
                    _after={{
                        content: '""',
                        position: "absolute",
                        width: isActive ? "40%" : "0",
                        height: "1px",
                        bottom: "-6px",
                        left: "0",
                        backgroundColor: isActive ? "#D2CDBF" : "transparent",
                        opacity: isActive ? 1 : 0,
                        transition: "width 0.3s ease",
                    }}
                    _hover={{
                        _after: {width: "40%", backgroundColor: "#D2CDBF"},
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "current",
                            borderRadius: "50%",
                            left: "50%",
                            top: "100%",
                            transform: "translate(-50%, 6px)",
                        },
                    }}
                >
                    {label}
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <path d="M0 0.5L5 5.5L10 0.5H0Z" fill={styles?.color}/>
                    </svg>
                </Text>
            </Link>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        style={{
                            padding: "10px",
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            marginTop: "5px",
                            zIndex: 1000,
                            background: "white",
                            minWidth: "200px",
                            border: "1px solid black",
                        }}
                    >
                        <Flex p={3} gap={4}>
                            <Flex align="start" flexDirection={'column'} gap={4} zIndex={9999}>
                                {items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -10}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: index * 0.05}}
                                    >
                                        <Link
                                            href={item.to}
                                            color={'black'}
                                            _hover={{textDecoration: "none", color: "#aba493"}}
                                        >
                                            <Text>{item.label}</Text>
                                        </Link>
                                    </motion.div>
                                ))}
                            </Flex>
                        </Flex>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

const MenuLinks = ({styles, brands}) => {
    const pathname = usePathname();

    return (
        <Flex justify="space-between" align="center" display={{base: "none", md: "flex"}} w="100%">
            <Link href={'/'}>
                <Box w={'10%'}>
                    <LogoHorizontal background={styles.color}/>
                </Box>
            </Link>
            <Flex gap={10} align="center" fontSize="18px">
                <MenuItemWithDropdown
                    styles={styles ? styles : ''}
                    label="Brands"
                    to="/brands"
                    isActive={pathname.startsWith("/brands")}
                    items={brands.map((brand) => ({label: brand.brand_name, to: `/brands/${brand.slug}`}))}
                />
                <MenuItem to="/products" isActive={pathname === "/products"}>
                    Products
                </MenuItem>
                <MenuItemWithDropdown
                    styles={styles ? styles : ''}
                    label="Services"
                    to="/services"
                    isActive={pathname.startsWith("/services")}
                    items={[
                        {label: "Private Label", to: "/services/label-drinks"},
                        {label: "Raw Material", to: "/services/ethanol"},
                        {label: "Events", to: "/services/gift"},
                    ]}
                />
                <MenuItem to="/our-story" isActive={pathname === "/our-story"}>
                    Our Story
                </MenuItem>
                <MenuItem to="/contact" isLast>
                    {pathname === "/contact" && (
                        <Btn size="md" variant={"primaryBlue"}
                             text="WORK TOGETHER"/>
                    )}
                    {pathname !== "/contact" && (
                        <Btn size="md" variant={styles.buttonBg === "white" ? "primaryWhite" : "primaryBlack"}
                             text="WORK TOGETHER"/>
                    )}
                </MenuItem>
            </Flex>
        </Flex>
    );
};


const MenuItem = ({children, to, isActive, isLast}) => {
    const pathname = usePathname();
    return (
        <Link href={to} _hover={{textDecoration: "none"}} position="relative">
            <Text
                position="relative"
                _after={{
                    content: '""',
                    position: "absolute",
                    width: isActive && !isLast ? "40%" : "0", // No width for active last item
                    height: "1px", // Line height
                    bottom: "-6px", // Adjust spacing below the text
                    left: "0", // Align the line to the start
                    backgroundColor: isActive
                        ? pathname === "/" || pathname === "/products"
                            ? "#D2CDBF"
                            : "#224452"
                        : "transparent",
                }}
                _hover={{
                    ...(isLast ? {} : {
                        _after: {
                            content: '""',
                            position: 'absolute',
                            width: '6px', // Dot width
                            height: '6px', // Dot height
                            borderRadius: '50%', // Make it a circle
                            bottom: '-6px', // Adjust spacing below the text
                            left: '50%', // Center horizontally
                            transform: 'translateX(-50%)', // Center alignment
                            backgroundColor: pathname === '/' || pathname === '/products'
                                ? '#D2CDBF'
                                : '#224452',
                        },
                    }),
                }}
            >
                {children}
            </Text>
        </Link>
    );
};


const NavBarContainer = ({children, isOpen, styles}) => (
    <Flex
        pt={'20px'}
        pb={'20px'}
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        px={[2, 4, 8]}
        bg={isOpen ? "black" : styles.background}
        color={isOpen ? "white" : styles.color}
    >
        {children}
    </Flex>
);

