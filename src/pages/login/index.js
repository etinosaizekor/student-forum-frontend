import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from '../../components/Container';
import FormWrapper from 'react-bootstrap/Form';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { loggedIn } from '../../actions/loginAction';
import { setUserDetails } from '../../actions/userDetailsAction';
import { useDispatch } from 'react-redux';

const LoginFormContainer = styled(Container)`
  width: 50vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 -1px 2px rgba(0, 0, 0, 0.09);
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 -1px 2px rgba(0, 0, 0, 0.09);
  }
`

const StyledField = styled(Field)`
  width: 340px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 800px;
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address'),
    password: Yup.string().min(6, 'Password must be at least 6 characters'),
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if (!values.email || !values.password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setSubmitting(true);
    axios
      .post('http://localhost:5000/users/login', values)
      .then((response) => {
        if (response.status === 200) {
          dispatch(loggedIn());
          dispatch(setUserDetails(response.data))
          navigate('/questions');
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Invalid email address or password');
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <LoginFormContainer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormikForm>
            <h3 style={{ paddingBottom: '10px' }}>Login</h3>
            <FormWrapper.Group className="mb-3" controlId="formBasicEmail">
              <StyledField type="email" name="email" placeholder="Email or phone" className="form-control" />
            </FormWrapper.Group>

            <FormWrapper.Group className="mb-3" controlId="formBasicPassword">
              <StyledField type="password" name="password" placeholder="Password" className="form-control" />
            </FormWrapper.Group>

            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}

            <Button
              variant="secondary"
              type="submit"
              style={{ width: '100%', marginTop: '10px' }}
            >
              {isSubmitting && !errorMessage ? 'Logging in...' : 'Log in'}
            </Button>
          </FormikForm>
        )}
      </Formik>
    </LoginFormContainer>
  );
}


export default Login;