import {useEffect, useState} from 'react';
import Flight from './Flight.js'

import {  Link } from 'react-router-dom';

function Flights() {

    const [flights, setFlights] = useState([])

    const [departureCity, setDepartureCity] = useState('PRG');

  const [arrivalCity, setArrivalCity] = useState('VLC');



    const url = `https://api.skypicker.com/flights?fly_from=${departureCity}&fly_to=${arrivalCity}&partner=data4youcbp202106&limit=5`;
    const [loading, setLoading ] = useState(false);
    async function getData() {
        const resp =await fetch(url);
        const data = await resp.json();
        data && setFlights(data.data)
        setLoading(true)
    }


    useEffect(()=> {
        getData();
        }, []
    )


console.log(flights);



    return (
        <div>
    
    <Link to={`/`}>Home</Link>


    {!loading ? <div>
    <p>Loading</p><p> ローディング　しばらくお待ちください。</p></div>:
    flights.map((flight, index) => {
      return (
      <Flight key={index} flightKey={flight}/>
      )
    })
    }
        </div>
    )
}
export default Flights