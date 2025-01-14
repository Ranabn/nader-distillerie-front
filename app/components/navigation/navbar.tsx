// @ts-nocheck

'use client'

import React, {useEffect, useState} from "react";
import {Link, Box, Flex, Text, VStack, HStack, SimpleGrid, Menu, MenuList, MenuButton} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import {useRouter, useParams, usePathname} from "next/navigation";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal";

export const Navbar = ({brands}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname()

    const getInitialBackground = (pathname) => {
        if (['/', '/products'].includes(pathname)) {
            return {color: 'white', background: 'transparent'};
        } else {
            return {color: 'black', background: 'white'};
        }
    };

    const getInitialButtonStyle = (pathname) => {
        if (['/', '/products'].includes(pathname)) {
            return {'--button-bg': 'white', '--button-color': 'black'};
        } else {
            return {'--button-bg': 'black', '--button-color': 'white'};
        }
    };
    const [background, setBackground] = useState(getInitialBackground(pathname));
    const [buttonStyle, setButtonStyle] = useState(getInitialButtonStyle(pathname));

    const toggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setBackground({
                color: 'white',
                background: 'black'
            });
        } else {
            const scrollPosition = window.scrollY;
            if (pathname === '/' || pathname == '/products' && scrollPosition === 0) {
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
        // Restriction redirection
        if (
            localStorage.getItem('isAllowed') === 'false' ||
            localStorage.getItem('isAllowed') == null ||
            localStorage.getItem('isAllowed') == undefined ||
            localStorage.getItem('isAllowed') == ''
        ) {
            router.push('/restriction-age');
        }

        // Update background and button styles based on pathname
        if (['/brands', '/services', '/our-story', '/contact', '/services/gift'].includes(pathname) || pathname.startsWith('/brands')) {
            setBackground({color: 'black', background: 'white'});
            setButtonStyle({'--button-bg': 'black', '--button-color': 'white'});
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
            if (!isOpen && ['/', '/products'].includes(pathname)) {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 0) {
                    setBackground({color: 'black', background: 'white'});
                    setButtonStyle({'--button-bg': 'black', '--button-color': 'white'});
                } else {
                    setBackground({color: 'white', background: 'transparent'});
                    setButtonStyle({'--button-bg': 'white', '--button-color': 'black'});
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
                    <MenuLinks brands={brands} background={background} buttonStyle={buttonStyle}/>
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
                        <Flex alignItems="center" justifyContent={'space-between'} mb={12}>
                            <Text fontSize={'48px'} color="white" fontFamily={"EB Garamond"} mr={2}>Menu</Text>
                            <Box onClick={closeMenu} cursor="pointer">
                                <CloseIcon color="white"/>
                            </Box>
                        </Flex>
                        <SimpleGrid columns={[1, 2, 3, 5]} spacing={[8]} mb={8}>

                            <Flex justifyContent={'start'} gap={28}>
                                <Flex align="flex-start" gap={4} flexDirection={["column"]}>
                                    <Text fontWeight="bold" fontSize={['20px']} mb={2}>Brands</Text>
                                    {brands?.map((brand) => (
                                        <Link fontSize={'16px'} key={brand.slug} href={`/brands/${brand.slug}`}>
                                            {brand.brand_name}
                                        </Link>
                                    ))}
                                </Flex>
                                <Flex>
                                    <Text fontWeight="bold" fontSize={['20px']} mb={2}>Products</Text>
                                </Flex>
                            </Flex>
                            <Flex justifyContent={'start'} gap={28}>
                                <Flex align="flex-start" gap={4} flexDirection={["column"]}>
                                    <Text fontWeight="bold" fontSize={['20px']} mb={2}>Services</Text>
                                    <Link fontSize={'16px'} href={'/services/label-drinks'}>Private Label</Link>
                                    <Link fontSize={'16px'} href={'/services/ethanol'}>Raw Material</Link>
                                    <Link fontSize={'16px'} href={'/services/gift'}>Events</Link>
                                </Flex>
                                <Flex>
                                    <Text fontWeight="bold" fontSize={['20px']} mb={2}>Our story</Text>
                                </Flex>
                            </Flex>
                        </SimpleGrid>

                    </Box>
                )}
            </Box>
        </Flex>

    );
};

