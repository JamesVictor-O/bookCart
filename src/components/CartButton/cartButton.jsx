
export const CartButton = ({ handlePriceIncrease,numberOfitems,handlePriceDecrease }) => { 
    return (
        <div className="justify-between">
            <button onClick={handlePriceIncrease} className="border-black border text-[10px] p-[1px] mr-1">➕</button>
            <span className="border-black border p-[2px] text-[13px]">{ numberOfitems}</span>
            <button onClick={handlePriceDecrease} className="border-black border text-[10px] p-[1px] ml-1">➖</button>
        </div>
    )
}