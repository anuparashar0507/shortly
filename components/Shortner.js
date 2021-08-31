import React, { useState } from "react";
// import styles from "../styles/Shortner.module.css";
import Card from "./Card";
import styled from "styled-components";
import { color } from "styled-system";
const InputContainer = styled.div`
  width: 70%;
  height: 100px;
  padding: 20px;
  margin: -250px 0 80px 0;
  z-index: 1;
  border-radius: 10px;
  ${color}
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 60%;
    height: 50px;
    border: none;
    font-family: poppins;
    padding: 20px;
    font-size: 16px;
    border-radius: 10px;
  }
  button {
    width: 160px;
    color: white;
    height: 50px;
    font-size: 16px;
    padding: 0 10px;
    background-color: #2acfcf;
    border: none;
    border-radius: 10px;
    &:hover {
      background-color: #9ce2e2;
    }
  }
`;

const Shortner = () => {
  const [url, setUrl] = useState("");
  const [list, setList] = useState([]);
  const submitUrl = async () => {
    if (url) {
      const res = await fetch("https://api.shrtco.de/v2/shorten?url=" + url);
      const data = await res.json();
      if (data.ok) {
        setList([
          ...list,
          {
            id: list.length,
            url: url,
            shortUrl: data.result.full_short_link,
          },
        ]);
      } else {
        alert(data.error);
      }
    } else {
      alert("Enter Url ");
    }
  };

  return (
    <>
      <InputContainer bg="DarkViolet">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Shorten a link here..."
        ></input>

        <button onClick={submitUrl}>Shorten it!</button>
      </InputContainer>
      {list.map((l) => {
        return <Card key={l.id} url={l.url} shortUrl={l.shortUrl} />;
      })}
    </>
  );
};

export default Shortner;
