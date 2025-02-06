import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import MathTool from "./tools/math";
import List from "@editorjs/list";
import Header from "@editorjs/header";

export default function App() {
  const ejInstance = useRef(null);
  useEffect(() => {
    if (ejInstance.current) {
      ejInstance.current.destroy();
    }
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        list: List,
        math: MathTool,
      },
      data: {
        blocks: [{ type: "math", data: { math: "2*2=4" } }],
      },

      onReady: () => {
        ejInstance.current = editor;
        console.log("ready");
      },
      autofocus: true,
      onChange: async () => {
        const content = await editor.save();
        console.log(content);
      },
    });

    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <>
      <h1>EDITOR</h1>
      <div id="editorjs"></div>
    </>
  );
}
