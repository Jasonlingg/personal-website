import React, { useState } from "react";
import {
    Box,
    VStack,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    useDisclosure,
    Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaUser, FaLaptopCode, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";  // Importing icons

const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    // { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Skills", path: "/skills", icon: <FaLaptopCode /> },
    { name: "Experience", path: "/experience", icon: <FaBriefcase /> },
    // { name: "Education", path: "/education", icon: <FaGraduationCap /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const MenuButton: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box position="fixed" top={4} right={4} zIndex={20}>
            {/* Menu Button */}
            <IconButton
                aria-label="Open Menu"
                icon={<HamburgerIcon boxSize={6} />}
                size="lg"
                variant="outline"
                onClick={onOpen}
                bg="white"
                _hover={{ bg: "gray.100" }}
            />

            {/* Menu Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="gray.50" maxWidth="250px">
                    <DrawerCloseButton />

                    <DrawerBody>
                        <VStack spacing={2} mt={12} align="stretch" width="100%">
                            {navItems.map((item) => (
                                <RouterLink key={item.path} to={item.path} onClick={onClose}>
                                    <Button
                                        width="100%"
                                        justifyContent="flex-start"
                                        variant="ghost"
                                        fontSize="lg"
                                        fontWeight="semibold"
                                        px={4}
                                        py={6}
                                        rounded="md"
                                        transition="all 0.2s ease-in-out"
                                        _hover={{ bg: "gray.100", color: "blue.500" }}
                                        _active={{ bg: "gray.200" }}
                                        leftIcon={item.icon} // Adding the icon to the button
                                    >
                                        {item.name}
                                    </Button>
                                </RouterLink>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default MenuButton;
