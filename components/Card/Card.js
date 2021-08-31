import React, { useState, useRef } from "react";
import { Button, CardContainer } from "./Card.styles";

const Card = (props) => {
  const [copySuccess, setCopySuccess] = useState("Copy");
  //   const pRef = useRef(null);

  function copyToClipboard(e) {
    // pRef.current.select();
    // document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    navigator.clipboard.writeText(props.shortUrl);
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <CardContainer bg="white">
      <p>{props.url}</p>
      <p color="Cyan" value={props.shortUrl}>
        {props.shortUrl}
      </p>
      <Button bg="Cyan" color="white" onClick={copyToClipboard}>
        {copySuccess}
      </Button>
    </CardContainer>
  );
};

export default Card;
