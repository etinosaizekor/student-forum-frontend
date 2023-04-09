import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from '../../components/Container';
import FormWrapper from 'react-bootstrap/Form';
import { Formik, Field, ErrorMessage, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { isLogged } from '../../actions';
import { useSelector, useDispatch} from 'react-redux';  

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    axios.post('http://localhost:5000/users/login', values)
      .then((response) => {
        if(response.status === 200){
          dispatch(isLogged());
          navigate('/questions');
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Invalid email address or password');
      })
      .finally(() => {
        setSubmitting(false);
        // resetForm();
      });
  }

  return (
    <LoginFormContainer>
      <ImageContainer>
        <Image src={require('../../assets/study.png')} alt="" />
      </ImageContainer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormikForm>
            <h3 style={{paddingBottom: "10px"}}>Login</h3>
            <FormWrapper.Group className="mb-3" controlId="formBasicEmail">
              <Field type="email" name="email" placeholder="Email or phone" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </FormWrapper.Group>

            <FormWrapper.Group className="mb-3" controlId="formBasicPassword">
              <Field type="password" name="password" placeholder="Password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </FormWrapper.Group>

            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}

            <Button variant="secondary" type="submit" style={{width: "100%", marginTop: "10px"}} disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </Button>

          </FormikForm>
        )}
      </Formik>
    </LoginFormContainer>
  );
}

export default Login;
