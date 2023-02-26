import React from 'react'
import './Proyectos.css'
import Proyect from './Proyect'

const Proyectos = () => {
    return (
        <div className='div-proyectos'>
            <h2>Proyectos</h2>
            <Proyect
                titulo={"Gruppo 2 Seguros"}
                urlImage={"https://i.ibb.co/k0DFByK/logo-principal-02.png"}
                descripcion={"Gruppo2seguros - Sitio web para compañía de seguros. Inculye formulario de consultas, envio de imagenes por mail y redirecciones a chat de WhatsApp"}
                etiquetas={"#HTML #CSS #JavaScript #PHP #Responsive"}
                urlSite={"https://gruppo2seguros.com/"}
                urlGithub={"https://github.com/Damian-Abalos/Gruppo2seguros"}
            />
            <Proyect
                titulo={"Dicofra Identidades"}
                urlImage={"https://dicofra.com/wp-content/themes/dicofra/images/logo.svg"}
                descripcion={"Trabajo freelance para la empresa de ciberseguridad Dicofra. Incluye formulario de consultas."}
                etiquetas={"#HTML #CSS #SASS #Responsive #PHP"}
                urlSite={"https://dicofra.com/identidades/"}
                urlGithub={"https://github.com/Damian-Abalos/dicofra-identitades"}
            />
            {/* <Proyect
                    titulo={"Tienda online"}
                    urlImage={"https://www.gqdalya.com/wp-content/uploads/2019/06/tiendaonline-3.png"}
                    descripcion={"Api RESTful con servidor express-js, patron de diseño MVC. Registro e inicio de sesion utilizando Passport. MongoDB para almacenar usuarios, productos, mensajes, carritos y compras. Manejo de mensajes automaticos utilizando nodmailer y twilio. Trabajo final para el curso de programacion backend - coderhouse. "}
                    etiquetas={"#MongoDB #Express-js #Passport #Bcrypt #Websocket #Nodemailer #Handlebars"}
                    urlSite={"https://final-backend-abalos.herokuapp.com/"}
                    urlGithub={"https://github.com/Damian-Abalos/proyecto-final-coderHouse"}
                /> */}
            <Proyect
                titulo={"Netflix clon"}
                urlImage={"https://elrincondenetflix.com/wp-content/uploads/2020/04/nuevo-logo-netflix_original.jpg"}
                descripcion={"Netflix clon - App hecha con react-js. Inicio de sesión y lista de favoritos con firebase. Consumiendo la api TMDB para importar las peliculas y el framework Tailwind para los estilos"}
                etiquetas={"#React-JS #Firebase #Tailwind #Responsive"}
                urlSite={"https://netflix-clone-7541a.web.app/"}
                urlGithub={"https://github.com/Damian-Abalos/netfilx-clone"}
            />
            <Proyect
                titulo={"E-commerce Casa Vegana - React-js"}
                urlImage={"https://damian-abalos.github.io/casa-vegana/img/casa-vegana.png"}
                descripcion={"Trabajo final para el curso de React-Js - Coderhouse. E-commerce con carrito de compras y stock real de productos cargados en firebase."}
                etiquetas={"#React-js #Firebase #Bootstrap #responsive"}
                urlSite={"https://casa-vegana.netlify.app/"}
                urlGithub={"https://github.com/Damian-Abalos/myapp"}
            />
            <Proyect
                titulo={"App clima"}
                urlImage={"https://i.ibb.co/cLG55Kk/clima.png"}
                descripcion={"App clima, consulta el clima segun la ciudad. Consumiendo la api de OpenWeather"}
                etiquetas={"#React-js #Ajax #Firebase #Bootstrap #responsive"}
                urlSite={"https://mi-app-clima.netlify.app/"}
                urlGithub={"https://github.com/Damian-Abalos/app-clima"}
            />

            <Proyect
                titulo={"Sova Main"}
                urlImage={"https://i.ibb.co/Vt8j7J6/sova-avatar.jpg"}
                descripcion={"Sitio web responsive - Entrega final para curso de desarrollo web - Coderhouse"}
                etiquetas={"#HTML #CSS #Responsive"}
                urlSite={"https://damian-abalos.github.io/mi-repositorio/"}
                urlGithub={"https://github.com/Damian-Abalos/mi-repositorio"}
            />
            <Proyect
                titulo={"Ecommerce Casa Vegana - Js"}
                urlImage={"https://damian-abalos.github.io/casa-vegana/img/casa-vegana.png"}
                descripcion={"Trabajo final para el curso de JavaScript - Coderhouse"}
                etiquetas={"#HTML #CSS #JS #Responsive"}
                urlSite={"https://damian-abalos.github.io/casa-vegana/"}
                urlGithub={"https://github.com/Damian-Abalos/casa-vegana"}
            />
            <Proyect
                titulo={"Modern Interior"}
                urlImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kx1K1IO1MPwlKxmJ1fhZU8OJIo_zRCtVwTyo0yebN0h0tj2TcCpDDj7UmLjRkPTyyDM&usqp=CAU"}
                descripcion={"Sitio web responsive - Desafio del sitio web Devchalleges"}
                etiquetas={"#HTML #CSS #Responsive"}
                urlSite={"https://damian-abalos.github.io/interior-consultant/"}
                urlGithub={"https://github.com/Damian-Abalos/interior-consultant"}
            />

        </div>
    )
}

export default Proyectos