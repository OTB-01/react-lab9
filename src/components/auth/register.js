import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import {
    doCreateUserWithEmailAndPassword,
    doSignInWithEmailAndPassword,
    doSingInWithGoogle,
} from "../../firebase/auth";

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistered) {
            setIsRegistered(true);
            await doCreateUserWithEmailAndPassword(email, password);
        }
    };
    const GoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSignedIn) {
            setIsSignedIn(true);
            doSingInWithGoogle().catch((error) => {
                console.log(error);
                setIsSignedIn(false); // reset
            });
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div>
                <p></p>
                <Link to="/login">or Login here</Link>
            </div>
        </div>
    );
};
