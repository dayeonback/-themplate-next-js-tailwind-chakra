import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const cardData = [
  {
    id: 1,
    title: 'Iced Caramel Macchiato',
    description: 'A refreshing coffee drink with layers of espresso, milk, and caramel syrup served over ice.',
    imageUrl:
      'https://images.unsplash.com/photo-1590487980848-d9474d6a328f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlfHx8fHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    badges: ['Cold', 'Sweet'],
    buttonText: 'Order Now',
  },
  {
    id: 2,
    title: 'Matcha Green Tea Latte',
    description: 'A creamy blend of matcha green tea powder and steamed milk, lightly sweetened.',
    imageUrl:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    badges: ['Warm', 'Antioxidant'],
    buttonText: 'Try Matcha',
  },
  {
    id: 3,
    title: 'Mocha Frappe',
    description: 'A delicious blend of coffee, chocolate, and ice, topped with whipped cream and chocolate drizzle.',
    imageUrl:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    badges: ['Cold', 'Chocolate'],
    buttonText: 'Order Frappe',
  },
  {
    id: 4,
    title: 'The perfect latte',
    description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    imageUrl:
      'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    badges: ['Hot', 'Caffeine'],
    buttonText: 'Buy Latte',
  },
];

const carData2 = [
  {
    id: 1,
    title: 'The perfect latte',
    description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    imageUrl:
      'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    badges: ['Hot', 'Caffeine'],
    buttonText: 'Buy Latte',
  },
  {
    id: 2,
    title: 'The perfect latte',
    description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    imageUrl:
      'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    badges: ['Hot', 'Caffeine'],
    buttonText: 'Buy Latte',
  },
];

const Social = () => {
  return (
    <Container>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="4">
        {cardData.map((card, index) => (
          <Card key={card.id} maxW="xl" bgColor="gray.100">
            <CardBody className="flex flex-col gap-4">
              <Image
                objectFit="cover"
                width={200}
                height={200}
                src={card.imageUrl}
                alt={card.title}
                className="aspect-video"
              />
              <Box>
                <Heading size="md" mb="2" className="line-clamp-1">
                  {card.title}
                </Heading>
                <Text className="line-clamp-2">{card.description}</Text>
                <HStack mt="4">
                  {card.badges.map((badge, index) => (
                    <Badge key={index} className="bg-white">
                      {badge}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </CardBody>
            <CardFooter>
              <Button>{card.buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={[1, null, null, null, 2]} gap="4" mt={4}>
        {carData2.map((card, index) => (
          <Card key={card} bgColor="red.100" flexDirection={{ base: 'column', md: 'row' }}>
            <CardBody className="flex flex-col md:flex-row gap-4">
              <Image objectFit="cover" width={200} height={200} src={card.imageUrl} alt={card.title} />
              <Box>
                <Heading size="md" mb="2">
                  {card.title}
                </Heading>
                <Text>{card.description}</Text>
                <HStack mt="4">
                  {card.badges.map((badge, index) => (
                    <Badge key={index} className="bg-gray-50">
                      {badge}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default Social;
