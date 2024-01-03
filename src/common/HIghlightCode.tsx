import React, { useEffect } from "react";
import hljs from "highlight.js";

interface CodeProps {
  code: string;
}

const HIghlightCode = ({ code }: CodeProps) => {
  useEffect(() => {
    // Find all code elements and highlight them
    document.querySelectorAll("pre code").forEach(() => {
      hljs.highlightAll();
    });
  }, [code]);

  return (
    <pre className="" style={{ width: "100%" }}>
      <code className="">{code}</code>
    </pre>
  );
};

export default HIghlightCode;
