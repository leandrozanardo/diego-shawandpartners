import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

interface User {
  id: number;
  login: string;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:username" element={<UserDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
