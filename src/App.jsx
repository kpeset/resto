import "./App.css";
import MenuList from "./components/MenuList";

import { foodItems } from "./data/data";

const App = () => {
  return (
    <article>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
    </article>
  );
};

export default App;
