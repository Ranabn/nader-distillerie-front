'use client'

import React, {useEffect, useState} from "react";
import {Link, Box, Flex, Text, background} from "@chakra-ui/react";
import {Btn} from "@/app/components/ui/Btn";
import {useRouter} from "next/navigation";
import {useScroll, motion} from "framer-motion";
import {FiChevronDown} from "react-icons/fi";
import {Logo} from "@/app/components/ui/Logo";
import {LogoHorizontal} from "@/app/components/ui/LogoHorizontal"; // Import the arrow down icon

export const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const [background, setBackground] = useState({
        color: 'white', // Initial text color
        background: 'transparent' // Initial background color
    });

    const {scrollY} = useScroll(); // Use scrollY for vertical scroll tracking

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (localStorage.getItem('isAllowed') === 'false') {
            router.push('/restriction-age/not-allowed');
        }
    }, [router]);

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
            console.log(`Current scrollY: ${latest}`);
            if (latest > 0) {
                // Set to white background when scrolled down
                setBackground({
                    color: 'black', // Change text color if needed
                    background: 'white' // White background when not at top
                });
            } else {
                // Set to transparent when at the top
                setBackground({
                    color: 'white',
                    background: 'transparent'
                });
            }
        });

        return () => {
            unsubscribe();
        };
    }, [scrollY]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition
            }}
            animate={{
                backgroundColor: background.background,
                color: background.color,
            }}
            transition={{duration: 0.3}}
        >
            <NavBarContainer {...props}>
                <MenuToggle toggle={toggle} isOpen={isOpen} background={background}/>
                <MenuLinks isOpen={isOpen} background={background}/>
            </NavBarContainer>
        </motion.div>
    );
};


const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="black"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = ({background}) => (
    <Flex width={'100%'} justifyContent={'space-between'}>
        <LogoHorizontal/>
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
        <Box display={{base: "block", md: "none"}} onClick={toggle}>
            {isOpen ? <CloseIcon/> : <MenuIcon background={background}/>}
        </Box>
    );
};

