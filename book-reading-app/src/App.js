import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Reading from './components/Reading';
import Favorite from './components/Favorite';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/read" element={<Reading />}/>
      <Route path="/fev" element={<Favorite />}/>
       </Routes>
    </div>
  );
}

export default App;
