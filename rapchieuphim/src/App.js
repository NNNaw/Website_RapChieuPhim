import React, { Fragment } from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import { Home } from './Templates/HomeTemplate/HomeTemplate';
import { Admin } from './Templates/AdminTemplate/Admintemplate';
import  HomePage  from './Pages/HomePage/HomePage'
import  AdminPage  from './Pages/AdminPage/AdminPage'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          {/* Home */}
        <Home exact path='/' Component={HomePage} />

        {/* Admin */}
        <Admin exact path='/admin' Component={AdminPage}/>
        </Switch>
      </BrowserRouter>


    </Fragment>
  );
}

export default App;
