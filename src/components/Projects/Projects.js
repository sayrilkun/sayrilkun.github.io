import React from "react";
import { BiLinkExternal } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';
import { DiFirebase, DiReact, DiPython, DiRasberryPi, DiJava, DiCss3, DiPhotoshop, DiGit, DiDocker, DiJsBadge, DiHtml5, DiPhp } from 'react-icons/di';
import { SiBlender, SiFirebase, SiCplusplus, SiMathworks } from 'react-icons/si';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionTitle2
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { SocialIcons } from "../Header/HeaderStyles";

const projectsDemo = [
  { title: "Project 1", description: "Maganda to" },
  { title: "Project 2", description: "Maganda to" },
  { title: "Project 3", description: "Maganda to" },
  { title: "Project 4", description: "Maganda to" }
];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <div>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <a color="black" href={visit}>
              <BiLinkExternal size="4rem" />
            </a>

            <a href={source}>
              <BsCodeSlash size="4rem" />
            </a>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <br />
    <SectionTitle2>Other Noteworthy Projects</SectionTitle2>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>GreenDeal</ListTitle>
          <ListParagraph>
            Trash to voucher mobile app <br />
            Made with React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Ruth: RCA Generator</ListTitle>
          <ListParagraph>
            AI powered Root Cause Analysis Generator for Incident Management<br />
            Made wiht Python, Azure, and OpenAI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="4rem" />
        <ListContainer>
          <ListTitle>LD50 Calculator</ListTitle>
          <ListParagraph>
            Webapp to calculate the half life germination of ionized seeds <br />
            Made with Streamlit and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRasberryPi size="4rem" />
        <ListContainer>
          <ListTitle>Starbooks</ListTitle>
          <ListParagraph>
            Futuristic hotel booking from the stars! <br />
            Made with Streamlit
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="4rem" />
        <ListContainer>
          <ListTitle>Desktop Application</ListTitle>
          <ListParagraph>
            Experience with <br />
            C++ and Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiBlender size="4rem" />
        <ListContainer>
          <ListTitle>3D Modelling and Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Blender, AutoCAD, EAGLE
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Projects;
