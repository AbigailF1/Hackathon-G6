import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
import  axios  from "axios";
import { useEffect, useState } from "react";

export const SearchResultsList = () => {

  const[searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          "http://127.0.0.1:8000/api/feeds/search/user/%3Cstr:username%3E/",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;

        // Set the fetched data to the state
        setSearchResults(data);
        // Log the data to the console
        console.log(data);
      } catch (error) {
        console.log(error);
        // Log any errors to the console
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchData();
  }, []); // E
  console.log(searchResults);
  return (
    <div className="results-list">
      {searchResults.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};