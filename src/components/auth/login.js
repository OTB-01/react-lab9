import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {
    doSignInWithEmailAndPassword,
    doSingInWithGoogle,
} from "../../firebase/auth";

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSignedIn) {
            setIsSignedIn(true);
            await doSignInWithEmailAndPassword(email, password);
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

            <button onClick={GoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;
