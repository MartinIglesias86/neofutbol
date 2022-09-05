import React from "react";
import { footer } from "../styles/Footer.module.css";

export default function Footer() {
  return(
    <div className={footer}>
      <div>Made with <span role="img" aria-label="love">💜</span> by 
        <a href="#home">
          <img
                alt="logo"
                src="/logo.png"
                height="30"
                className="d-inline-block align-top"
              />{' '}
        </a>
      </div>
    </div>
  )
}