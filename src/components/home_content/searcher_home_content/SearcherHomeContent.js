import { useState } from "react";
import "./SearcherHomeContent.css";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

var data = require("../../searcher/Searcher.json");

function Filter(value) {
  let filter_name = "";
  if (value === "prueba") {
    filter_name = "../../../pages/Prueba";
  }
  return filter_name;
}

function SearcherHomeContent() {
  const [value, setValue] = useState("Search something...");
  let docName = Filter(value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  return (
    <div className="searcher-2">
      <div className="search-container-home">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange}/>
          <Link to={docName}>
            <button onClick={() => onSearch(value)} className="searcher-btn">
              <BiSearchAlt />
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
  );
}

export default SearcherHomeContent;
