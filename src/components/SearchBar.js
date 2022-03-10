import { useState } from "react"
import { Link } from "react-router-dom";

function SearchBar() {

    // state for the search bar
  const [searchQuery, setSearchQuery] = useState("");

    // state for the drop down menu
const [selectedItem, setSelectedItem] = useState('test');
const items = ['Item1', 'Item2', 'Item3', 'Item4']; 



  return (
    <div>
        {/** search bar **/}
      <input type="search" id="searchbar" onChange={(e) => setSearchQuery(e.target.value)} />
      <Link to={`/${searchQuery}`}><button>Search</button></Link>

        <br/><br/>
      {/** drop down menu div **/}
      <div>
        <select 
          defaultValue={selectedItem}

          onChange={(e) => setSelectedItem(e.target.value)}>

          {items.map((item,i) => (
            <option key={i} value={item}>{item}</option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default SearchBar;