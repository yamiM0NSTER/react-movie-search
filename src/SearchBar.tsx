import React, { useState } from "react";
import SearchIcon from "./search.svg";

interface ISearchBarProps {
  placeholder?: string;
  onChange?: Function;
  onIconClick?: (searchTerm: string) => void;
}

const SearchBar = ({
  placeholder = "",
  onIconClick = (searchTerm: string) => {},
}: ISearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">
      <input
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => onIconClick(searchTerm)}
      />
    </div>
  );
};

export default SearchBar;
