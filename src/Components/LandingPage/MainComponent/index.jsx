import React from "react";
import "./style.css";
import Button from "../../Common/Button";

function MainComponent() {
  return <div className="flex-info">
      <div className="left-component">
        <h1 className="track-crypto-heading">Track Crypto</h1>
        <h1 className="real-time-heading">Real Time.</h1>
        <p className="info-text">Track crypto with the public api in real time.Visit the Dashboard to do so!!</p>
        <div className="btn-flex">
          <Button text={"Dashboard"}/>
          <Button text={"Share"} outlined={true}/>
          
        </div>
      </div>
      <div>Phone</div>
  </div>;
}

export default MainComponent;
