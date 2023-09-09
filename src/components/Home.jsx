import React from "react";
import Navigationbar from "./navbar.jsx";
import { useUserAuth } from "../context/UserAuthcontext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
    const { logOut,user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }}
    return (
        <div className="text-center">
            <Navigationbar/>
            <p>home</p>
            <Button onClick={handleLogout} variant="danger">Logout</Button>
        </div>
    )
}

export default Home