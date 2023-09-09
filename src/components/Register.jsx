import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button, FormGroup, FormCheck } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthcontext";
import  NavigationBar  from "./navbar.jsx";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added confirm password state
  const [acceptTerms, setAcceptTerms] = useState(false); // Added accept terms state
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      setError("Please accept the terms and policies");
      return;
    }

    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div>
    <NavigationBar />
      <div className="row">
        <div className="col-md-4 mx-auto">
          <h2 className="mb-3 text-center">Register</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <FormGroup controlId="formAcceptTerms" className="mb-3">
              <FormCheck
                type="checkbox"
                label="I accept the terms and policies"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
            </FormGroup>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Register;
