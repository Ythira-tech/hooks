import React from "react";

const Filter = ({ setSearch, setRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="10"
        onChange={(e) => setRating(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
