import React from "react";
import { BiLinkExternal } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';


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
    {title : "Project 1", description:"Maganda to"},
    {title : "Project 2", description:"Maganda to"},
    {title : "Project 3", description:"Maganda to"},
    {title : "Project 4", description:"Maganda to"}
];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
          <BlogCard key= {id}>
              <Img src={image} />
              <TitleContent>
                  <HeaderThree>{title}</HeaderThree>
                  <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <br/>
              <div>
                  <TagList>
                      {tags.map((tag, i) => (
                          <Tag key={i}>{tag}</Tag>
                      ))}
                  </TagList>
              </div>
              <UtilityList>
                  <a color="black" href={visit}>
                    <BiLinkExternal size= "4rem" />
                  </a>

                  <a href={source}>
                    <BsCodeSlash size= "4rem"/>
                  </a>
              </UtilityList>
          </BlogCard>
      ))}
    </GridContainer>
    <br/>
    {/* <SectionTitle2>Other Noteworthy Projects</SectionTitle2> */}
  </Section>
);

export default Projects;
