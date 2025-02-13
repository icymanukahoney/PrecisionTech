import React, { useEffect, useRef, useState } from 'react'
import '../scss/App.css';
import { Link } from 'react-router-dom';
import Services from './Services';
import QuoteForm from '../components/QuoteForm';
import { gsap } from "gsap";
import { Draggable } from 'gsap/all';
import { Helmet } from 'react-helmet-async';
import { RotatingLines } from 'react-loader-spinner';

gsap.registerPlugin(Draggable);

const Home = () => {

  const [loading, setLoading] = useState(true);
  const imgRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
  const flowersRef = useRef(null);

  const flowerClickHandler = (flower) => {
    gsap.to(flower, {
      rotation: '+=360',
      transformOrigin: 'center',
    });
  };

  useEffect(() => {
    const flowers = flowersRef.current?.querySelectorAll('.gears img');
    if (flowers) {
      flowers.forEach((flower) => {
        flower.addEventListener('click', () => flowerClickHandler(flower));
      });
    }

    return () => {
      if (flowers) {
        flowers.forEach((flower) => {
          flower.removeEventListener('click', () => flowerClickHandler(flower));
        });
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    if (!loading) {
      imgRefs.current.forEach(imgRef => {
        const img = imgRef.current;
        if (!img) return;

        Draggable.create(img, {
          type: "x,y",
          bounds: "#container",
          edgeResistance: 0.5,
          onDrag: adjustOpacity,
          onThrowUpdate: adjustOpacity,
        });
      });
    }

    return () => clearTimeout(timer); // Cleanup timer
  }, [loading]);

  function adjustOpacity() {
    const distanceFromMaxX = this.x - this.maxX;
    const distanceFromMinX = this.minX - this.x;
    const distanceFromMaxY = this.y - this.maxY;
    const distanceFromMinY = this.minY - this.y;
    const opacityRange = 100;
    const furthestDistance = Math.max(
      distanceFromMaxX,
      distanceFromMinX,
      distanceFromMaxY,
      distanceFromMinY
    );
    let opacity = 1;
    if (furthestDistance > 0) {
      opacity = 1 - Math.min(furthestDistance, opacityRange) / opacityRange;
    }
    gsap.set(this.target, { opacity: opacity });
  }

  if (loading) {
    return (
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
    );
  }

  return (
    <div className="wrapper-home-page">
      <Helmet>
        <title>Home | PrecisionTech Services</title>
        <meta name="description" content="Welcome to PrecisionTech Services. We provide CNC machining support, mechanical fault finding, and much more." />
        <meta name="keywords" content="CNC machining, precision services, mechanical fault finding, CAM programming, retrofitting, machine controls, operator training, technical services, PLC programming, PrecisionTech Services, service, products, mechanical, technical service" />
      </Helmet>

      <section className="hero">
        <div className="img-hero">
          <img src="/assets/space4.jpg" alt="hero image" />
          <div className="overlay"></div>
        </div>

        <div className="hero-content">
          <div id="hero-slogan">
            <h3>Our products are used even in space!</h3>
          </div>

          <div id="container">
            <div className="rocket" ref={flowersRef}>
              <img className="rocket-icon" ref={imgRefs.current[0]} src="/assets/rocket.png" alt="Rocket" />
            </div>

            <Link to="/quote" className="quote">
              <img src="/assets/power.png" alt="Power Icon" className="power-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Welcome to PrecisionTech Services!</h2>
        <div className="text">
          <p>At PrecisionTech Services, we are dedicated to delivering precision solutions tailored to your needs. With our expertise in mechanical and control fault finding, CNC machining support, CAM programming, and more, we strive to exceed your expectations in every aspect of technical service.</p>
          <p>Our team is committed to excellence, bringing together a wealth of knowledge and experience in various fields to provide you with the highest quality of service. Whether you require assistance with CNC machine PLC programming, retro-fitting machine controls, or operator training, we are here to support you every step of the way.</p>
          <p>Let's optimize your processes and drive success together!</p>
        </div>

        <Link to="/contact">
          <button className="contact">CONTACT</button>
        </Link>
      </section>

      <section className="service">
        <Services displayCount={3} isHomePage={true} />
        <Link to="/services">
          <button className="services-btn">MORE</button>
        </Link>
      </section>

      <section className="products">
        <div className="products-image">
          <img src="/assets/product.jpg" alt="gears image" />
        </div>
       
        <Link to="/products" className="products-link-container">
          <button className="products-link">OUR PRODUCTS</button>
        </Link>
      </section>

      <section className="quote-form">
        <div className="quote-form-container">
          <div className="quote-form-page">
            <h2>Get an instant quote now!</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
