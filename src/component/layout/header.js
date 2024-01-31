import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './header.css';
import { useProductContext } from '../store/ProductContextProvider';
import Cart from '../cart/cart';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const { cart } = useProductContext();

    const handleCartClick = () => {
        setShowCart(true);
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };

    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg">
                <Container className="header-container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto justify-content-center">
                            <Nav.Link as={NavLink} to="/" activeclassname="active">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/store" activeclassname="active">Store</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeclassname="active">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" activeclassname="active">Contact-us</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Button variant="outline-light" onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="cart-name">Your Cart</span>
                                <span className="cart-count">{cart.length}</span>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showCart && <Cart onClose={handleCloseCart} />}
        </React.Fragment>
    );
};

export default Header;
