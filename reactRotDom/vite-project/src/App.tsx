import './App.css';
import About from './About';
import Users from './Users';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mainn from './Mainn';
function App() {
  return (
    <>
      <Router>
        <nav>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">abot</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" Component={Mainn}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/users" Component={Users}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
