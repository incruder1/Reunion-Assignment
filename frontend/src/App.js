import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage.jsx";
import Login from './page/auth/login.jsx';
import SignUp from "./page/auth/signup.jsx"
function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
