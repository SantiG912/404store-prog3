import React, { createContext, useContext, useState } from 'react'
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    const addProduct = (product) => {
        const existing = allProducts.find((item) => item.id === product.id);
        if(existing){
            const updatedProducts = allProducts.map((item) => 
                item.id === product.id
                ?{...item, quantity: item.quantity + 1}
                : item
            );
            setAllProducts(updatedProducts);
        }else{
            setAllProducts([...allProducts, {...product, quantity: 1}]);
        }

        setCountProducts(prev => prev+1);
        setTotal(prev => prev + product.price);
    };

    const removeProduct = (productId) => {
        setAllProducts(prevProducts => {
            return prevProducts.map(product => {
                if(product.id === productId) {
                    return { ...product, quantity: product.quantity - 1 };
                 }
            return product;
        }).filter(product => product.quantity > 0);
    });
        const product = allProducts.find(p => p.id === productId);
        if(product) {
            setCountProducts(prev => prev - 1);
            setTotal(prev => prev - product.price);
        }
    }
    
    const clearCart = () => {
        setAllProducts([]);
        setCountProducts(0);
        setTotal(0);
    };
    return (
        <CartContext.Provider value={{
        allProducts,
        total,
        countProducts,
        addProduct,
        removeProduct,
        clearCart
        }}>
        {children}
        </CartContext.Provider>
    )
}