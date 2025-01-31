import { useState,useEffect } from "react"

//  userestrant fetch data for us
const useRestaurent =(id)=>{

// it will get data from api
const [aboutRestaurent,setAboutRestaurent] = useState({})

useEffect(() => {
    getRestaurentmenu();
}, []);

async function getRestaurentmenu() {
    try {
        const api = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.737324&lng=77.090981&submitAction=ENTER&restaurantId=${id}`;
        const response = await fetch(api);
        const data = await response.json();

        const aboutRestro = data?.data?.cards[2]?.card?.card?.info || {}; 

        setAboutRestaurent(aboutRestro);
    } catch (err) {
        console.error("Failed to fetch restaurant menu:", err);
    }
}

//    return restro data
return aboutRestaurent

}

export default useRestaurent