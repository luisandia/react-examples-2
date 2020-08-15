import React from "react";
import "./search-box.styles.css";

interface Props {
  placeHolder?: string;
  handleChange: any;
}

const SearchBox: React.FC<Props> = ({
  placeHolder = "search monsters",
  handleChange,
}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
