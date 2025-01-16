import React, { useEffect, useState } from "react";
import "./Landing.css";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import Banner1 from "./images.jpg";
import Banner2 from "./images2.jpg";
// import Banner3 from "./images3.jpg";
import Banner3 from "./images4.jpg";
// import { useCarousel } from "./useCarousel";

const landing = () => {
  const [people, setPeople] = useState([Banner1, Banner2, Banner3]);
  const [loaded, setLoaded] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(0);
  //   const currentImage = useCarousel({ totalImages: 3 });
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  useEffect(() => {
    setLoaded(false);
  }, [currentPerson]);
  const handleImageLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    console.log("Loaded state:", loaded);
  }, [loaded]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing-main-container">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing-content-container">
        <div className="left-container">
          <h1 className="web-name">Cources</h1>
          <p>Learn from the best. Whenever, wherever you want</p>
          <a href="/search">
            <Button className="btn">Search for the cources</Button>
          </a>
        </div>
        <div className="right-container">
          <img
            className={` ${
              loaded ? "learning-image-loaded" : "learning-image"
            }`}
            src={people?.[currentPerson]}
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default landing;
