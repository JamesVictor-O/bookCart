import { useContext } from "react"
import { AppContext } from "../../page/homePage/homePage"
import { Datas as books } from "../../data"
export const NavBar = () => {

    const booksInStore = books.length;

    const { handleTabChange, activeTab } = useContext(AppContext)

    const booksOnCart=activeTab.cart.length
    
    return (
        <div className="bg-yellow-200 p-1 flex flex-row items-center justify-between">
            <ul className="flex justify-between w-[40%] px-3">
                <li onClick={() => handleTabChange(true)} className={`${activeTab.status ? "border-b-black border-b-2 p-1" : "border-b-2 p-1 border-b"}`} ><a href="#">Items</a></li>
                <li onClick={() => handleTabChange(false)} className={`${!activeTab.status ? "border-b-black border-b-2 p-1" : "border-b-2 p-1"}`}><a href="#">Cart</a></li>
            </ul>
            {
                activeTab.status ?
                <div className=" flex items-center">
                    <h2>BOOKS IN STORE</h2>
                    <span className="bg-white p-1 rounded-sm border-black border mx-2">{booksInStore }</span>
                </div> :
                    
                <div className=" flex items-center">
                    <h2>BOOKS ON CART</h2>
                    <span className="bg-white p-1 rounded-sm border-black border mx-2">{booksOnCart}</span>
                </div>
            }
        </div>   
    )
    
} 