const MenuItem = ({children, isLast, to = "/", ...rest}) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({isOpen, background}) => {
    const buttonVariant = background.color === 'white' ? "primaryWhite" : "primaryBlack";

    return (
        <Flex
            zIndex={9999}
            flexBasis={{base: "100%", md: "auto"}}
            justify={["center", "space-between"]}
            w={"100vw"}
            direction={["column", "row"]}
            align={["center", "flex-start"]}
            display={{base: isOpen ? "flex" : "none", md: "flex"}} // Adjust visibility for mobile
        >
            <Flex>
                <svg
                    width="140"
                    height="61"
                    viewBox="0 0 168 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <svg width="140" height="61" viewBox="0 0 168 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.5003 19.5879C13.469 21.4918 12.6418 24.4882 12.8698 26.683C12.8922 26.8937 13.05 27.0755 13.2599 27.1053C13.4714 27.1359 13.6714 27.0185 13.7516 26.8235C14.887 24.0907 17.1752 22.7933 19.194 21.648C20.8335 20.7192 22.2491 19.9159 22.7837 18.5334C23.1126 17.7079 23.23 16.8741 23.3332 16.1386C23.4622 15.2181 23.5737 14.4231 24.0464 13.8835C24.2579 13.6422 24.605 13.4976 24.9744 13.4976C25.2488 13.4976 25.5256 13.5719 25.7983 13.7182C25.7983 13.7182 26.185 13.9678 26.2867 13.8876C26.4693 13.7422 26.2164 13.3472 26.2164 13.3472C26.0065 12.9232 23.7572 10.4673 22.5482 10.2367L22.5548 10.2409C22.3053 10.169 22.0408 10.1252 21.7632 10.1252C21.4748 10.1252 21.1822 10.169 20.893 10.2541C19.9865 10.521 19.3543 11.2275 18.7436 11.9118C18.2379 12.477 17.7503 13.0208 17.1248 13.3257C16.2546 12.5803 15.2762 12.0737 14.1978 11.8134C11.6286 11.1928 8.95866 12.1332 7.33817 13.2092C7.14976 13.3339 7.10183 13.5901 7.22743 13.7785C7.29024 13.8984 7.40345 13.9843 7.53815 14.0149C9.51067 14.4595 12.845 16.5964 14.3945 18.4971C14.6473 18.8069 14.6911 19.2358 14.5003 19.5879Z"
                            fill={background.color}/>
                        <path d="M27.0358 31.5442H6.47424V30.0311H27.0358V31.5442Z" fill={background.color}/>
                        <path
                            d="M20.8134 45.6498L11.8763 35.3699H7.72131L9.35503 37.8366V50.8741H12.6968V41.2734L20.901 50.8741H24.1552V35.3699H20.8134V45.6498Z"
                            fill={background.color}/>
                        <path
                            d="M16.7553 1.54591C8.3504 1.54591 1.51307 8.38324 1.51307 16.7882V44.211C1.51307 52.616 8.3504 59.4541 16.7553 59.4541C25.1594 59.4541 31.9976 52.616 31.9976 44.211V16.7882C31.9976 8.38324 25.1594 1.54591 16.7553 1.54591ZM16.7553 60.9672C7.5166 60.9672 0 53.4506 0 44.211V16.7882C0 7.54944 7.5166 0.0328407 16.7553 0.0328407C25.9941 0.0328407 33.5107 7.54944 33.5107 16.7882V44.211C33.5107 53.4506 25.9941 60.9672 16.7553 60.9672Z"
                            fill={background.color}/>
                        <path
                            d="M52.9177 46.9177H51.7351V43.3478H52.9177C54.0655 43.3478 54.72 43.956 54.72 45.1154C54.72 46.2632 54.0655 46.9177 52.9177 46.9177ZM52.9177 42.1661H50.4956V48.1118H52.9177C54.7315 48.1118 55.9248 46.9408 55.9248 45.0922C55.9248 43.199 54.7084 42.1661 52.9177 42.1661Z"
                            fill={background.color}/>
                        <path d="M57.1493 42.1653H58.3202V48.111H57.1493V42.1653Z" fill={background.color}/>
                        <path
                            d="M63.8644 43.6347C63.4049 43.2562 62.7852 43.1182 62.0968 43.1182C61.5225 43.1182 60.8911 43.4165 60.8911 43.7603C60.8911 44.1173 61.0292 44.3578 62.1885 44.3578C64.7255 44.3578 65.1155 45.2188 65.1155 46.1832C65.1155 47.6062 63.8074 48.2946 62.1084 48.2946C61.0746 48.2946 60.0648 47.8012 59.4111 47.0327L60.2598 46.1716C60.616 46.5501 61.0523 47.1467 62.1084 47.1467C63.1868 47.1467 63.9446 46.803 63.9446 46.1832C63.9446 45.6436 63.3479 45.5287 62.1084 45.5287C60.6854 45.5287 59.6516 45.0577 59.6516 43.7603C59.6516 42.6819 60.7879 41.9704 62.1084 41.9704C62.9695 41.9704 63.7842 42.1191 64.6561 42.7166L63.8644 43.6347Z"
                            fill={background.color}/>
                        <path d="M69.1249 43.3478V48.111H67.9424V43.3478H65.7848V42.1653H71.3627V43.3478H69.1249Z"
                              fill={background.color}/>
                        <path d="M72.7213 42.1653H73.8923V48.111H72.7213V42.1653Z" fill={background.color}/>
                        <path d="M75.4917 48.1114V42.1657H76.7197V46.9173H79.8764V48.1114H75.4917Z"
                              fill={background.color}/>
                        <path d="M81.2103 48.1114V42.1657H82.4383V46.9173H85.595V48.1114H81.2103Z"
                              fill={background.color}/>
                        <path d="M100.176 42.1653H101.347V48.111H100.176V42.1653Z" fill={background.color}/>
                        <path
                            d="M112.975 43.6347C112.516 43.2562 111.896 43.1182 111.208 43.1182C110.634 43.1182 110.002 43.4165 110.002 43.7603C110.002 44.1173 110.14 44.3578 111.3 44.3578C113.837 44.3578 114.227 45.2188 114.227 46.1832C114.227 47.6062 112.918 48.2946 111.219 48.2946C110.186 48.2946 109.176 47.8012 108.522 47.0327L109.371 46.1716C109.727 46.5501 110.163 47.1467 111.219 47.1467C112.298 47.1467 113.056 46.803 113.056 46.1832C113.056 45.6436 112.459 45.5287 111.219 45.5287C109.796 45.5287 108.763 45.0577 108.763 43.7603C108.763 42.6819 109.899 41.9704 111.219 41.9704C112.081 41.9704 112.895 42.1191 113.767 42.7166L112.975 43.6347Z"
                            fill={background.color}/>
                        <path
                            d="M88.0535 46.9177V45.7294H90.9896V44.5477H88.0535V43.3478H91.5664V42.1652H86.8826V48.1118H91.5664V46.9177H88.0535Z"
                            fill={background.color}/>
                        <path
                            d="M104.076 46.9177V45.7294H107.012V44.5477H104.076V43.3478H107.589V42.1652H102.905V48.1118H107.589V46.9177H104.076Z"
                            fill={background.color}/>
                        <path
                            d="M96.8287 44.4956H94.2001V43.3478H96.6221C97.0353 43.3478 97.4948 43.394 97.4948 43.9221C97.4948 44.3006 97.1849 44.4956 96.8287 44.4956ZM97.3336 45.6897C98.1947 45.4252 98.6996 44.8633 98.6996 43.956C98.6996 42.923 97.9195 42.1661 96.8287 42.1661H92.9952V48.1118H94.2001V45.6781H95.9454L97.3336 45.6897Z"
                            fill={background.color}/>
                        <path d="M96.8682 44.9026L95.5436 45.0257L97.4426 48.1114H98.7689L96.8682 44.9026Z"
                              fill={background.color}/>
                        <path
                            d="M65.5073 26.6338L53.7986 13.1657H48.3553L50.4956 16.3976V33.4777H54.8745V20.8997L65.6214 33.4777H69.8862V13.1657H65.5073V26.6338Z"
                            fill={background.color}/>
                        <path
                            d="M89.1092 26.4491H88.9216C85.3244 26.4491 82.7776 27.2779 81.338 27.9241L85.5831 19.7473L89.1092 26.4491ZM78.3028 33.4781C78.9193 32.6774 84.0857 30.4834 88.9604 30.4834H91.2123L92.7865 33.4781H97.605L86.6904 12.8174L86.6309 12.7042H81.8901L83.3064 15.4113L73.8371 33.1666L73.6719 33.4781H78.3028Z"
                            fill={background.color}/>
                        <path
                            d="M110.17 29.0608H106.427V17.5446H110.17C113.974 17.5446 115.985 19.5155 115.985 23.2457C115.985 26.9412 113.865 29.0608 110.17 29.0608ZM110.17 13.1657H97.519L99.4734 17.5446H101.856V33.4777H110.17C116.409 33.4777 120.441 29.431 120.441 23.1688C120.441 16.9992 116.504 13.1657 110.17 13.1657Z"
                            fill={background.color}/>
                        <path
                            d="M160.148 20.9591H151.569V17.5446H159.456C161.127 17.5446 162.163 17.8297 162.163 19.2527C162.163 20.5129 161.078 20.9591 160.148 20.9591ZM166.407 28.7922C165.335 28.7922 164.122 28.5956 163.248 27.1313L162.154 25.2843C165.076 24.3034 166.619 22.2623 166.619 19.3667C166.619 15.7745 163.897 13.1657 160.148 13.1657H147.113V33.4777H151.569V26.4065V25.3389H157.074L160.083 30.2276C161.935 33.2381 163.806 33.4777 166.06 33.4777H168V28.7922H166.407Z"
                            fill={background.color}/>
                        <path
                            d="M126.16 17.5446H123.777L121.823 13.1657H142.25V17.5446H130.501V21.1327H140.19V25.5116H130.501V29.0608H142.25V33.4777H126.16V17.5446Z"
                            fill={background.color}/>
                    </svg>
                </svg>
            </Flex>
            <Flex
                gap={8}
                align="center"
                pt={[4, 4, 0, 0]}
                flexDir={["column", "row"]}
                fontSize={"sm"}
            >
                <MenuItem to="/">
                    Brands <FiChevronDown style={{display: "inline-block", marginLeft: "5px"}}/>
                </MenuItem>
                <MenuItem to="/how">Products</MenuItem>
                <MenuItem to="/features">
                    Services <FiChevronDown style={{display: "inline-block", marginLeft: "5px"}}/>
                </MenuItem>
                <MenuItem to="/pricing">Our Story</MenuItem>
                <MenuItem to="/signup" isLast>
                    <Btn variant={buttonVariant} text="WORK TOGETHER"/>
                </MenuItem>
            </Flex>
        </Flex>
    );
};

const NavBarContainer = ({children, ...props}) => {
    return (
        <Flex
            boxShadow={props.background?.color == 'white' ? 'sm' : ''}
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            pl={8}
            pr={8}
            pt={4}
            pb={2}
            {...props}
        >
            {children}
        </Flex>
    );
};