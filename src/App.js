import React from 'react'
import './App.css'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
// import soso from './pages/soso'
// import product from './pages/product'k
import Navbar from './components/Navbar'
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/> 
        {/* <Route exact path="/rooms/:slug/:id" component={soso}/>
        <Route exact path="/rooms/:slug/:id/:name" component={product}/>   */}
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
