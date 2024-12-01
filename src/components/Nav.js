import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";

const Nav = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    // nav bare where it shows home, about, login and logout
    // login and logout cant be showed at the same time
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>

                    {userLoggedIn ? (
                        <li>
                            <button
                                onClick={() => {
                                    doSignOut().then(() => {
                                        navigate("/");
                                    });
                                }}
                            >
                                Sign out
                            </button>
                        </li>
                    ) : (
                        <li>
                            <Link to="login">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
