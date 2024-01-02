import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Body = () => {
    //Local State Variable - super power varaibale(scope is inside componenet)(Hook)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); 
    const [searchText, setSearchText] = useState("");

    console.log("Body rendered");

    useEffect(()=>{
       fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
       
        //use optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    return listOfRestaurants.length === 0 ?
     (<Shimmer/>) :
     ( <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) =>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={() =>{
                        console.log(searchText);
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurants);

                    }}>Search</button>
                </div>

                <button className="filter-btn"
                    onClick={() =>{
                        filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                 </button>

            </div>
            <div className="res-container">
            {filteredRestaurant.map((restaurant) =>{
                return (
                <Link key ={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                    <RestaurantCard  resData={restaurant} />
                </Link>
                )
            })}
            </div>
        </div>
    );
};

export default Body;