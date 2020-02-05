import React from "react";

export default function SortBy({ handlingOrder }) {
  return (
    <select
      id="sort"
      onClick={event => {
        event.preventDefault();
        handlingOrder(event.target.value, "sort_by");
      }}
    >
      <option value="created_at">Date</option>
      <option value="comment_count">Comments</option>
      <option value="votes">Votes</option>
    </select>
  );
}
