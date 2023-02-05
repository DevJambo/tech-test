import React, { useState } from "react";
import '../styles/search.css'

const Search = () => {
    const [value, setValue] = useState();

    return (
        <>
          <form className="search-form">
            <input 
              className="search-input" 
              type="text" 
              onChange={(event) => setValue(event.target.value)}
            />
            <button className="search-button" type="submit">
              Go!
            </button>
          </form>
        </>
    );
};

export default Search;