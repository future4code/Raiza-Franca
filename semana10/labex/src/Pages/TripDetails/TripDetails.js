import React, { useState, useEffect } from "react";
import axios from "axios";
import { DetailsContainer, Details, Title, TitleInfo, ButtonDetails } from './styled'
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage } from '../../routes/Coordinator'
import { baseUrl, UrlList } from '../../axios/axiosConfig';
import { useProtectedPage } from "../../hooks/useProtectedPage";




export default function TripDetails() {

  const history = useHistory();
  const params = useParams();
  const [trip, setTrip] = useState({});


  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);



  const getTripDetail = () => {
    axios
      .get(`${UrlList}/${params.id}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }

    axios.put(`${baseUrl}/${params.tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetail()
    })
  }
console.log(trip)
return (
  <DetailsContainer>
    <Title>Get trip detail</Title>
    <Details>
      <TitleInfo>Informações da viagem</TitleInfo>
      <p><b>Nome da viagem: </b>{trip.name}</p>
      <p><b>Planeta: </b>{trip.planet}</p>
      <p><b>Duração:</b> {trip.durationInDays} dias</p>
      <p><b>Data: </b>{trip.date}</p>
      <p><b>Descrição da viagem:</b> {trip.description}</p>


    </Details>
    <ButtonDetails onClick={() => goToLastPage(history)}>Voltar</ButtonDetails>
    <div>
   { /*  {trip.candidates.map((candidate) => {
        return (
          <div>
            <p>{candidate.name}</p>
            <button>yes</button>
            <button>no</button>
          </div>
        )
      })}*/}
    </div>


  </DetailsContainer>
);
}






