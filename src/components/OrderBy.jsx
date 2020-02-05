import React from "react";

export default function OrderBy({ handlingOrder }) {
  return (
    <select
      id="order"
      onClick={event => {
        handlingOrder(event.target.value, "order");
      }}
    >
      <option id="asc" value="asc">
        Ascending
      </option>
      <option id="desc" value="desc">
        Descending
      </option>
    </select>
  );
}
