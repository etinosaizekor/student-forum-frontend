import './App.css';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar';
import { Routes, Route} from 'react-router'


import User from './Pages/Users';
import Post from './Pages/Posts/PostPreview';
import NewPost from './Pages/Posts/NewPost';
import Category from './Pages/Category';

function App() {
  return (
    <>
      <Navbar/> 
      <div style={{display: "flex"}}>
        <Sidebar/>
        <Routes>
          <Route path = '/user' element = {<User/>}/>
          <Route path = '/posts' element = {<Post/>}/>
          <Route path='/newPost' element = {<NewPost/>}/>
          <Route path='/categories' element = {<Category/>}/>
        </Routes>
      </div >
    </>
  );
}

export default App;
