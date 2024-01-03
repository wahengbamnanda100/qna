import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography, Paper, Box } from "@mui/material";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";
import { read } from "to-vfile";
import hljs from "highlight.js/lib/core";
import bnf from "highlight.js/lib/languages/bnf";

hljs.registerLanguage("bnf", bnf);

const MarkdownRenderer = ({ markdownContent }: any) => {
  return (
    <Typography component="div">
      <ReactMarkdown
        remarkPlugins={[rehypeHighlight]}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <Box
                my={2}
                sx={{
                  padding: "1rem",
                  border: `1px solid #fff`,
                  maxWidth: "100%",
                  overflow: "hidden",
                  overflowX: "auto",
                }}
              >
                <Paper sx={{ bgcolor: "#282a36", p: "0.5rem" }}>
                  <pre className="">
                    <code
                      className={`${className}`}
                      style={{
                        color: "#f8f8f2",
                        // backgroundColor: "#282a36",
                        padding: "5px",
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  </pre>
                </Paper>
              </Box>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </Typography>
  );
};

export default MarkdownRenderer;
