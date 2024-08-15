import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../Context/SearchContext";
import Card from "./Card";
import * as carsServices from "../Services/carsServices";

const Main = ({ currentPage }) => {
  const [carDetails, setCarDetails] = useState([]);

  const { searchTerm } = useContext(SearchContext);

  const getCarsDetail = (pageNumber, searchTerm) => {
    // Dummy API call
    // carsServices.getCarsDetails(pageNumber).then((response) => console.log(response));
    const data = carsServices.getCarsDetails(pageNumber, searchTerm);
    setCarDetails(data);
  };

  useEffect(() => {
    getCarsDetail(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  return (
    <div className="flex flex-col gap-10 p-10">
      {carDetails.length === 0 ? (
        <p>No cars available</p>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {carDetails.map((car, index) => (
            <Card key={index} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
