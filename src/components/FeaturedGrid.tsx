import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import FeaturedItem from "./FeaturedItem";
import moc from "../assets/logo.webp";
import projectOneImg from "../assets/blackjackpostcrop.png";

const FeaturedGrid = () => {
  return (
    <>
      <HStack justifyContent="center" marginBottom="-70px" marginTop="50px">
        <Text fontSize="5xl">FEATURED...</Text>
      </HStack>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 3 }}
        spacing="100px"
        padding="50px"
        justifyContent="center"
        alignContent="center"
        display="flex"
        flexWrap="wrap"
      >
        <FeaturedItem image={projectOneImg} title="BlackJack" text="btn1" />
        <FeaturedItem image={moc} title="item 2" text="btn2" />
        <FeaturedItem image={moc} title="item 3" text="btn3" />
      </SimpleGrid>
    </>
  );
};

export default FeaturedGrid;
