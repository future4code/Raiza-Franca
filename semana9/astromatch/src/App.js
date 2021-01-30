import React, { useState } from 'react';
import InitialPage from './Pages/InitialPage.js';
import MatchesPage from '../src/Pages/MatchesPage'


function App() {
  const [page, setPage] = useState(true)

 


  const onChangePage = () => {
    setPage(!page)
  };

  return (
    <div  >

      {page ? <InitialPage changePage={onChangePage}/> : <MatchesPage  changePage={onChangePage}/>}


      
      
    </div>
  );
}

export default App;
