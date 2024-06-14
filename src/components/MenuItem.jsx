/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
function MenuItem({ item }) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  console.log(isFavorite);

  // const handleClickFavorite = () => {
  //   if (isFavorite) {
  //     setIsFavorite(false);
  //   } else {
  //     setIsFavorite(true);
  //   }
  // };

  const handleClickFavorite = () => {
    // isFavorite === true ? setIsFavorite(false) : setIsFavorite(true);
    setIsFavorite(!isFavorite);
  };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={item.foodImage} alt={item.description} />
        <figcaption>
          <h2>{item.itemName}</h2>
          <p>{item.description}</p>
        </figcaption>
      </figure>
      <span>{item.price} EUR</span>

      <button onClick={handleClickFavorite}>{isFavorite ? "❤️" : "🖤"}</button>
    </section>
  );
}

export default MenuItem;
