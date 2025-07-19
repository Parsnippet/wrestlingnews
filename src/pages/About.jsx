import React from "react";
import { PageWrapper, PageTitle } from "../styles/PageStyles";
import styled from "styled-components";

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 2rem;
`;

export default function About() {
  return (
    <PageWrapper>
      <PageTitle>About @MegWrestling</PageTitle>
      
      <AboutContent>
        <AboutText>
          Hi, I'm Meg! Wrestling has been my passion for as long as I can remember. There's something 
          magical about the storytelling, the psychology, and the sheer artistry that happens in that 
          squared circle that captivates me completely.
        </AboutText>

        <AboutText>
          What started as casual viewing turned into a deep fascination with understanding why wrestling 
          works so well as entertainment. I love analyzing the narrative structures, character development, 
          and psychological elements that make us emotionally invest in these larger-than-life personas.
        </AboutText>

        <AboutText>
          Writing about wrestling allows me to explore these deeper layers - from the way promotions 
          like AEW, WWE, and TNA craft their stories, to the psychological impact these narratives 
          have on audiences. It's where my love for wrestling meets my passion for understanding 
          human behavior and storytelling.
        </AboutText>

        <AboutText>
          This is my space to share those thoughts and dive into the fascinating world where 
          athleticism meets art, and entertainment becomes something truly meaningful.
        </AboutText>
      </AboutContent>
    </PageWrapper>
  );
}
