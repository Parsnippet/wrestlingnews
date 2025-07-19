import React from "react";
import articles from "../utils/articles";
import { ArticleCard, CardImage, CardTitle, CardMeta, CardDesc } from "../styles/CardStyles";
import { PageWrapper, PageTitle, Subtitle } from "../styles/PageStyles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageWrapper>
      <PageTitle>MegWrestling</PageTitle>
      <Subtitle>
       This is my personal space to explore the art and strategy behind professional wrestling through the lens of evidence-based science and human behavior. From cognitive breakdowns of character arcs to biomechanical analysis of in-ring technique, I dive into the stories, psychology, and real-world science that make wrestling more than just entertainment. Whether you're a curious fan or a fellow thinker, you're invited to join me in decoding the squared circle—one theory at a time.
      </Subtitle>
      {articles.map(article => (
        <Link to={`/article/${article.id}`} key={article.id} style={{ textDecoration: "none" }}>
          <ArticleCard>
            <CardImage src={article.img} alt={article.title} />
            <div>
              <CardTitle>{article.title}</CardTitle>
              <CardMeta>{article.meta}</CardMeta>
              <CardDesc>{article.preview}</CardDesc>
            </div>
          </ArticleCard>
        </Link>
      ))}
    </PageWrapper>
  );
}
