import PropTypes from 'prop-types';

import './Card.css';

const Card = ({
  name,
  description,
  rating,
  price,
  imageUrl,
  _id,
  setProducts,
}) => {
  console.log('imageUrl', imageUrl);
  const updateProductState = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id === id),
    );
  };

  const deleteProductHandler = (id) => {
    console.log('inside delete handler', id);
    fetch(`http://127.0.0.1:3000/api/v1/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    updateProductState(id);
  };

  // const updateProductHandler = (name, language, bio, version, ) => {};
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <p className="desc">Description: {description}</p>
        <p className="product">Rating: {rating}</p>
        <p className="product">Price: {price}</p>
        {/* <button onClick={() => updateProductHandler(id)}>Update Product</button> */}
        <button onClick={() => deleteProductHandler(_id)}>
          Delete Product
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default Card;
