import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Site from './site/site.jsx';


function App() {
  return <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Site/>} />
    </Routes>
  </BrowserRouter>
}

export default App;
