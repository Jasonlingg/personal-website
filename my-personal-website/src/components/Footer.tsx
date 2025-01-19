import React from "react";
import { Box, Flex, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Box as="footer" bg="gray.50" color="gray.500" py={6}>
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
                maxW="container.xl"
                mx="auto"
                px={4}
            >
                {/* Copyright */}
                <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
                    © {new Date().getFullYear()} Jason Ling. All rights reserved.
                </Text>

                {/* Social Links */}
              
            </Flex>
        </Box>
    );
};

export default Footer;
