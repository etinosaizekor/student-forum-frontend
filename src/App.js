import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import { Routes, Route} from 'react-router'

import User from './pages/users';
import Post from './pages/posts/PostPreview';
import NewPost from './pages/posts/NewPost';
import Category from './pages/category';
import Login from './pages/login';

const Wrapper = styled.div`
  margin: 150px 310px 10px;
`
const Body = styled.div`
  display: flex;
`

function App() {
  return (
    <>
      <Navbar/> 
      <Body>
        <Sidebar/>
        <Wrapper>
            <Routes>
            <Route path = '/login' element = {<Login/>}/>
              <Route path = '/user' element = {<User/>}/>
              <Route path = '/questions' element = {<Post/>}/>
              <Route path='/newPost' element = {<NewPost/>}/>
              <Route path='/categories' element = {<Category/>}/>
            </Routes>

        </Wrapper>
      </Body >
    </>
  );
}

export default App;
