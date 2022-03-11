import {useEffect, useState} from 'react';
import Flight from './Flight.js'

import {Link, useParams } from 'react-router-dom';

function Flights() {     //{departureCity, arrivalCity}

    const [flights, setFlights] = useState([])

    const { dep, arr, crit } = useParams();


    const url = `https://api.skypicker.com/flights?fly_from=${dep}&fly_to=${arr}&sort=${crit}&partner=data4youcbp202106&limit=5`;
    const [loading, setLoading ] = useState(false);

    async function getData() {
        const resp =await fetch(url);
        const result = await resp.json();
        result && setFlights(result.data)
        setLoading(true)
    }


    useEffect(()=> {
        getData();
        }, []
    )
console.log('this is flights value', flights);





    return (
        <div>
    
    <Link to={`/`}>Home</Link>
    <br/>

    {!loading ? <div>
    <p>Loading</p><p> ローディング　しばらくお待ちください。</p></div>:
    flights.map((flight, index) => {
      return (
      <Flight key={index} flightKey={flight}/>
      )
    })
    }

    {/** 
        flights.data.map( )

    */}

        </div>
    )
}
export default Flights