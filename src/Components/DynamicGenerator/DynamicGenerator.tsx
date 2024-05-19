import { useEffect, useState } from "react";
import { DyanamicGeneratorInterface } from "./types";

export const DynamicGenerator = ({ text,index,response,setResponse }:DyanamicGeneratorInterface) => {
    const [displayedText, setDisplayedText] = useState("");
    const [length, setLength] = useState(0);
    useEffect(() => {
      if (response[index]?.isSeen) {
          setDisplayedText(text);
        }
          const interval = setInterval(() => {
        if (displayedText.length < text.length) {
          setDisplayedText((prevText) => prevText + text[length]);
          setLength(length + 1);
        } else {
          const reponseClone=JSON.parse(JSON.stringify(response))
          reponseClone[index].isSeen = true;
          setResponse(reponseClone)
          clearInterval(interval);
        }
      }, 20);
  
      return () => clearInterval(interval);
    }, [displayedText, text]);
    
    return displayedText;
  };