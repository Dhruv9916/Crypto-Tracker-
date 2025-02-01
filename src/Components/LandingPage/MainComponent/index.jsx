import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real-Time Crypto Data 
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          at Your Fingertips
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          "Stay updated with real-time cryptocurrency data from the CoinGecko API. Explore market trends and track your portfolio by visiting the Dashboard!"
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link to="/dashboard">
            <Button text={"Dashboard"} />
          </Link>

          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          className="iphone"
          animate={{
            y: [0, -20, 0], // Moves up and down
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
