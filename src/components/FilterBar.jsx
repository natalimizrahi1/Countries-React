import React from "react";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";

const FilterBar = () => {
  return (
    <section className='filters'>
      <div className='container'>
        <Search />
        <Filter />
      </div>
    </section>
  );
};

export default FilterBar;
