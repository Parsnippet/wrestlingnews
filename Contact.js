import React from "react";
import { PageWrapper, PageTitle } from "../styles/PageStyles";

export default function Contact() {
  return (
    <PageWrapper>
      <PageTitle>Contact Us</PageTitle>
      <p>
        Got a tip, question, or want to work with us? Email <a href="mailto:info@wrestlesciencedaily.com">info@wrestlesciencedaily.com</a>
      </p>
    </PageWrapper>
  );
}