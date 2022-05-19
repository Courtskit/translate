import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import TheNavBar from "./components/NavBar";
import Translate from './components/Translate';

function App() {
  return (
    <Router>
      <div className="App">

        <TheNavBar />

        <Translate />
        
      </div>
    </Router>
  );
}

export default App;