import React from 'react';
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exct path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
