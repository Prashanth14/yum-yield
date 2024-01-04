import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = ()  => {
    const[btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

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
                    <li className="px-4"><Link to="/">Cart</Link></li>
                    <button className="login" onClick={() =>{
                        btnNameReact === 'Login' ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
       </div>
    );
};

export default Header;