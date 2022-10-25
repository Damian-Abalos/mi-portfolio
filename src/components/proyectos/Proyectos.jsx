import React from 'react'
import './Proyectos.css'
import Proyect from './Proyect'

const Proyectos = () => {
    return (
        <div className='div-proyectos'>
            <h2>Proyectos</h2>
            <Proyect
                titulo={"Netflix clon"}
                urlImage={"https://elrincondenetflix.com/wp-content/uploads/2020/04/nuevo-logo-netflix_original.jpg"}
                descripcion={"Netflix clon - App hecha con react-js. Inicio de sesión y lista de favoritos con firebase. Consumiendo la api TMDB para importar las peliculas y el framework Tailwind para los estilos"}
                etiquetas={"#html #responsive #Firebase #react-js"}
                urlSite={"https://damian-abalos.github.io/mi-repositorio/"}
                urlGithub={"https://github.com/Damian-Abalos/mi-repositorio"}
            />
            <Proyect
                titulo={"E-commerce"}
                urlImage={"https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg"}
                descripcion={"Api RESTful con servidor express-js, patron de diseño MVC. Registro e inicio de sesion utilizando Passport. MongoDB para almacenar usuarios, productos, mensajes, carritos y compras. Manejo de mensajes automaticos utilizando nodmailer y twilio. Trabajo final para el curso de programacion backend - coderhouse. "}
                etiquetas={"#MongoDB #Express-js #Passport #Bcrypt #Websocket #Nodemailer #Handlebars"}
                urlSite={"https://final-backend-abalos.herokuapp.com/"}
                urlGithub={"https://github.com/Damian-Abalos/proyecto-final-coderHouse"}
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
                titulo={"Sova Main"}
                urlImage={"https://i.ibb.co/Vt8j7J6/sova-avatar.jpg"}
                descripcion={"Sitio web responsive - Entrega final para curso de desarrollo web - coderhouse"}
                etiquetas={"#html #css #responsive"}
                urlSite={"https://damian-abalos.github.io/mi-repositorio/"}
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
                titulo={"Modern Interior"}
                urlImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kx1K1IO1MPwlKxmJ1fhZU8OJIo_zRCtVwTyo0yebN0h0tj2TcCpDDj7UmLjRkPTyyDM&usqp=CAU"}
                descripcion={"Sitio web responsive - Desafio del sitio web Devchalleges"}
                etiquetas={"#html #css #responsive #php"}
                urlSite={"https://damian-abalos.github.io/interior-consultant/"}
                urlGithub={"https://github.com/Damian-Abalos/interior-consultant"}
            />

        </div>
    )
}

export default Proyectos