import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { Registration } from '../pages/Registration';

export function Routers() {
  return (
    <Switch>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/registration' element={<Registration />} />
    </Switch>
  )
};