import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;