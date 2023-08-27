import Items from "../../components/Items/items";
import { AppContext } from "../homePage/homePage";
import { useState,useContext } from "react";
export const CartItems = () => {
    let { activeTab } = useContext(AppContext)
    console.log(activeTab.cart)
    return (
        <div className="p-1">
            {
                activeTab.cart.map(product => (
                    
                    <Items
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    disc={product.dis}
                    />
                )
                )
            }
        </div>
    )
}