import React from  'react';
import './Checkout.css';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{basket}] = useStateValue();

    return(
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad'alt=''
                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>

                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is Empty</h2>
                            <p>You have no items in the basket click on  add to basket to add an item</p>
                        </div>
                    ):(
                        <div >
                            <h2 className='checkout_title'>Your Shopping Basket</h2>
                            {
                                basket?.map((item) => (
                                    <CheckoutProduct
                                        id ={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating = {item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                basket?.length > 0  && (
                    <div className='checkout_right'>
                        <Subtotal/>

                    </div>
                )
            }


        </div>

    )
}


export default Checkout;