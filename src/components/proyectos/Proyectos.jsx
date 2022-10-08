import React from 'react'
import './Proyectos.css'
import Proyect from './Proyect'

const Proyectos = () => {
    return (
        <div className='div-proyectos'>
            <h2>Proyectos</h2>
            <Proyect
                titulo={"Sova Main"}
                urlImage={"https://studio.cults3d.com/kDtl4EH5BqPy-cImyiRyo2gGzXA=/246x246/https://files.cults3d.com/uploaders/14684840/illustration-file/388d5e1a-7c44-4172-a0c9-0a34c088be8c/sova-avatar.jpg"}
                descripcion={"Sitio web responsive - Entrega final para curso de desarrollo web - coderhouse"}
                etiquetas={"#html #css #responsive"}
                urlSite={"https://damian-abalos.github.io/mi-repositorio/"}
                urlGithub={"https://github.com/Damian-Abalos/dicofra-identitades"}
            />
            <Proyect
                titulo={"Modern Interior"}
                urlImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kx1K1IO1MPwlKxmJ1fhZU8OJIo_zRCtVwTyo0yebN0h0tj2TcCpDDj7UmLjRkPTyyDM&usqp=CAU"}
                descripcion={"Sitio web responsive - Desafio del sitio web Devchalleges"}
                etiquetas={"#html #css #responsive #php"}
                urlSite={"https://damian-abalos.github.io/interior-consultant/"}
                urlGithub={"https://github.com/Damian-Abalos/interior-consultant"}
            />
            <Proyect
                titulo={"Dicofra Identidades"}
                urlImage={"https://dicofra.com/wp-content/themes/dicofra/images/logo.svg"}
                descripcion={"Trabajo freelance para la empresa de ciberseguridad Dicofra"}
                etiquetas={"#html #css #responsive #php"}
                urlSite={"https://dicofra.com/identidades/"}
                urlGithub={"https://github.com/Damian-Abalos/dicofra-identitades"}
            />
            <Proyect
                titulo={"Ecommerce Casa Vegana - Js"}
                urlImage={"https://damian-abalos.github.io/casa-vegana/img/casa-vegana.png"}
                descripcion={"Trabajo final para el curso de JavaScript - coderhouse"}
                etiquetas={"#html #css #js #responsive"}
                urlSite={"https://damian-abalos.github.io/casa-vegana/"}
                urlGithub={"https://github.com/Damian-Abalos/casa-vegana"}
            />
            <Proyect
                titulo={"Ecommerce Casa Vegana - React-js"}
                urlImage={"https://damian-abalos.github.io/casa-vegana/img/casa-vegana.png"}
                descripcion={"Trabajo final para el curso de React-Js - coderhouse"}
                etiquetas={"#html #css #responsive #React-js #firebase"}
                urlSite={"https://ecstatic-hypatia-190436.netlify.app/"}
                urlGithub={"https://github.com/Damian-Abalos/myapp"}
            />
            <Proyect
                titulo={"App e-commerce con API RESTful con registro y login"}
                urlImage={"https://i.ibb.co/rGBJP1k/tienda-virtual-062017-F.jpg"}
                descripcion={"Trabajo final para el curso de programacion backend - coderhouse"}
                etiquetas={"#html #css #responsive #backend #MongoDB #Express-js #Node-Js "}
                urlSite={"https://final-backend-abalos.herokuapp.com/"}
                urlGithub={"https://github.com/Damian-Abalos/proyecto-final-coderHouse"}
            />

        </div>
    )
}

export default Proyectos