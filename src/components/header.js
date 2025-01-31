import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useOnline from "../utils/useOnline";
import React,{useContext} from "react"
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";



// const title = (<h3 className="text-white ">Swiggy</h3>)

const Header = () => {
        const isOnline = useOnline()

        const userinfo = useContext(UserContext);
        // console.log(userinfo.user.name)

        const cartItems = useSelector(store => store.cart.items)
        console.log(cartItems)
        
        return (
                <div className="header p-3">
                        <div className="container">
                                <div className="d-flex align-items-center justify-content-between">
                                        {/* title */}
                                        {userinfo.user.name}

                                        <nav className="d-none d-md-block">
                                                <ul className="d-flex list-unstyled mt-2">
                                                        <li className="me-3">
                                                                <Link to="/" className="text-white text-decoration-none ">Home</Link>
                                                        </li>
                                                        <li className="me-3">
                                                                <Link to="/about" className="text-white text-decoration-none ">About</Link>
                                                        </li>
                                                        <li className="me-3">
                                                                <Link to="/contact" className="text-white text-decoration-none ">Contact</Link>
                                                        </li>
                                                        <li className="me-3">
                                                                <Link to="/instamart" className="text-white text-decoration-none ">Instamart</Link>
                                                        </li>
                                                        <li className=" me-3">
                                                        <Link to="/cart" className="text-white text-decoration-none ">Cart<FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} /> <span className="bg-light text-black p-2">{cartItems.length}</span></Link>
                                                         </li>
                                                        <li className={`text-white text-decoration-none btn ${isOnline ? "btn-success bg-green" : "btn-danger bg-red" }`}> {isOnline ? "Online" : "Offline"}</li>
                                                </ul>
                                        </nav>
                                </div>
                        </div>
                </div>

        )
}

export default Header