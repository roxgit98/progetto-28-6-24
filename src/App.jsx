import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import {
  Container,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";
import Galleria from "./components/Galleria";
function App() {
  return (
    <div className="App">
      <MyNav />
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <ButtonGroup>
              <DropdownButton
                as={ButtonGroup}
                title="Genres"
                variant="outline-secondary"
                className="btn "
                size="sm"
              >
                <Dropdown.Item eventKey="1">Comedy</Dropdown.Item>
                <Dropdown.Item eventKey="2">Drama</Dropdown.Item>
                <Dropdown.Item eventKey="3">Thriller</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
          <div>
            <Grid className="icons" />
            <Grid3x3 className="icons" />
          </div>
        </div>
        <Galleria />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
