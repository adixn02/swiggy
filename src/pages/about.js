import { Link } from "react-router-dom"
import aboutburger from "../assets/aboutburger.png"
const About =()=>{
    return(
    <div className="container">
        <div className="d-flex align-items-center justify-content-center">
        <Link to="/contact" className="text-decoration-none text-white m-4  h2 p-2" style={{backgroundColor:"rgba(254, 80, 5, 0.91)",borderRadius:"15px"}}>Contact</Link>
        </div>
    <div className="aboutview d-md-flex pt-md-3 pb-5">
     <div className="abvtext mt-md-5 ">
        <p className="display-4 fw-bold">Welcome To</p>
        <p className="display-4 fw-bold">The world of</p>
<p className="display-4 fw-bold p-2 text-center " style={{backgroundColor:"rgba(254, 80, 5, 0.91)",borderRadius:"15px"}}>Tasty & Fresh Food</p>
<em className="h3 fw-bold">"Better you will feel if you eat a <span style={{color:"rgb(254,80,5)"}}>Swiggy</span> healthy meal"</em>
     </div>
     <div className="abvImg">
        <img alt="aboutburger" className="aboutburger ms-md-5 mt-5 mt-md-0" src={aboutburger}/>
     </div>
    </div>
    <div className="achievements mt-4">
              <div className="row pb-5">
                <div className="col-md-3 text-center achieve">
                  <i className="fa-solid fa-users fs-2"></i>
                  <h2 className="h2 mt-3 greencolor fw-bold">60,00,000+</h2>
                  <p className="fs-5 mt-1 text-muted">Orders Delivered</p>
                </div>
                <div className="col-md-3 text-center achieve">
                  <i className="fa-solid fa-earth-americas fs-2" ></i>
                  <h2 className="h2 mt-3 greencolor fw-bold">20,00+</h2>
                  <p className="fs-5 mt-1 text-muted">restaurant partners</p>
                </div>
                <div className="col-md-3 text-center achieve">
                  <i className="fa-solid fa-face-smile fs-2"></i>
                  <h2 className="h2 mt-3 greencolor fw-bold">1 Million+</h2>
                  <p className="fs-5 mt-1 text-muted">Happy Customers</p>
                </div>
                <div className="col-md-3 text-center ">
                  <i className="fa-solid fa-star fs-2" ></i>
                  <h2 className="h2 mt-3 greencolor fw-bold">4.5+</h2>
                  <p className="fs-5 mt-1 text-muted">Google Rating</p>
                </div>
              </div>
            </div>
    </div>
    )
}
export default About