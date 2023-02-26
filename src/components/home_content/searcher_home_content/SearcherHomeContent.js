import { useState } from "react";
import "./SearcherHomeContent.css";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

function Filter(value) {
  const data = require("../../searcher/Searcher.json");
  const filterMap = {
    home: "../../pages/Home",
    "html home": "../../pages/html_tutorials/HtmlHome",
    "html introduction": "../../pages/html_tutorials/HtmlIntroduction",
    "html basics": "../../pages/html_tutorials/HtmlBasics",
    "html text": "../../pages/html_tutorials/HtmlText",
    "html lists": "../../pages/html_tutorials/HtmlLists",
    "html images": "../../pages/html_tutorials/HtmlImages",
    "html tables": "../../pages/html_tutorials/HtmlTables",
    "html links": "../../pages/html_tutorials/HtmlLinks",
    "html forms": "../../pages/html_tutorials/HtmlForms",
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

function SearcherHomeContent() {
  const [value, setValue] = useState("Search something...");
  const [showDiv, setShowDiv] = useState(false);
  const docName = Filter(value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = () => {
    console.log("search ", value);
  };

  return (
    <div className="searcher-2">
          <div className="search-container-home">
            <div className="search-inner">
              <SearchTerm value={value} onChange={onChange} />
              <Link to={docName}>
                <SearchButton onSearch={onSearch} />
              </Link>
            </div>
            <div className="dropdown">
              {require("../../searcher/Searcher.json")
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
  );
}

export default SearcherHomeContent;
