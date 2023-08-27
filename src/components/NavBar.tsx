import { Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import selfLogo from "../assets/starbucksselfie.jpg";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollProjects = () => {
  window.scrollTo({ top: 900, behavior: "smooth" });
};

const NavBar = () => {
  return (
    <Flex
      backgroundColor="#fff"
      height="80px"
      position="fixed"
      width="100%"
      zIndex={200}
      justifyContent="space-between"
    >
      <HStack ml="50px">
        <Image
          src={selfLogo}
          boxSize="60px"
          borderRadius="100"
          marginLeft="20px"
          padding="5px"
        />
        <Text
          fontWeight={700}
          fontSize={{
            base: "25px",
            sm: "25px",
            md: "20px",
            lg: "20px",
            xl: "20px",
            "2xl": "20px",
          }}
          letterSpacing="2px"
          color="black"
        >
          DYLAN ANCTIL
        </Text>
      </HStack>
      <HStack
        spacing="50px"
        mr="70px"
        fontSize={{
          base: "25px",
          sm: "25px",
          md: "20px",
          lg: "20px",
          xl: "20px",
          "2xl": "20px",
        }}
      >
        <Link fontWeight="semibold" onClick={() => scrollTop()}>
          HOME
        </Link>
        <Link fontWeight="semibold" onClick={() => scrollProjects()}>
          PROJECTS
        </Link>
        <Link
          fontWeight="semibold"
          onClick={() => (window.location.href = "mailto:danctila@gmail.com")}
        >
          CONTACT
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
