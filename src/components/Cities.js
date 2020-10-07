import React from "react";
import cities from "../api/cities.json";

const Cities = ({ handleCityChange }) => {
  const handleChange = (e) => {
    handleCityChange(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Choose a city</h3>
      <select
        className="custom-select"
        name="cities"
        id="cities"
        onChange={handleChange}
      >
        <option value="">Select a City</option>
        {cities.map((city, id) => (
          <option key={id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cities;
