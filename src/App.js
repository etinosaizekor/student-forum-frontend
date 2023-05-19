import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import { Routes, Route} from 'react-router'

import User from './pages/users';
import UserQuestions from './pages/posts/UserPostPreview';
import NewPost from './pages/posts/NewPost';
import Category from './pages/category';
import Login from './pages/login';
import Registration from './signup';
import PostView from './pages/posts/PostView';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  margin: 150px 310px 10px;
`
const Body = styled.div`
  display: flex;
`

function App() {
  const isLoggedIn = useSelector(state => state.loggedIn)

  return (
    <>
      <Navbar/> 
      <Body>
      {isLoggedIn ? <Sidebar /> : null}
        <Wrapper>
            <Routes>
            <Route path = '/login' element = {<Login/>}/>
              <Route path='/register' element={<Registration/>}></Route>
              <Route path = '/user' element = {<User/>}/>
              <Route path = '/questions' element = {<UserQuestions/>}/>
              <Route path='/newPost' element = {<NewPost/>}/>
              <Route path='/categories' element = {<Category/>}/>
              <Route path='/question/:id' element = {<PostView/>}/>
              <Route path='/category/:posts' element = {<PostView/>}/>
            </Routes>
        </Wrapper>  
      </Body >
    </>
  );
}

export default App;
