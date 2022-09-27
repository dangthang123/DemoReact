import React, { useEffect, useState } from 'react';

const API_MENU = `
{
    menuItems {
      nodes {
        id
        uri
        label
      }
    }
  }
  `

function MenuAPI() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    // fetch('https://72.arrowhitech.net/tn3/reactjs_thang/backend/graphql/',
    fetch('http://localhost/dataWP/graphql/',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: API_MENU })
      }).then((response) => response.json())
      .then((launches) => setLaunches(launches.data.menuItems.nodes))
  }, []);
  return launches;
}

export default MenuAPI;