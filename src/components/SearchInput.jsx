import React from "react";
import '../styles.css'

const SearchInput = ({ inputRef, handleOnChange, handleBlur, handleKeyDown, query }) => (
  <input
    className="search-input"
    ref={inputRef}
    onChange={handleOnChange}
    onBlur={handleBlur}
    onKeyDown={handleKeyDown}
    value={query}
  />
);

export default SearchInput;
