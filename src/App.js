import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import { accessToken } from "./spotify";
import Home from "./pages/home";
import TopTracks from "./pages/topTracks";
import Header from "./components/header";
import Footer from "./components/footer";
import TopArtists from "./pages/topArtists";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");
  }, []);



  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={token}/>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={token}/>} />
          <Route path="/top-tracks" element={<TopTracks />} />
          <Route path="/top-artists" element={<TopArtists />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
