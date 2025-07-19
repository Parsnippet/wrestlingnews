import React from "react";
import { PageWrapper, PageTitle } from "../styles/PageStyles";
import MegWrestlingLogo from "../components/MegWrestlingLogo";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 3rem 0;
  padding: 2rem;
  background: rgba(0, 255, 136, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 136, 0.1);
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 24px;
  padding: 3rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: -1;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const ContactText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 2rem;
`;

const SocialSection = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(0, 255, 136, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(0, 255, 136, 0.1);
`;

const SocialTitle = styled.h3`
  color: #00ff88;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const SocialHandle = styled.div`
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SocialDesc = styled.p`
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.3);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #00ff88;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const FeatureDesc = styled.p`
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export default function Contact() {
  return (
    <PageWrapper>
      <ContactContainer>
        <PageTitle>Contact MegWrestling</PageTitle>
        
        <LogoSection>
          <MegWrestlingLogo size="large" />
        </LogoSection>
        
        <ContactCard>
          <ContactText>
            Got a tip, question, or want to collaborate? I'm always interested in 
            discussing the fascinating intersection of wrestling, psychology, and science with fellow fans.
          </ContactText>
        </ContactCard>
        
        <SocialSection>
          <SocialTitle>Follow @megwrestling on X and Bluesky</SocialTitle>
          <SocialHandle>@megwrestling</SocialHandle>
          <SocialDesc>
            Follow me for real-time commentary on wrestling psychology and performance science.
          </SocialDesc>
        </SocialSection>
        
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>🧠</FeatureIcon>
            <FeatureTitle>Research Tips</FeatureTitle>
            <FeatureDesc>Share psychological insights about wrestling storylines and performer dynamics</FeatureDesc>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Data Analysis</FeatureTitle>
            <FeatureDesc>Contribute statistical analysis of match psychology and audience engagement</FeatureDesc>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>🤝</FeatureIcon>
            <FeatureTitle>Collaborations</FeatureTitle>
            <FeatureDesc>Partner with me on exclusive content creation</FeatureDesc>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>💡</FeatureIcon>
            <FeatureTitle>Story Ideas</FeatureTitle>
            <FeatureDesc>Suggest topics that blend wrestling entertainment with scientific inquiry</FeatureDesc>
          </FeatureItem>
        </FeatureList>
      </ContactContainer>
    </PageWrapper>
  );
}
