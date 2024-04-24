import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gamepad from './images/gamepad.svg'
import Movie from './images/movie.svg'
import Lamp from './images/lamp.svg'
import Camera from './images/camera.svg'
import Brush from './images/brush.svg'
import Pc from './images/program.svg'

import './App.css'

function App() {

  return (
    <div className='header'>
          <h2>PORTIFOLIO</h2>
    <div className="body">
      <div className="line">
        <h1>LUAN ANDERSON</h1>
      </div>
      <div>
      <h3>Desenvolvedor Full Stack Junior | .NET/C# | React | Javascript | Typescript</h3>
      </div>
      </div>
      <div className='icons'>
      <img className='icon1' src={Gamepad} alt="" />
      <img className='icon2' src={Brush} alt="" />
      <img className='icon3' src={Camera} alt="" />
      <img className='icon4' src={Lamp} alt="" />
      <img className='icon5' src={Movie} alt="" />
      </div>
      <div>
      <div className='line1'></div>
      </div>
      <div className='body2'>
        <p>
        <h4>UM POUCO SOBRE MIM</h4>
Sempre utilizei o computador de um modo geral para lazer, pesquisas, trabalhos escolares, explorando a internet de forma descompromissada, porém, ao mesmo tempo, foi inevitável a curiosidade para aprender mais sobre esse universo, que foi acontecendo aos poucos.
Em um certo momento, quando estava cursando o ensino médio, decidi ingressar no curso game design, onde aprendi vários fundamentos sobre criação de jogos, uma delas era a programação, onde descobri um de desenvolvimento que fiquei fascinado. 
Depois do ensino médio continuei meus estudos e depois ingressei na faculdade de Análise e Desenvolvimento de Sistemas na Faculdade de São Vicente - Anhanguera.
Busco sempre aprimorar meus conhecimentos e me manter antenado com as novidades, por isso gosto de testar e desenvolver diversas tecnologias.</p>
        <img className='pc' src={Pc} alt="" />
      </div>
      <div className='skills'>
        <div className='square1'>
          <h5>HARD SKILLS</h5>
        </div>
        <div className='square2'>
        <h5>SOFT SKILL</h5>

        </div>
      </div>
      </div>
      
  )
}

export default App
