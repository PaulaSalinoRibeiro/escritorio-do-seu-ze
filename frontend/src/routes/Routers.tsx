import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export function Routers() {
  return (
    <Switch>
      <Route path='/' element={<Home />}/>
    </Switch>
  )
};