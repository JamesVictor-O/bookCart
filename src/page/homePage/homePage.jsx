import { useState, createContext } from "react";
import { NavBar } from "../../components/Navbar/navBar";
import { ItemsPage } from "../itemPage/itemPage";
import { CartItems } from "../cartItem/cartItems";


 export const AppContext=createContext(null)

export function HomePage() {
    let [activeTab, setActiveTab] = useState({
        status: true,
        cart:[]
    })
    
    const handleTabChange = (index) => {
        setActiveTab({...activeTab, status: index })
    }
    const handleAddItem = (item) => {
        setActiveTab({ ...activeTab, cart: [...activeTab.cart, item] })
        
    }
    const handleRemoveItem = () => {
        console.log("remove")
    }

    return (
    <div className="bg-blue-200 w-[50%] h-screen m-4 rounded-lg overflow-hidden">
            <AppContext.Provider value={{handleAddItem , setActiveTab, activeTab, handleTabChange,handleRemoveItem}}>
                 <NavBar/>
                <main>
                    {activeTab.status ? <ItemsPage /> : <CartItems/>}   
                </main>
            </AppContext.Provider>
    </div>  
        
    )
} 