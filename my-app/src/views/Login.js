import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Login">
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
          />
        </Form.Group>
        <Button block size="lg"  >
        <Link to='/unterkunft'>Login</Link>
        </Button>
      </Form>
    </div>
    );
}

export default Login;