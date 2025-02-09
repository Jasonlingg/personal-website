import React, { useState } from "react";
import { Box, IconButton, VStack, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { FaHome, FaLaptopCode, FaBriefcase, FaEnvelope } from "react-icons/fa";

const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "Skills", href: "#skills", icon: <FaLaptopCode /> },
    { name: "Experience", href: "#experience", icon: <FaBriefcase /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

const MotionBox = motion(Box);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (href: string) => {
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsOpen(false); // Close menu after clicking
        }
    };

    return (
        <Box position="fixed" top="20px" right="20px" zIndex="1000">
            {/* Menu Button */}
            <IconButton
                aria-label="Open Menu"
                icon={<HamburgerIcon boxSize={6} />}
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                transition="0.3s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
            />

            {/* Smooth Dropdown Menu */}
            <MotionBox
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                position="absolute"
                top="50px"
                right="0"
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(10px)"
                boxShadow="lg"
                borderRadius="lg"
                p={4}
                width="200px"
                display={isOpen ? "block" : "none"}
            >
                <VStack spacing={3} align="stretch">
                    {navItems.map((item) => (
                        <Button
                            key={item.href}
                            leftIcon={item.icon}
                            variant="ghost"
                            justifyContent="flex-start"
                            fontSize="lg"
                            fontWeight="medium"
                            transition="all 0.3s ease-in-out"
                            _hover={{ bg: "gray.100", transform: "scale(1.05)", color: "blue.500" }}
                            onClick={() => handleScroll(item.href)}
                        >
                            {item.name}
                        </Button>
                    ))}
                </VStack>
            </MotionBox>
        </Box>
    );
};

export default Header;
