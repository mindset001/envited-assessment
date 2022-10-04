import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/event" component={Events} />
      <Route exact path="/create" component={CreateEvent} />
    </Switch>
  );
}

export default App;