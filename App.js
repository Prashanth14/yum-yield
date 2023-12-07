import React from "react";
import ReactDOM from "react-dom/client"

/*
App Layout
i. Header
    -logo
    -nav-items
ii.Body
    -RestaurantContainer
    -RestaurantCard
        -image
        -Name of Restaurant
        -star rating
        -cuisine
        -deliverty time
iii.
    -copyright
    -Links
    -Address
    -contact
*/
const Header = ()  => {
    return(
       <div className="header">
            <div className="logo-container">
                <img
                 className="logo"
                 src="https://static.vecteezy.com/system/resources/previews/025/556/408/large_2x/fast-food-burger-poster-burger-design-service-promotion-template-burger-flyer-for-restaurant-menu-cafe-etc-generative-ai-free-photo.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
       </div>
    );
};

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img className="res-logo" alt="meghana-foods" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/btea7jwuwkbgd0nebcyd"/>

            <h3>Meghana Foods</h3>
            <h4>Biryani, South Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};


const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);




