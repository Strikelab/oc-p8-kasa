import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Test() {
  //state
  const [logements, setLogements] = useState([]);

  //comportments
  useEffect(() => {
    // Fetch the data from the server.
    fetch("https://mocki.io/v1/edf90915-de99-43ce-a19d-ea9143957462")
      .then((response) => response.json())
      .then((json) => {
        // Set the data state.
        setLogements(json);
      });
  }, []);

  //display
  return (
    <div>
      {logements.map((logement) => (
        <div key={logement.id}>
          <Card title={logement.title} />
        </div>
      ))}
    </div>
  );
}
// This code will fetch the data from the server when the component is first rendered.
// The data will then be stored in the `data` state. The render function will use the
//  data to render the component's UI.
