import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing, Home, Form, Detail } from "./views";
import "./app.css";

import axios from "axios";
axios.defaults.baseURL = "https://pi-countries-production-8de2.up.railway.app/";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/home/:id" component={Detail} />
          <Route path="/create" exact component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
