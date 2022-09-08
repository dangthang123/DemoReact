import React, { useEffect, useState } from 'react';

const API_POST = `
{
  categories(first:99999 )  {
    nodes {
      id
      name
      slug
      posts {
        nodes {
          id
          slug
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
  `

function PostAPI() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('http://localhost/dataWP/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: API_POST })
    }).then((response) => response.json())
      .then((launches) => setLaunches(launches.data.categories.nodes))
  }, []);
  return launches;
}

export default PostAPI;