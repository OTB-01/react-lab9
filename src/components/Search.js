import { useState } from "react";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const handleClick = () => {
    // TODO: fetch from the API
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
    </>
  );
};

export default Search;
