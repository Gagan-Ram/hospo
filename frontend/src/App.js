import "./App.css";
import Home from "./Components/Home/Home";
import Medicines from "./Components/Medicines/Medicines";
import Doctors from "./Components/Doctors/Doctors";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./Components/Doctors/Appointment";
import Hospitals from "./Components/Doctors/Hospitals";
import { Box } from "@mui/material";

export const config = {
  endpoint: process.env.REACT_APP_WEBSITE_ENDPOINT,
};


function App() {

  return (
    <Box style={{background:"#e6e6ec", height : "100%"}}>
      <Router>
        <Switch>

          <Route path= "/doctors:value">
            <Doctors />
          </Route>

          <Route path= "/hospitals/:value">
            <Hospitals/>
          </Route>
          
          <Route path= "/appointment/:value">
            <Appointment/>
          </Route>
          
          <Route path="/medicines">
            <Medicines />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
        
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
