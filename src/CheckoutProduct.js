import React from "react";
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,price,image,rating,title}) {
    const [{basket},dispatch] = useStateValue();
    console.log(id,price,image,rating,title)

    const RemoveFromBasket =() => {

        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,

        });

    }
    return(
        <div className='checkoutProduct'>
            <img src={image}alt='' className='checkoutProduct_image'/>
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {
                        Array(rating).fill().map((_) => (
                            <p>★</p>
                        ))
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;