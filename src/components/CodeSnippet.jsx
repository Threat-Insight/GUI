import { React, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../css/components-css/CodeSnippet.css";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegPaste } from "react-icons/fa6";

function CodeSnippet({ codeString }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(codeString)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    } else {
      // Fallback for unsupported environments
      const textarea = document.createElement("textarea");
      textarea.value = codeString;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="app">
      <div className="code-container">
        <div className="copy-mac">
          <div className="window-controls">
            <span className="control red"></span>
            <span className="control yellow"></span>
            <span className="control green"></span>
          </div>
          <div className="code-header">
            <button className="copy-button" onClick={copyToClipboard}>
              {copied ? (
                <span className="copied-code">
                  <IoMdCheckmark className="copied-icon" /> Copied!
                </span>
              ) : (
                <span className="copy-code">
                  <FaRegPaste /> Copy Code
                </span>
              )}{" "}
            </button>
          </div>
        </div>
        <SyntaxHighlighter language="python" style={dracula}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeSnippet;
