import Items  from "../../components/Items/items"
import { Datas as products } from "../../data"
import { useContext,createContext } from "react"
import { AppContext } from "../homePage/homePage"
const ItemContext=createContext(null)

export const ItemsPage = () => {
    let { handleAddItem, } = useContext(AppContext)
    const itemLength = products.length;
    
    return (
        <div className="p-1">
            {products.map(product => (
                <Items
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    disc={product.dis}
                    handleAddItem={()=> handleAddItem(product)}
                   
                />
           ))}
        </div>
    )
} 
