export const CustomButton = ({children,handler}) => {
    return (
        <button className="p-1 bg-white border-red-800 border-2 rounded-md hover:bg-red-400 hover:border-0 hover:text-white" onClick={handler}>
            {children}
        </button>
    )
}