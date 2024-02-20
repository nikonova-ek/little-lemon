import "./Testimonials.css";
import ratings from "../../../assets/rating.png";
import profile1 from "../../../assets/profile1.jpeg";
import profile2 from "../../../assets/profile2.jpeg";
import profile3 from "../../../assets/profile3.jpeg";
import profile4 from "../../../assets/profile2.jpg";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile1} alt="Customer Pic" />
            <h2>Peter R. </h2>
            <p>"Really enjoyed the atmosphere."</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile2} alt="Customer Pic" />
            <h2>Brandon M.</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile3} alt="Customer Pic" />
            <h2>Selena G.</h2>
            <p>"You have to try the Greek Salad!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile4} alt="Customer Pic" />
            <h2>Neha J.</h2>
            <p>"Awesome place peaceful atmosphere with delicious food"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;