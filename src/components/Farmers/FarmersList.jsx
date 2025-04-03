
'use client';
import { useEffect, useState } from "react";
import { fetchFarmers, getAdvice } from "../../api";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Spinner,
  Grid,
  Image,
} from '@chakra-ui/react';
import { CheckIcon, LinkIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

function FarmersList() {
  const [farmers, setFarmers] = useState([]);
  const [advice, setAdvice] = useState(null);
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const [loadingFarmers, setLoadingFarmers] = useState(true); // State to track farmers' data loading

  useEffect(() => {
    async function loadFarmers() {
      const data = await fetchFarmers();
      console.log("Fetched Farmers:", data);
      setFarmers(data);
      setLoadingFarmers(false); // Stop loading once data is fetched
    }
    loadFarmers();
  }, []);

  const handleGetAdvice = async (farmId) => {
    setSelectedFarm(farmId);
    setLoadingAdvice(true);
    setAdvice(await getAdvice(farmId));
    setLoadingAdvice(false);
  };

  return (
    <Center py={6} flexDirection="column" px={4}>
      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={4}>
        Farmers Data
      </Text>

      {/* Show Loader Until Farmers Data is Fetched */}
      {loadingFarmers ? (
        <Center py={10}>
          <Spinner size="xl" color="green.400" />
        </Center>
      ) : farmers.length === 0 ? (
        <Text fontSize="lg" fontWeight="medium" color="gray.500" textAlign="center">
          Please upload your farm data
        </Text>
      ) : (
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          w="full"
        >

          {Array.isArray(farmers) && farmers.length > 0 ? (
            farmers.map((farm) => (
              <Box
                key={farm.Farm_ID}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
                mx="auto"
              >
                <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
                  <Text
                    fontSize={'sm'}
                    fontWeight={500}
                    bg={useColorModeValue('green.50', 'green.900')}
                    p={2}
                    px={3}
                    color={'green.500'}
                    rounded={'full'}
                  >
                    {farm.Crop_Type}
                  </Text>
                  <Text fontSize={'lg'} fontWeight={700}>Soil pH: {farm.Soil_pH}</Text>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={4} textAlign='center'>
                  <Button
                    w={'full'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{ bg: 'green.500' }}
                    _focus={{ bg: 'green.500' }}
                    onClick={() => handleGetAdvice(farm.Farm_ID)}
                  >
                    Get Advice
                  </Button>
                </Box>
              </Box>
            ))
          ) : (
            <Center py={10} flexDirection="column">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="No Data"
                boxSize="100px"
                opacity={0.6}
                mb={4}
              />
              <Text fontSize="lg" fontWeight="medium" color="gray.500" textAlign="center">
                No farmers data available
              </Text>
             <Link to={"/farmer-upload"}>
             <Button
                mt={4}
                colorScheme="green"
                variant="solid" 
              >
                Upload Farm Data
              </Button>
             </Link>
            </Center>

          )}
        </Grid>
      )}

      {/* Advice Section */}
      {loadingAdvice && (
        <Center mt={6}>
          <Spinner size="xl" color="green.400" />
        </Center>
      )}

      {advice && selectedFarm && !loadingAdvice && (
        <Box
          mt={6}
          p={6}
          borderRadius="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          w={{ base: "90%", md: "70%", lg: "50%" }}
          mx="auto"
          transition="all 0.3s ease-in-out"
        >
          {/* Title */}
          <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
            AI Advice for Farm {selectedFarm} 🌱
          </Text>

          {/* Recommendation Section */}
          {advice.recommendation && (
            <Box p={4} borderRadius="md" bg={useColorModeValue("gray.50", "gray.800")} boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={2}>📝 Recommendations:</Text>
              <List spacing={2}>
                {advice.recommendation.content.split(". ").map((point, index) => (
                  <ListItem key={index} display="flex" alignItems="start">
                    <ListIcon as={CheckIcon} color="green.400" mt={1} />
                    <Text>{`${index + 1}. ${point.trim()}`}</Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Video Advice */}
          {advice.videos && (
            <Box mt={4} textAlign="center">
              <Button
                as="a"
                href={advice.videos}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="blue"
                size="md"
                fontWeight="medium"
              >
                🎥 Watch Related Videos
              </Button>
            </Box>
          )}

          {/* Useful Links */}
          {advice.useful_links && advice.useful_links.length > 0 && (
            <Stack mt={4}>
              <Text fontWeight="bold">🔗 Useful Links:</Text>
              <List spacing={2}>
                {advice.useful_links.map((link, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={LinkIcon} color="blue.400" />
                    <Link
                      href={link}
                      isExternal
                      color="blue.500"
                      textDecoration="underline"
                      fontWeight="medium"
                    >
                      {link}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Stack>
          )}

          {/* Related Images */}
          {advice.images && advice.images.length > 0 && (
            <Stack mt={4}>
              <Text fontWeight="bold">🖼 Related Images:</Text>
              <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={3}>
                {advice.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Advice ${index + 1}`}
                    borderRadius="md"
                    boxShadow="md"
                    transition="transform 0.2s"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                ))}
              </Grid>
            </Stack>
          )}
        </Box>
      )}
    </Center>

  );
}

export default FarmersList;
