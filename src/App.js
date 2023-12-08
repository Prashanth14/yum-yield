import React from "react";
import ReactDOM from "react-dom/client"


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

const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="meghana-foods" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+cloudinaryImageId} />

            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
{
    "info": {
        "id": "748435",
        "name": "Bells N Pepper",
        "cloudinaryImageId": "578d0ab17d249663db3d714764db9faa",
        "locality": "Vv Nagar Rd",
        "areaName": "Kothapet & Dilsukhnagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Fast Food",
          "Pizzas",
          "Burgers",
          "Snacks"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "748435",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 6900
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6900
        },
        "parentId": "443366",
        "avgRatingString": "4.1",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "59 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-08 05:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-10b9ca22-adfd-44f5-b46e-d492016aba49"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bells-n-pepper-vv-nagar-rd-kothapet-and-dilsukhnagar-hyderabad-748435",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "261926",
        "name": "Paratha Wala",
        "cloudinaryImageId": "xemt2bldi0siggo6uv6h",
        "locality": "Gaddiannaram",
        "areaName": "New Malakpet",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 3.8,
        "veg": true,
        "feeDetails": {
          "restaurantId": "261926",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6900
        },
        "parentId": "13893",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "48 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-08 05:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-10b9ca22-adfd-44f5-b46e-d492016aba49"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/paratha-wala-gaddiannaram-new-malakpet-hyderabad-261926",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "654880",
        "name": "Chinese Kitchen",
        "cloudinaryImageId": "2048d975a6b1cbcefeebe8e29b0067c1",
        "locality": "Kamala nagar",
        "areaName": "Kothapet & Dilsukhnagar",
        "costForTwo": "₹249 for two",
        "cuisines": [
          "Chinese",
          "North Indian"
        ],
        "avgRating": 3.4,
        "feeDetails": {
          "restaurantId": "654880",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6900
        },
        "parentId": "2976",
        "avgRatingString": "3.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 5.7,
          "serviceability": "SERVICEABLE",
          "slaString": "50 mins",
          "lastMileTravelString": "5.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-08 05:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-10b9ca22-adfd-44f5-b46e-d492016aba49"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chinese-kitchen-kamala-nagar-kothapet-and-dilsukhnagar-hyderabad-654880",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "133012",
        "name": "Sahadeva Reddy's Southern Spice",
        "cloudinaryImageId": "akjipugl1rndwtrbhbml",
        "locality": "Kothapet & Dilsukhnagar",
        "areaName": "Dilsukhnagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "133012",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5100
        },
        "parentId": "230998",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "42 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-12-08 05:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-10b9ca22-adfd-44f5-b46e-d492016aba49"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sahadeva-reddys-southern-spice-kothapet-and-dilsukhnagar-hyderabad-133012",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
];
    

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {resList.map((restaurant) =>{
                return <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
            })}
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




