import { useState } from "react";
import "./Searcher.css";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

var data = require("./Searcher.json");

function Filter(value) {
  let filter_name = "";
  if (value === "prueba") {
    filter_name = "../../pages/Prueba";
  }
  return filter_name;
}

function Searcher() {
  const [value, setValue] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  let docName = Filter(value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="div-searcher">
      <button
        onClick={() => setShowDiv(!showDiv)}
        className="show-searcher-btn"
      >
        {showDiv ? (
          <BiSearchAlt className="show-searcher-img" />
        ) : (
          <BiSearchAlt className="show-searcher-img" />
        )}
      </button>
      {showDiv && (
        <div className="searcher">
          <div className="search-container">
            <div className="search-inner">
              <input type="text" value={value} onChange={onChange} /> 
              <Link to={docName}>
                <button onClick={() => onSearch(value)} className="searcher-btn">
                  {" "}
                  <BiSearchAlt />{" "}
                </button>
              </Link>
            </div>
            <div className="dropdown">
              {data
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
                    onClick={() => onSearch(item.document_name)}
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
