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
                descripcion={"Trabajo final para el curso de desarrollo web - coderhouse"}
                etiquetas={"#html #css #responsive"}
                urlSite={"https://damian-abalos.github.io/mi-repositorio/"}
                urlGithub={"https://github.com/Damian-Abalos/dicofra-identitades"}
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
                titulo={"Ecommerce Casa Vegana"}
                urlImage={"https://damian-abalos.github.io/casa-vegana/img/casa-vegana.png"}
                descripcion={"Trabajo final para el curso de JavaScript - coderhouse"}
                etiquetas={"#html #css #js #responsive"}
                urlSite={"https://damian-abalos.github.io/casa-vegana/"}
                urlGithub={"https://github.com/Damian-Abalos/casa-vegana"}
            />
            <Proyect
                titulo={"App e-commerce con API RESTful con registro y login"}
                urlImage={"https://studio.cults3d.com/kDtl4EH5BqPy-cImyiRyo2gGzXA=/246x246/https://files.cults3d.com/uploaders/14684840/illustration-file/388d5e1a-7c44-4172-a0c9-0a34c088be8c/sova-avatar.jpg"}
                descripcion={"Trabajo final para el curso de desarrollo web - coderhouse"}
                etiquetas={"#html #css #responsive"}
                urlSite={"https://damian-abalos.github.io/mi-repositorio/"}
                urlGithub={"https://github.com/Damian-Abalos/dicofra-identitades"}
            />

        </div>
    )
}

export default Proyectos