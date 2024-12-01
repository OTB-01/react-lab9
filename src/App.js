import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authContext";
import Login from "./components/auth/login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="container">
                    <Nav />
                    <main>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/recipe-details/:id"
                                element={<RecipeDetails />}
                            />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
