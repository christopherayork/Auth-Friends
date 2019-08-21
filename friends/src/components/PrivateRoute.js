import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
      <Route
          {...rest}
          render={props => {
            if(localStorage.getItem('userToken')) {
              return <Component {...props} />
            }
            else {
              return <Redirect to='/login' />
            }
          }}
      />
  );
}