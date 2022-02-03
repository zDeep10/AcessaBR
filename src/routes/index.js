import {
// BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import { LocationContext } from "../contexts/LocationContext";
import Header from "../components/Header";
import { useState } from "react";

const Routes = props => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  return (
    <LocationContext.Provider value={{city, setCity, state, setState}}>
        <Header/>
        <Switch>
          <Route path="/:state/:city" element={<Home />}></Route>
        </Switch>
    </LocationContext.Provider>
  );
};

export default Routes;
