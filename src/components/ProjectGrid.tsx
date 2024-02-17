import { SimpleGrid } from "@chakra-ui/react";
import Project from "./Project";
import TTTPromoVideo from "../assets/Videos/Total Tech Tools Promo Video.mp4";
import GradeCalcVideo from "../assets/Videos/GradeCalcPromo2.mp4";
import FactSenderPromoVideo from "../assets/Videos/Fact Sender Promo.mp4";
import NYUProjectVideo from "../assets/Videos/NYU PROMO.mp4";
import GameHubProjectVideo from "../assets/Videos/Game Hub Video.mp4";
import BlackJackVideo from "../assets/Videos/BlackJack Promo.mp4";

const ProjectGrid = () => {
  return (
    <SimpleGrid
      justifyContent="center"
      spacingY="100px"
      padding="30px"
      background={"#DCDCDC"}
    >
      <Project
        video={TTTPromoVideo}
        title="Total Tech Tools Website"
        description="This is a freelance web design agency website made in React. This site is fully mobile responsive and includes a variety of modern features including
                      a parallax logo, an animated mobile modal window and a typewriter effect. The website has a straightforward design to attract users to interact with
                      the featured projects. The validated form sends data from the user to the site owner using Email JS after data is checked.
"
        tools={["REACT", "TYPESCRIPT", "CHAKRA UI", "EMAIL JS"]}
        gitHub="https://github.com/danctila/total-tech-tools"
        liveLink="https://totaltechtools.com"
      ></Project>
      <Project
        video={GradeCalcVideo}
        title="Grade Calculator"
        description="This project is a mobile responsive web app developed for students to use at a high school. It holds a form component in which 
        students can enter grades and a calculated average will return. The form component returns seperate arrays of the three form fields and performs 
        calculations with the arrays after being sorted by user entered category. The web page uses React Routing to quickly switch between two pages."
        tools={["REACT", "TYPESCRIPT", "CHAKRA UI", "REACT-ROUTER"]}
        gitHub="https://github.com/danctila/calculator-frontend"
        liveLink="https://nhsgrader.com"
      ></Project>
      <Project
        video={FactSenderPromoVideo}
        title="Random Fact Emailer"
        description="Using a random fact API and Google SMTP email servers, this project sends automated messages to an inputted list of email addresses.
        The three files are automatically run on a schedule using a Raspberry Pi 4 with Crontab enabled. This project takes a simple approach to
        API usage in Python and program scheduling in Linux in a fun way."
        tools={["RASPBERRY PI", "PYTHON", "API", "GOOGLE SMTP"]}
        gitHub="https://github.com/danctila/python-email-sender"
      ></Project>
      <Project
        video={NYUProjectVideo}
        title="NYU Website Remake"
        description="In this project I focused heavily on design and componentization because the creative vision was not my main task.
        I wanted to focus on the technical aspects of design more than the creative UI/UX brainstorming so I decided to pick a project
        that was already created and just try to mimic it. From the color scheme to the hover effects the main page is almost pixel
        for pixel identical when comparing my version of the website to the official NYU website."
        tools={["REACT", "TYPESCRIPT", "CSS", "CHAKRA UI"]}
        gitHub="https://github.com/danctila/nyu-website"
      ></Project>
      <Project
        video={GameHubProjectVideo}
        title="Game Hub"
        description="This project utilizes an API to fetch data about real games and display them in a simple single page application.
        The application is fully mobile responsive and includes searching, categorization, and dark mode features. 
        The project uses Axios to fetch API data about games and dynamically display them based on genre, platform, search words, and other categories. 
        To account for data fetching times, the application is complete with loading skeletons to mimic game cards that aren't loaded. 
        Game cards include data about each game such as title, platforms, and rating...all fetched from the API client."
        tools={["REACT", "API", "TYPESCRIPT", "CSS", "CHAKRA UI"]}
        gitHub="https://github.com/danctila/game-hub"
        liveLink="https://game-hub-coral-mu.vercel.app/"
      ></Project>
      <Project
        video={BlackJackVideo}
        title="BlackJack"
        description="Using only Java, this project recreates a standard 6 deck game of BlackJack. Starting the player off with 2 cards,
        the player has the option to take a card or not after viewing their current hand as compared to the dealers current hand. Behind the 
        scenes,
        the deck of cards created is realistic with 52 cards and 4 suits. This is done through the creation of a Card object being replicated for
        different values and suits in the Deck class. The game starts by rendering 6 decks of cards into the 'table' and will throw 
        an 'out of bounds' error if cards run out. This game allows for simple fun through the use of Java ArrayList and class hierarchy logic 
        combined with reading user input."
        tools={["Java", "BlueJ"]}
      ></Project>
    </SimpleGrid>
  );
};

export default ProjectGrid;
