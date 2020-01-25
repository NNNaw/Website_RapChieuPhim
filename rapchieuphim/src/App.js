import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Templates/HomeTemplate/HomeTemplate';
import { Admin } from './Templates/AdminTemplate/Admintemplate';
import HomePage from './Pages/HomePage/HomePage'
import AdminPage from './Pages/AdminPage/AdminPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          {/* Home */}
          <Home exact path='/' Component={HomePage} />

          {/* Admin */}
          <Admin exact path='/admin' Component={AdminPage} />


          {/* Sign Up */}
          <Admin exact path='/dangky' Component={SignUpPage} />


          {/* Sign In */}
          <Admin exact path='/dangnhap' Component={SignInPage} />
        </Switch>
      </BrowserRouter>


    </Fragment>
  );
}

export default App;
