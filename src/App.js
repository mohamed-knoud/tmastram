import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Menu/>
      </Router>
      
  );
}

export default App;
