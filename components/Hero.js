import React from "react";
import Button from 'react-bootstrap/Button';
import Image from "next/image";
import styles from "../styles/Hero.module.css";

const { heroContent, heroWrapper, glowOnHover } = styles;

const IMAGE_URL = "/Hero2.png";

export default function Hero() {
  return (
    <section id="hero">
      <div className={heroWrapper} id='home'>
        <Image
          priority
          src={IMAGE_URL}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Imagenes de figuritas de futbol"
        />
      <div className={heroContent}>
        <Button className={glowOnHover} variant="danger" size="lg">Conecta tu wallet</Button>{' '}
      </div>
    </div>
    </section>
  );
} 