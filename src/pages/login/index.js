import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from '../../components/Container';
import Form from 'react-bootstrap/Form';

const LoginFormContainer = styled(Container)`
  width: 30vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  margin: auto;
`

function Login() {
  return (
    <LoginFormContainer>
      <Form>
        <h3 style={{paddingBottom: "10px"}}>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </LoginFormContainer>
  );
}

export default Login;