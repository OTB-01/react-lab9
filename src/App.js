import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;