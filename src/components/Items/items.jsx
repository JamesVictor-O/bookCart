import { CustomButton } from "../CustomButton/customButton";
import { AppContext } from "../../page/homePage/homePage";
import { useContext } from "react";
import { CartButton } from "../CartButton/cartButton";


export default function Items({ price, img, name, disc, handleAddItem, handleRemoveItem }) {
    
    let { activeTab, isAddedToCart } = useContext(AppContext)
    
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
                <div>
                    ${price}
                </div>
                {activeTab.status ?
                    <CustomButton handler={handleAddItem} isAddedToCart={isAddedToCart} >
                        Add to cart
                    </CustomButton> :
                    <CartButton handleRemoveItem={ handleRemoveItem} />}
        </div>
    </div>
        
    )
}
