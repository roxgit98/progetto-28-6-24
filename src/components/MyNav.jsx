import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
const MyNav = () => (
  <Navbar expand="lg" className="bg-black">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" width="100px" height="55px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home" className="text-white fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#TvShows" className="text-white fw-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#Movies" className="text-white fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#RecentlyAdded" className="text-white fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#MyList" className="text-white fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Search className="icons" />
          <div className="fw-bold" id="kids">
            KIDS
          </div>
          <Bell className="icons" />
          <PersonCircle className="icons" />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
