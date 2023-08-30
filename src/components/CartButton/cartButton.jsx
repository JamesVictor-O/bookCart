export const CartButton = ({handleRemoveItem}) => {
    return (
        <div className="justify-between">
            <button className="border-black border text-[10px] p-[1px] mr-1">➕</button>
            <span className="border-black border p-[2px] text-[13px]">1</span>
            <button onClick={handleRemoveItem} className="border-black border text-[10px] p-[1px] ml-1">➖</button>
        </div>
    )
}