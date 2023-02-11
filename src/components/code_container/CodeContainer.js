import React, { useRef } from "react";
import "./CodeContainer.css";
import { FiCopy } from "react-icons/fi";

const CodeContainer = ({ title, code, containerHeight, insideHeight }) => {
  const codeRef = useRef(null);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      console.log("Código copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar código: ", err);
    }
  };

  return (
    <div className="code-container" style={{ height: containerHeight }}>
      <h3 className="code-container-h3">{title}</h3>
      <button onClick={handleCopyClick} className="copy-btn">
        {" "}
        <FiCopy className="copy-img" />{" "}
      </button>
      <div className="code-inside" style={{ height: insideHeight }}>
        <pre>
          <code ref={codeRef}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeContainer;
