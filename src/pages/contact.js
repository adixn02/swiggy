import contactus from "../assets/contactus.svg";
import useOnline from "../utils/useOnline";

const Contact = () => {
// we are going to useonline custom hook in our contact page
  const isOnline = useOnline()

  if (!isOnline){
return <h1>offline , check your internet conection !</h1>
  }
  return (
    <div className="contact">
      <div className="row">
        <div className="col-lg-5 p-5 text-center">
          <img src={contactus} alt="logo" loading="lazy" className="contactexecuivelogo" />
          <p>
            <span className="h5 me-4">
              <i
                className="fa-solid fa-phone"
                style={{ marginRight: "1rem",fontSize: "1.5rem" }}
              ></i>
              +91 8456 787 787
            </span>
            <span className="h5">
              <i
                className="fa-solid fa-envelope"
                style={{ fontSize: "1.5rem" }}
              ></i>
              support@swiggyx.com
            </span>
          </p>
          <p className="h5 mb-4">
            <i
              className="fa-solid fa-location-dot"
              style={{ fontSize: "1.5rem" }}
            ></i>
            Panipat, Kabul Bagh
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222482.8334228137!2d76.9635023!3d29.390946399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694831892860!5m2!1sen!2sin"
            width="300"
            height="150"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="googlemaps"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          className="col-lg-7 touch p-5"
          style={{ background: "rgba(244,244,244)" }}
        >
          <div className="col-md-8 offset-md-2">
            <div className="touchbox p-5">
              <h2 className="h3">Get in touch</h2>
              <p className="fs-5 text-secondary">
                Our friendly team would love to hear from you!
              </p>
              <form action="">
                <label htmlFor="username" className="w-100 fs-6 mb-0">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-100 fs-4 mb-3"
                  required
                />

                <label htmlFor="usermail" className="w-100 fs-6 mb-0">
                  Email
                </label>
                <input
                  type="email"
                  name="useremail"
                  id="usermail"
                  className="w-100 fs-4 mb-3"
                  required
                />

                <label htmlFor="userno" className="w-100 fs-6 mb-0">
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="userno"
                  id="userno"
                  className="w-100 fs-4 mb-3"
                  maxLength="10"
                  required
                />

                <label htmlFor="usermessage" className="w-100 fs-6 mb-0">
                  Message
                </label>
                <textarea
                  name="usermessage"
                  id="usermessage"
                  className="w-100 fs-4 mb-3"
                  required
                  maxLength="200"
                  style={{ height: "10rem" }}
                ></textarea>

                <input
                  type="checkbox"
                  id="usercheck"
                  className="fs-3"
                  required
                />
                <label
                  htmlFor="usercheck"
                  className="fs-6 text-secondary ms-2"
                >
                  I agree to your friendly privacy policy
                </label>

                <input
                  type="submit"
                  value="Send Message"
                  className="w-100 mt-3 btn btn-primary fs-5"
                />
              </form>
              <p className="fs-4 fw-bold mt-5 text-center m-5">Follow Us!</p>
              <div className="socialIcons d-flex align-items-center justify-content-around">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fa-brands fa-facebook fs-2"
                    style={{ color: "#2671f2" }}
                  ></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter fs-2"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fa-brands fa-instagram fs-2"
                    style={{ color: "rgba(268,64,95)" }}
                  ></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fa-brands fa-tiktok fs-2"
                    style={{ color: "#000000" }}
                  ></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fa-brands fa-youtube fs-2"
                    style={{ color: "#f22626" }}
                  ></i>
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                  <i
                    className="fa-solid fa-paper-plane fs-2"
                    style={{ color: "#0088CC" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
