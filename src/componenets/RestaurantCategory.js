import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
    }
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
                <div className="justify-between flex cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg px-4">{data.title}({data.itemCards.length})</span>
                    <span className="text-lg">⌄</span>
                </div>
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        
        </div>
    );
};

export default RestaurantCategory;