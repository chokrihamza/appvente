
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Welcom from './Pages/Welcom';
import Announce from './Pages/Announce';
import CreateAnnounce from "./Pages/CreateAnnounce";
import Error from './Pages/Error';
import Comment from './Components/Comment/Comment';
import Aboutus from './Pages/Aboutus'
import Home from './Pages/Home'



function App() {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route exact path='/' component={Home} />
        <Route path='/ourproducts' component={Welcom} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/register' component={Signup} />
        <Route path='/login' component={Signin} />
        <Route path='/profile' component={Profile} />
        <Route path='/announce/:id' component={Announce}/>
        <Route path='/postAnnounce' component={CreateAnnounce}/>
        <Route path='/comment' component={Comment} />
        <Route path='*/' component={Error}/>
        

      </Switch>
    </BrowserRouter>

  )

}

export default App;
