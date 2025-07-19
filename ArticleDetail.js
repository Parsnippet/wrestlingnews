import React from "react";
import { useParams, Link } from "react-router-dom";
import articles from "../utils/articles";
import { PageWrapper, PageTitle, Subtitle } from "../styles/PageStyles";
import { ArticleDetailImage } from "../styles/CardStyles";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) return <div>Article not found</div>;

  return (
    <PageWrapper>
      <Link to="/">← Back to all articles</Link>
      <ArticleDetailImage src={article.img} alt={article.title} />
      <PageTitle>{article.title}</PageTitle>
      <Subtitle>{article.meta}</Subtitle>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </PageWrapper>
  );
}