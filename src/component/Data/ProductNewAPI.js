import { useEffect, useState } from 'react';
const GRAPHQL_API_PRODUCTNEW_URL = `
{
  products(first:99999 ) {
    nodes {
      id
      name
      description(format: RAW)
      featured
      image {
        sourceUrl
      }
      reviews {
        averageRating
      }
      ... on SimpleProduct {
        regularPrice(format: RAW)
        onSale
        salePrice(format: RAW)
      }
    }
  }
}
`


function ProductNewAPI() {
  const [productnewApi, setProductNewApi] = useState([]);

  useEffect(() => {
    fetch('http://localhost/dataWP/graphql/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GRAPHQL_API_PRODUCTNEW_URL }),
    }).then((response) => response.json())
      .then((data) => setProductNewApi(data.data.products.nodes))
  })
  return productnewApi;
}

export default ProductNewAPI;