import { SimpleGrid } from "@chakra-ui/react";
import Project from "./Project";
import NYUProjectVideo from "../assets/Videos/NYU PROMO.mp4";
import GameHubProjectVide from "../assets/Videos/Game Hub Video.mp4";

const ProjectGrid = () => {
  return (
    <SimpleGrid
      justifyContent="center"
      spacingY="100px"
      padding="30px"
      background={"#DCDCDC"}
    >
      <Project
        video={NYUProjectVideo}
        title="NYU Website Remake"
        description="In this project I focused heavily on design and componentization because the creative vision was not my main task.
        I wanted to focus on the technical aspects of design more than the creative UI/UX brainstorming so I decided to pick a project
        that was already created and just try to mimic it. From the color scheme to the hover effects the main page is almost pixel
        for pixel identical when comparing my version of the website to the official NYU website."
        tools={["REACT", "TYPESCRIPT", "CSS", "CHAKRA UI"]}
      ></Project>
      <Project
        video={GameHubProjectVide}
        title="Game Hub"
        description="This project utilizes an API to fetch data about real games and display them in a simple single page application.
        The application is fully mobile responsive and includes searching, categorization, and dark mode features. 
        The project uses Axios to fetch API data about games and dynamically display them based on genre, platform, search words, and other categories. 
        To account for data fetching times, the application is complete with loading skeletons to mimic game cards that aren't loaded. 
        Game cards include data about each game such as title, platforms, and rating...all fetched from the API client."
        tools={["REACT", "API", "TYPESCRIPT", "CSS", "CHAKRA UI"]}
      ></Project>
    </SimpleGrid>
  );
};

export default ProjectGrid;
