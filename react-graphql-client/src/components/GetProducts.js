import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getAllProducts {
    getAllProducts {
      id
      name
      category
      price
      stock
    }
  }
`;

const GetProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // Log the data to verify its structure
  useEffect(() => {
    if (data) {
      console.log("Fetched Data:", JSON.stringify(data, null, 2));
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Ensure the correct field name based on logged data
  if (!data || !data.getAllProducts || !Array.isArray(data.getAllProducts)) {
    return <p>No products available</p>;
  }

  //let product_data = JSON.parse(data);
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.getAllProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price} - In Stock:{" "}
            {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetProducts;
