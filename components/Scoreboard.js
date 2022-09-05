import React from "react";
import Image from "next/image";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import logo from "../public/logo.png";
import { glowOnHover } from "../styles/Hero.module.css";
import style from '../styles/Scoreboard.module.css'

const { title, cardContainer, bloque, imagen, imagenContenedor } = style;

const users = [
  {"address": '0xac57b9a39c3eEec32228B370188d8A15aAfD2798', 'percentage': 90}, 
  {"address": '0x1C0C07D1Fd8837E0Ac8d7f4ba8A97EE565c1Ab92', 'percentage': 88}, 
  {"address": '0xe3f02A604d66939a9dfC5bAa5FfFD832103E5615', 'percentage': 85}, 
  {"address": '0x31792AeBe5C50D00f937D9e668a17d6A341ce305', 'percentage': 84},
  {"address": '0xf98e7932c738c2D86fc6AEd7E8361F1FfC94f0A0', 'percentage': 83},
  {"address": '0x201627e5BF502167BCF7509837Ec267Bb4e8f0B8', 'percentage': 81},
  {"address": '0xb83559446362f7497973D6Af826799B16520428B', 'percentage': 80},
  {"address": '0xf83367D15050E76c99Df480087131596754a5Bc2', 'percentage': 79},
  {"address": '0xEdEe42A7a9E1f0c2627b3220736EC0D6Ae8B4290', 'percentage': 78},
  {"address": '0x235F77ac46507Aa07b61dB210EC7126CC08cC62a', 'percentage': 78},
]

export default function Scoreboard() {
  return (
    <section id="scoreboard">
      <h1 className={title}>Tabla de posiciones</h1>
      <div className={ cardContainer }>
        <div className="card">
          <div className="card-body">
            <Table responsive >
              <thead>
                <tr>
                  <th scope="col">Posición</th>
                  <th scope="col">Dirección (address)</th>
                  <th scope="col">% de llenado del álbum</th>
                  </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1===1 ? '1st' : index +1===2 ? '2nd' : index + 1===3 ? '3rd' : index + 1}</th>
                    <td>{user.address.slice(0, 3)}...{user.address.slice(-5)}</td>
                    <td>{user.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className={imagenContenedor}>
        <Image className={imagen} src={logo} alt="Logo Grande" />
      </div>
      <div className={bloque}>
        <Button className={glowOnHover} variant="danger" size="lg">Conecta tu wallet</Button>{' '}
      </div>
    </section>
  )
}