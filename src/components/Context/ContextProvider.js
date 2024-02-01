import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Auth Context
export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
});

let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    return adjExpirationTime - currentTime;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');


    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('user-email');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
    };
};

// Product Context
export const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

const removeSpecialCharacters = (text) => {
    return text.replace(/[@.]/g, '');
  };

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
        reviews: ['Great product!', 'Highly recommended.'],
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png'],
        reviews: ['Great product!', 'Highly recommended.'],
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%203.png'],
        reviews: ['Great product!', 'Highly recommended.'],
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
        reviews: ['Great product!', 'Highly recommended.'],
    },
];

const ProductContextProvider = ({ children }) => {
    const authCtx = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.title === product.title);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);

            if (authCtx.isLoggedIn) {
                const storedEmailId = localStorage.getItem('user-email');
                const userEmail = removeSpecialCharacters(storedEmailId);
                fetch(`https://crudcrud.com/api/3b86df1aadfc4e938dc2d538d26307b7/cart${userEmail}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ item: updatedCart }),
                });
            }
        }
    };

    return (
        <ProductContext.Provider value={{ productsArr, cart, addToCart }}>
            {children}
        </ProductContext.Provider>
    );
};

// Context Provider
export const ContextProvider = ({ children }) => {
    const tokenData = retrieveStoredToken();
    const [token, setToken] = useState(tokenData?.token || '');
    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken('');
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect(() => {
        if (tokenData) {
            const remainingTime = tokenData.duration;

            if (remainingTime > 0) {
                logoutTimer = setTimeout(logoutHandler, remainingTime);
            }
        }
    }, [tokenData, logoutHandler]);

    return (
        <AuthContext.Provider value={{ token, isLoggedIn: userIsLoggedIn, login: loginHandler, logout: logoutHandler }}>
            <ProductContextProvider>
                {children}
            </ProductContextProvider>
        </AuthContext.Provider>
    );
};

export default ContextProvider;
