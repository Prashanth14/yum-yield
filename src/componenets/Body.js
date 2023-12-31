import RestaurantCard, {withDealLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";

const Body = () => {
    //Local State Variable - super power varaibale(scope is inside componenet)(Hook)
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); 
    const [searchText, setSearchText] = useState("");

    // console.log(listOfRestaurants);

    //Higher order component
    const RestaurantCardDeal = withDealLabel(RestaurantCard);

    useEffect(()=>{
       fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
        );

        const json = await data.json();
    //    console.log(json);
        //use optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>You are offline...!, Please check your internet connection!!</h1>;
    }

    const {loggedInUser, setUserName} = useContext(userContext);

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
               
                <div className="search m-4 p-4 flex items-center ">
                    <label>Username: </label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                
            </div>
            <div className="flex flex-wrap">
            {filteredRestaurant.map((restaurant) =>{
                return (
                <Link key ={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                    
                    {restaurant?.info?.aggregatedDiscountInfoV3?.header? <RestaurantCardDeal resData={restaurant}/>: <RestaurantCard  resData={restaurant} />}
                    
                </Link>
                )
            })}
            </div>
        </div>
    );
};

export default Body;