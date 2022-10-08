import React from 'react'
import './Hobbies.css'

const Hobbies = () => {
    return (
        <div className='div-hobbies w-100'>
            <h2>Hobbies</h2>
            <div className='d-flex row'>
                <div className='col-lg-4 col-sm-12 pt-1'>
                    <h3>Gaming</h3>
                    <img className='w-100 img-hobbie py-1' src="https://s1.eestatic.com/2021/05/06/elandroidelibre/579204024_184280461_1024x576.jpg" alt="" />
                    <p className='mb-0'>Me gusta jugar Valorant con amigos para distenderme.</p>
                </div>
                <div className='col-lg-4 col-sm-12 pt-1'>
                    <h3>Cocinar</h3>
                    <img className='w-100 img-hobbie py-1' src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/veganismo_1.jpg.webp?itok=5UFy7wiQ" alt="" />
                    <p className='mb-0'>Desde chico llevo una dieta basada en plantas, disfruto mucho cocinar rico y saludable.</p>
                </div>
                <div className='col-lg-4 col-sm-12 pt-1'>
                    <h3>Entrenar</h3>
                    <img className='w-100 img-hobbie py-1' src="https://phantom-marca.unidadeditorial.es/e26e5af8213a0060a2dc87a63ce63e4b/resize/414/f/jpg/assets/multimedia/imagenes/2020/08/25/15983487939829.jpg" alt="" />
                    <p className='mb-0'>Entreno calistenia para fortalecer mi cuerpo.</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies