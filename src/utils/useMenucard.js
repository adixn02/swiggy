import { useState,useEffect } from "react"

//  userestrant fetch data for us
const useMenucard =(id)=>{

// it will get data from api
const [menuCard, setMenuCard] = useState([]);

useEffect(() => {
    getRestaurentmenu();
}, []);

async function getRestaurentmenu() {
    try {
        const api = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.737324&lng=77.090981&submitAction=ENTER&restaurantId=${id}`;
        const response = await fetch(api);
        const data = await response.json();

        const menuData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];  

        setMenuCard(menuData);
    } catch (err) {
        console.error("Failed to fetch restaurant menu:", err);
    }
}

//    return restro data
return menuCard

}

export default useMenucard