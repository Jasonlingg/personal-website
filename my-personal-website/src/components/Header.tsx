import React, { useState } from "react";
import {
    Box,
    Flex,
    Container,
    HStack,
    VStack,
    IconButton,
    Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Lottie from "lottie-react";
import headerAnimation from "../animations/header.json";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Box as="header" bg="white" shadow="md" position="sticky" top={0} zIndex={10}>
            <Container maxW="container.xl" py={3}>
                <Flex align="center" justify="space-between">
                    {/* Logo/Animation */}
                    <Box display="flex" alignItems="center">
                        <Lottie animationData={headerAnimation} style={{ width: 60, height: 60 }} />
                    </Box>

                    {/* Desktop Navigation */}
                    <HStack as="nav" gap={6} display={{ base: "none", md: "flex" }}>
                        {navItems.map((item) => (
                            <RouterLink key={item.path} to={item.path}>
                                <Text
                                    px={3}
                                    py={2}
                                    fontWeight="semibold"
                                    rounded="md"
                                    _hover={{ bg: "gray.100", color: "blue.500", transform: "scale(1.05)" }}
                                    _active={{ bg: "gray.200" }}
                                    transition="all 0.2s ease-in-out"
                                >
                                    {item.name}
                                </Text>
                            </RouterLink>
                        ))}
                    </HStack>

                    {/* Mobile Menu Button */}
                    <IconButton
                        aria-label="Toggle Navigation"
                        onClick={toggleMenu}
                        variant="ghost"
                        size="lg"
                    >
                        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </IconButton>
                </Flex>

                {/* Mobile Navigation */}
                {isOpen && (
                    <VStack
                        as="nav"
                        gap={4}
                        align="start"
                        bg="gray.50"
                        rounded="md"
                        shadow="sm"
                        mt={2}
                        px={4}
                        py={3}
                        display={{ md: "none" }}
                    >
                        {navItems.map((item) => (
                            <RouterLink key={item.path} to={item.path}>
                                <Text
                                    px={3}
                                    py={2}
                                    fontWeight="semibold"
                                    rounded="md"
                                    _hover={{ bg: "gray.100", color: "blue.500", transform: "scale(1.05)" }}
                                    _active={{ bg: "gray.200" }}
                                    transition="all 0.2s ease-in-out"
                                >
                                    {item.name}
                                </Text>
                            </RouterLink>
                        ))}
                    </VStack>
                )}
            </Container>
        </Box>
    );
};

export default Header;
