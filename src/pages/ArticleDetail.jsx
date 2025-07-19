import React from "react";
import { useParams, Link } from "react-router-dom";
import articles from "../utils/articles";
import { PageWrapper, PageTitle, Subtitle } from "../styles/PageStyles";
import { ArticleDetailImage } from "../styles/CardStyles";
import styled from "styled-components";

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00ff88;
  font-weight: 600;
  margin-bottom: 2rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 12px;
  background: rgba(0, 255, 136, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateX(-5px);
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 10px 20px rgba(0, 255, 136, 0.2);
  }
`;

const ArticleContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  
  h2, h3, h4 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  ul {
    margin: 2rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 1rem;
      line-height: 1.7;
    }
  }
`;

const ReadingProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 255, 136, 0.2);
  z-index: 1001;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #00ff88, #00cc6a);
    transition: width 0.1s ease;
    width: var(--progress, 0%);
  }
`;

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      const progressBar = document.querySelector('[data-progress]');
      if (progressBar) {
        progressBar.style.setProperty('--progress', `${progress}%`);
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (!article) return <div>Article not found</div>;

  return (
    <>
      <ReadingProgress data-progress />
      <PageWrapper>
        <BackLink to="/">
          ← Back to all articles
        </BackLink>
        <ArticleDetailImage src={article.img} alt={article.title} />
        <PageTitle>{article.title}</PageTitle>
        <Subtitle>{article.meta}</Subtitle>
        <ArticleContent>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </ArticleContent>
      </PageWrapper>
    </>
  );
}
