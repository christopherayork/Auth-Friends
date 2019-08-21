import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navigation'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
            <li><Link to='/add-friend'>Add Friend</Link></li>
          </ul>
        </div>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friends' component={Friends} />
        <Route path='/add-friend' component={AddFriend} />
        <Friends />
      </Router>
    </div>
  );
}

export default App;
