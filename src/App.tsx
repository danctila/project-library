import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import WelcomeMsg from "./components/WelcomeMsg";
import ProjectsMsg from "./components/ProjectsMsg";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav"></GridItem>
      <NavBar />
      <GridItem area="main">
        <WelcomeMsg />
        <ProjectsMsg />
        <ProjectGrid />
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
