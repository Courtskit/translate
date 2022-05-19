import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

export const TheNavBar = () => {
  return (
    <Navbar bg='color' variant='dark' sticky='top' expand='md' className="mb-4">
      <Navbar.Brand >
        <FontAwesomeIcon icon={faGlobeAmericas} width='60px'/>
        translate
      </Navbar.Brand>
      <Navbar.Toggle className='nav-toggle-margin' />
      <Navbar.Collapse>
        <Nav className="justify-content-end flex-grow-1 pe-3 nav-height">
          <Nav.Link className='nav-item-custom' href=''>Search</Nav.Link>
          <Nav.Link className='nav-item-custom' href=''>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNavBar;
