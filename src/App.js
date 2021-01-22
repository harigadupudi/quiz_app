import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Route1 from './components/Route1';
import Route2 from './components/Route2';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/">
          <Main></Main>
        </Route>
        <Route exact path = "/home">
          <Route2></Route2>
        </Route>
        <Route path ="/1" component ={Route1} > 
        </Route>
        {/* <Route path ="/sc" component ={Sc} >
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
