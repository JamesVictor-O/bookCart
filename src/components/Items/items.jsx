import { CustomButton } from "../CustomButton/customButton";
import { AppContext } from "../../page/homePage/homePage";
import { useContext,useState } from "react";
import { CartButton } from "../CartButton/cartButton";


export default function Items({ price, img, name, disc, handleAddItem, handleRemoveItem }) {
    
    let { activeTab, isAddedToCart } = useContext(AppContext)
    let [itemPrice, setItemPrice] = useState(price)
    let [numberOfitems, setNumberOfitems] = useState(1)
    
    const handlePriceIncrease = () => {
        if(numberOfitems === 0)return
        setItemPrice(price * numberOfitems)
        setNumberOfitems(numberOfitems + 1)
       
   }
    const handlePriceDecrease = () => {
        if(numberOfitems === 0)return
        setNumberOfitems(numberOfitems - 1)
        
        // setItemPrice(price / numberOfitems)
   }
    return (
    <div className="flex justify-between bg-white h-[100px] p-1 mb-2">
        <div className="flex w-[70%]">
            <div className="border-black border w-[20%]">
                <img className="h-[100%] w-[100%]" src={img} alt="" />
            </div>
            <div className="ml-[10px] flex flex-col justify-between h-[60%]  mt-3">
                    <h2 className="text-[14px] font-extrabold">{ name.toUpperCase()}</h2>
                    <span className="text-[13px]">{ disc}</span>
            </div>
        </div>
        <div className="p-1 flex flex-col items-center justify-between ">
                { activeTab.status ? <div>${price}</div> :<div>${itemPrice}</div>}
                {activeTab.status ?
                    <CustomButton handler={handleAddItem} isAddedToCart={isAddedToCart} >
                        Add to cart
                    </CustomButton> :
                    <CartButton  handlePriceIncrease={handlePriceIncrease} handlePriceDecrease={handlePriceDecrease} numberOfitems={ numberOfitems} />}
        </div>
    </div>
        
    )
}
