import React, { useState, useEffect } from "react";

const DataTable = ({ category, city }) => {
  const [data, setData] = useState(null);
  console.log("1", city, category);
  useEffect(() => {
    console.log(
      "2",
      city,
      category,
      `https://halit-london-guide.herokuapp.com/${city}/${category}`
    );

    fetch(`https://halit-london-guide.herokuapp.com/${city}/${category}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [category, city]);

  return (
    <div style={{ width: "80%" }}>
      {data && console.log("table", data)}
      <h3 className="text-center m-5">
        {city} {category}
      </h3>
      <div className="table-responsive text-center">
        <table className="table" style={{ maxWidth: "70%" }}>
          <thead className="table-dark">
            <tr>
              {data &&
                Object.keys(data[0]).map((p, i) => {
                  return (
                    <th scope="col" key={i}>
                      {p}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((p, i) => {
                return (
                  <tr className="w-85 text-wrap" key={i}>
                    {Object.values(p).map((k, i) => {
                      return <td key={i}>{k}</td>;
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
