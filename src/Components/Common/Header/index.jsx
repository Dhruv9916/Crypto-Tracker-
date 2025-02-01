import React from "react";
import "./style.css";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">
          Crypto Tracker <span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>

      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>

        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            onClick={() => console.log("Button Clicked")}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
      </div>
    </div>
  );
}

export default Header;
