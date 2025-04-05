# Learn how to code. React proyect
This is my first react project based on [W3Schools](https://www.w3schools.com/default.asp).

It was intended to be the **W3Schools** of all the content taught in programming of the first year of the *Ciclo de FP Desarrollo de Aplicaciones Web*, however, it turned out to be only **HTML, CSS and SQL** content of the first quarter.

🔗 View it live: [Learn How to Code Website](https://rafagomezguillen.github.io/learn-how-to-code/)

## 🎥 Watch the YouTube video to see the Learn how to code in action!

[![Watch the video](https://img.youtube.com/vi/KdUgOvMEbZs/0.jpg)](https://www.youtube.com/watch?v=KdUgOvMEbZs)

## React and components
Structuring a page in components is the most useful thing I have given on my own so far, if I had done this project like the previous one ([Smooth Match 3](https://github.com/RafaGomezGuillen/match_3)) simply with HTML, CSS and Vanilla JavaScript it would have taken much longer, and the structures of the different pages would have an x40 of code.

I learned all the concepts thanks to this [video](https://www.youtube.com/watch?v=rLoWMU4L_qE&list=WL&index=1&ab_channel=Fazt). Simply brutal the quality of Fazt when it comes to explaining what React is.

## Components created
### code_container
Code container is where the raw of the HTML, CSS and SQL code appears. This has 4 parameters the **Title, the code, the height of the container, and the height of the code container**. An example would be:
```jsx
<CodeContainer
            title={"HTML Example"}
            code={
              "<!DOCTYPE html>\n<html>\n<title>HTML Tutorial</title>\n<body>\n\n<h1>Hello world!</h1>\n\n</body>\n</html>"
            }
            containerHeight={"335px"}
            insideHeight={"65%"}
          />
```
The problem is that you have to adapt the code to a single line, in addition to putting in the string its tabs and the corresponding line breaks, we are not just copying and pasting the code. This work was made easier by these pages that pass code to one line:
- [HTML minifer](https://codebeautify.org/html-formatter-beautifier)
- [CSS minifer](https://codebeautify.org/css-beautify-minify)
- [SQL minifer](https://codebeautify.org/sql-minifier)
### footer
The footer does not receive any parameters, you just paste it and unfold a generic footer.
### searcher
The searcher is a search bar to the different pages, this is located in the navbar and in home_content.
- [Searcher video](https://www.youtube.com/watch?v=Jd7s7egjt30&list=WL&index=2&t=544s&ab_channel=ReactwithMasoud)
### to_start
to_start is a link that takes you to the top of the page this is on all pages except the index.
### redirection
Redirection takes you to the previous and top page of the current one. It receives 4 parameters **link bottom page, link top page, bottom page name, top page name**. Here's an example:
```jsx
<Redirection
        link1={"../../../pages/sql_tutorials/SqlBasics"}
        link2={"../../../pages/sql_tutorials/SqlBasicQueries02"}
        name1={"Basics"}
        name2={"Basic Queries 2"}
      />
```
### dark_mode 
dark_mode is a button that switches from light to dark mode and vice versa.
### navbar
We have a total of 5 navbars.
- [Navbar video](https://www.youtube.com/watch?v=ZWJa0K7KQ6c&list=WL&index=3&ab_channel=ReactwithMasoud)

## Pages used
- [React icons](https://react-icons.github.io/react-icons/)
- [Coolors](https://coolors.co/)
