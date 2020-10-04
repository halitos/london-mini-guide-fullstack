import React, { useState, useEffect } from "react";

const DataTable = ({ category, city }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://halit-london-guide.herokuapp.com/${city}/${category}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [category, city]);

  if (category && city) {
    return (
      <div style={{ width: "60vw", textAlign: "center" }}>
        {/* {data && console.log("table", data)} */}
        <h3 className="text-center m-5 text-info">
          {city} {category}
        </h3>
        <table className="table">
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
    );
  } else return null;
};

export default DataTable;
