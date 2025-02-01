import React, { useState } from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({search,onSearchChange}) {
  
  return (
    <div className="search-flex">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search by Coin Name or Symbol..."
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}

export default Search;
