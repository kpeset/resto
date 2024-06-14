/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  return (
    <>
      {/* Si on n'est pas encore à l'aise avec les méthodes de tableau */}
      {/* <MenuItem item={foodItems[0]} />
      <MenuItem item={foodItems[1]} />
      <MenuItem item={foodItems[2]} />
      <MenuItem item={foodItems[3]} /> */}

      {foodItems.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </>
  );
}

export default MenuList;
