import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    title: `
    100 mm long ceramic probe, 
    6 mm ball, 
    M4 thread
    `,
    image: `/assets/product 1.png`,
  },
  {
    id: 2,
    title: `
    50mm Long, 6mm Ball, 
    M4 Probe Stylus
    `,
    image: `/assets/product 2.png`,
  },
  {
    id: 3,
    title: `
    27 mm Hammer 3D taster stylus, 
    ceramic shaft, 
    4 mm ball
    `,
    image: `/assets/product 3.png`,
  },
];

const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Our Products | PrecisionTech</title>
        <meta
          name="description"
          content="Explore our comprehensive range of CNC machining and technical products"
        />
        <meta
          name="keywords"
          content="CNC machining, machine repairs, CNC products, CAM programming, operator training, machinery servicing, CAD/CAM support"
        />
      </Helmet>

      {loading ? (
        <div className="loader-container">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="#1F3946"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : (
        <div className="products-page">
          <section className="product-page-section">
            <h2 className="product-page-title">Our Products</h2>

            <div className="products-container">
           
            <div className="product-grid">
              {products.map((product) => (
                <div className="product-box" key={product.id}>
                  <img src={product.image} alt={product.title} className="product-image" />
                  <h3 className="product-title">{product.title}</h3>
                </div>
              ))}
               </div>
              
            </div>
            <Link to="/contact">
          <button className="contact">CONTACT</button>
        </Link>
          </section>
        </div>
      )}
    </div>
  );
};

export default Products;

