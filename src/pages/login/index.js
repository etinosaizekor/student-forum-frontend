import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from '../../components/Container';
import Form from 'react-bootstrap/Form';

const LoginFormContainer = styled(Container)`
  width:50vw;
  height: 70vh;
  align-items: center;
  padding: 70px;
  position: absolute;
  margin: 10px 120px;
  display: flex;
  gap: 100px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15),  0 -1px 2px rgba(0,0,0,0.09);

  &:hover{
    box-shadow: 0 4px 8px rgba(0,0,0,0.09);
  }
`
const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
`

function Login() {
  return (
    <LoginFormContainer>
      <ImageContainer>
        <Image src={require('../../assets/study.png')} alt="" />
      </ImageContainer>
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
        </Form.Group>
        <Button variant="secondary" type="submit" style={{width: "100%", marginTop: "10px"}}>
          Submit
        </Button>
      </Form>
    </LoginFormContainer>
  );
}

export default Login;