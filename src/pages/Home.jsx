'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  Divider,
  SimpleGrid,
  Avatar,
  Flex,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaTractor, FaSeedling } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Container maxW={'5xl'} px={6}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 6, md: 10 }}
          py={{ base: 16, md: 28 }}
        >
          <Heading
            fontWeight={700}
            fontSize={useBreakpointValue({ base: '3xl', sm: '4xl', md: '5xl' })}
            lineHeight={'110%'}
          >
            Revolutionizing Agriculture with <br />
            <Text as={'span'} color={'green.400'}>
              AI & Sustainability
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'md', md: 'lg' }}>
            Harness the power of artificial intelligence to optimize crop yields,
            reduce resource wastage, and promote sustainable farming practices.
            Get real-time insights and smart recommendations tailored for modern
            agriculture.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify={'center'}>
            <Link to={'/getadvice'}>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{ bg: 'green.500' }}
              >
                Get Started
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>

      {/* Features Section */}
      <Container maxW={'6xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <Icon as={FaLeaf} w={10} h={10} color={'green.400'} />
            <Text fontSize={'xl'} fontWeight={'bold'}>Sustainable Farming</Text>
            <Text textAlign={'center'} color={'gray.600'}>
              Use AI-powered insights to optimize resource use and promote eco-friendly farming.
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaTractor} w={10} h={10} color={'green.400'} />
            <Text fontSize={'xl'} fontWeight={'bold'}>Smart Automation</Text>
            <Text textAlign={'center'} color={'gray.600'}>
              Automate farming tasks with AI recommendations for better productivity.
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaSeedling} w={10} h={10} color={'green.400'} />
            <Text fontSize={'xl'} fontWeight={'bold'}>Higher Crop Yields</Text>
            <Text textAlign={'center'} color={'gray.600'}>
              Boost yields with AI-driven soil analysis, weather predictions, and smart crop planning.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* How It Works */}
      <Box bg={useColorModeValue('gray.100', 'gray.700')} py={12}>
        <Container maxW={'5xl'}>
          <Heading textAlign={'center'} mb={6}>
            How It Works
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack>
              <Text fontSize={'lg'} fontWeight={'bold'}>1. Input Data</Text>
              <Text textAlign={'center'} color={'gray.600'}>
                Provide details about soil, weather, and crops.
              </Text>
            </VStack>
            <VStack>
              <Text fontSize={'lg'} fontWeight={'bold'}>2. AI Analysis</Text>
              <Text textAlign={'center'} color={'gray.600'}>
                Our AI processes data to generate insights.
              </Text>
            </VStack>
            <VStack>
              <Text fontSize={'lg'} fontWeight={'bold'}>3. Get Recommendations</Text>
              <Text textAlign={'center'} color={'gray.600'}>
                Receive smart suggestions for better farming.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg={'gray.900'} color={'gray.300'} py={6} mt={12}>
        <Container maxW={'6xl'}>
          <Flex direction={{ base: 'column', md: 'row' }} justify={'space-between'}>
            <Text>© 2025 AI Farming Solutions. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link to={'/about'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
