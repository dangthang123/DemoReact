import axios from 'axios';
import { fetchDataCategorySuccess, fetchDataPostSuccess, fetchDataSuccess, fetchDataMenuSuccess, fetchDataAboutSuccess } from '../Action/Action';

export const listproduct = () => async (dispath) => {
  const data = await
    axios("http://localhost/dataWP/graphql/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        query: `
                    {
                        products(first:99999 ) {
                          nodes {
                            id
                            name
                            slug
                            description(format: RAW)
                            shortDescription(format:RENDERED)  
                            featured
                            reviewCount
                            productCategories {
                              nodes {
                                name
                                slug
                              }
                            }
                            image {
                              sourceUrl
                            }
                            galleryImages {
                              nodes {
                                sourceUrl
                              }
                            }
                            reviews {
                              averageRating
                              nodes {
                                id
                                author {
                                  node {
                                    name
                                  }
                                }
                                content
                                date
                              }
                            }
                            ... on SimpleProduct {
                              regularPrice(format: RAW)
                              onSale
                              salePrice(format: RAW)
                              sku
                            }
                          }
                        }
                      }
            `})
    })
      .then((response) => {
        dispath(fetchDataSuccess(response.data.data.products.nodes));
      })
  // console.log(data);
  return data;
}

export const listcategoryproduct = () => async (dispath) => {

  const data = await
    axios("http://localhost/dataWP/graphql/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        query: `
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
            `})
    })
      .then((response) => {
        dispath(fetchDataCategorySuccess(response.data.data.productCategories.nodes));
      })
  // console.log(data);
  return data;
}

export const listpost = () => async (dispath) => {

  const data = await
    axios("http://localhost/dataWP/graphql/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        query: `
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
            `})
    })
      .then((response) => {
        dispath(fetchDataPostSuccess(response.data.data.categories.nodes));
      })
  // console.log(data);
  return data;
}

export const listmenu = () => async (dispath) => {

  const data = await
    axios("http://localhost/dataWP/graphql/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        query: `
        {
          menuItems {
            nodes {
              id
              uri
              label
            }
          }
        }
            `})
    })
      .then((response) => {
        dispath(fetchDataMenuSuccess(response.data.data.menuItems.nodes));
      })
  // console.log(data);
  return data;
}

export const listabout = () => async (dispath) => {

  const data = await
    axios("http://localhost/dataWP/graphql/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        query: `
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
            `})
    })
      .then((response) => {
        dispath(fetchDataAboutSuccess(response.data.data.abouts.nodes));
      })
  // console.log(data);
  return data;
}