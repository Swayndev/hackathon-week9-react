import { DateTime } from 'luxon';


function Flight ({flightKey}) {





    return (
    <div>
    
        <h2>{flightKey.cityFrom} -> {flightKey.cityTo}</h2>
        <h3>
        {DateTime.fromMillis(flightKey.dTime * 1000).toFormat('DD')} => {DateTime.fromMillis(flightKey.aTime * 1000).toFormat('DD')}
        </h3>

           <h3>
        {DateTime.fromMillis(flightKey.dTime * 1000).toFormat('T')} => {DateTime.fromMillis(flightKey.aTime * 1000).toFormat('T')}
        </h3>
        
        
        <h3>Duration: {flightKey.fly_duration} </h3>
        <h3>Price: {flightKey.price} EUR </h3>
        
        <h4>Stop overs: {flightKey.route.length -1} </h4>
        <br/>
        <div> --- </div>
        <br/>
    </div>
)
}

export default Flight