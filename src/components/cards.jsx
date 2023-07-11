import { cardImg } from "../constants/images";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

export const cards = [
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image16"]}
        title={"Ikaro"}
        descrip={
          "Ikaro is the app designed to put drone pilots in contact with users who are looking for services of a different nature."
        }
        link1="https://ikaroproject.com/welcome"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image14"]}
        title={"Banco de Bogota"}
        descrip={
          "We've built a loyalty app for Banco de Bogota's Mastercard holders. Users can log in, set and achieve goals, and earn rewards. Our team handled both the front-end and back-end development."
        }
        link1="https://www.vivetuscomprasygana.com/"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image15"]}
        title={"Debitazo"}
        descrip={
          "We've built a loyalty app for Banco Davivienda's Mastercard holders. Users can log in, set and achieve goals, and earn rewards. Our team handled both the front-end and back-end development."
        }
        link1="https://www.debitazo.com.co/"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image1"]}
        title={"LINO"}
        descrip={
          "Lino is an application that connects doctors with patients to facilitate scheduling appointments, whether it's virtual through a chat or in-person by arranging a prior appointment. It utilizes the Google Maps API for location services."
        }
        link1="https://lino-app.vercel.app/home"
        link2="https://github.com/Sagalo04/lino-app"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image2"]}
        title={"K-BOOM DOCENTES"}
        descrip={
          "It is a teacher platform for reviewing students' progress in the video game K=Boom. It incorporates a convenient Google login feature to grant access to the platform."
        }
        link1="https://kboom-teachers.vercel.app/signin"
        link2="https://github.com/Sagalo04/kboom-teachers"
      />
    ),
  },

  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image3"]}
        title={"RICK AND MORTY"}
        descrip={
          "This is a React application designed to explore information about the characters from the series Rick and Morty, including the episodes in which they appear and their respective details."
        }
        link1="https://rick-and-morty-react-app.web.app"
        link2="https://github.com/Sagalo04/rick_and_morty_reactapp"
      />
    ),
  },

  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image4"]}
        title={"Dashboard SCSS"}
        descrip={
          "This dashboard was created using React and SCSS to replicate a page through components, faithfully following an initial design with the utmost attention to detail."
        }
        link1="https://trabajo-scss.vercel.app"
        link2="https://github.com/Sagalo04/TrabajoSCSS"
      />
    ),
  },

  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image10"]}
        title={"K=BOOM"}
        descrip={
          "This web platform is specifically designed for the educational video game K=Boom, where students' collected data can be visualized."
        }
        link1="https://kboomfront-omega.vercel.app/santiago.garcna@uao.edu.co"
        link2="https://github.com/tinanano19/kboomfront"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image6"]}
        title={"INKED TATTOO SHOP"}
        descrip={
          "This is a professional WordPress website for Inked Tattoo, showcasing the services we offer and providing a platform for visitors to request a personalized quote for their tattoo ideas."
        }
        link1="https://inkedtattooshopcol.com"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image7"]}
        title={"AWESOME HEROES"}
        descrip={
          "I created a superhero voting app using Angular and leveraging the functionality of MOCKAPI to preserve vote records."
        }
        link1="https://awesome-heroes.vercel.app"
        link2="https://github.com/Sagalo04/AwesomeHeroes"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image8"]}
        title={"Bisanti Auto"}
        descrip={
          "This is a develop of a one-page commercial website on WordPress for the company Bisanti. On this site, visitors can explore the services we offer and use the contact form to get in touch with us."
        }
        link1="https://bisantiauto.com"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image9"]}
        title={"Prayer Slayer"}
        descrip={
          "PixelArt prototype of a video game using Unity as part of my video game development project."
        }
        link1={"/assets/PrayerSlayerInstall.exe"}
        link2="https://sites.google.com/uao.edu.co/prayerslayerproject/página-principal"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image5"]}
        title={"K=Boom Project"}
        descrip={
          "We have developed an educational video game to teach the topic of Physics: Work and Energy, specifically the Atwood Machine, aimed at university students. The game is designed in the form of a fictional story as part of a thesis project."
        }
        link1={
          "https://drive.google.com/file/d/1DmFziXWdFz6IccY64PjC9nIqlC0kBE2d/view?usp=sharing"
        }
        link2="https://github.com/Sagalo04/K-Boom-project"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image11"]}
        title={"Portal Galaxias"}
        descrip={
          "Angular page that connects to a MongoDB API about astronomical information. The page features a search bar and filters to facilitate the search for specific data related to celestial bodies."
        }
        link1="https://pruebatecnicanice.vercel.app"
        link2="https://github.com/Sagalo04/pruebatecnicanice"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image12"]}
        title={"Breaking Bad App"}
        descrip={
          <>
            React app with Redux, designed to allows you to explore the
            characters and quotes from the iconic series Breaking Bad. You can
            rate each quote and leave comments. Created in collaboration with{" "}
            <a
              href="https://github.com/AngieV1198"
              target="_blank"
              rel="noreferrer"
            >
              Angie Varela
            </a>
          </>
        }
        link1="https://breaking-bad-react-eight.vercel.app"
        link2="https://github.com/Sagalo04/breaking_bad_react"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image13"]}
        title={"Heroes App"}
        descrip={
          "React app that provides an immersive experience for browsing and rating Marvel superheroes. With the flexibility to rate them multiple times, you can create your own comprehensive ranking. Our skilled developer utilized React, Redux, and Laravel to bring this app to life."
        }
        link1="https://heroes-isobar-afkbbmbnf-santiago-garcia09-livecom.vercel.app"
        link2="https://github.com/Sagalo04/heroes-isobar"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={cardImg["image17"]}
        title={"Val Logistics"}
        descrip={
          "We've developed a revolutionary app that streamlines and improves the quoting and tracking of shipments, whether by sea, air, or land. Our comprehensive solution provides all the necessary tools and functionalities for efficient shipment management."
        }
        link1="https://app.val.com.co/"
      />
    ),
  },
];
