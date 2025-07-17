"use dom";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { javascript } from "@codemirror/lang-javascript";

type CodeEditorProps = {};

export default function CodeEditor({}: CodeEditorProps) {
  const [value, setValue] = React.useState(
    "console.log('hello world!');\n\n\n\n\n\n"
  );

  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      style={{ width: "100%" }}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
