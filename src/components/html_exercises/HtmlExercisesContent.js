import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";
import MapZone from "./images/MapZone.png";
import Mobile from "./images/movil.png";
import Laptop from "./images/portatil.png";
import Tv from "./images/tv.png";
import Cam from "./images/videocamara.png";
import Blue from "./images/color_azul.png";
import White from "./images/color_blanco.png";
import Black from "./images/color_negro.png";
import Green from "./images/color_verde.png";
import Rose from "./images/color_rosa.png";
import Mp3TinyBlack from "./images/mp3_pequeno_negro.png";

function HtmlExercisesContent() {
  return (
    <div className="main">
      <h1>HTML EXERCISES</h1>
      <div className="introduction">
        <p>
          In this page we are going to see all 8 HTML documents of the fist
          quarter.
        </p>
        <p>
          All of the are made by me when I was starting to learn HTML so it
          could be optimized or better.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <table>
          <tr>
            <th>Exercises</th>
          </tr>
          <tr>
            <td>
              <a href="#exercise-1" className="links">
                Exercise 1
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#exercise-2" className="links">
                Exercise 2
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#exercise-3" className="links">
                Exercise 3
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#exercise-4" className="links">
                Exercise 4
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#exercise-5" className="links">
                Exercise 5
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#exercise-6" className="links">
                Exercise 6
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#exercise-7" className="links">
                Exercise 7
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#exercise-8" className="links">
                Exercise 8
              </a>
            </td>
          </tr>
        </table>
        <hr></hr>
        <h2 id="exercise-1">Exercise 1</h2>
        <p>
          In this exercise we practiced arbitrary blanks with the &lt;pre&gt;
          tag.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n <title>Arbitrary blanks</title>\n</head>\n<body>\n\n  <h1><strong>Characteristics of the planets</strong></h1>\n  <pre>\n   Name           Relative diameter            Orbital period          Number of moons\n   ---------------------------------------------------------------------------------------\n   Mercury                0,382                       0,24   years                  0\n   Venus                  0,949                       0,62   years                  0\n   Earth                  1                           1      years                  1\n   Mars                   0,532                       1,88   years                  2\n   Jupiter                11,209                     11,86   years                 49\n   Saturn                 9,449                      29,46   years                 52\n   Uranos                 4,007                      84,01   years                 27\n   Neptun                 3,883                     164,80   years                 13\n </pre>\n\n</body>\n</html>"
          }
          containerHeight={"610px"}
          insideHeight={"80%"}
        />
        <div className="examples">
          <h1>
            <strong>Characteristics of the planets</strong>
          </h1>
          <pre>
            Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Relative
            diameter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orbital
            period&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp; Number of moons <br></br>
            ---------------------------------------------------------------------------------------
            <br></br>
            Mercury&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            0,382&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            0,24
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            0<br></br>
            Venus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            0,949&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            0,62
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            0 <br></br>
            Earth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            1
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            1<br></br>
            Mars&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            0,532&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            1,88
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2<br></br>
            Jupiter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            11,209&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            11,86
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            49
            <br></br>
            Saturn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            9,449&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            29,46
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            52 <br></br>
            Uranos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            4,007&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            84,01
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            27
            <br></br>
            Neptun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            3,883&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            164,80
            years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            13
            <br></br>
          </pre>
        </div>
        <hr></hr>
        <h2 id="exercise-2">Exercise 2</h2>
        <p>
          In this exercise we practiced charecter encoding and the
          &lt;blockquote&gt;, &lt;em&gt; tag.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n  <title>The blockquote tag</title>\n</head>\n\n<body>\n  <h1>\n    <strong>&lt;blockquote&gt; tag syntax</strong>\n  </h1>\n\n  <p>The syntax of the &lt;blockquote&gt; tag is shown below:</p>\n\n  <p>\n    &lt;blockquote cite="<em>quoted original direction...</em>"&gt; quoted text &lt;/blockquote&gt;\n  </p>\n\n</body>\n\n</html>'
          }
          containerHeight={"540px"}
          insideHeight={"78%"}
        />
        <div className="examples">
          <h1>
            <strong>&lt;blockquote&gt; tag syntax</strong>
          </h1>

          <p>The syntax of the &lt;blockquote&gt; tag is shown below:</p>

          <p>
            &lt;blockquote cite="<em>quoted original direction...</em>"&gt;
            quoted text &lt;/blockquote&gt;
          </p>
        </div>
        <hr></hr>
        <h2 id="exercise-3">Exercise 3</h2>
        <p>
          In this exercise we practiced with unordered, ordered and definition
          lists.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n\n<head>\n  <title>complex formatted list</title>\n  </head>\n<body>\n  <h1>\n    <strong>Menu</strong>\n  </h1>\n  <ul>\n    <li>Start</li>\n    <li>News</li>\n    <ul>\n      <li>Recents</li>\n      <li>Most readed</li>\n      <li>Most valued</li>\n    </ul>\n    <li>Articles</li>\n    <ol>\n      <li>XHTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n      <li>Other</li>\n    </ol>\n    <li>Contact</li>\n    <dl>\n      <dt>Email</dt>\n      <dd>name@direction.com</dd>\n      <dt>Phone</dt>\n      <dd>900 900 900</dd>\n      <dt>Fax</dt>\n      <dd>900 900 900</dd>\n    </dl>\n  </ul>\n\n</body>\n\n</html>"
          }
          containerHeight={"940px"}
          insideHeight={"88%"}
        />
        <div className="examples">
          <h1>
            <strong>Menu</strong>
          </h1>
          <ul>
            <li>Start</li>
            <li>News</li>
            <ul>
              <li>Recents</li>
              <li>Most readed</li>
              <li>Most valued</li>
            </ul>
            <li>Articles</li>
            <ol>
              <li>XHTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Other</li>
            </ol>
            <li>Contact</li>
            <dl>
              <dt>Email</dt>
              <dd>name@direction.com</dd>
              <dt>Phone</dt>
              <dd>900 900 900</dd>
              <dt>Fax</dt>
              <dd>900 900 900</dd>
            </dl>
          </ul>
        </div>
        <hr></hr>
        <h2 id="exercise-4">Exercise 4</h2>
        <p>In this exercise we practiced with images and map zone.</p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>Map zone</title>\n</head>\n\n<body>\n\n  <img src="image exercise 10.png" usemap="#map_zone">\n  <map name="map_zone">\n    <area shape="rect" coords="18,22,100,136" href="https://es.wikipedia.org/wiki/Rect%C3%A1ngulo">\n    <area shape="polygon" coords="118,40,118,23,210,23,211,102,207,117" href="https://es.wikipedia.org/wiki/Tri%C3%A1ngulo">\n    <area shape="circle" coords="166,139,37" href="https://es.wikipedia.org/wiki/C%C3%ADrculo">\n    <area shape="rect" coords="13,197,225,268" href="https://es.wikipedia.org/wiki/Rect%C3%A1ngulo">\n  </map>\n\n</body>\n\n</html>'
          }
          containerHeight={"540px"}
          insideHeight={"80%"}
        />
        <div className="examples">
          <br></br>
          <img src={MapZone} usemap="#map_zone" />
          <map name="map_zone">
            <area
              shape="rect"
              coords="18,22,100,136"
              href="https://es.wikipedia.org/wiki/Rect%C3%A1ngulo"
            />
            <area
              shape="polygon"
              coords="118,40,118,23,210,23,211,102,207,117"
              href="https://es.wikipedia.org/wiki/Tri%C3%A1ngulo"
            />
            <area
              shape="circle"
              coords="166,139,37"
              href="https://es.wikipedia.org/wiki/C%C3%ADrculo"
            />
            <area
              shape="rect"
              coords="13,197,225,268"
              href="https://es.wikipedia.org/wiki/Rect%C3%A1ngulo"
            />
          </map>
          <br></br>
          <br></br>
        </div>
        <hr></hr>
        <h2 id="exercise-5">Exercise 5</h2>
        <p>In this exercise we practiced with a basic table.</p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>Basic table example</title>\n\n</head>\n<body>\n  <h1>Your order</h1>\n  <table border="1">\n    <tr>\n      <th>Product name</th>\n      <th>Precio unitario</th>\n      <th>Units</th>\n      <th>Subtotal</th>\n    </tr>\n    <tr>\n      <td>MP3 Player (80 GB)</td>\n      <td>192.02</td>\n      <td>1</td>\n      <td>192.02</td>\n    </tr>\n    <tr>\n      <td>Colored covers</td>\n      <td>2.50</td>\n      <td>5</td>\n      <td>12.50</td>\n    </tr>\n    <tr>\n      <td>Radio player & remote control</td>\n      <td>12.99</td>\n      <td>1</td>\n      <td>12.99</td>\n    </tr>\n    <tr>\n      <th>TOTAL</th>\n      <td>-</td>\n      <td>7</td>\n      <td><strong>207.51</strong></td>\n    </tr>\n  </table>\n\n</body>\n\n</html>'
          }
          containerHeight={"1080px"}
          insideHeight={"89%"}
        />
        <div className="examples">
          <br></br>
          <table border="1">
            <tr>
              <th>Product name</th>
              <th>Precio unitario</th>
              <th>Units</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td>MP3 Player (80 GB)</td>
              <td>192.02</td>
              <td>1</td>
              <td>192.02</td>
            </tr>
            <tr>
              <td>Colored covers</td>
              <td>2.50</td>
              <td>5</td>
              <td>12.50</td>
            </tr>
            <tr>
              <td>Radio player & remote control</td>
              <td>12.99</td>
              <td>1</td>
              <td>12.99</td>
            </tr>
            <tr>
              <th>TOTAL</th>
              <td>-</td>
              <td>7</td>
              <td>
                <strong>207.51</strong>
              </td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2 id="exercise-6">Exercise 6</h2>
        <p>
          In this exercise we practiced with the &lt;table&gt;, &lt;caption&gt;,
          &lt;strong&gt; and &lt;img&gt; tag.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n  <head>\n    <title>Avanced table example</title>\n  </head>\n  <body>\n    <h1>Search results</h1>\n    <table border="1">\n      <caption>Search results</caption>\n      <tr>\n        <th>Image</th>\n        <th>Data</th>\n      </tr>\n      <tr>\n        <td><img src="laptop.png"></td>\n        <td>Laptop - 3 GHz - 4 GB RAM<br>Price:<del>2.990 €</del><strong>&nbsp; 2.599 €</strong></td>\n      </tr>\n      <tr>\n        <td><img src="camrecorder.png"></td>\n        <td>Camrecorder - High Definition 1080p - 60 GB<br>Price:<del>1.099 €</del><strong>&nbsp; 999 €</strong></td>\n      </tr>\n      <tr>\n        <td><img src="tv.png"></td>\n        <td>Television - 46" - Full HD<br>Price:<del>1999 €</del><strong>&nbsp; 1.799 €</strong></td>\n      </tr>\n      <tr>\n        <td><img src="mpbile.png"></td>\n        <td>Mobile phone - 3G - Wi-Fi - 8 GB<br>Price:<del>399 €</del><strong>&nbsp; 349 €</strong></td>\n      </tr>\n    </table>\n  </body>\n</html>'
          }
          containerHeight={"800px"}
          insideHeight={"85%"}
        />
        <div className="examples">
          <h1>Search results</h1>
          <table border="1">
            <caption>Search results</caption>
            <tr>
              <th>Image</th>
              <th>Data</th>
            </tr>
            <tr>
              <td>
                <img src={Laptop} />
              </td>
              <td>
                Laptop - 3 GHz - 4 GB RAM
                <br />
                Price:<del>2.990 €</del>
                <strong>&nbsp; 2.599 €</strong>
              </td>
            </tr>
            <tr>
              <td>
                <img src={Cam} />
              </td>
              <td>
                Camrecorder - High Definition 1080p - 60 GB
                <br />
                Price:<del>1.099 €</del>
                <strong>&nbsp; 999 €</strong>
              </td>
            </tr>
            <tr>
              <td>
                <img src={Tv} />
              </td>
              <td>
                Television - 46" - Full HD
                <br />
                Price:<del>1999 €</del>
                <strong>&nbsp; 1.799 €</strong>
              </td>
            </tr>
            <tr>
              <td>
                <img src={Mobile} />
              </td>
              <td>
                Mobile phone - 3G - Wi-Fi - 8 GB
                <br />
                Price:<del>399 €</del>
                <strong>&nbsp; 349 €</strong>
              </td>
            </tr>
          </table>
        </div>
        <hr></hr>
        <h2 id="exercise-7">Exercise 7</h2>
        <p>
          In this exercise we practiced with the &lt;table&gt;, &lt;caption&gt;,
          &lt;strong&gt; and &lt;img&gt; tag; and, the colspan and rowspan
          attribute.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>Complex Table Example</title>\n</head>\n\n<body>\n  <h1>Comparison of MP3 Players</h1>\n  <table border="1">\n    <caption>Comparative Table of the technical characteristics of MP3 Players</caption>\n    <tr>\n      <th></th>\n      <th colspan="3"><img src="mp3_tiny_black.png"><br>MP3 mini</th>\n      <th colspan="2"><img src="mp3_big_white.png"> <img src="mp3_big_black.png"><br>Big MP3</th>\n    </tr>\n    <tr>\n      <th>Storage capacity</th>\n      <td>4 GB (1.000 songs)</td>\n      <td>8 GB (2.000 songs)</td>\n      <td>16 GB (4.000 songs)</td>\n      <td>30 GB (7.500 songs)</td>\n      <td>80 GB (20.000 songs)</td>\n    </tr>\n    <tr>\n      <th>Colors</th>\n      <th><img src="color_white.png"></th>\n      <th><img src="color_black.png"> <img src="color_green.png"> <img src="color_blue.png"> <img src="color_rose.png"></th>\n      <th><img src="color_black.png"></th>\n      <th colspan="2"><img src="color_white.png"> <img src="color_black.png"></th>\n    </tr>\n    <tr>\n      <th>Screen</th>\n      <td colspan="3">3 cm (diagonal) LCD with backlight</td>\n      <td colspan="2">6 cm (diagonal) LCD with backlight</td>\n    </tr>\n    <tr>\n      <th rowspan="2">Charging time</th>\n      <td colspan="3" rowspan="2">About 3 hours</td>\n      <td colspan="2">About 4 hours</td>\n    </tr>\n    <tr>\n      <td colspan="2">About 2 hours to reach 80% capacity</td>\n    </tr>\n  </table>\n</body>\n\n</html>'
          }
          containerHeight={"1120px"}
          insideHeight={"90%"}
        />
        <div className="examples">
          <h1>Comparison of MP3 Players</h1>
          <table border="1">
            <caption style={{ fontSize: "14px" }}>
              Comparative Table of the technical characteristics of MP3 Players
            </caption>
            <tr>
              <th></th>
              <th colspan="2">
                <img src={Mp3TinyBlack} />
                <br />
                MP3 mini
              </th>
            </tr>
            <tr>
              <th style={{ fontSize: "14px" }}>Storage capacity</th>
              <td style={{ fontSize: "14px" }}>4 GB (1.000 songs)</td>
              <td style={{ fontSize: "14px" }}>8 GB (2.000 songs)</td>
              <td style={{ fontSize: "14px" }}>16 GB (4.000 songs)</td>
            </tr>
            <tr>
              <th style={{ fontSize: "14px" }}>Colors</th>
              <th>
                <img src={White} />
              </th>
              <th>
                <img src={Black} /> <img src={Green} /> <img src={Blue} />{" "}
                <img src={Rose} />
              </th>
              <th>
                <img src={White} />
              </th>
            </tr>
            <tr>
              <th style={{ fontSize: "14px" }}>Screen</th>
              <td colspan="3" style={{ fontSize: "14px" }}>
                3 cm (diagonal) LCD with backlight
              </td>
            </tr>
            <tr>
              <th rowspan="2" style={{ fontSize: "14px" }}>
                Charging time
              </th>
              <td colspan="3" rowspan="2" style={{ fontSize: "14px" }}>
                About 3 hours
              </td>
            </tr>
          </table>
        </div>
        <hr></hr>
        <h2 id="exercise-8">Exercise 8</h2>
        <p>In this exercise we practiced forms and their tags.</p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>Forms</title>\n\n</head>\n\n<body>\n  <form>\n    Name: <input type="text" name="Name" value=""><br><br>\n    Surname: <input type="text" name="Surname" value="" size="30"><br><br>\n    Email: <input type="text" name="email" value="" size="45"><br><br>\n    Population: <input type="text" name="Population" value=""><br><br>\n    Province: <input type="text" name="Province" value=""><br><br>\n    <table style="width:50%">\n      <tr>\n        <td>Age:</td>\n        <td>How did you meet us?</td>\n      </tr>\n      <tr>\n        <td><input type="radio" name="age" value="0-20"> 0-20</td>\n        <td><input name="friend" type="checkbox" value="friend"> Through a friend.</td>\n      </tr>\n      <tr>\n        <td><input type="radio" name="age" value="20-40" checked="checked"> 20-40</td>\n        <td><input name="search" type="checkbox" value="search"> Through a search engine.</td>\n      </tr>\n      <tr>\n        <td><input type="radio" name="age" value="40-60"> 40-60</td>\n        <td><input name="red" type="checkbox" value="red"> Surfing the internet.</td>\n      </tr>\n      <tr>\n        <td><input type="radio" name="age" value="60-100"> 60-100</td>\n        <td><input name="other" type="checkbox" value="other"> Other.</td>\n      </tr>\n      <tr>\n        <td><input type="submit" name="Subimt" value="Subimt form"></td>\n        <td><input type="reset" name="Clean" value="Clean form"></td>\n      </tr>\n    </table>\n  </form>\n</body>\n\n</html>'
          }
          containerHeight={"1080px"}
          insideHeight={"88%"}
        />
        <div className="examples">
          <br></br>
          <form>
            Name: <input type="text" name="Name" value="" />
            <br />
            <br />
            Surname: <input type="text" name="Surname" value="" size="30" />
            <br />
            <br />
            Email: <input type="text" name="email" value="" size="45" />
            <br />
            <br />
            Population: <input type="text" name="Population" value="" />
            <br />
            <br />
            Province: <input type="text" name="Province" value="" />
            <br />
            <br />
            <table>
              <tr>
                <td>Age:</td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="age" value="0-20" /> 0-20
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="age"
                    value="20-40"
                    checked="checked"
                  />{" "}
                  20-40
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="age" value="40-60" /> 40-60
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="age" value="60-100" /> 60-100
                </td>
              </tr>

              <tr>
                <td>How did you meet us?</td>
              </tr>
              <tr>
                <td>
                  <input name="friend" type="checkbox" value="friend" /> Through
                  a friend.
                </td>
              </tr>
              <tr>
                <td>
                  <input name="search" type="checkbox" value="search" /> Through
                  a search engine.
                </td>
              </tr>
              <tr>
                <td>
                  <input name="red" type="checkbox" value="red" /> Surfing the
                  internet.
                </td>
              </tr>
              <tr>
                <td>
                  <input name="other" type="checkbox" value="other" /> Other.
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" name="Subimt" value="Subimt form" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="reset" name="Clean" value="Clean form" />
                </td>
              </tr>
            </table>
          </form>
          <br></br>
        </div>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/Home"}
        link2={"../../../pages/html_tutorials/HtmlHome"}
        name1={"Home"}
        name2={"HTML Home"}
      />
    </div>
  );
}

export default HtmlExercisesContent;
