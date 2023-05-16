import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import Home from "./pages/home";
import TopTracks from "./pages/topTracks";
import Header from "./components/header";
import Footer from "./components/footer";
import TopArtists from "./pages/topArtists";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");

    setIsLoggedIn(accessToken !== null && refreshToken !== null);
  }, []);


  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/top-tracks" element={<TopTracks />} />
          <Route path="/top-artists" element={<TopArtists />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
