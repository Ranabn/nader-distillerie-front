'use client'

import React, {useEffect, useState} from "react";
import {Link, Box, Flex, Text, VStack, HStack, SimpleGrid} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import {useRouter, useParams, usePathname} from "next/navigation";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal";

export const Navbar = ({brands}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname()
    const [background, setBackground] = useState({
        color: 'white',
        background: 'transparent'
    });
    const [buttonStyle, setButtonStyle] = useState({});

    const toggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setBackground({
                color: 'white',
                background: 'black'
            });
        } else {
            const scrollPosition = window.scrollY;
            if (pathname === '/' && scrollPosition === 0) {
                setBackground({
                    color: 'white',
                    background: 'transparent'
                });
            } else {
                setBackground({
                    color: 'black',
                    background: 'white'
                });
            }
        }
    };
    useEffect(() => {
        if (localStorage.getItem('isAllowed') === 'false' || localStorage.getItem('isAllowed') == null || localStorage.getItem('isAllowed') == undefined || localStorage.getItem('isAllowed') == '') {
            router.push('/restriction-age');
        }
        if (pathname == '/brands' || pathname === '/services' || pathname === '/services/templates/service' || pathname === '/services/templates/events' || pathname === '/our-story' || pathname === '/contact' || pathname.startsWith('/brands')) {
            setBackground({
                color: 'black',
                background: 'white'
            });
            setButtonStyle({
                '--button-bg': 'black',
                '--button-color': 'white',
            });
        }
    }, [router, pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen && pathname === '/') {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 0) {
                    setBackground({
                        color: 'black',
                        background: 'white'
                    });
                    setButtonStyle({
                        '--button-bg': 'black',
                        '--button-color': 'white',
                    });
                } else {
                    setBackground({
                        color: 'white',
                        background: 'transparent'
                    });
                    setButtonStyle({
                        '--button-bg': 'white',
                        '--button-color': 'black',
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, isOpen]);
    const closeMenu = () => {
        setIsOpen(false);
        // Reset background based on scroll position
        const scrollPosition = window.scrollY;
        if (pathname === '/' && scrollPosition === 0) {
            setBackground({
                color: 'white',
                background: 'transparent'
            });
        } else {
            setBackground({
                color: 'black',
                background: 'white'
            });
        }
    };

    return (
        <Flex

            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            transition="background-color 0.3s ease, color 0.3s ease"
            backgroundColor={isOpen ? "#12191F" : background.background}
            color={isOpen ? "white" : background.color}
            height={isOpen ? "100vh" : "auto"}
            overflow={isOpen ? "hidden" : "visible"}
        >
            <NavBarContainer background={background} isOpen={isOpen}>
                <MenuToggle toggle={toggle} isOpen={isOpen} background={background}/>
                {!isOpen && (
                    <MenuLinks background={background} buttonStyle={buttonStyle}/>
                )}
            </NavBarContainer>
            <Box
                position="fixed"
                top={0}
                right={0}
                width="100%"
                height="100vh"
                backgroundColor="#12191F"
                transform={isOpen ? "translateX(0)" : "translateX(100%)"}
                transition="transform 0.3s ease-in-out"
                overflowY="auto"
                zIndex={999}
            >
                {isOpen && (
                    <Box p={4} color="white">
                        <Flex alignItems="center" justifyContent={'space-between'} mb={8}>
                            <Text fontSize={'4xl'} color="white" fontFamily={"EB Garamond"} mr={2}>Menu</Text>
                            <Box onClick={closeMenu} cursor="pointer">
                                <CloseIcon color="white"/>
                            </Box>
                        </Flex>
                        <SimpleGrid columns={[1, 2, 3, 5]} spacing={[8]} mb={8}>

                            <Flex justifyContent={'space-between'}>

                                <VStack align="flex-start">
                                    <Text fontWeight="bold" mb={2}>Brands</Text>
                                    {brands.map((brand) => (
                                        <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                                            {brand.brand_name}
                                        </Link>
                                    ))}
                                </VStack>

                                <VStack>
                                    <Text fontWeight="bold" mb={2}>Products</Text>
                                </VStack>
                            </Flex>
                            <Flex justifyContent={'space-between'}>
                                <VStack align="flex-start">
                                    <Text fontWeight="bold" mb={2}>Services</Text>
                                    <Link>Private Label</Link>
                                    <Link>Raw Material</Link>
                                    <Link>Events</Link>
                                </VStack>

                                <VStack align="flex-start">
                                    <Text fontWeight="bold" mb={2}>Our story</Text>
                                </VStack>

                            </Flex>
                        </SimpleGrid>

                    </Box>
                )}
            </Box>
        </Flex>

    );
};

const CloseIcon = ({color = "black"}) => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill={color}
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = ({background}) => (
    <Flex width={['100%', '100%', '100%']} justifyContent={'space-between'}>
        <LogoHorizontal background={background.color}/>
        <svg
            width="24px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill={background.color}
        >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
    </Flex>
);

const MenuToggle = ({toggle, isOpen, background}) => {
    return (
        <Box display={{base: "block", md: "none"}} zIndex={9999} onClick={toggle} width={'100%'}>
            {!isOpen && (
                <MenuIcon background={background}/>
            )}
        </Box>
    );
};

const MenuItem = ({children, isLast, to = "/", isActive, background, ...rest}) => {

    const pathname = usePathname()
    return (
        <Link href={to}>
            <Text
                display="inline-block"
                position="relative"
                _after={{
                    content: '""',
                    position: 'absolute',
                    width: isActive ? '33%' : '0',
                    height: '1px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: pathname == '/products' ? 'white' : '#224452',
                    transition: 'width 0.3s ease-in-out'
                }}
                {...rest}
            >
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({background, buttonStyle}) => {
    const buttonVariant = background.color === 'white' ? "primaryWhite" : "primaryBlack";
    const pathname = usePathname();
    return (
        <Flex
            flexBasis={{base: "100%", md: "auto"}}
            justify="flex-end"
            direction={["column", "row"]}
            align={["center", "center"]}
            display={{base: "none", md: "flex"}}
            ml="auto"
            justifyContent={'space-between'}
            w={'100%'}
        >
            <Flex
                gap={8}
                align="center"
                pt={[4, 4, 0, 0]}
                flexDir={["column", "row"]}
                fontSize={"sm"}
            >
                <Link href={'/'}>
                    <Box w={'10%'}>
                        <LogoHorizontal background={background.color}/>
                    </Box>
                </Link>
            </Flex>
            <Flex
                gap={8}
                align="center"
                pt={[4, 4, 0, 0]}
                flexDir={["column", "row"]}
                fontSize={"md"}
            >
                <Flex alignItems={'center'} gap={2}>
                    <MenuItem to="/brands" isActive={pathname.startsWith('/brands')} background={background}>
                        Brands


                    </MenuItem>
                    <svg width="8" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5L5 5.5L10 0.5H0Z"
                              fill={pathname == '/products' || '/' ? background.color : "#224452"}/>
                    </svg>
                </Flex>

                <MenuItem to="/products" isActive={pathname === '/products'} background={background}>
                    Products
                </MenuItem>
                <Flex alignItems={'center'} gap={2}>

                    <MenuItem to="/services" isActive={pathname.startsWith('/services')} background={background}>
                        Services
                    </MenuItem>
                    <svg width="8" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5L5 5.5L10 0.5H0Z"
                              fill={pathname == '/products' || '/' ? background.color : "#224452"}/>
                    </svg>
                </Flex>

                <MenuItem to="/our-story" isActive={pathname === '/our-story'} background={background}>
                    Our Story
                </MenuItem>
                <MenuItem to="/contact" isLast isActive={pathname === '/contact'} background={background}>
                    <Btn size="sm" variant={buttonVariant} text="WORK TOGETHER"/>
                </MenuItem>
            </Flex>
        </Flex>
    );
};
const NavBarContainer = ({children, isOpen, ...props}) => {
    return (
        <Flex
            as="nav"
            align="center"
            alignItems={'center'}
            justify="space-between"
            wrap="wrap"
            w="100%"
            pl={[2, 4, 8]}
            pr={[2, 4, 8]}
            bg={isOpen ? "black" : props.background?.background}
            color={isOpen ? "white" : props.background?.color}
            {...props}
        >
            {children}
        </Flex>
    );
};

