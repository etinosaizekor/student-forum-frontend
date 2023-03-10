import './App.css';
import Navbar from './Components/Navbar'
import Container from './Components/Container';
import Sidebar from './Components/Sidebar';
import { Routes, Route} from 'react-router'

import User from './Pages/Users';
import Post from './Pages/Posts/PostPreview';
import NewPost from './Pages/Posts/NewPost';

function App() {
  return (
    <>
      <Navbar/> 
      <Container>
        <Sidebar/>
        <Routes>
          <Route path = '/user' element = {<User/>}/>
          <Route path = '/posts' element = {<Post/>}/>
          <Route path='/newPost' element = {<NewPost/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
