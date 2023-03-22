import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = styled(Navbar)`
  position: fixed;
  width: 100vw;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 50px;
`

function PageNavbar() {
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
          <Form className="d-flex" style={{margin: "auto", padding: "auto"}}>
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              style={{width: "800px"}}
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
          <ButtonContainer>
            <Button variant="secondary" href='/login'>Login</Button>
            <Button variant="outline-secondary">Sign up </Button>
          </ButtonContainer>
        </Navbar.Collapse>
      </Container>
    </NavBar>
  );
}

export default PageNavbar;