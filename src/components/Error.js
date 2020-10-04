import React from "react";

const Error = ({ category, city }) => {
  if (category) {
    if (!city) {
      return <div>Please enter a city to choose a category.</div>;
    }
    return null;
  }
  return null;
};

export default Error;
