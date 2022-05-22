import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import TheNavBar from './components/NavBar';
import Translate from './components/Translate';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">

        <TheNavBar />

        <Routes>
          <Route path='/' element={<Translate/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;