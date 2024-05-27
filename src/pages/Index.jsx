import { Box, Container, Flex, Heading, HStack, IconButton, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Headphones",
    price: "$149",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <IconButton aria-label="User" icon={<FaUser />} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <Heading as="h2" size="xl" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text fontSize="xl" color="blue.800">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="blue.800" color="white" p={4} textAlign="center">
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;