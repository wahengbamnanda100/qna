import { useEffect, useRef, useState } from "react";
import { StacksEditor } from "@stackoverflow/stacks-editor";
// don't forget to include the styles as well
import "@stackoverflow/stacks-editor/dist/styles.css";
// include the Stacks js and css as they're not included in the bundle
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";

const StackoverflowEditor = () => {
  const editorContainerRef = useRef(null);
  const [markdownContent, setMarkdownContent] = useState(
    "*Your* **markdown** here",
  );

  useEffect(() => {
    const editorContainer: any = editorContainerRef.current;

    if (editorContainer && !editorContainer.hasEditorInitialized) {
      const editor = new StacksEditor(
        editorContainer,
        "*Your* **markdown** here",
      );

      // Mark the container as initialized to avoid re-running the code
      editorContainer.hasEditorInitialized = true;
      setMarkdownContent(editor.content);
    }
  }, [editorContainerRef]);

  useEffect(() => {
    console.log(markdownContent);
  }, [markdownContent]);

  return (
    <div
      ref={editorContainerRef}
      id="editor-container"
      style={{ width: "100%" }}
    ></div>
  );
};

export default StackoverflowEditor;
