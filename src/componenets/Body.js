import RestaurantCard from "./RestaurantCard";
import resList from "/utils/mockData";
import { useState } from "react";


const Body = () => {
    //Local State Variable - super power varaibale(scope is inside componenet)(Hook)
    let [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() =>{
                        filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                 </button>
            </div>
            <div className="res-container">
            {listOfRestaurants.map((restaurant) =>{
                return <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
            })}
            </div>
        </div>
    );
};

export default Body;