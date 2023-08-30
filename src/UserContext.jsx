import { createContext,useState } from "react";

export const UserContext = createContext(null)
 
export const UserContextProvider = ({ children }) => {
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
    const value = {
        activeTab,  
        setActiveTab,
        handleAddItem,
        handleRemoveItem,
        handleTabChange
    }
    return (
        <UserContext.Provider value={value}>{ children }</UserContext.Provider>
    )

}