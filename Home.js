import React from "react";
import articles from "../utils/articles";
import { ArticleCard, CardImage, CardTitle, CardMeta, CardDesc } from "../styles/CardStyles";
import { PageWrapper, PageTitle, Subtitle } from "../styles/PageStyles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageWrapper>
      <PageTitle>WrestleScience Daily</PageTitle>
      <Subtitle>
        The science, psychology, and spectacle of pro wrestling, with a spotlight on AEW, WWE, and TNA.
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