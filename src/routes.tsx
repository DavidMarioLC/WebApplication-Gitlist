import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from "react-router-dom";

import Main from './components/Main';
import NotFound from "./components/404/NotFound";

export const AppRouter = () => (
  <Router>
    <Switch>  
      <Route exact path="/">
          <Redirect to="/davidmariolc" />
        </Route>
      <Route exact path="/:username" component={Main}/>  
      <Route path="*" component={NotFound}/>
      
    </Switch>
  </Router>
)