import React from "react";
import HtmlExercisesNavbar from "../../components/navbar/html_exercises_navbar/HtmlExercisesNavbar";
import HtmlExercisesContent from "../../components/html_exercises/HtmlExercisesContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart"

function HtmlExercises() {
  return (
    <>
      <HtmlExercisesNavbar />
      <HtmlExercisesContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default HtmlExercises;
