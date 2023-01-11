import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filter, setFilter] = useState("All")

  function handleChange(e) {
    setFilter(e.target.value)
  }
  console.log(items)
  console.log(filter)
  const filteredItems = items.filter((item) => item.category === filter || filter==='All')
  console.log(filteredItems)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
