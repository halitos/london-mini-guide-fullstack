import React, { useState } from "react";
import Cities from "./components/Cities";
import Categories from "./components/Categories";
import DataTable from "./components/DataTable";
import Error from "./components/Error";

function App() {
  const [city, setCity] = useState(null);
  const [category, setCategory] = useState(null);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const handleCategory = (category) => {
    setCategory(category);
  };

  return (
    <div
      className="d-flex flex-column m-3 p-4 align-items-center justify-content-between"
      style={{
        minHeight: "80vh",
      }}
    >
      <h1>London Mini Guide</h1>
      <Cities handleCityChange={handleCityChange} />
      {!city && category && <Error />}
      <Categories handleCategory={handleCategory} category={category} />
      {category && city && <DataTable category={category} city={city} />}
    </div>
  );
}

export default App;
