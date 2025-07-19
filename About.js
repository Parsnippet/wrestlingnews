import React from "react";
import { PageWrapper, PageTitle, Subtitle } from "../styles/PageStyles";

export default function About() {
  return (
    <PageWrapper>
      <PageTitle>@MegWrestling</PageTitle>
      <Subtitle>
        I'm just an average wrestling fan who loves to analyze the art of professional wrestling. This site is my personal project to share insights, stories, and discussions about the world of wrestling.
      </Subtitle>
      <p>
        Some of you may know me from the internet wrestling community where I go by the handle <strong>@MegWrestling</strong>. Here, I share my passion for wrestling through articles, analysis, and discussions. Whether it's breaking down a match, exploring character development, or just sharing my thoughts on the latest happenings in the wrestling world, this site is my space to connect with fellow fans.
      </p>
    </PageWrapper>
  );
}