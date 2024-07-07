
import React from 'react'

import '../App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../images/images (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <div className='container-fluid border'>
            <Navbar expand="lg" className="">
                <Container fluid className=''>
                    <Navbar.Brand href="#">
                        <img src={logo} className='logoimg' />
                    </Navbar.Brand>

                    <Nav
                        className=""

                    >
                        <Nav.Link href="#action1" className='home me-5'>Home</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown" className='product'>
                            <NavDropdown.Item href="#action3" className='product'>All Products</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4" className='product'>Men's Clothing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5" className='product'>
                                Women's Clothing
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6" className='product'>
                                Electronics
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action7" className='product'>Jewelry</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className='inputbox'
                        />
                    </Form>
                    <div className='w-25 d-flex justify-content-between'>
                        <Button variant="outline-success" className='products'>
                            <FontAwesomeIcon icon={faUser} />
                            Profile
                        </Button>
                        <Button variant="outline-success" className='products'>
                            <FontAwesomeIcon icon={faHeart} />
                            Wishlist
                        </Button>
                        <Button variant="outline-success" className='products'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            My Cart
                        </Button>
                    </div>


                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
