import React from "react";
import Item from "../Item/Item";
import "./PostsDisplay.css";

const PostsDisplay = ({currentPosts}) => {
  return (
    <div className="posts-display-container">
      <h1>OUR ALL PRODUCTS</h1>
      <div className="posts-display">
        {currentPosts.map((e, i) => {
          return (
            <Item
              key={i}
              id={e.id}
              image={e.image}
              name={e.name}
              new_price={e.new_price}
              old_price={e.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsDisplay;
