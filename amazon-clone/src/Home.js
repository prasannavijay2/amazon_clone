import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/3000x1200_Hero-Tall_ft_bolly._CB405290232_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={12345}
          title="Revolution Twenty 20: Love. Corruption. Ambition Paperback – 1"
          price={124.0}
          rating={4}
          image="https://upload.wikimedia.org/wikipedia/en/4/44/Revolution_2020.jpg"
        />
        <Product
          id={678910}
          title="Apple iPhone 8 (128GB) - Silver"
          price={39999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51KooirmnlL._SL1024_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1112131415}
          title="Nikon D780 DSLR Body with 24-120mm"
          price={198995.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-hvd2dj5L._SL1500_.jpg"
        />
        <Product
          id={1617181920}
          title="ASUS TUF Gaming A15 Laptop 15.6 FHD 144Hz.. "
          price={116120.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61UasI64LwL._SL1200_.jpg"
        />
        <Product
          id={2627282930}
          title="AISEN® 180W RMS Walk & Rock Portable..."
          price={21018.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/613kLNEg90L._SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={2122232425}
          title="Sony Bravia 123 cm (49 inches) 4K Ultra HD Certified Android LED TV 49X7500H (Black) (2020 Model)"
          price={64590.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81Kx0GVzI7L._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
