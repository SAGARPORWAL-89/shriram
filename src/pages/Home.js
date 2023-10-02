import Header from "../components/Header";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import 'animate.css';
function Home()
{
    return(
        <div>

            <Header/>
            <Slider/>
            <Menu/>
            <Footer/>
        </div>
    );
}
export default Home;