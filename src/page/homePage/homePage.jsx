import { useState, createContext, useReducer } from "react";
import { NavBar } from "../../components/Navbar/navBar";
import { ItemsPage } from "../itemPage/itemPage";
import { CartItems } from "../cartItem/cartItems";
import { AddBooks } from "../../components/AddBooks/addBooks";

 export const AppContext=createContext(null)

export function HomePage() {

    const [activeTab, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "change":
                return (
                    {
                        ...state,
                        status:action.payload
                    }
                )
            case "ADD_TO_CART": {
                const bookExist = state.cart.some(product => {
                    return product.id === action.payload.id
                });

                if (bookExist) {
                    return state;
                } else {
                    return (
                        { ...state, cart: [...state.cart, action.payload] }
                    )
                }
            }
                
                
            default:
                return [
                    ...state
                ]
        }
        
    },JSON.parse(localStorage.getItem("database")) || {
            status: true,
            cart:[]
    })
    
    const[isActive, setIsActive]=useState(true)

    
    const handleTabChange = (index) => {
        // setActiveTab({ ...activeTab, status: index })
        dispatch({
            type: "change",
            payload:index
            
        })
        
    }
    const handleAddItem = (item) => {
        // localStorage.setItem("database", JSON.stringify(state))
        dispatch({
            type: "ADD_TO_CART",
            payload:item
         })
    } 


    const handleRemoveItem = (item) => {

        console.log(item.price)

        // let itemId = item.id;
             
        // const newItems= activeTab.cart.filter(item => {
        //         return item.id !== itemId
        // })
            
        // setActiveTab({ ...activeTab, cart: [...newItems] })
        // localStorage.setItem("database", JSON.stringify(activeTab))
        
    }
    return ( 
    <div className="bg-blue-100 md:w-[50%] w-[100%] h-[100%] m-4  pb-6 rounded-lg overflow-hidden">
             <AppContext.Provider value={{handleAddItem , activeTab, handleTabChange,handleRemoveItem}}>
                 <NavBar/>
                <main>
                    {activeTab.status ? <ItemsPage /> : <CartItems/>}   
                </main>
                {/* {activeTab.status ? <AddBooks/> : null} */}
                <AddBooks/>
            </AppContext.Provider>
    </div>  
        
    )
} 