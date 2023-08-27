import { useContext } from "react"
import { AppContext } from "../../page/homePage/homePage"
export const NavBar = () => {
   const {handleTabChange}=useContext(AppContext)
    return (
        <div className="bg-yellow-200 p-1">
            <ul className="flex justify-between w-[40%] px-3">
                <li onClick={() => handleTabChange(true)} className="border-b-black border-b-2 p-1 " ><a href="#">Items</a></li>
                <li onClick={() => handleTabChange(false)} className="border-b-black border-b-2 p-1 "><a href="#">Cart</a></li>
            </ul>
        </div>   
    )
    
} 