const CloseIcon = ({color = "black"}) => (
    <svg width="34" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill={color}
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = ({background, toggle}) => (
    <Flex p={[2, 0]} w={'100%'} justify={'space-between'} alignContent={'center'} alignItems={'center'}>
        <Link href={'/'}>
            <LogoHorizontal background={background.color}/>
        </Link>
        <Box onClick={toggle}>
            <svg
                width="34px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill={background.color}
            >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
        </Box>
    </Flex>
);

const MenuToggle = ({toggle, isOpen, background}) => {
        return (
            <Box
                display={{base: "block", md: "none"}}
                zIndex={9999}
                width="100%"
                role="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? (
                    <></>
                ) : (
                    <MenuIcon toggle={toggle} background={background}/>

                )}
            </Box>
        )
            ;
    }
;

const MenuItem = ({children, isLast, to = "/", isActive, background, ...rest}) => {

    const pathname = usePathname()
    return (
        <Link href={to} _hover={{textDecoration: "none"}}>
            <Text
                display="inline-block"
                position="relative"
                _after={{
                    content: '""',
                    position: 'absolute',
                    width: isActive && !isLast ? '40%' : '0', // No width for active last item
                    height: '1px', // Line height
                    bottom: '-6px', // Adjust spacing below the text
                    left: '0', // Align the line to the start
                    backgroundColor: isActive
                        ? pathname === '/' || pathname === '/products'
                            ? '#D2CDBF'
                            : '#224452'
                        : 'transparent',
                }}
                _hover={{
                    ...(isLast ? {} : {
                        _after: {
                            content: '""',
                            position: 'absolute',
                            width: '4px', // Dot width
                            height: '4px', // Dot height
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
                {...rest}
            >
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({background, brands}) => {

    const brandList = brands
    const buttonVariant = background.color === 'white' ? "primaryWhite" : "primaryBlack";
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                gap={10}
                align="center"
                pt={[4, 4, 0, 0]}
                pb={4}
                mt={4}
                flexDir={["column", "row"]}
                fontSize={"md", "18px"}>
                <Flex alignItems={'center'} gap={2}>
                    <Menu isOpen={isMenuOpen}>
                        <Link href={'/brands'}>
                            <MenuButton
                                onMouseEnter={() => setIsMenuOpen(true)} // Open menu on hover
                                onMouseLeave={() => setIsMenuOpen(false)} // Close menu when mouse leaves
                                to="/brands"
                                isActive={pathname.startsWith('/brands')}
                                px={2}
                                borderRadius="0"
                            >
                                Brands
                            </MenuButton>
                        </Link>
                        {/*<MenuList*/}
                        {/*    onMouseEnter={() => setIsMenuOpen(true)} // Keep menu open when hovering over it*/}
                        {/*    onMouseLeave={() => setIsMenuOpen(false)} // Close menu when mouse leaves*/}
                        {/*    borderRadius="0"*/}

                        {/*>*/}
                        {/*    {brandList?.map((brand) => (*/}
                        {/*        <MenuItem*/}
                        {/*            display={'flex'}*/}
                        {/*            flexDirection={'column'}*/}
                        {/*            p={4}*/}
                        {/*            key={brand.slug}*/}
                        {/*            color={'black'}*/}
                        {/*        >*/}
                        {/*            <Link href={`/brands/${brand.slug}`} textDecoration="none">*/}
                        {/*                {brand.brand_name}*/}
                        {/*            </Link>*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}
                        {/*</MenuList>*/}
                    </Menu>
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
                    {pathname !== '/contact' && (
                        <Btn size="md" variant={buttonVariant} text="WORK TOGETHER"/>

                    )}
                    {pathname === '/contact' && (
                        <Btn size="md" variant={'primaryBlue'} text="WORK TOGETHER"/>

                    )}
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

