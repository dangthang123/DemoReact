import { useEffect, useState } from 'react';

const GRAPHQL_API_CATEGORY_URL = `
{
  productCategories(first:99999 )  {
    nodes {
      id
      name
      slug
      image{
        sourceUrl
      }
      products {
        nodes {
          id
          name
          description(format: RAW)
          featured
          reviews {
            averageRating
          }
          image {
            sourceUrl
          }
          ... on SimpleProduct {
            id
            regularPrice(format: RAW)
            onSale
            salePrice(format: RAW)
          }
        }
      }
    }
  }
}
`

function CategoryPageAPI() {
  const [categoryApi, setCategoryApi] = useState([]);

  useEffect(() => {
    // fetch('https://72.arrowhitech.net/tn3/reactjs_thang/backend/graphql/',
    fetch('http://localhost/dataWP/graphql/',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: GRAPHQL_API_CATEGORY_URL })

      }).then((response) => response.json())
      .then((data) => setCategoryApi(data.data.productCategories.nodes))
  }, [])
  return categoryApi;
}

export default CategoryPageAPI;