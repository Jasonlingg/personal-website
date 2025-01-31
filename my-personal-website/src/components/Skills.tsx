import React from 'react';
import { Box, SimpleGrid, VStack, Text, Heading } from '@chakra-ui/react';
import {
    FaReact, FaHtml5, FaCss3Alt, FaJava, FaGithub, FaPython, FaNode, FaDocker, FaAws
} from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiTailwindcss, SiSpringboot,
    SiNextdotjs, SiFirebase, SiFlask, SiDjango, SiPostgresql, SiJira, SiConfluence, SiPostman
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const Skills: React.FC = () => {
    const skillsList = [
        // Languages
        { icon: FaJava, name: 'Java' },
        { icon: TbBrandCpp, name: 'C++' },
        { icon: FaPython, name: 'Python' },
        { icon: FaHtml5, name: 'HTML' },
        { icon: FaCss3Alt, name: 'CSS' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiTypescript, name: 'TypeScript' },

        // Frameworks
        { icon: FaReact, name: 'React' },
        { icon: SiFlask, name: 'Flask' },
        { icon: SiSpringboot, name: 'Spring Boot' },
        { icon: SiNextdotjs, name: 'Next.js' },
        { icon: SiFirebase, name: 'Firebase' },
        { icon: SiTailwindcss, name: 'Tailwind' },
        { icon: SiDjango, name: 'Django' },

        // Tools
        { icon: FaGithub, name: 'Git' },
        { icon: FaDocker, name: 'Docker' },
        { icon: FaAws, name: 'AWS S3' },
        { icon: SiJira, name: 'Jira' },
        { icon: SiConfluence, name: 'Confluence' },
        { icon: SiPostman, name: 'Postman' },
        { icon: SiPostgresql, name: 'pgAdmin' }
    ];

    return (
        <Box bg="black" minH="100vh" p={8} color="white">
            <Heading as="h1" size="2xl" mb={12} ml={8}>
                Technical Skills
            </Heading>

            <SimpleGrid
                columns={{ base: 3, sm: 4, md: 7 }}
                spacing={8}
                px={8}
            >
                {skillsList.map((skill, index) => (
                    <VStack key={index} spacing={2}>
                        <Box
                            bg="#1a1a1a"
                            p={4}
                            borderRadius="xl"
                            position="relative"
                            transition="transform 0.2s"
                            _hover={{ transform: 'scale(1.05)' }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                top: '-2px',
                                left: '-2px',
                                right: '-2px',
                                bottom: '-2px',
                                background: '#2d2d2d',
                                borderRadius: 'xl',
                                zIndex: -1,
                            }}
                        >
                            <skill.icon size={40} style={{ color: 'inherit' }} /> {/* Remove any color overrides */}
                        </Box>

                        <Text fontSize="sm" textAlign="center">
                            {skill.name}
                        </Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Skills;
