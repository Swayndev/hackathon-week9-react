import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import SearchBar from "./SearchBar";

function SearchResults() {
    
  const [searchResult, setSearchResult] = useState([]);

  const { searchValue } = useParams();

  useEffect(() => {
    fetchData();
  },[searchValue]);

  
  const fetchData = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;
    const resp = await fetch(url);
    const result = await resp.json();
    result && result.drinks && setSearchResult(result.drinks);
  }


  return (
    <div>
        <ul>
        {searchResult.map( (drink) => (
            <li>drink</li>
        ))
        }
        </ul>
     </div>
  )
}

export default SearchResults;