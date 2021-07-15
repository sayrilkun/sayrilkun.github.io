import React from 'react';

import { Section, SectionText, SectionTitle3, SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionSubText>Hi, my name is</SectionSubText>
            <SectionTitle3 main center>
            Andrei Cyril Gimoros <br/>
            </SectionTitle3>
            <SectionText> 
            A Computer Engineer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum technology and user experience
            </SectionText>
            <a href="Gimoros_CV_cpe.pdf" download="Gimoros_CV">
            <Button type="button">Download CV</Button>
            </a>
        </LeftSection>
    </Section>
);

export default Hero;