import React from "react";
import "./HtmlTutorialNavbar.css";

function HtmlTutorialNavbar({ posicion }) {
  return (
    <div className="side">
      <h1>HTML Tutorial</h1>
      <a style={{ backgroundColor: posicion === 1 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML HOME</a>
      <a style={{ backgroundColor: posicion === 2 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML Introduction</a>
      <a style={{ backgroundColor: posicion === 3 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML Basics</a>
      <h1>HTML Basic Elements</h1>
      <a style={{ backgroundColor: posicion === 4 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;div&gt;</a>
      <a style={{ backgroundColor: posicion === 5 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;p&gt;</a>
      <a style={{ backgroundColor: posicion === 6 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;h1&gt;, &lt;h2&gt;...</a>
      <a style={{ backgroundColor: posicion === 7 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;a&gt;</a>
      <a style={{ backgroundColor: posicion === 8 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;form&gt;</a>
      <a style={{ backgroundColor: posicion === 9 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;input&gt;</a>
      <a style={{ backgroundColor: posicion === 10 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;fieldset&gt;</a>
      <a style={{ backgroundColor: posicion === 11 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;legend&gt;</a>
      <a style={{ backgroundColor: posicion === 12 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;label&gt;</a>
      <a style={{ backgroundColor: posicion === 13 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;textarea&gt;</a>
      <a style={{ backgroundColor: posicion === 14 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;select&gt;, &lt;option&gt;</a>
      <a style={{ backgroundColor: posicion === 15 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;optgroup&gt;</a>
      <a style={{ backgroundColor: posicion === 16 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;em&gt;</a>
      <a style={{ backgroundColor: posicion === 17 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;strong&gt;</a>
      <a style={{ backgroundColor: posicion === 18 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;ins&gt;</a>
      <a style={{ backgroundColor: posicion === 19 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;del&gt;</a>
      <a style={{ backgroundColor: posicion === 20 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;blockquote&gt;</a>
      <a style={{ backgroundColor: posicion === 21 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;abbr&gt;</a>
      <a style={{ backgroundColor: posicion === 22 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;acronym&gt;</a>
      <a style={{ backgroundColor: posicion === 23 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;dfn&gt;</a>
      <a style={{ backgroundColor: posicion === 24 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;cite&gt;</a>
      <a style={{ backgroundColor: posicion === 25 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;pre&gt;</a>
      <a style={{ backgroundColor: posicion === 26 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;code&gt;</a>
      <h1>HTML Characters</h1>
      <a style={{ backgroundColor: posicion === 27 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML Characters</a>
      <h1>HTML Lists</h1>
      <a style={{ backgroundColor: posicion === 28 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;ul&gt;</a>
      <a style={{ backgroundColor: posicion === 29 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;ol&gt;</a>
      <a style={{ backgroundColor: posicion === 30 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;dl&gt;</a>
      <h1>HTML Images</h1>
      <a style={{ backgroundColor: posicion === 31 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;img&gt;</a>
      <a style={{ backgroundColor: posicion === 32 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;map&gt;</a>
      <h1>HTML Tables</h1>
      <a style={{ backgroundColor: posicion === 33 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;th&gt;</a>
      <a style={{ backgroundColor: posicion === 34 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;td&gt;</a>
      <a style={{ backgroundColor: posicion === 34 ? 'rgba(33, 118, 174, 0.8)' : 'none' }} href="#">HTML &lt;caption&gt;</a>
    </div>
  );
}

export default HtmlTutorialNavbar;
