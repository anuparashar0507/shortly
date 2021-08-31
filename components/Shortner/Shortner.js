import React, { useState } from "react";
// import styles from "../styles/Shortner.module.css";
import Card from "../Card/Card";
import { InputContainer, InputField, Button } from "./Shortner.styles";
// import { Button } from "../../styles/global";
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
        <InputField
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Shorten a link here..."
        ></InputField>

        <Button onClick={submitUrl}>Shorten it!</Button>
      </InputContainer>
      {list.map((l) => {
        return <Card key={l.id} url={l.url} shortUrl={l.shortUrl} />;
      })}
    </>
  );
};

export default Shortner;
