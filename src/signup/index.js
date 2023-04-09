import axios from 'axios';
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

const handleSubmit = async (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target);
  const firstName = formData.get('firstName');
  console.log(firstName);
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const school = formData.get('school');
  const password = formData.get('password');

  try {
    const response = await axios.post('http://localhost:5000/users', {
      firstName,
      lastName,
      email,
      school,
      password,
    });

  } catch (error) {
    console.error(error);
  }
};

function Registration() {
  return (
    <RegistrationContainer>
      <h3>Register</h3>
      <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FormRow>
          <FormColumn>
            <FormLabel>First name</FormLabel>
            <Form.Control type="text" placeholder="Enter first name" name="firstName"/>
          </FormColumn>
          <FormColumn>
            <FormLabel>Last name</FormLabel>
            <Form.Control type="text" placeholder="Enter last name" name="lastName"/>
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn>
            <FormLabel>Email address</FormLabel>
            <Form.Control type="email" placeholder="Enter email" name="email"/>
          </FormColumn>
          <FormColumn>
            <FormLabel>school</FormLabel>
            <Form.Control type="text" placeholder="Enter school" name="school"/>
          </FormColumn>
        </FormRow>

        <FormRow>
          <FormColumn>
            <FormLabel>Create password</FormLabel>
            <Form.Control type="password" placeholder="Enter password" name="password"/>
          </FormColumn>
          <FormColumn>
            <FormLabel>Confirm password</FormLabel>
            <Form.Control type="password" placeholder="Confirm password" name="password"/>
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
