import { Fragment } from "react"

export const AddBooks = () => {
    return (
        <div className="mb-8  flex flex-col ">
            <h2 className=" m-auto">ADD BOOKS</h2>
            <form >
                <div>
                  <input type="file" />
               </div>
                <div>
                    <label htmlFor="bookName">Book Name :</label>
                    <input type="text" id="bookName" />
                </div>
                
                <div>
                    <label htmlFor="bookDiscription">Discription:</label>
                    <textarea></textarea>
                </div>
                
            </form>
        </div>
    )
}