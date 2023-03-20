import './App.css';
import HomeNavbar from './Component/HomeNavbar';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Otp from './Component/Otp';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <HomeNavbar/>
      <Login/>
      <Otp/>
      <Footer/>
    </div>
  );
}

export default App;
