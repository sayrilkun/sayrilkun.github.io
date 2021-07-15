import React from 'react';
import { DiFirebase, DiReact, DiPython, DiRasberryPi, DiJava, DiCss3, DiPhotoshop, DiGit, DiDocker, DiJsBadge, DiHtml5, DiPhp } from 'react-icons/di';
import { SiBlender, SiFirebase, SiCplusplus, SiMathworks } from 'react-icons/si';



import { Section, SectionDivider, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech"> 
        <SectionDivider/>
        <br />
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>
                I've worked with a range of technologies in the web development and artificial intelligence world.
            </SectionText>
            <List>
                <ListItem>
                    <DiReact size= "4rem" />
                    <ListContainer>
                        <ListTitle>Front-End</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            React.js
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiFirebase size= "4rem" />
                    <ListContainer>
                        <ListTitle>Back-End</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            Node and Databases
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiPython size= "4rem" />
                    <ListContainer>
                        <ListTitle>Data Analysis & AI</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            Python
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiRasberryPi size= "4rem" />
                    <ListContainer>
                        <ListTitle>Embedded Systems</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            Arduino and Raspberry Pi
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <DiJava size= "4rem" />
                    <ListContainer>
                        <ListTitle>Desktop Application</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            C++ and Java
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
                <ListItem>
                    <SiBlender size= "4rem" />
                    <ListContainer>
                        <ListTitle>3D Modelling and Design</ListTitle>
                        <ListParagraph>
                            Experience with <br/>
                            Blender, AutoCAD, EAGLE
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            </List>
            <SectionTitle2>Other Noteworthy Technologies</SectionTitle2>
            <List>
                <ListItem>
                    <DiJsBadge size= "5rem" />
                    <ListParagraph>Javascript</ListParagraph>
                </ListItem>
                <ListItem>
                    <DiCss3 size= "5rem" />
                    <ListParagraph>CSS</ListParagraph>
                </ListItem>
                <ListItem>
                    <DiHtml5 size= "5rem" />
                    <ListParagraph>HTML</ListParagraph>
                </ListItem>
                <ListItem>
                    <DiPhp size= "5rem" />
                    <ListParagraph>PHP</ListParagraph>
                </ListItem>
                <ListItem>
                    <DiPhotoshop size= "5rem" />
                    <ListParagraph>Photoshop</ListParagraph>
                </ListItem>
                <ListItem>
                    <SiMathworks size= "5rem" />
                    <ListParagraph>MATLAB</ListParagraph>
                </ListItem>
                <ListItem>
                    <DiGit size= "5rem" />
                    <ListParagraph>Git</ListParagraph>
                </ListItem>
                <ListItem>
                    <DiDocker size= "5rem" />
                    <ListParagraph>Docker</ListParagraph>
                </ListItem>
                <ListItem>
                    <SiFirebase size= "5rem" />
                    <ListParagraph>Google Firebase</ListParagraph>
                </ListItem>
            </List>
    </Section>
);

export default Technologies;
