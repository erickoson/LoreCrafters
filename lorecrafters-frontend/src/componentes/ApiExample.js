// src/componentes/ApiExample.js
import React, { useEffect, useState } from 'react';

const ApiExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Aquí deberías realizar la llamada a tu API
    // Puedes usar fetch o axios, por ejemplo
    fetch('https://api.ejemplo.com/data')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>API Example</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ApiExample;
