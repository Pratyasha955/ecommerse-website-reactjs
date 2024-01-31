import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { useProductContext } from '../store/ProductContext'
import Cart from '../cart/cart';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const productsArr = useProductContext();
    const cartElements = [  {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
      },
      {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
      },
      {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
      },]; 

    const handleCartClick = () => {
        setShowCart(true);
    };

    const handleCloseCart = () => {
        setShowCart(false);
    };

    const handleRemoveItem = (index) => {
        // Implement logic to remove item from the cart array
        // This will be added in the next task as per your instructions
    };
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg">
                <Container className='header-container'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto justify-content-center"> {/* Center the items */}
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#store">Store</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto"> {/* Move to the far right */}
                            <Button variant="outline-light" onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faShoppingCart} />{/* Cart icon */}
                                <span className="cart-name">Your Cart</span>
                                <span className="cart-count">{cartElements.length}</span> {/* Cart count */}
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showCart && (
        <Cart cartElements={cartElements} onClose={handleCloseCart} onRemoveItem={handleRemoveItem} />
      )}
        </React.Fragment>
    );
};

export default Header;