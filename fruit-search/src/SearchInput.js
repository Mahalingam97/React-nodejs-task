import React from "react";
import "./assests/SearchInput.css";

export default function SearchInput(props) {
 const handleChange = event => {
    props.textChange(event);
  };
  return (
      <div className="component-search-input">
        <div>
          <input onChange={handleChange} />
        </div>
      </div>
    );
}
