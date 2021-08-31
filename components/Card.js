import React, { useState, useRef } from "react";
import styled from "styled-components";
import { color } from "styled-system";
// import Link from "next/dist/client/link";
const CardContainer = styled.div`
  width: 70%;
  ${color}
  height: 60px;
  padding: 20px;
  margin-bottom: 20px;
  z-index: 1;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 16px;
    ${color}
  }
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-family: poppins;
  ${color}
  border: none;
  border-radius: 5px;
  &:focus {
    background-color: #3b3054;
  }
`;

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
