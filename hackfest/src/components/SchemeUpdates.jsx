import React, { useEffect, useState } from "react";

const SchemeUpdates = () => {
  const [schemes, setSchemes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/Schemes.json")
      .then((res) => res.json())
      .then((data) => setSchemes(data.records));
  }, []);

  const handleNext = () => {
    if (index < schemes.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  if (schemes.length === 0) return <p>Loading...</p>;

  const scheme = schemes[index];

  return (
    <div>
      <h2>{scheme.scheme_name}</h2>
      <p><strong>Category:</strong> {scheme.category}</p>
      <p>{scheme.description}</p>

      <button onClick={handlePrev} disabled={index === 0}>Previous</button>
      <button onClick={handleNext} disabled={index === schemes.length - 1}>Next</button>
    </div>
  );
};

export default SchemeUpdates;
