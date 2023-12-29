import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://s3.amazonaws.com/open-to-cors/assignment.json');
      // console.log(result.data.products)
      // console.log(typeof(data));
        const productsArray = Object.values(result.data.products);
        setData(productsArray);
        // console.log(productsArray)
    };

    fetchData();
  }, []);
  // Sort data based on popularity in descending order
  const sortedData = [...data].sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="app">
      <h1>Product Data</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Subcategory</th>
            <th>Title</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.subcategory}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;