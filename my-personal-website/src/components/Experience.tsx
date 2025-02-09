import { Box, Flex, Text, Heading, VStack, useBreakpointValue, Icon, Tag, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import Footer from './Footer';
import bottom from "../animations/bottom.json";
import Lottie from 'lottie-react';
const MotionBox = motion(Box);

interface Experience {
    company: string;
    role: string;
    date: string;
    location: string;
    points: string[];
    tags: string[];
}

const experiences: Experience[] = [
    {
        company: "OwnersBox Fantasy Sports",
        role: "Software Developer",
        date: "Jan 2025 - Present",
        location: "Kitchener, Ontario",
        tags: ["Vue.js", "React Native", "Java", "REST APIs"],
        points: [
            "Developed user-facing screens for the Player Props feature using Vue.js and React Native, enhancing user engagement and experience.",
            "Implemented market-type discount sorting feature in Java, leveraging RESTful APIs with JAX-RS for efficient data processing."
        ]
    },
    {
        company: "University of Waterloo Blueprint",
        role: "Project Developer",
        date: "Apr 2024 - Jan 2025",
        location: "Waterloo, Ontario",
        tags: ["Next.js", "React", "Prisma", "SQL"],
        points: [
            "Developed an admin calendar system for a class platform using Next.js for a nonprofit organization.",
            "Built event sorting and filtering functionality in a React calendar while implementing vertical scrolling to load events seamlessly.",
            "Architected robust SQL database schema using Prisma ORM, enhancing data retrieval efficiency.",
            "Managed development and spike tickets, leading to a 20% improvement in task tracking."
        ]
    },
    {
        company: "NCR Voyix",
        role: "System Software Engineer",
        date: "May 2024 - Aug 2024",
        location: "Waterloo, Ontario",
        tags: ["Django", "React", "JWT", "Microsoft IIS"],
        points: [
            "Led the development of an internal Dashboard and Query tool, leveraging Django REST APIs and React.",
            "Integrated SharePoint’s API, increasing the speed of Excel data retrieval and management processes by 50%.",
            "Enhanced security by implementing JWT for authorization, significantly reducing risk of unauthorized access.",
            "Administered the deployment on Microsoft IIS and project maintenance on virtual machines."
        ]
    },
    {
        company: "Immigr8",
        role: "Full-Stack Software Developer",
        date: "Sep 2023 - Dec 2023",
        location: "Belleair Beach, Florida",
        tags: ["Spring Boot", "PostgreSQL", "AWS S3", "OpenAI API"],
        points: [
            "Developed a web-based application to streamline immigration processes, reducing visa processing time by 30%.",
            "Implemented calendar event tracking in Java with Spring Boot and PostgreSQL, incorporating Calendly OAuth 2.0.",
            "Executed document storage and uploading using AWS S3, and developed 20+ pages of user-facing screens with React.",
            "Engineered a tool using LlamaIndex with OpenAI’s API to ingest and query multiple US immigration sources."
        ]
    },
    {
        company: "Jasmine AI",
        role: "Lead Backend Software Developer",
        date: "Jun 2023 - Dec 2023",
        location: "Toronto, Ontario",
        tags: ["Python", "Flask", "Azure", "Docker"],
        points: [
            "Led backend development of a dashboard and SMTP email service using Python and Flask.",
            "Monitored and managed dockerized web applications deployed on Microsoft Azure.",
            "Built a robust web scraping tool in Python, extracting relevant information from 40+ diverse web sources.",
            "Processed real-estate data using LlamaIndex, storing it in a vector database for querying and analysis."
        ]
    },
    {
        company: "PointClickCare",
        role: "Process Engineer",
        date: "Jan 2023 - Apr 2023",
        location: "Mississauga, Ontario",
        tags: ["Groovy", "Jira", "Confluence", "REST API"],
        points: [
            "Automated document generation and organization in Confluence from Jira incident tickets, reducing manual workload by 40%.",
            "Produced documentation on monthly major incident reporting and analysis for 20+ network incidents."
        ]
    }
];

const VerticalTimeline = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <Box minH="100vh" w="full" position="relative" px={4} py={12}>
                <Box
                    position="absolute"
                    top="-80px"
                    left="0"
                    width="100vw"
                    zIndex="1"
                    transform="scaleY(-1)" // Flips the animation over the X-axis
                >
                    <Lottie animationData={bottom} loop autoplay />
                </Box>
                <Box
                    bg="blue.500"

                    position="absolute"
                    inset="0"
                    zIndex="-1"
                />
                {/* Page title - always above the timeline */}
                <VStack maxW="800px" mx="auto" mb={16} textAlign="center" pt={40}>
                    <Heading fontSize={{ base: '3xl', md: '4xl' }} color="gray.100">
                        Professional Journey
                    </Heading>
                    <Text fontSize="lg" color="gray.100" opacity={0.7} >
                        My career progression through tech!
                    </Text>
                </VStack>

                {/* Central timeline line - starts after title */}
                <Box
                    position="absolute"
                    left={{ base: '20px', md: '50%' }}
                    transform={{ base: 'translateX(0)', md: 'translateX(-50%)' }}
                    w="4px"
                    top="320px" // Moves timeline down to prevent title overlap
                    h="calc(100% - 180px)" // Ensures it doesn't reach the top
                    bgGradient="linear(to-b, blue.200, blue.300, blue.200)"
                    opacity={0.8}
                    zIndex={0}
                />

                <VStack spacing={8} maxW="1200px" mx="auto">
                    {experiences.map((exp, index) => (
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            w="full"
                            mb={12}
                            position="relative"
                            zIndex={1} // Ensures cards appear on top of the timeline
                        >
                            <Flex
                                direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                                align="start"
                                position="relative"
                            >
                                {/* Timeline dot */}
                                <Box
                                    position="absolute"
                                    left={{ base: '16px', md: '50%' }}
                                    transform={{ base: 'translateX(0)', md: 'translateX(-50%)' }}
                                    top="50%"
                                    w="16px"
                                    h="16px"
                                    bg="blue.500"
                                    borderRadius="full"
                                    border="4px solid white"
                                    zIndex={2}
                                />

                                {/* Card */}
                                <Box
                                    bg="white"
                                    boxShadow="md"
                                    borderRadius="lg"
                                    p={6}
                                    ml={{ base: '40px', md: index % 2 === 0 ? '0' : '60px' }}
                                    mr={{ base: '0', md: index % 2 === 0 ? '60px' : '0' }}
                                    w={{ base: '90%', md: '45%' }}
                                >
                                    <Flex align="center" mb={2}>
                                        <Icon as={FiBriefcase} color="blue.500" boxSize={6} />
                                        <Text fontWeight="bold" ml={2} fontSize="lg">
                                            {exp.role}
                                        </Text>
                                    </Flex>

                                    <Text fontSize="md" color="gray.700">
                                        {exp.company}
                                    </Text>

                                    <Flex align="center" fontSize="sm" color="gray.500" mt={1}>
                                        <Icon as={FiCalendar} mr={1} />
                                        {exp.date}
                                    </Flex>

                                    <Flex align="center" fontSize="sm" color="gray.500">
                                        <Icon as={FiMapPin} mr={1} />
                                        {exp.location}
                                    </Flex>

                                    <Stack direction="row" mt={3} spacing={2} wrap="wrap">
                                        {exp.tags.map((tag, i) => (
                                            <Tag key={i} size="sm" variant="solid" colorScheme="blue">
                                                {tag}
                                            </Tag>
                                        ))}
                                    </Stack>

                                    <VStack align="start" mt={4} spacing={1}>
                                        {exp.points.map((point, i) => (
                                            <Text key={i} fontSize="sm" color="gray.600">
                                                - {point}
                                            </Text>
                                        ))}
                                    </VStack>
                                </Box>
                            </Flex>
                        </MotionBox>
                    ))}
                </VStack>


            </Box>
        </>
    );
};

export default VerticalTimeline;
