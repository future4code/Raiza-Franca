import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {goToLastPage} from '../../routes/Coordinator'
import {baseUrl} from '../../axios/axiosConfig';
import { useProtectedPage } from "../../hooks/useProtectedPage";




export default function TripDetails() {

  const history = useHistory();
  const [trip, setTrip] = useState({});

  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  

  const getTripDetail = () => {
    axios
      .get(baseUrl,
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
  return (
    <div>
      <h1>Get trip detail</h1>
     <button onClick={() => goToLastPage(history)}>Voltar</button>
    </div>
  );
}

 




