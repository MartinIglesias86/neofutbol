import React from "react";
import Button from 'react-bootstrap/Button';
import Image from "next/image";
import styles from "../styles/Hero.module.css";

const { heroContent, heroWrapper, imageWrapper } = styles;

const IMAGE_URL = "/Hero2.png";

export default function Hero() {
  return (
    <div className={heroWrapper}>
        <Image
          priority
          src={IMAGE_URL}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Imagenes de figuritas de futbol"
        />
      <div className={heroContent}>
        <Button variant="danger">Conecta tu wallet</Button>{' '}
      </div>
    </div>
  );
} 