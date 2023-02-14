import React from 'react'
import './Proyectos.css'

const Proyect = (props) => {
    return (
        <div>
            <div className="div-proyecto">
                <div className='div-img d-flex'>
                    {/* <img className='w-100' src="https://studio.cults3d.com/kDtl4EH5BqPy-cImyiRyo2gGzXA=/246x246/https://files.cults3d.com/uploaders/14684840/illustration-file/388d5e1a-7c44-4172-a0c9-0a34c088be8c/sova-avatar.jpg" alt="" /> */}
                    <img className='w-100 align-items-center' src={props.urlImage} alt="" />
                </div>
                <div className='info-proyect'>
                    {/* <p>#html #css #responsive</p> */}
                    <p>{props.etiquetas}</p>
                    {/* <h3>Sova Main</h3> */}
                    <h3>{props.titulo}</h3>
                    {/* <p>Trabajo final para el curso de desarrollo web - coderhouse</p> */}
                    <p>{props.descripcion}</p>
                    <div>
                        <a href={props.urlSite} className='btn btn-primary' target="_blank" rel="noreferrer" >Ir al sitio</a>
                        <a href={props.urlGithub} className='btn btn-danger ms-1' target="_blank" rel="noreferrer" >Rep Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyect