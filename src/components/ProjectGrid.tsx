import { SimpleGrid } from "@chakra-ui/react";
import Project from "./Project";
import NYUProjectVideo from "../assets/Videos/NYU PROMO.mp4";

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
        tools={["TYPESCRIPT", "CHAKRA UI", "CSS", "REACT"]}
      ></Project>
    </SimpleGrid>
  );
};

export default ProjectGrid;
