import React, { useRef } from "react";
import "./CodeContainer.css";
import { FiCopy } from 'react-icons/fi';

const CodeContainer = ({title, code}) => {
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
    <div className="code-container">
      <h3 className="code-container-h3">{title} example</h3>
      <button onClick={handleCopyClick} className="copy-btn"> <FiCopy className="copy-img"/> </button>
      <div className="code-inside">
        <pre>
          <code ref={codeRef}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeContainer;
