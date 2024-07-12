import { useState, useEffect, useRef } from "react";

const useTypeahead = (data) => {
  const [list, setList] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputWidth, setInputWidth] = useState(0);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);

  const shouldShowDropdown = query.trim().length > 0 && showDropdown;

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const updatedList = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setList(updatedList);
    setHighlightedIndex(-1);
  }, [query, data]);

  const handleBlur = () => setShowDropdown(false);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setShowDropdown(value.trim().length > 0);
  };

  const handleSelect = (item) => {
    setQuery(item);
    setShowDropdown(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setShowDropdown(true);
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % list.length);
    } else if (event.key === "ArrowUp") {
      setShowDropdown(true);
      setHighlightedIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
    } else if (event.key === "Enter" || event.key === " ") {
      if (highlightedIndex >= 0) {
        handleSelect(list[highlightedIndex]);
      }
    } else if (event.key === "Escape") {
      setQuery("");
      setShowDropdown(false);
    } else if (event.key === "Tab") {
      if (highlightedIndex >= 0) {
        handleSelect(list[highlightedIndex]);
      }
    }
  };

  return {
    list,
    showDropdown,
    inputWidth,
    query,
    highlightedIndex,
    inputRef,
    shouldShowDropdown,
    handleBlur,
    handleOnChange,
    handleSelect,
    handleKeyDown
  };
};

export default useTypeahead;
