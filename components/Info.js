import React from "react";
import Button from 'react-bootstrap/Button';
import Image from "next/image";
import wallets from "../public/wallets.png";
import cards from "../public/cards.png";
import { glowOnHover } from "../styles/Hero.module.css";

export default function Info() {
  return (
    <section>
      <div>
        <h3>¿Qué es NFT Neo FuTbol?</h3>
        <p>Bienvenide al primer album digital de figuritas del Mundial Qatar 2022! 
            Neo FuTbol te permite coleccionar NFTs de los jugadores participantes en el Mundial de futbol de Qatar 2022, 
            cada figurita tiene su propia rareza, no solo por la cantidad de figuritas disponibles sino también por su Tier:
            <ul>
              <li>Común: figurita de cuerpo dorado y sin decoración en el marco.</li>
              <li>Heroico: figurita de cuerpo azulado y marco con decoraciones doradas.</li>
              <li>Legendario: figurita de cuerpo platinado y marco con decoraciones doradas y platinadas.</li>
            </ul>
            </p>
        <Image src={cards}></Image>
      </div>
      <div>
        <h3>Ganar, ganar y ganar!</h3>
        <p>No solo puedes ganar obteniendo figuritas difíciles, también puedes ganar con su Tier y, ademas, si eres la 
          primer persona en completar el album al 100% ganas un premio especial de 2 Ethers!
        </p>
        <Image></Image>
      </div>
      <div>
        <h3>Comenzá...</h3>
        <p>Comenzar a ser dueño de tu pasión es fácil:
          <ul>
            <li>Conecta tu wallet</li>
            <li>Compra tu primera figurita</li>
            <li>Comparte tu pasión</li>
          </ul>
        </p>
        <Image src={wallets}></Image>
      </div>
      
      <Button className={glowOnHover} variant="danger" size="lg">Conecta tu wallet</Button>{' '}
    </section>
  )
}