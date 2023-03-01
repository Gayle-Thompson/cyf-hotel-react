import React, { useState } from "react";
import SearchButton from "./SearchButton";


// const Search = () => {

  function Search() {
  const [searchInput, setSearchInput] = useState('');

  function handleSearchInput(event) {
    const value = event.target.value;
    setSearchInput(value);
     console.log(value); 
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-center">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            {/* <label htmlFor="customerName">Customer name</label> */}
            <div className="search-row">
              <input
              value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
