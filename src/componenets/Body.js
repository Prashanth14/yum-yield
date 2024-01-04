import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Body = () => {
    //Local State Variable - super power varaibale(scope is inside componenet)(Hook)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); 
    const [searchText, setSearchText] = useState("");

    console.log(listOfRestaurants);

    useEffect(()=>{
       fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
        );

        const json = await data.json();
    //    console.log(json);
        //use optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>You are offline...!, Please check your internet connection!!</h1>;
    }

    //conditional rendering
    return listOfRestaurants.length === 0 ?
     (<Shimmer/>) :
     ( <div className="body">
            <div className="flex">

                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) =>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-1  bg-green-100 m-4 rounded-lg" onClick={() =>{
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurants);

                    }}>Search</button>
                </div>
                
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() =>{
                            filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                            setListOfRestaurants(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
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