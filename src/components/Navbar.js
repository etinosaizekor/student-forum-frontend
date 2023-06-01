import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut } from '../actions/loginAction';
import { useNavigate } from 'react-router';
import api from '../utils/api';
import Card from './Container';

const NavBar = styled(Navbar)`
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 50px;
`

const ProfileCard = styled(Card)`
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
  display: block
`;

const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0%;
  width: 600px;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 450px;
  padding: auto;

  @media (max-width: 992px) {
    margin-right: 0;
    justify-content: center;
  }
`;


function PageNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showProfileCard, setShowProfileCard] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [questions, setQuestion] = useState([]);
  const [suggestions, setSuggestions] = useState([])
  const userDetails  = useSelector((state) => state.userDetails.userDetails);
  const { isLoggedIn } = useSelector((state) => state.isLogged);


  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await api.get('/questions');
      const questions = response.data;
      setQuestion(questions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProfileIconClick = () => {
    setShowProfileCard(!showProfileCard);
  };

  const handleSignOutClick = () => {
    dispatch(loggedOut());
    navigate('/login');
    setShowProfileCard(!showProfileCard);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredQuestions = questions.filter((question) =>
      question.questionTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Set suggestions to the first 5 closest matches
    const closestMatches = filteredQuestions.slice(0, 5);
    setSuggestions(closestMatches);
  };

  const handleSuggestionClick = (postId) => {
    navigate(`/post/${postId}`);
    setSuggestions([])
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.suggestions-container') && !e.target.closest('.search-input')) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);



  return (
    <NavBar style={{ backgroundColor: 'rgb(244, 245, 247)' }} expand="lg" className="navbar-custom">
      <Container fluid className="m-4">
        <Navbar.Brand href="#">Student Forum</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
          <SearchContainer>
            <Form.Control
              type="search"
              className="me-2 search-input"
              aria-label="Search"
              style={{ width: '600px' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-secondary">Search</Button>
            {suggestions.length > 0 && (
              <SuggestionsContainer className="suggestions-container">
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li key={index} style={{marginBottom: '5px'}}>
                      <Link to={`/question/${suggestion.questionId}`} onClick={() => handleSuggestionClick(suggestion.questionId)}>
                        {suggestion.questionTitle}
                      </Link> 
                    </li>
                  ))}
                </ul>
              </SuggestionsContainer>
            )}
          </SearchContainer>
          {isLoggedIn ? (
            <Profile src={userDetails.imageUrl} onClick={handleProfileIconClick}></Profile>
          ) : (
            <ButtonContainer>
              <Button variant="secondary" href="/">
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
            <strong>Name:</strong> {`${userDetails.firstName} ${userDetails.lastName}`}
          </div>
          <Button variant="secondary" onClick={handleSignOutClick} style={{ marginTop: '10px' }}>
            Sign Out
          </Button>
        </ProfileCard>
      )}
    </NavBar>
  );
}

export default PageNavbar;

