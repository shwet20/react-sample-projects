import React, { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchContext";

const Header = () => {
  const [selectedSort, setSelectedSort] = useState("relevance");
  const [selectedBrand, setSelectedBrand] = useState("allbrands");

  const { setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="flex bg-[#f0f5f9] rounded-2xl shadow-sm p-5 mb-5">
      <div className="relative">
        <input
          type="text"
          className="w-52 h-10 rounded-full px-4 border border-gray-300 mr-5"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <svg
          className="absolute w-4 right-8 top-3 fill-[#737373]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <select
        className="h-10 rounded-full px-4 mr-5 text-gray-900 appearance-none pr-10"
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
      >
        <option value="relevance">Relevance</option>
        <option value="all">All</option>
      </select>
      <select
        className="h-10 rounded-full px-4 text-gray-900 appearance-none pr-10"
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="allbrands">All Brands</option>
        <option value="bmw">BMW</option>
        <option value="volksWagen">VolksWagen</option>
        <option value="cadillac">Cadillac</option>
      </select>
      <style jsx>{`
        select {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
          background-repeat: no-repeat;
          background-position: right 0.25rem center;
          background-size: 1.5em;
        }
      `}</style>
    </header>
  );
};

export default Header;
