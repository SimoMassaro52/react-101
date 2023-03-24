import "../styles/Cards.css";
import img1 from "../../public/images/katie-zaferes.png";
import Card from "./Card";
import cardData from "../data";

export const Cards = () => {
  const cardElems = cardData.map((card) => {
    return (
      <Card
        // To fix the "Each child in a list should have a unique key prop" error we need to give our component precisely a "key" attribute with a prop that is unique to the element. We will use the id in this xase
        key={card.id}
        //There's also no need to write all of the attributes in the emitting component because it can be pretty lengthy.
        // img={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // title={card.title}
        // price={card.price}
        // open={card.openSpots}
        // country={card.location}

        // We can just pass the entire "card" element as a unique attribute that will be the "master key" of our card object.
        card={card}
        // This can also be achieved by using the spread operator.
        //The spread operator allows us to expand our array/object into multiple elements. Mind that then we will not need use the card "master key", we can just use props.key
        {...card}
      />
    );
  });
  return <section className="cards-wrap">{cardElems}</section>;
};
