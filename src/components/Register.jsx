import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthcontext";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, serError] = useState("");
    const { signUp } = useUserAuth();

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <h1 className='mb-3'>Register</h1>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                    type='email'
                    placeholder='Email address'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" type="submit">Sign Up</Button>
            </div>
        </Form>
        <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to='/login'>Login</Link>
        </div>

    </div>
  );
}
export default Register;