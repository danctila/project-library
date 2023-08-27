import { Center, Container, Icon, Text } from "@chakra-ui/react";
import { AiOutlineLine } from "react-icons/ai";
const ProjectsMsg = () => {
  return (
    <Center
      bgGradient={"linear(180deg, #6F00FF 0%, #DCDCDC 88.02%)"}
      height="400px"
      borderTop={"1px"}
      borderColor={"black"}
    >
      <Container centerContent maxW="100%">
        <Text
          fontSize={{
            base: "6xl",
            sm: "5xl",
            md: "5xl",
            lg: "5xl",
            xl: "5xl",
            "2xl": "5xl",
          }}
          textColor="white"
          fontWeight="bold"
          letterSpacing="5px"
        >
          PROJECTS
        </Text>
        <Icon as={AiOutlineLine} boxSize="70px" color="white" />
      </Container>
    </Center>
  );
};

export default ProjectsMsg;
