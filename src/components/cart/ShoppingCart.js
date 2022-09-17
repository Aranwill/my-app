import { TYPES } from "./actions";
import { useReducer, useEffect } from "react";
import { ShoppingInitialState, shoppingReducer } from "./ShoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import axios from "axios";

const Shoppingcart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, ShoppingInitialState)

    const updateState = async () => {
        const productsUrl = "http://localhost:5000/products",
            cartUrl = "http://localhost:5000/cart"
        
        const resProducts = await axios.get(productsUrl),
            resCart = await axios.get(cartUrl)

        const productsList = await resProducts.data,
            newCartItem = await resCart.data

        dispatch({type: TYPES.READ_STATE, payload: [productsList, newCartItem]})
    }

    useEffect(() => {
        updateState()
    }, [])
    
    const {products, cart} = state;

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})
 
    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})  
        } else {
           dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id}) 
        }
    }

    const cleanCart = () => dispatch({type: TYPES.CLEAR_CART})

    return (
        <>
            <h2>Carrito de Compras</h2>
            <h3>Productos</h3>
            <div>
                {
                    products.map(product => <Product key={product.id} data={product} addToCart={addToCart}/>)
                }
            </div>
            <h3>Carrito</h3>
            <div>
                {
                    cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)
                }
            </div>
            <button onClick={cleanCart}>limpiar Carrito</button>
        </>

    );
};

export default Shoppingcart;

