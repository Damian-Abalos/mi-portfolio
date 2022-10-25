import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='div-header d-flex row m-auto'>
            {/* foto */}
            <div className='p-2 col-xl-3 col-lg-4 col-md-12 col-sm-12'>
                <img id='mi-foto' src="https://avatars.githubusercontent.com/u/85592546?v=4" alt="" />
            </div>

            <div className='d-flex flex-wrap col-xl-9 col-lg-7 col-md-12 col-sm-12'>
                {/* datos */}
                <div className='d-flex justify-content-between w-100 m-0 row'>
                    <div className='col-xl-8 p-0'>
                        <h1>Damian Abalos</h1>
                        <h2 className='h2'>Full-Stack Developer</h2>
                    </div>
                    <div className='col-xl-4 py-2 px-0'>
                        <p className='d-flex'><span class="material-symbols-outlined pe-1">mail</span>damianabalos@hotmail.com</p>
                        <p className='d-flex'><span class="material-symbols-outlined pe-1">call</span>(+54) 1133710828</p>
                    </div>
                </div>
                {/* descripcion */}
                {/* <div className='descripcion'>
                    <p>Hola soy Damian Abalos, desarrollador web especializado en React-JS. <br />
                        Tengo ganas de poner en practica mis habilidades y de seguir aprendiendo. <br />
                        Si buscas un fullstack developer podes enviarme un mensaje! </p>
                </div> */}
            </div>
        </div>
    )
}

export default Header