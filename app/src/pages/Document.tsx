import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Document = () => {
    const [editorContent, setEditorContent] = useState<string>("");

    const handleChange = (value: string) => {
      setEditorContent(value);
    };

    const modules = {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["link"],
        //   [{ align: "left" }, { align: "center" }, { align: "right" }, { align: "justify" }],
          [{ align: [] }],
          ["image"],
        ],
      };
  
    return (
      <div className="editor-container">
        <ReactQuill
          value={editorContent}
          onChange={handleChange}
          theme="snow"
          modules={modules}

        />
      </div>
    );
}

export default Document