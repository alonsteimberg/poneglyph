import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MdFileComponent {
  fileName: string
}

export const MdFileComponent = ({fileName}: MdFileComponent) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/mdFiles/${fileName}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  });

  //TODO: make the global path from somewhere else 
  return (
      <ReactMarkdown 
      children={content}
      urlTransform={(path) => `images/${path}`}/>
  );
};
