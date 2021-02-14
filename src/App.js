import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Navbar from "./components/Navbar";
import RealDebrid from "./pages/RealDebrid";
import AllDebrid from "./pages/AllDebrid";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/real-debrid">
              <RealDebrid />
            </Route>
            <Route exact path="/all-debrid">
              <AllDebrid />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
