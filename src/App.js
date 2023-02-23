import './App.css';
import Navbar from './Components/Navbar'
import Container from './Components/Container';
import Sidebar from './Components/Sidebar';
import User from './Pages/Users';

function App() {
  return (
    <>
      <Navbar/>
      <Container>
          <Sidebar/>
          <User/>
      </Container>
    </>
  );
}

export default App;
