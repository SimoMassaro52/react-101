import "../styles/Cards.css";
import star from "../../public/images/star.png";

const Card = (props) => {
  // By exploiting the properties of objects, we are using the card key that was passed from the component as an attribute to refer to the original keys in our code injection
  return (
    <div className="single-card">
      <div className="card-img-box">
        <img
          src={`../../public/images/${props.card.coverImg}`}
          className="card-img"
        />
        {/* Rendering the soldout tag only if openSpots is equal to 0 */}
        {props.card.openSpots === 0 && (
          <span className="card-img-tag">SOLD OUT</span>
        )}
      </div>
      <div className="card-info-box">
        <span className="card-info-review">
          <div>
            <img src={star} className="card-star" />
            <span>{props.card.stats.rating}</span>
          </div>
          <span className="review-info">
            {"("}
            {props.card.stats.reviewCount}
            {") "}
            &#8226; {props.card.location}
          </span>
        </span>
        <span className="card-info-bio">{props.card.title}</span>
        <span className="card-info-price">
          <strong>From ${props.card.price} </strong>
          <span>/ person</span>
        </span>
      </div>
    </div>
  );
};

// For the sake of clarity, here's how we would write this div if the spread operator was used to pass the card object. Notice how we no longer need to use the card key because the object has been spread
{
  /* <div className="single-card">
      <div className="card-img-box">
        <img
          src={`../../public/images/${props.coverImg}`}
          className="card-img"
        />
        {props.openSpots === 0 && (
          <span className="card-img-tag">SOLD OUT</span>
        )}
      </div>
      <div className="card-info-box">
        <span className="card-info-review">
          <div>
            <img src={star} className="card-star" />
            <span>{props.stats.rating}</span>
          </div>
          <span className="review-info">
            {"("}
            {props.stats.reviewCount}
            {") "}
            &#8226; {props.location}
          </span>
        </span>
        <span className="card-info-bio">{props.title}</span>
        <span className="card-info-price">
          <strong>From ${props.price} </strong>
          <span>/ person</span>
        </span>
      </div>
    </div> */
}

export default Card;
