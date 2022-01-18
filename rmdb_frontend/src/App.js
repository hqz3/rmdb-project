import React from "react";
// Component
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Person from "./components/Person";
import RegisterModal from "./components/RegisterModal";
// Context
import { AuthProvider } from "./context/AuthContext";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Style
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <RegisterModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":movieId" element={<Movie />} />
          <Route path="person/:personId" element={<Person />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
}

export default App;
