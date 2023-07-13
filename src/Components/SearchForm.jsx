import React from "react";
import { useGlobalcontext } from "../Hooks/context";
import { useRef } from "react";

const SearchForm = () => {
  const {setSearchValue } = useGlobalcontext();
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const inputContainer = useRef();
  const searchMeal = () => {
    setSearchValue(inputContainer.current.value);
  };
  return (
    <div className="w-lg-50 mx-auto my-2">
      <form onSubmit={handlesubmit} className="w-50 mx-auto">
        <label
          htmlFor="name"
          className="form-label text-success fw-bold fs-4 text-center w-100"
        >
          Search for your Favorite Meal
        </label>

        <input
          type="text"
          className="form-control"
          id="name"
          ref={inputContainer}
          onChange={searchMeal}
        />
      </form>
    </div>
  );
};

export default SearchForm;
