import './App.css';
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './LandingPage';
import CardTable from './CardTable';



function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/tcgcp-game" element={LandingPage()} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/cardtable" element={CardTable()} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route to="/tcgcp-game" element={LandingPage()} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
