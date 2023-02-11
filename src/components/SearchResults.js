import React from "react";
import "../styles/SearchResults.css"
import PropTypes from "prop-types"

const SearchResults = ({ results }) => {
  console.log(results)
if (!results.length) {
  return <p className="no-results">No results</p>;
} else {
return (
        <div className="image-box">
          {results.map((image) => (
            <img className="card-image" src={image} alt="spaceImage" />
          ))}
        </div>
    );
  };
};
export default SearchResults;

SearchResults.propTypes = {
results: PropTypes.arrayOf(
  PropTypes.string,
).isRequired,

}