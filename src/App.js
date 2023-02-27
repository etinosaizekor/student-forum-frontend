import './App.css';
import Navbar from './Components/Navbar'
import Container from './Components/Container';
import Sidebar from './Components/Sidebar';
import { Routes, Route} from 'react-router'

import User from './Pages/Users';
import Post from './Pages/Posts';

function App() {
  return (
    <>
      <Navbar/> 
      <Container>
        <Sidebar/>
        <Routes>
          <Route path = '/' element = {<User/>}/>
          <Route path = '/post' element = {<Post/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
