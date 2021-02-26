import React, { useState } from 'react'
import Router from '../src/route/Router';
import { BrowserRouter} from "react-router-dom";
import Header from '../src/components/Header/index'

function App() {
  const token = localStorage.getItem("token");
  const [changeButton, setChangeButton] = useState(token ? "Logout" : "Login")

  return (
    <div >
      <BrowserRouter>
        <Header changeButton={changeButton} setChangeButton={setChangeButton}/>
        <Router changeButton={changeButton} setChangeButton={setChangeButton}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
