import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
