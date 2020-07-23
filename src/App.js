import React from 'react';
import './App.css';
import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component.jsx"
import SignInSignUp from './pages/signInSignUp/signInSignUpComponent.jsx'
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
       <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ ShopPage } />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
