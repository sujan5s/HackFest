import React, { useEffect, useState } from "react";

const SchemeUpdates = () => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("/Schemes.json")
      .then((res) => res.json())
      .then((data) => setSchemes(data.records));
  }, []);

  return (
    <div>
      <h2>Govt Schemes</h2>
      <ul>
        {schemes.map((s) => (
          <li key={s.id}>
            <b>{s.scheme_name}</b> - {s.category}
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchemeUpdates;
