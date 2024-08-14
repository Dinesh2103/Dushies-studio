import { useState } from 'react';
import Card from './card/Card';
import Loader from './loader/Loader';
import './ViewProducts.css';
import { useEffect } from 'react';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => getProductsHandler, []);

  const getProductsHandler = async () => {
    // e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:3000/api/v1/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        setProducts(data.data.products);
      } else {
        console.error('Failed to fetch products:', data.message);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <div>
        <button onClick={getProductsHandler}>Get Products</button>
      </div> */}
      {loading ? (
        <Loader />
      ) : (
        <div className="card-container">
          {products.map((product, index) => {
            console.log(product);
            console.log('image url from view products page', product.imageUrl);
            return <Card key={index} {...product} setProducts={setProducts} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ViewProducts;
