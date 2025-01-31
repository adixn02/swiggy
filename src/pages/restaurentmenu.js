import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import useRestaurent from "../utils/useRestromenu";
import useMenucard from "../utils/useMenucard"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartslice";

const Restromenu = () => {
    const { id } = useParams();
    // const [menuCard, setMenuCard] =  useState([]);
    // const [aboutRestaurent, setAboutRestaurent] = useState({}); 


    // manual hooks
    const aboutRestaurent = useRestaurent(id)
    const menuCard = useMenucard(id)

const dispatch = useDispatch()

const handleAddItem =(menu)=>{
dispatch(addItem(menu))
}    

    return (
        <div className="retaurentMenu">
            <div className="aboutRestro m-3 p-3 d-md-flex">
                {aboutRestaurent.cloudinaryImageId && (
                    <img className="aboutRestroImg" alt="restroimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + aboutRestaurent.cloudinaryImageId} />
                )}
                <div className="aboutRestroText ms-md-5 d-flex justify-content-around flex-column">
                    <h1 className="fw-bold"> {aboutRestaurent.name}</h1>
                    <p>{aboutRestaurent.cuisines?.join(", ")}</p>
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <span className="btn btn-success ">
                            {aboutRestaurent.avgRating}
                            <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
                        </span>
                        <span className="restrolocation ms-md-3">{aboutRestaurent.areaName}</span>
                        <span className="restrolocation fw-bold ms-md-3">{aboutRestaurent.costForTwoMessage}</span>
                    </div>
                </div>
            </div>
            {console.log(menuCard.length)}
            <div className="fw-bold text-center">
                we offer you {menuCard?.length} items 🔥🥗
            </div>
            {menuCard?.length > 0 ? (
                menuCard.map((menu) => (
                    <div className="menuCardbox mt-3 mb-2 d-flex justify-content-between p-2" key={menu.card.info.id}>
                        <div className="menuCardboxtext">
                        <p>{menu.card.info.name}</p>
                        {/* handle action */}
                        <button className="btn btn-success" onClick={()=>{
                            handleAddItem(menu.card.info)
                        }}>Add +</button>

                        </div>
                       
                        <img alt="menuItem" className="menuItems" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menu.card.info.imageId} />

                    </div>
                ))
            ) : (
                <p>Loading menu...</p>
            )}
        </div>
    );
};

export default Restromenu;
