import { Box, Flex, Text, Heading, VStack, useBreakpointValue, Icon, Tag, Stack, SimpleGrid, Badge, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCode } from 'react-icons/fi';
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
    logo?: string; // Optional logo URL
}
const experiences: Experience[] = [
    {
        company: "OwnersBox Fantasy Sports",
        role: "Software Engineer",
        date: "Jan 2025 - Apr 2025",
        location: "Kitchener, Ontario",
        logo: "/ownersboxLogo.png",
        tags: ["Vue.js", "React Native", "Java", "JAX-RS", "Software Testing"],
        points: [
            "🏆 Recognized as Top LinkedIn Startup 2024",
            "🏈 Leading development of innovative fantasy player picks system",
            "💻 Building full-stack features with a variety of technologies",
            "🤝 Collaborating with cross-functional teams to deliver high-quality solutions"
        ]
    },
    {
        company: "NCR Voyix",
        role: "System Software Engineer",
        date: "May 2024 - Aug 2024",
        location: "Waterloo, Ontario",
        logo: "/ncrLogo.jpeg",
        tags: ["Django", "React", "JWT", "Microsoft IIS", "CSV", "data piplines"],
        points: [
            "👨‍💻 Worked with Infrastructure and Labs team",
            "🛠️ Led development of internal tools for team efficiency",
            "🔄 Restructured and optimized data pipelines",
            "🔧 Implemented automated solutions using Django and React"
        ]
    },
    {
        company: "Immigr8",
        role: "Full-Stack Software Developer",
        date: "Sep 2023 - Dec 2023",
        location: "Belleair Beach, Florida",
        logo: "/immigr8Logo.webp",
        tags: ["Spring Boot", "PostgreSQL", "MVC", "LlamaIndex"],
        points: [
            "🌐 Developed software to streamline immigration processes",
            "🤖 Built AI-powered tool for visa eligibility assessment",
            "🚀 Created full-stack MVP using Spring Boot and PostgreSQL",
            "⚡ Thrived in a fast-paced startup environment"
        ]
    },
    {
        company: "PointClickCare",
        role: "Process Engineer",
        date: "Jan 2023 - Apr 2023",
        location: "Mississauga, Ontario",
        logo: "/pccLogo.jpeg",
        tags: ["Groovy", "Jira", "Confluence", "REST API"],
        points: [
            "📊 Managed and improved incident reporting processes",
            "🤖 Automated routine tasks in Jira and Confluence",
            "👥 Collaborated with cross-functional teams",
            "🔄 Streamlined workflow processes using Groovy scripts"
        ]
    }
];

const VerticalTimeline = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box minH="100vh" w="full" position="relative" px={4} py={12}>
            <Box
                position="absolute"
                top={{ base: "-2px", md: "-80px" }}
                left="0"
                width="100vw"
                zIndex="1"
                transform="scaleY(-1)"
            >
                <Lottie animationData={bottom} loop autoplay />
            </Box>
            <Box
                bg="blue.500"
                position="absolute"
                inset="0"
                zIndex="-1"
            />
            <VStack maxW="800px" mx="auto" mb={16} textAlign="center" pt={40}>
                <Heading fontSize={{ base: '3xl', md: '4xl' }} color="gray.100">
                    Professional Journey
                </Heading>
                <Text fontSize="lg" color="gray.100" opacity={0.7}>
                    My career progression through tech!
                </Text>
            </VStack>

            {/* Timeline line with gradient and glow effect */}
            <Box
                position="absolute"
                left={{ base: '20px', md: '50%' }}
                transform={{ base: 'translateX(0)', md: 'translateX(-50%)' }}
                w="2px"
                top="320px"
                h="calc(100% - 180px)"
                bgGradient="linear(to-b, blue.200, blue.400, blue.200)"
                opacity={0.9}
                zIndex={0}
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: 'blue.200',
                    filter: 'blur(8px)',
                    opacity: 0.5,
                    zIndex: -1
                }}
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
                        zIndex={1}
                    >
                        <Flex
                            direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                            align="start"
                            position="relative"
                        >
                            {/* Timeline dot with glow effect */}
                            <Box
                                position="absolute"
                                left={{ base: '16px', md: '50%' }}
                                transform={{ base: 'translateX(0)', md: 'translateX(-50%)' }}
                                top="50%"
                                w="14px"
                                h="14px"
                                bg="white"
                                borderRadius="full"
                                border="2px solid"
                                borderColor="blue.400"
                                zIndex={2}
                                _before={{
                                    content: '""',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    w: '6px',
                                    h: '6px',
                                    bg: 'blue.400',
                                    borderRadius: 'full',
                                }}
                                _after={{
                                    content: '""',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    w: '20px',
                                    h: '20px',
                                    bg: 'blue.200',
                                    borderRadius: 'full',
                                    filter: 'blur(4px)',
                                    opacity: 0.5,
                                    zIndex: -1
                                }}
                            />

                            <Box
                                bg="white"
                                boxShadow="md"
                                borderRadius="lg"
                                p={6}
                                ml={{ base: '40px', md: index % 2 === 0 ? '0' : '60px' }}
                                mr={{ base: '0', md: index % 2 === 0 ? '60px' : '0' }}
                                w={{ base: '90%', md: '45%' }}
                            >
                                {/* Company Logo Section */}
                                {exp.logo && (
                                    <Box 
                                        mb={4} 
                                        h="60px" 
                                        display="flex" 
                                        alignItems="center"
                                    >
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            maxH="100%"
                                            maxW="200px"
                                            objectFit="contain"
                                            fallback={
                                                <Box 
                                                    w="60px" 
                                                    h="60px" 
                                                    bg="gray.100" 
                                                    borderRadius="md"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <Icon as={FiBriefcase} color="gray.400" boxSize={6} />
                                                </Box>
                                            }
                                        />
                                    </Box>
                                )}

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

                                <VStack align="start" mt={4} spacing={2}>
                                    {exp.points.map((point, i) => (
                                        <Text 
                                            key={i} 
                                            fontSize="md" 
                                            color="gray.700"
                                            fontWeight="medium"
                                            lineHeight="tall"
                                        >
                                            {point}
                                        </Text>
                                    ))}
                                </VStack>
                            </Box>
                        </Flex>
                    </MotionBox>
                ))}
            </VStack>
        </Box>
    );
};

export default VerticalTimeline;
