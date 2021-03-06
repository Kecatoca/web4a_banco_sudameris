import React from 'react';
import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavDropdown, Nav , NavItem, NavLink} from 'react-bootstrap';


const MenuBar = function ({onOptionClicked}) {

    return(
        
        <Navbar className="BarraNavegacion" bg="primary" variant="dark" expand="lg" >
            <Container fluid>
              <img className="logo" src="./icono.png" alt="logo" name="home" onClick={onOptionClicked}/>
              <Navbar.Collapse>
                <Nav className="navbar-nav">
                    <NavItem >
                      <NavLink href="#home" name="login" onClick={onOptionClicked}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Cuenta" name="Cuenta" onClick={onOptionClicked}>Cuenta</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Extractos" name="Extractos" onClick={onOptionClicked}>Extractos</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Transferencias" name="Transferencias" onClick={onOptionClicked}>Transferencias</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Cancelacion" name="Cancelacion" onClick={onOptionClicked}>Cancelacion</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pqrs" name="pqrs" onClick={onOptionClicked}>PQRs</NavLink>
                    </NavItem>
                    
                    <NavDropdown align="ml-auto" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <NavLink ClassName="dropdown-toggle">Usuarios</NavLink>                       
                        
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item" href="none" onClick={onOptionClicked}>Login</a></li>
                          <li><a className="dropdown-item" href="none" onClick={onOptionClicked}>Signin</a></li>
                        </ul>
                    </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    );

}

export default MenuBar;