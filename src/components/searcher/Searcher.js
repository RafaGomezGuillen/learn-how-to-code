import { useState } from "react";
import "./Searcher.css";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

function Filter(value) {
  const data = require("./Searcher.json");
  const filterMap = {
    home: "../../pages/Home",
    "home-html": "../../pages/html_tutorials/HtmlHome",
    "introduction-html": "../../pages/html_tutorials/HtmlIntroduction",
    "basics-html": "../../pages/html_tutorials/HtmlBasics",
    "text-html": "../../pages/html_tutorials/HtmlText",
    "lists-html": "../../pages/html_tutorials/HtmlLists",
    "images-html": "../../pages/html_tutorials/HtmlImages",
    "tables-html": "../../pages/html_tutorials/HtmlTables",
    "links-html": "../../pages/html_tutorials/HtmlLinks",
    "forms-html": "../../pages/html_tutorials/HtmlForms",
    "exercises-html": "../../pages/html_exercises/HtmlExercises",
    "introduction-css": "../../pages/css_tutorials/quarter_01/CssIntroduction",
    "basics-css": "../../pages/css_tutorials/quarter_01/CssBasics",
    "box model-css": "../../pages/css_tutorials/quarter_01/CssBoxModel",
    "links-css": "../../pages/css_tutorials/quarter_01/CssLinks",
    "lists-css": "../../pages/css_tutorials/quarter_01/CssLists",
    "measure & colors-css": "../../pages/css_tutorials/quarter_01/CssMeasureColors",
    "positioning-css": "../../pages/css_tutorials/quarter_01/CssPositioningVisual",
    "selectors-css": "../../pages/css_tutorials/quarter_01/CssSelectors",
    "tables-css": "../../pages/css_tutorials/quarter_01/CssTables",
    "text-css": "../../pages/css_tutorials/quarter_01/CssText",
    "introduction-sql": "../../pages/sql_tutorials/SqlIntroduction",
    "basics-sql": "../../pages/sql_tutorials/SqlBasics",
    "fundamental-queries-01-sql": "../../pages/sql_tutorials/SqlFundamentalQueries01",
    "fundamental-queries-03-sql": "../../pages/sql_tutorials/SqlFundamentalQueries03",
    "fundamental-queries-02-sql": "../../pages/sql_tutorials/SqlFundamentalQueries02",
    "basic-queries-02-sql": "../../pages/sql_tutorials/SqlBasicQueries02",
    "basic-queries-01-sql": "../../pages/sql_tutorials/SqlBasicQueries01",
  };
  return filterMap[value] || "";
}

function SearchTerm({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />;
}

function SearchButton({ onSearch }) {
  return (
    <button onClick={onSearch} className="searcher-btn">
      <BiSearchAlt />
    </button>
  );
}

function Searcher() {
  const [value, setValue] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const docName = Filter(value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = () => {
    console.log("search ", value);
  };

  return (
    <div className="div-searcher">
      <button
        onClick={() => setShowDiv(!showDiv)}
        className="show-searcher-btn"
      >
        <BiSearchAlt className="show-searcher-img" />
      </button>
      {showDiv && (
        <div className="searcher">
          <div className="search-container">
            <div className="search-inner">
              <SearchTerm value={value} onChange={onChange} />
              <Link to={docName}>
                <SearchButton onSearch={onSearch} />
              </Link>
            </div>
            <div className="dropdown">
              {require("./Searcher.json")
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.document_name.toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => setValue(item.document_name)}
                    className="dropdown-row"
                    key={item.document_name}
                  >
                    {item.document_name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Searcher;
