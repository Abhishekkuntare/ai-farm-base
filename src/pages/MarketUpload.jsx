'use client';

import { useState } from "react";
import { uploadMarketData } from "../api";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

function MarketUpload() {
  const [marketForm, setMarketForm] = useState({
    Product: "",
    Market_Price_per_ton: "",
    Demand_Index: "",
    Supply_Index: "",
    Competitor_Price_per_ton: "",
    Economic_Indicator: "",
    Weather_Impact_Score: "",
    Seasonal_Factor: "",
    Consumer_Trend_Index: "",
  });

  const toast = useToast();
  
  // Theme-based colors
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const inputBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("black", "white");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(marketForm).every((value) => value.trim() !== "");

    if (!isFormValid) {
      toast({
        title: "Error",
        description: "Please fill all fields before submitting.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    await uploadMarketData(marketForm);
    toast({
      title: "Success",
      description: "Market data uploaded successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setMarketForm({
      Product: "",
      Market_Price_per_ton: "",
      Demand_Index: "",
      Supply_Index: "",
      Competitor_Price_per_ton: "",
      Economic_Indicator: "",
      Weather_Impact_Score: "",
      Seasonal_Factor: "",
      Consumer_Trend_Index: "",
    });
  };

  return (
    <Container maxW="xl" centerContent>
      <Box w="100%" p={6} boxShadow="md" borderRadius="md" bg={bgColor}>
        <Heading size="lg" mb={4} textAlign="center" color={textColor}>
          Upload Market Data
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            {Object.keys(marketForm).map((key) => (
              <Input
                key={key}
                type="text"
                name={key}
                value={marketForm[key]}
                onChange={(e) => setMarketForm({ ...marketForm, [key]: e.target.value })}
                placeholder={key.replace(/_/g, " ")}
                bg={inputBg}
                color={textColor}
                focusBorderColor="green.500"
              />
            ))}
            <Button colorScheme="green" type="submit" w="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
}

export default MarketUpload;
