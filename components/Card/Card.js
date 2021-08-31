import React, { useState } from "react";
import { Button, CardContainer, Url, ShortenedUrl } from "./Card.styles";
const Card = (props) => {
  const [copySuccess, setCopySuccess] = useState("Copy");

  function copyToClipboard(e) {
    navigator.clipboard.writeText(props.shortUrl);
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <CardContainer bg="white">
      <Url>
        {" "}
        <p>{props.url}</p>
      </Url>
      <ShortenedUrl color="Cyan">
        <p value={props.shortUrl}>{props.shortUrl}</p>
      </ShortenedUrl>
      <Button bg="Cyan" color="white" onClick={copyToClipboard}>
        {copySuccess}
      </Button>
    </CardContainer>
  );
};

export default Card;
