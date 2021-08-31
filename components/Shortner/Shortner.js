import React, { useState } from "react";
import Card from "../Card/Card";
import Image from "next/image";
import Load from "../../assets/loader.gif";
import { InputContainer, InputField, Button } from "./Shortner.styles";
const Shortner = () => {
  const [url, setUrl] = useState("");
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const submitUrl = async () => {
    setLoading(true);
    if (url) {
      const res = await fetch("https://api.shrtco.de/v2/shorten?url=" + url);
      const data = await res.json();
      if (!data) {
      }
      if (data.ok) {
        setList([
          ...list,
          {
            id: list.length,
            url: url,
            shortUrl: data.result.full_short_link,
          },
        ]);
        setLoading(false);
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
        {!isLoading && <Button onClick={submitUrl}>Shorten it!</Button>}
        {isLoading && (
          <Button>
            <Image src={Load} width="50px" height="50px" alt="loader" />
          </Button>
        )}
      </InputContainer>
      {list.map((l) => {
        return <Card key={l.id} url={l.url} shortUrl={l.shortUrl} />;
      })}
    </>
  );
};

export default Shortner;
