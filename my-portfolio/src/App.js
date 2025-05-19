import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'; // Match exact case of filename
import Home  from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;