import React from "react";
import categories from "../api/categories.json";

const Categories = ({ handleCategory, category }) => {
  const handleClick = (e) => {
    handleCategory(e.target.value);
  };

  return (
    <div>
      <h2 className="m-4 text-center text-muted">Categories</h2>
      <div>
        {categories.map((ctegory, i) => (
          <button
            className="btn btn-dark mr-3"
            type="button"
            key={i}
            value={ctegory.name.toLowerCase()}
            onClick={handleClick}
            // style={{
            //   backgroundColor: ctegory.name === category ? "red" : "green",
            // }}
          >
            {ctegory.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
