import { useState, createContext } from "react";
import { NavBar } from "../../components/Navbar/navBar";
import { ItemsPage } from "../itemPage/itemPage";
import { CartItems } from "../cartItem/cartItems";


 export const AppContext=createContext(null)

export function HomePage() {

    let [activeTab, setActiveTab] = useState(JSON.parse(localStorage.getItem("database")) || {
        status: true,
        cart:[]
    })
    const[isActive, setIsActive]=useState(true)

    
    const handleTabChange = (index) => {
        setActiveTab({ ...activeTab, status: index })
        
    }
    const handleAddItem = (item) => {
        setActiveTab({ ...activeTab, cart: [...activeTab.cart, item,isActive]})
        localStorage.setItem("database", JSON.stringify(activeTab))

    }
    const handleRemoveItem = (item) => {
        let itemId = item.id;
            
        const newItems= activeTab.cart.filter(item => {
                return item.id !== itemId
        })
            
        setActiveTab({ ...activeTab, cart: [...newItems] })
        
    }
    return (
    <div className="bg-blue-200 md:w-[50%] h-screen m-4 rounded-lg overflow-hidden">
             <AppContext.Provider value={{handleAddItem , setActiveTab, activeTab, handleTabChange,handleRemoveItem}}>
                 <NavBar/>
                <main>
                    {activeTab.status ? <ItemsPage /> : <CartItems/>}   
                </main>
            </AppContext.Provider>
    </div>  
        
    )
} 