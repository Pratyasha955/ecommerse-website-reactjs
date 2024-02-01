import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom'; 
import './Header.css';
import { useProductContext, AuthContext } from '../Context/ContextProvider';
import Cart from '../Cart/Cart';

const Header = () => {
    const { cart } = useProductContext();
    const [showCart, setShowCart] = useState(false);

    const location = useLocation();
    const isStoreRoute = location.pathname === '/store';

    const handleCartClick = () => {
        setShowCart(true);
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };

    const totalCartItems = cart ? cart.length : 0;

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    console.log(isLoggedIn)

    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg">
                <Container className='header-container'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto justify-content-center">
                            <Link to="/" className="nav-link" activeclassname="active">Home</Link>
                            {isLoggedIn && (
                                <Link to="/store" className="nav-link" activeclassname="active">Store</Link>
                            )}
                            <Link to="/about" className="nav-link" activeclassname="active">About</Link>
                            {!isLoggedIn && (
                                <Link to="/login" className="nav-link" activeclassname="active">Login</Link>
                            )}
                            <Link to="/contact" className="nav-link" activeclassname="active">Contact-us</Link>
                        </Nav>
                        {isStoreRoute && (
                        <Nav className="ml-auto">
                            <Button variant="outline-light" onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="cart-name">Your Cart</span>
                                <span className="cart-count">{totalCartItems}</span>
                            </Button>
                        </Nav>
                         )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showCart && (
                <Cart cartElements={cart} onClose={handleCloseCart} />
            )}
        </React.Fragment>
    );
};

export default Header;