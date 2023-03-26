import React, { useState, useEffect } from "react";
import "./ToStart.css";
import { AiOutlineCaretUp } from "react-icons/ai";

function ToStart() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY < 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="start-container" style={{ visibility: isVisible ? "visible" : "hidden" }}>
      <a href={"#"}>
        <AiOutlineCaretUp className="start-img" />
      </a>
    </div>
  );
}

export default ToStart;