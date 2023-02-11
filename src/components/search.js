import React, { useState } from "react";
import '../styles/search.css'
import getImages from "../requests/getImages";
import PropTypes from "prop-types"

const Search = ({ setSearchResults }) => {
  console.log(setSearchResults)
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
      event.preventDefault();
      setSearchResults(await getImages(value));
    };

    return (
        <div className="search">
          <form className="search-form" onSubmit={handleSubmit}>
            <input 
              className="search-input" 
              type="text" 
              onChange={(event) => setValue(event.target.value)}
            />
            <button className="search-button" type="submit">
              Go!
            </button>
          </form>
        </div>
    );
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};