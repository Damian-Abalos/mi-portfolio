import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='div-header d-flex row m-auto'>
            {/* foto */}
            <div className='p-2 col-xl-3 col-lg-4 col-md-12 col-sm-12'>
                <img id='mi-foto' src="https://avatars.githubusercontent.com/u/85592546?v=4" alt="" />
            </div>

            <div className='d-flex flex-wrap col-xl-9 col-lg-7 col-md-12 col-sm-12 justify-content-between row'>
                {/* datos */}
                <div className='col-xl-8 p-0'>
                    <h1>Damian Abalos</h1>
                    <h2 className='h2'>Full-Stack Developer</h2>
                    {/* descripcion */}
                    <div className='descripcion w-50'>
                        <p>Soy Damian Abalos, desarrollador web especializado en React-JS y Node.JS .
                            <br />

                        </p>
                    </div>
                </div>
                <div className='col-xl-4 py-2 px-0'>
                    <div>
                        <p className='d-flex'><span class="material-symbols-outlined pe-1">mail</span>damianabalos94@gmail.com</p>
                        <p className='d-flex'><span class="material-symbols-outlined pe-1">call</span>(+54) 1133710828</p>
                    </div>
                    <div className='d-flex justify-around'>
                        <div className='mx-2'><a Target="_blank" href="https://www.linkedin.com/in/damian-abalos/"><img style={{width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo LinkedIn" /></a></div>
                        <div className='mx-2'><a Target="_blank" href="https://github.com/Damian-Abalos/"><img style={{width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo Github" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header