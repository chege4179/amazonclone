import React from "react";
import './Product.css';
import {useStateValue} from "./StateProvider";



function Product({id,title,price,rating,image}) {
    const [{ basket}, dispatch] = useStateValue();
    const addToBasket =() => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })

    }
    return(
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {
                        Array(rating).fill().map((_) => (
                            <p>★</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt='P'/>
            <button onClick={addToBasket}>Add Button</button>
        </div>
    );
}
export default Product;