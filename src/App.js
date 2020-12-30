import "./App.css";

import Start from "./Start";
import PlayGame from "./PlayGame";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Router>
        <div className="mainApp">
          <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/play" exact component={PlayGame} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
