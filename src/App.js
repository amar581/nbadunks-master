import "./scss/main.scss";
// import "./scss/main.css";
import "./index.css";
import Home from "./pages";
import {Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div className="App">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
          
        </Switch>

    </div>
  );
}

export default App;
