import {useState, useEffect} from 'react'

import { Link, useParams } from 'react-router-dom';

const Home = () => {
  const departures = ['PRG', 'LON', 'FRA', 'CDG', 'MAD']
  const [departureCity, setDepartureCity] = useState('PRG');

  const arrivals = ['VLC', 'MIL', 'STO', 'LIS', 'CGN']
  const [arrivalCity, setArrivalCity] = useState('VLC');

  
  const criterion = ['quality', 'price', 'duration', 'date']
  const [sortCriteria, setSortCriteria] = useState('price');
  

    return (
    <div>
      <h1>Ilja and Adrien flights search comparator</h1>

      <h3>You'll have an amazing flying experience and luckily you should not die (...at least not today)</h3>
      <span>

      {/** city of departure**/}
        <div className='city_from'>
          <h5> Select your city of departure</h5>
          <strong>From:  </strong>
          <select 
            defaultValue={departureCity}

            onChange={(e) => setDepartureCity(e.target.value)}>

            {departures.map((iata, i) => (
              <option key={i} value={iata}>{iata}</option>
            ))}
          </select>
        </div>
        <br/>
        <br/>

        {/** city of arrival**/}
        <div className='city_to'>
          <h5> Select your city of arrival</h5>
          <strong>To: </strong> 

          <select 
            defaultValue={arrivalCity}

            onChange={(e) => setArrivalCity(e.target.value)}>

            {arrivals.map((iata, i) => (
              <option key={i} value={iata}>{iata}</option>
            ))}
          </select>
        </div>
        
        <br/><br/>
        {/** sort by criteria **/}
        <div className='sort'>
          <h5> Filter the results by</h5>
          <strong>Criteria: </strong> 

          <select 
            defaultValue={sortCriteria}

            onChange={(e) => setSortCriteria(e.target.value)}>

            {/** filter by criteria provided by the API documentation **/}
            {criterion.map((criteria, i) => (
              <option key={i} value={criteria}>{criteria}</option>
            ))}
          </select>
        </div>
        {/** 
        
        **/}
      </span>
      <br/><br/>
      <Link to={`/flights/${departureCity}/${arrivalCity}/${sortCriteria}`}>Search flights</Link>
      
    </div>
  )
}

export default Home