import React from "react";
import "./styles.css";
import useSearch from "./hooks/useSearch";
import { Dropdown, SearchInput } from "./components";

const App = ({ data }) => {
  const {
    list,
    inputWidth,
    query,
    highlightedIndex,
    inputRef,
    shouldShowDropdown,
    handleBlur,
    handleOnChange,
    handleSelect,
    handleKeyDown
  } = useSearch(data);

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <div className="App">
      <h1>Typeahead demo</h1>
      <label className="search-label">Search</label>
      <div className="input-container">
        <SearchInput
          inputRef={inputRef}
          handleOnChange={handleOnChange}
          handleBlur={handleBlur}
          handleKeyDown={handleKeyDown}
          query={query}
        />
        {shouldShowDropdown && (
          <Dropdown
            list={list}
            inputWidth={inputWidth}
            highlightedIndex={highlightedIndex}
            query={query}
            handleSelect={handleSelect}
            getHighlightedText={getHighlightedText}
          />
        )}
      </div>
    </div>
  );
};

export default App;
