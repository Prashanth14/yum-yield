import { LOGO_URL } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";


const Header = ()  => {
    const[btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    //access context global data
    const {loggedInUser
    } = useContext(userContext);

    //subscribing to the store using Selector(redux)
    const cartItems = useSelector((store) => store.cart.items);

    return(
       <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50" >
            <div className="logo-container">
                <img
                 className="w-20 m-8"
                 src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-10 m-3">
                    <li className="px-4">Online Status:{onlineStatus? " 🟢" : "🔴"}</li>

                    <li className="px-4"><Link to="/">Home</Link></li>

                    <li className="px-4"><Link to="/about">About Us</Link></li>

                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>

                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>

                    <li className="px-4 font-bold text-xl"><Link to="/cart">🛒 -({cartItems.length} items)</Link></li>

                    <button className="login" onClick={() =>{
                        btnNameReact === 'Login' ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                    }}>{btnNameReact}</button>

                    <li className="px-4 font-bold">{loggedInUser
}</li>
                </ul>
            </div>
       </div>
    );
};

export default Header;