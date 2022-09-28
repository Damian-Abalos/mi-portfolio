import React from 'react'
import './Experiencia.css'
import ModalImg from './ModalImg'

const Experiencia = () => {
  return (
    <div className='div-experiencia my-0 mx-auto'>
      <h2>Certificados</h2>
      <div className='d-flex flex-wrap'>
        <ModalImg imgSrc={"https://i.ibb.co/sKhhNfz/certificado-desarrollo-web-coderhose.png"} id={"desarrollo-web"} />
        <ModalImg imgSrc={"https://i.ibb.co/ncXqHMM/certificado-js-coderhose.png"} id={"js"}/>
        <ModalImg imgSrc={"https://i.ibb.co/QPgfptZ/certificado-react-js-coderhose.png"} id={"react"}/>
        <ModalImg imgSrc={"https://i.ibb.co/BzL0Df9/certificado-programacion-backend.png"} id={"backend"}/>
      </div>
    </div>
  )
}

export default Experiencia