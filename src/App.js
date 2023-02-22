import './App.css';
import Navbar from './Components/Navbar'
import Container from './Components/Container';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Navbar/>
      <Container>
          <Sidebar/>
      </Container>
    </>
  );
}

export default App;
