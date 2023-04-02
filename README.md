# Learn how to code. React proyect
Este es mi primer proyecto de react basado en [W3Schools](https://www.w3schools.com/default.asp).

Estaba pensado en ser el **W3Schools** de todo el contenido que se enseña en materia de programación del primer año del *Ciclo de FP Desarrollo de Aplicaciones Web*, sin embargo, resultó solo ser contenido de **HTML, CSS y SQL** del primer trimestre.

## ¿Por qué está incompleto?
Pensaba que me llevaría menos tiempo hacer las diferentes páginas de cada lenguaje de programación, llegó a un punto en el que era monótono y quería un cambio de proyecto y sentarme más en C#.

Mi primer commit fue el **25 de enero del 2023**, hoy estoy escribiendo esto habiendo "terminado" este proyecto el **2 de abril de 2023**, osea, un total de 69 días. Obviamente no trabajé un total de 69 días, pero cada seción de trabajo era entre 2 hasta 6 horas seguidas de código...

Lo que más me tomaba tiempo era el code_container, pasar miles de líneas de código a un string pasado por parámetro es un trabajo laborioso solo para una sola persona.

Pero bueno, había llegado a un punto en el que todo era mecánico, si hubiese seguido mi proceso de aprendizaje de react no habría incrementado, esa es la principal razón. Ya había aprendido todo lo que quería aprender.

## React y los componentes
Estructurar un página en componentes es lo más útil que he dado por mi propia cuenta, si huebiese hecho este proyecto como el anterior ([Smooth Match 3](https://github.com/RafaGomezGuillen/match_3)) simplemente con HTML, CSS y Vanilla JavaScript habría tardado mucho más, y las estructuras de las diferentes páginas tendría un x40 de código.

Aprendí todos los conceptos gracias a este [video](https://www.youtube.com/watch?v=rLoWMU4L_qE&list=WL&index=1&ab_channel=Fazt). Simplemente brutal la calidad de Fazt a la hpra de explicar.

## Componentes creados
### code_container
Code container es donde aparace el raw del código HTML, CSS y SQL. Este tiene 4 parámetros el **Título, el código, la altura del contendor, y la altura del contedor del código**. Un ejemplo sería:
```
<CodeContainer
            title={"HTML Example"}
            code={
              "<!DOCTYPE html>\n<html>\n<title>HTML Tutorial</title>\n<body>\n\n<h1>Hello world!</h1>\n\n</body>\n</html>"
            }
            containerHeight={"335px"}
            insideHeight={"65%"}
          />
```
El problema es que tienes que adaptar el código a una sola línea, además de poner en el string sus tabulaciones y los saltos de línea, vamos que no es solo copiar y pegar el código. Este trabajo fue más fácil gracias a estas páginas que pasan código a una línea:
- [HTML minifer](https://codebeautify.org/html-formatter-beautifier)
- [CSS minifer](https://codebeautify.org/css-beautify-minify)
- [SQL minifer](https://codebeautify.org/sql-minifier)
### footer
El footer no recibe ningún parámetro, solo lo pegas y despliega un footer génerico.
### searcher
El searcher es una barra de busqueda a las diferentes páginas, este está ubicado en los navbar y en home_content. 
- [Searcher video](https://www.youtube.com/watch?v=Jd7s7egjt30&list=WL&index=2&t=544s&ab_channel=ReactwithMasoud)
### to_start
to_start es un enlace que te lleva al principio de la página este está en todas la páginas excepto el index.
### redirection
redirection te lleva a la página anterior y superior de la actual. Recibe 4 parámetros **link página inferior, link página superior, nombre página inferior, nombre página superior**. Aquí un ejemplo:
```
<Redirection
        link1={"../../../pages/sql_tutorials/SqlBasics"}
        link2={"../../../pages/sql_tutorials/SqlBasicQueries02"}
        name1={"Basics"}
        name2={"Basic Queries 2"}
      />
```
### dark_mode 
dark_mode es un botón que cambia de modo claro a oscuro y viceversa.
### navbar
Tenemos un total de 5 navbars.
- [Navbar video](https://www.youtube.com/watch?v=ZWJa0K7KQ6c&list=WL&index=3&ab_channel=ReactwithMasoud)

## Páginas utilizadas
- [React icons](https://react-icons.github.io/react-icons/).
- [Coolors](https://coolors.co/).