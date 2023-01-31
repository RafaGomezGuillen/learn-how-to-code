import React, { useState, useEffect } from "react";
import "./HtmlTutorialNavbar.css";
import { FaBars } from 'react-icons/fa';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width > 1000) {
    return (
      <div className="html-tutorial-navbar">
        <h1>HTML Tutorial</h1>
        <a href="#">HTML HOME</a>
        <a href="#">HTML Introduction</a>
        <a href="#">HTML Basics</a>
        <h1>HTML Basic Elements</h1>
        <a href="#">HTML &lt;div&gt;</a>
        <a href="#">HTML &lt;p&gt;</a>
        <a href="#">HTML &lt;h1&gt;, &lt;h2&gt;...</a>
        <a href="#">HTML &lt;a&gt;</a>
        <a href="#">HTML &lt;form&gt;</a>
        <a href="#">HTML &lt;input&gt;</a>
        <a href="#">HTML &lt;fieldset&gt;</a>
        <a href="#">HTML &lt;legend&gt;</a>
        <a href="#">HTML &lt;label&gt;</a>
        <a href="#">HTML &lt;textarea&gt;</a>
        <a href="#">HTML &lt;select&gt;, &lt;option&gt;</a>
        <a href="#">HTML &lt;optgroup&gt;</a>
        <a href="#">HTML &lt;em&gt;</a>
        <a href="#">HTML &lt;strong&gt;</a>
        <a href="#">HTML &lt;ins&gt;</a>
        <a href="#">HTML &lt;del&gt;</a>
        <a href="#">HTML &lt;blockquote&gt;</a>
        <a href="#">HTML &lt;abbr&gt;</a>
        <a href="#">HTML &lt;acronym&gt;</a>
        <a href="#">HTML &lt;dfn&gt;</a>
        <a href="#">HTML &lt;cite&gt;</a>
        <a href="#">HTML &lt;pre&gt;</a>
        <a href="#">HTML &lt;code&gt;</a>
        <h1>HTML Characters</h1>
        <a href="#">HTML Characters</a>
        <h1>HTML Lists</h1>
        <a href="#">HTML &lt;ul&gt;</a>
        <a href="#">HTML &lt;ol&gt;</a>
        <a href="#">HTML &lt;dl&gt;</a>
        <h1>HTML Images</h1>
        <a href="#">HTML &lt;img&gt;</a>
        <a href="#">HTML &lt;map&gt;</a>
        <h1>HTML Tables</h1>
        <a href="#">HTML &lt;th&gt;</a>
        <a href="#">HTML &lt;td&gt;</a>
        <a href="#">HTML &lt;caption&gt;</a>
      </div>
    );
  }

  return (
    <div className="html-tutorial-navbar-btn">
      <button onClick={() => setIsVisible(!isVisible)}>
        <FaBars style={{ width: "35px", height: "35px" }}/>
      </button>
      {isVisible && (
        <div className="html-tutorial-navbar-2">
          <h1 style={{ marginTop: "35px" }}>HTML Tutorial</h1>
          <a href="#">HTML HOME</a>
          <a href="#">HTML Introduction</a>
          <a href="#">HTML Basics</a>
          <h1>HTML Basic Elements</h1>
          <a href="#">HTML &lt;div&gt;</a>
          <a href="#">HTML &lt;p&gt;</a>
          <a href="#">HTML &lt;h1&gt;, &lt;h2&gt;...</a>
          <a href="#">HTML &lt;a&gt;</a>
          <a href="#">HTML &lt;form&gt;</a>
          <a href="#">HTML &lt;input&gt;</a>
          <a href="#">HTML &lt;fieldset&gt;</a>
          <a href="#">HTML &lt;legend&gt;</a>
          <a href="#">HTML &lt;label&gt;</a>
          <a href="#">HTML &lt;textarea&gt;</a>
          <a href="#">HTML &lt;select&gt;, &lt;option&gt;</a>
          <a href="#">HTML &lt;optgroup&gt;</a>
          <a href="#">HTML &lt;em&gt;</a>
          <a href="#">HTML &lt;strong&gt;</a>
          <a href="#">HTML &lt;ins&gt;</a>
          <a href="#">HTML &lt;del&gt;</a>
          <a href="#">HTML &lt;blockquote&gt;</a>
          <a href="#">HTML &lt;abbr&gt;</a>
          <a href="#">HTML &lt;acronym&gt;</a>
          <a href="#">HTML &lt;dfn&gt;</a>
          <a href="#">HTML &lt;cite&gt;</a>
          <a href="#">HTML &lt;pre&gt;</a>
          <a href="#">HTML &lt;code&gt;</a>
          <h1>HTML Characters</h1>
          <a href="#">HTML Characters</a>
          <h1>HTML Lists</h1>
          <a href="#">HTML &lt;ul&gt;</a>
          <a href="#">HTML &lt;ol&gt;</a>
          <a href="#">HTML &lt;dl&gt;</a>
          <h1>HTML Images</h1>
          <a href="#">HTML &lt;img&gt;</a>
          <a href="#">HTML &lt;map&gt;</a>
          <h1>HTML Tables</h1>
          <a href="#">HTML &lt;th&gt;</a>
          <a href="#">HTML &lt;td&gt;</a>
          <a href="#">HTML &lt;caption&gt;</a>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
