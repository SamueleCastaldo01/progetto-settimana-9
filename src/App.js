import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainHome from './components/MainHome';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />

      <MainHome />

      <Footer />
    </div>
  );
}

export default App;
