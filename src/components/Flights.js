import {useEffect, useState} from 'react';
import Flight from './Flight.js'

import {Link, useParams } from 'react-router-dom';

function Flights() {     //{departureCity, arrivalCity}

    // STATES AND PARAMS
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(5)
    

    const { dep, arr, crit } = useParams();
    
    
    const [flights, setFlights] = useState([])
    const [loading, setLoading ] = useState(false);
    
    const url = `https://api.skypicker.com/flights?fly_from=${dep}&fly_to=${arr}&sort=${crit}&partner=data4youcbp202106&offset=${offset}&limit=${limit}`;  // &offset=10
    
    async function getData() {
        const resp =await fetch(url);
        const result = await resp.json();
        result && result.data && setFlights(result.data)
        setLoading(true)
    }
    
    console.log('this is API results value', flights);
    
    useEffect(()=> {
        getData();
        }, []
    )


// FUNCTIONS AND LOGIC
const displayNext = () => {
    
    setOffset(offset + 5);
    setLimit(offset + 5);

    
}

const displayPrevious = () => {
    const n = -5;
    setOffset(offset + n) && setLimit(offset + n);
}


    return (
        <div>
    
    <Link to={`/`}>Home</Link>
    <br/>

    {!loading ? <div>
    <p><strong>Loading</strong></p>
    <p> ローディング　しばらくお待ちください。</p></div>:
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