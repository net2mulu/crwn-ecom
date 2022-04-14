import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

function HatsPage(props) {
  return <h1>HATS PAGE {props.match.params.id}</h1>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route path="/hats/:id" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
