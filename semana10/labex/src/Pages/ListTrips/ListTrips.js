import React, { useState, useEffect } from 'react';
import { ListTripContainer, Title, ButtonListTrip, NameListTrip } from '../ListTrips/styled'
import { goToCreateTrip, goToApplicationForm, goToTripDetails } from '../../routes/Coordinator';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from '../../axios/axiosConfig';


export default function ListTrips() {

  const [trips, setTrips] = useState([])

  const history = useHistory();

  const getTrips = () => {
    axios.get(baseUrl)
      .then((res) => {
        setTrips(res.data.trips)

      }).catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getTrips()

  }, [])
  

  return (
    <div>

      <Title>List Trips</Title>
      <ButtonListTrip onClick={() => goToCreateTrip(history)}>Create Trip</ButtonListTrip>

      {trips.map((trip) => {
        return (
          <ListTripContainer>
            <NameListTrip onClick={() => goToTripDetails(history)}>{trip.name}</NameListTrip>
            <p>{trip.id}</p>

            <ButtonListTrip onClick={() => goToApplicationForm(history)}>Inscreva-se</ButtonListTrip>

          </ListTripContainer>



        )

      })}


      <div>


      </div>
    </div>
  );
}
