import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import Songs from "./pages/songs";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/top-tracks" element ={<Songs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
