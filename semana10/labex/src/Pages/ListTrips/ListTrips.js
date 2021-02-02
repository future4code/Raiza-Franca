import React from 'react'
import {goToTripDetails} from '../../routes/Coordinator'
import { useHistory } from "react-router-dom"


export default function ListTrips() {

  const history = useHistory();

  return (
    <div>
     
     <h1>List Trips</h1>
     <button onClick={() => goToTripDetails(history)}>Details</button>
      
    </div>
  );
}
