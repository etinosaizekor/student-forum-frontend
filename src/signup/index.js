import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from '../components/Container';
import Form from 'react-bootstrap/Form';

const RegistrationContainer = styled(Container)`
  width: 50vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
  position: absolute;
  margin: 10px 120px;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15),  0 -1px 2px rgba(0,0,0,0.09);

  &:hover{
    box-shadow: 0 4px 8px rgba(0,0,0,0.09);
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const FormLabel = styled(Form.Label)`
  margin-bottom: 0;
`;

function Registration() {
  return (
    <RegistrationContainer>
      <h3>Register</h3>
      <Form style={{ width: "100%" }}>
        <FormRow>
          <FormColumn>
            <FormLabel>First name</FormLabel>
            <Form.Control type="text" placeholder="Enter first name" />
          </FormColumn>
          <FormColumn>
            <FormLabel>Last name</FormLabel>
            <Form.Control type="text" placeholder="Enter last name" />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn>
            <FormLabel>Email address</FormLabel>
            <Form.Control type="email" placeholder="Enter email" />
          </FormColumn>
          <FormColumn>
            <FormLabel>University</FormLabel>
            <Form.Control type="text" placeholder="Enter university" />
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn>
            <FormLabel>Create password</FormLabel>
            <Form.Control type="password" placeholder="Enter password" />
          </FormColumn>
          <FormColumn>
            <FormLabel>Confirm password</FormLabel>
            <Form.Control type="password" placeholder="Confirm password" />
          </FormColumn>
        </FormRow>

        <Button variant="secondary" type="submit" style={{width: "70%", margin: "30px auto" , display: "block"}}>
          Submit
        </Button>
      </Form>
    </RegistrationContainer>
  );
}

export default Registration;
