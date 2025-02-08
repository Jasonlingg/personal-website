import React from "react";
import { Box, Text, Heading, Flex, Tooltip, Divider, Container, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaGithub, FaPython, FaNode, FaDocker, FaAws, FaLaptopCode } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiSpringboot, SiNextdotjs, SiFlask, SiDjango, SiPostgresql, SiJira, SiConfluence, SiPostman } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

// Define the type for the skill items
interface Skill {
    icon: React.ComponentType<any>;
    name: string;
    color: string;
}
interface Item {
    icon: React.ElementType; // This expects a React component
    name: string;
    color: string;
}

// Define the type for the skills object
interface Skills {
    languages: Skill[];
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
}

const skills: Skills = {
    languages: [
        { icon: FaJava, name: "Java", color: "#007396" },
        { icon: TbBrandCpp, name: "C++", color: "#00599C" },
        { icon: FaPython, name: "Python", color: "#306998" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: FaHtml5, name: "HTML", color: "#E34F26" },
        { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    ],
    frontend: [
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
    ],
    backend: [
        { icon: SiFlask, name: "Flask", color: "#000000" },
        { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
        { icon: FaNode, name: "Node.js", color: "#339933" },
        { icon: SiDjango, name: "Django", color: "#092E20" },
        { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    ],
    tools: [
        { icon: FaGithub, name: "GitHub", color: "#181717" },
        { icon: SiJira, name: "Jira", color: "#0052CC" },
        { icon: SiConfluence, name: "Confluence", color: "#172B4D" },
        { icon: SiPostman, name: "Postman", color: "#FF6C37" },
        { icon: FaDocker, name: "Docker", color: "#2496ED" },
        { icon: FaAws, name: "AWS", color: "#FF9900" },
    ],
};

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Skills: React.FC = () => {
    return (
        <Box minH="100vh" w="full" position="relative" bg="rgb(217, 223, 230)"
        >
            <Container position="relative" maxW="6xl" py={10} bg='white' p={20} borderRadius="2xl" boxShadow="xl" zIndex="2">
                <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} textAlign="center" mb={6} color="blue.500">
                    <Flex align="center" justify="center">
                        <FaLaptopCode />
                        <Text mx={5}>My Skills</Text>
                        <FaLaptopCode />
                    </Flex>
                </Heading>

                {Object.entries(skills).map(([category, items]) => (
                    <Box key={category} mb={8}>
                        <Heading as="h3" fontSize={{ base: 'xl', md: 'lg' }} mb={4} textTransform="capitalize" textAlign="left" color="gray.700">
                            {category}
                        </Heading>

                        <SimpleGrid
                            columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
                            spacing={6}
                            templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
                        >
                            {items.map(({ icon: Icon, name, color }, index) => (
                                <motion.div key={index} variants={itemVariant}>
                                    <Tooltip label={name} hasArrow>
                                        <Flex
                                            as={motion.div}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            p={4}
                                            bg="gray.100"
                                            borderRadius="lg"
                                            boxShadow="lg"
                                            transition="all 0.3s"
                                            _hover={{ bg: "white", boxShadow: "xl" }}
                                            justify="center"
                                            align="center"
                                            fontSize="3xl"
                                            color={color}
                                            _focus={{ outline: "none", boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }}
                                        >
                                            <Icon />
                                            <Text fontSize="sm" fontWeight="bold" color="gray.700" ml="8px">
                                                {name}
                                            </Text>
                                        </Flex>
                                    </Tooltip>
                                </motion.div>
                            ))}
                        </SimpleGrid>
                        <Divider my={6} />
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default Skills;
