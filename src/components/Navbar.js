import { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut } from '../actions/loginAction';



const NavBar = styled(Navbar)`
  position: fixed;
  width: 100vw;
  z-index: 10;

`

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 50px;
`

const ProfileCard = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right:100px;
  width: 300px;
  height: 100px;
  padding: 10px 20px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 11;
  transition: all 0.5s ease-in-out;
`;

  function PageNavbar() {

    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.userDetails.userDetails)
    const isLoggedIn = useSelector(state => state.loggedIn.isLoggedIn)
    const [showProfileCard, setShowProfileCard] = useState(false);

    const handleProfileIconClick = () => {
      setShowProfileCard(!showProfileCard);
    };

    const handleSignOutClick = () => {
      dispatch(loggedOut())
      setShowProfileCard(!showProfileCard);
    };


    return (
      <NavBar style={{backgroundColor: "rgb(244, 245, 247)"}} expand="lg" className='navbar-custom'>
        <Container fluid className='m-4'>
          <Navbar.Brand href="#">Student Forum</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex" style={{marginRight: "450px", padding: "auto"}}>
              <Form.Control
                type="search"
                className="me-2"
                aria-label="Search"
                style={{width: "800px"}}
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
            {isLoggedIn ? ( 
              <Profile
                src={userDetails.imageUrl} 
                onClick={handleProfileIconClick}>
              </Profile>  
            ) : (
              <ButtonContainer>
                <Button variant="secondary" href="/login">
                  Login
                </Button>
                <Button variant="outline-secondary" href="register">
                  Sign up
                </Button>
              </ButtonContainer>
            )}
          </Navbar.Collapse>
        </Container>
        {showProfileCard && ( 
          <ProfileCard>
            <div>
              <strong>Name:</strong> {userDetails.fullName}
            </div>
            <Button variant="secondary" onClick={handleSignOutClick} style={{marginTop: "10px"}}>Sign Out</Button>
          </ProfileCard>
        )}
      </NavBar>
    );
  }

export default PageNavbar;