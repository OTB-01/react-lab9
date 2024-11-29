import { useState } from "react";
import "./Search.css";
import RecipesResults from "./RecipesResults.js";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleClick = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch` +
        `?apiKey=37b9aeac156b4c59900424d1b660109f&query=${searchQuery}`
    );
    const responseJSON = await response.json();
    setSearchResults(responseJSON.results);
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search By ingredients..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {searchResults && <RecipesResults recipes={searchResults} />}
    </>
  );
};

export default Search;
