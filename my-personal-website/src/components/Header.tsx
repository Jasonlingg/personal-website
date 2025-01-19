import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Lottie from 'lottie-react';
import { Box, Flex, HStack, Container, useBreakpointValue, Text } from '@chakra-ui/react';
import headerAnimation from '../animations/header.json';

interface NavItem {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
];

const CustomNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    return (
        <RouterLink to={to} style={{ textDecoration: 'none' }}>
            <Text
                px={3}
                py={2}
                fontWeight="semibold"
                rounded="md"
                _hover={{ bg: 'gray.100', color: 'blue.500' }}
                _active={{ bg: 'gray.200' }}
            >
                {children}
            </Text>
        </RouterLink>
    );
};

const Header: React.FC = () => {
    const spacing = useBreakpointValue({ base: 4, md: 6 });

    return (
        <Box as="header" bg="gray.50"  position="sticky" top={0} zIndex={10} px={5}>
            <Container maxW="container.xl">
                <Flex align="center" >
                    {/* Logo/Animation */}
                    <Box pr={5}>
                        <Lottie animationData={headerAnimation} style={{ width: 80, height: 80 }} />
                    </Box>
                    {/* Navigation */}
                    <HStack as="nav" gap={spacing}>
                        {navItems.map((item) => (
                            <CustomNavLink key={item.path} to={item.path}>
                                {item.name}
                            </CustomNavLink>
                        ))}
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
