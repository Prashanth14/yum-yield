import { CDN_URL } from "../../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className="rounded-lg" 
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId} />

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
        </div>
    );
};

//Higher order component
export const withDealLabel = (RestaurantCard) =>{
    return (props) => {
        return(
            <div>
                <label className="absolute rounded-lg p-1 m-1 bg-orange-500 flex justify-center items-center">{props.resData?.info?.aggregatedDiscountInfoV3?.header + " "+ props.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;