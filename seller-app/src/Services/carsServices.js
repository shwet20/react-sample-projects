// import client from "./axiosConfig";
import { mockData } from "./mockData";

export const getCarsDetails = (pageNumber, searchTerm = "") => {
  //  Dummy API Binding
  //   const config = {
  //     url: `/cars/?page=${pageNumber},?search=${searchTerm}`,
  //     method: "GET",
  //   };
  //   const response = client(config);
  //   return response;

  const itemsPerPage = 6; // Number of items per page

  // Filter the data based on the search term
  const filteredData = mockData.filter((car) =>
    car.car_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Determine the start and end indices for pagination
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the filtered data for pagination
  if (startIndex >= 0 && startIndex < filteredData.length) {
    return filteredData.slice(startIndex, endIndex);
  } else {
    // Handle cases where the page number is out of range
    return [];
  }
};
