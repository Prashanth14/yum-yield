import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";


const Body = () => {
    //Local State Variable - super power varaibale(scope is inside componenet)(Hook)
    let [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
       fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //use optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

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