import React from 'react'
import Home from '../Pages/Home/Home';
import ApplicationForm from '../Pages/ApplicationForm/ApplicationForm';
import Login from '../Pages/Login/Login';
import CreateTrip from '../Pages/CreateTrip/CreateTrip';
import ListTrips from '../Pages/ListTrips/ListTrips';
import TripDetails from '../Pages/TripDetails/TripDetails';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../../src/Pages/Header/Header';

export default function Router() {
    return (
        <div>

            <BrowserRouter>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/application-form">
                        <ApplicationForm />
                    </Route>

                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/trips/create">
                        <CreateTrip />
                    </Route>

                    <Route exact path="/trips/list">
                        <ListTrips />
                    </Route>

                    <Route exact path="/trips/details">
                        <TripDetails />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

