import { useEffect, useState } from 'react';

const GRAPHQL_API_ABOUT_URL = `
{
    abouts {
      nodes {
        id
        name
        work
        contentitle
        email
        img {
          sourceUrl
        }
        
      }
    }
  }
`

function AboutPageAPI() {
  const [aboutApi, setAboutApi] = useState([]);

  useEffect(() => {
    // fetch('https://72.arrowhitech.net/tn3/reactjs_thang/backend/graphql/',
    fetch('http://localhost/dataWP/graphql/',
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: GRAPHQL_API_ABOUT_URL }),
      }).then((response) => response.json())
      .then((data) => setAboutApi(data.data.abouts.nodes))
  }, [])
  return aboutApi;
}

export default AboutPageAPI;