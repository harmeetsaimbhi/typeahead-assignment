import React from "react";
import '../styles.css'

const Dropdown = ({ list, inputWidth, highlightedIndex, query, handleSelect, getHighlightedText }) => (
  <ul className="dropdown" style={{ width: inputWidth }}>
    {list.map((item, index) => (
      <li
        key={index}
        className={`dropdown-item ${highlightedIndex === index ? "highlighted" : ""}`}
        onMouseDown={() => handleSelect(item)}
      >
        {getHighlightedText(item, query)}
      </li>
    ))}
  </ul>
);

export default Dropdown;
