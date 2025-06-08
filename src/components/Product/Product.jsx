import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating/Rating';
import './product.css';
const Product = ({ product }) => {
  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img
          className="card-img-top"
          src={product.image}
          alt={`image of ${product.name}`}
        />
      </Link>
      <Card.Body></Card.Body>
      <div className="product-info">
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReview} />
        <Card.Text>
          <strong>€{product.price}</strong>
        </Card.Text>
        <Button className="btn-primary">Add to Cart</Button>
      </div>
    </Card>
  );
};

export default Product;
