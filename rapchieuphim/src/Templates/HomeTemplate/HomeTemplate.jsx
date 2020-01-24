
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';



const HomeLayOut = (props) => {
    return <Fragment>
      
        {props.children}
    </Fragment>
}

export const Home = ({ Component, ...props }) => (
    <Route {...props} render={(propComponent) => (
        <HomeLayOut>
            <Component {...propComponent}/>
        </HomeLayOut>
    )} />
)