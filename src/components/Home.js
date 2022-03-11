import {useState, useEffect} from 'react'

import {  Link } from 'react-router-dom';

const Home = () => {
  const departures = ['PRG', 'LON', 'FRA', 'CDG', 'MAD']
  const [departureCity, setDepartureCity] = useState('PRG');

  const arrivals = ['VLC', 'MIL', 'STO', 'LIS', 'CGN']
  const [arrivalCity, setArrivalCity] = useState('VLC');



  // const handledepature = () => {
  //     departures.
  // }

  // const handlearrival = () => {
  //     arrivals.
  // }

    return (
    <div>
      <h1>Ilja and Adrien flights search comparator</h1>

      <h3>You'll have an amazing flying experience and luckily you should not die (...at least not today)</h3>
      <span>

        <div className='city_from'>
        <h5> Select your city of arrival</h5>
        <strong>From:</strong> {departureCity}

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
        <div className='city_to'>
        <h5> Select your city of departure</h5>
        <strong>To:</strong> {arrivalCity}

        <select 
          defaultValue={arrivalCity}

          onChange={(e) => setArrivalCity(e.target.value)}>

          {arrivals.map((iata, i) => (
            <option key={i} value={iata}>{iata}</option>
          ))}
        </select>

        </div>
        {/** THIS IS TEMPLATE FOR DROP DOWN MENU
        
        **/}
      </span>
      <br/><br/>
      <Link to={`/flights`}>Search flights</Link>
      
    </div>
  )
}

export default Home