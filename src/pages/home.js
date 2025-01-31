import { useState, useEffect,useContext } from "react"
// import ShimmerList from "../constants/restrolistshimer"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { filterdata } from "../utils/utils";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Restuarentcard = (restaurt) => {
  
    // recieveing from body 
    return (
        <div className="card ">
            <img alt="restro" className="card_img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurt.info.cloudinaryImageId} />
            <span className="restroName fw-bold m-1">{restaurt.info.name}</span>
            <span className="text-muted restrocuisne">{restaurt.info.cuisines.join(", ")}</span>
            <div className="d-flex align-items-center justify-content-between mt-2">

                <span className="restrolocation">{restaurt.info.areaName}</span>
                <span className="btn btn-success ">{restaurt.info.avgRating} <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", }} /></span>


            </div>
            {/* 000 */}
            {/* <p>{restaurt.user.name}</p> */}
            {/* {console.log(restaurt.user.name)} */}


        </div>
    )
}
// page 66 done..
const Restrolist = (props) => {



    // return (props.allrestaurant.length === 0) ? <ShimmerList /> : (
    return (props.allrestaurant.length === 0) ? <p>restaurent loading...</p> : (
        <>


            {/* { restaurent} */}
            <div className="restro-list">
                {
                    props.filteredrestro.map((restaurant) => {
                        return (
                            <Link className="text-decoration-none" to={"/restaurent/" + restaurant.info.id} >
                                {/* passing user name to restro card from body */}
                                <Restuarentcard {...restaurant} key={restaurant.info.id} user={props.user} />
                            </Link>
                        )

                    })
                }
            </div >
        </>
    )
}

const Home = ({userpd}) => {
      // recieveing restro card from app.js to body
    const [searchtxt, setSearchtxt] = useState("")
    const [allrestaurant, setAllrestaurant] = useState([])
    const [filteredrestro, setFilteredrestro] = useState([])
    const [loading, setLoading] = useState(true); 

    // const {userinfo,setUserinfo} = useContext(UserContext);
    // console.log(userinfo.name)
    const {user,setUser} = useContext(UserContext);
    // console.log(user)
  

    useEffect(() => {
        getReastaurent()
    }, [])

    async function getReastaurent() {
        try {
            setLoading(true); // Start loading
            // 1st fetching
            const response1 = await fetch("https://foodfire.onrender.com/api/restaurants?lat=28.737324&lng=77.090981&page_type=DESKTOP_WEB_LISTING");
            const jsondata1 = await response1.json();
            const restaurants1 = jsondata1.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            //   2nd fetching
            const response2 = await fetch("https://foodfire.onrender.com/api/restaurants?lat=28.5534&lng=77.3373&page_type=DESKTOP_WEB_LISTING");
            const jsondata2 = await response2.json();
            const restaurants2 = jsondata2.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            //   3rd fetching
            const response3 = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702&lng=72.8311&page_type=DESKTOP_WEB_LISTING");
            const jsondata3 = await response3.json();
            const restaurants3 = jsondata3.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
            const combinedRestaurants = [...restaurants1, ...restaurants2, ...restaurants3];
            setAllrestaurant(combinedRestaurants);
            setFilteredrestro(combinedRestaurants)
            setLoading(false); // End loading
        } catch (err) {
            console.log("failed to load restaurent", err)
            setLoading(false); // End loading

        }


    }

    const isOnline = useOnline()

    if (!isOnline){
return <h1>offline , check your internet conection !</h1>
    }
    // returning jsx here...revise.
    return (
        <>
            {/* {search container} */}
            <div className="search-container m-4 d-flex align-items-center justify-content-center" >
                <input type="text" className="search-input w-50 p-1" placeholder="seach a restaurent here ..." value={searchtxt} onChange={(e) => setSearchtxt(e.target.value)} />
                <button className="btn search-btn ms-3 text-white" onClick={() => {
                    const data = filterdata(allrestaurant, searchtxt)
                    setFilteredrestro(data)
                }
                } >Search</button>
            </div>
            <div className="search-container m-4 d-flex align-items-center justify-content-center flex-column" >
                <h2>change website name </h2>
                <input type="text" className="search-input w-50 p-1" placeholder="write here.." value={user.name} onChange={(e)=>{setUser({name : e.target.value})}} />
                {/* <button className="btn search-btn ms-3 text-white" onClick={() => {
                  
                }
                } >update name </button> */}
            </div>
            <Restrolist allrestaurant={allrestaurant} setallrestro={setAllrestaurant} filteredrestro={filteredrestro} user={userpd}/>
        </>
    )
}
export default Home