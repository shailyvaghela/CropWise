import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import SeedQuality from './pages/SeedQuality';
//import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<Dashboard />} />
        <Route path="/seed-quality" element={<SeedQuality />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
