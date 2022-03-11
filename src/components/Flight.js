import { DateTime } from 'luxon';


function Flight ({flightKey}) {





    return (
    <div>
    
        <h2>{flightKey.cityFrom} -> {flightKey.cityTo}</h2>
        <br/>
        <h3>
        {DateTime.fromMillis(flightKey.dTime * 1000).toFormat('hh:mm')} -> {DateTime.fromMillis(flightKey.aTime * 1000).toFormat('hh:mm')}
        </h3>
        
        <h3>Duration: {DateTime.fromMillis(flightKey.duration.total * 1000).toFormat('hh:mm')} hr </h3>
        <h3>Price: {flightKey.price} EUR </h3>
        <br/>
    </div>
)
}

export default Flight