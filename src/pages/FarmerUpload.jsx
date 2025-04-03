'use client';

import { useState } from 'react';
import { uploadFarmerData } from '../api';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

function FarmerUpload() {
  const [farmerForm, setFarmerForm] = useState({
    Soil_pH: '',
    Soil_Moisture: '',
    Temperature_C: '',
    Rainfall_mm: '',
    Crop_Type: '',
    Fertilizer_Usage_kg: '',
    Pesticide_Usage_kg: '',
    Crop_Yield_ton: '',
    Sustainability_Score: '',
  });

  const toast = useToast();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const inputBg = useColorModeValue('white', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isFormValid = Object.values(farmerForm).every((value) => value.trim() !== '');
    
    if (!isFormValid) {
      toast({
        title: 'Error',
        description: 'Please fill all fields before submitting.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    await uploadFarmerData(farmerForm);
    toast({
      title: 'Success',
      description: 'Farmer data uploaded successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    setFarmerForm({
      Soil_pH: '',
      Soil_Moisture: '',
      Temperature_C: '',
      Rainfall_mm: '',
      Crop_Type: '',
      Fertilizer_Usage_kg: '',
      Pesticide_Usage_kg: '',
      Crop_Yield_ton: '',
      Sustainability_Score: '',
    });
  };

  return (
    <Container maxW='xl' centerContent>
      <Box w='100%' p={6} boxShadow='md' borderRadius='md' bg={bgColor}>
        <Heading size='lg' mb={4} textAlign='center' color={textColor}>
          Upload Farmer Data
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='stretch'>
            {Object.keys(farmerForm).map((key) => (
              <Input
                key={key}
                type='text'
                name={key}
                value={farmerForm[key]}
                onChange={(e) => setFarmerForm({ ...farmerForm, [key]: e.target.value })}
                placeholder={key.replace(/_/g, ' ')}
                bg={inputBg}
                color={textColor}
                focusBorderColor='green.500'
              />
            ))}
            <Button colorScheme='green' type='submit' w='full'>Submit</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
}

export default FarmerUpload;
