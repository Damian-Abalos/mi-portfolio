import React from 'react'
import './Habilidades.css'
import ProgressBar from './ProgressBar'

const Habilidades = () => {
  return (
    <div className='div-habilidades my-0 mx-auto'>
      <h2>Habilidades</h2>
      <div>
        <h3>Front-end</h3>
        <ul className='list-unstyled ul-habilidades'>
          <li>
            CSS
            <ProgressBar width='90' />
          </li>
          <li>
            Sass
            <ProgressBar width='85' />
          </li>
          <li>
            React-js
            <ProgressBar width='90' />
          </li>
          <li>
            Bootstrap
            <ProgressBar width='95' />
          </li>
          <li>
            Javascript
            <ProgressBar width='90' />
          </li>
        </ul>
      </div>
      <div>
        <h3>Back-end</h3>
        <ul className='list-unstyled ul-habilidades'>
          <li>
            Node-js
            <ProgressBar width='90' />
          </li>
          <li>
            Express-js
            <ProgressBar width='85' />
          </li>
          <li>
            Mongo-DB
            <ProgressBar width='90' />
          </li>
          <li>
            Firebase
            <ProgressBar width='95' />
          </li>
          <li>
            MySql
            <ProgressBar width='90' />
          </li>
        </ul>
      </div>
      <div>
        <h3>Otros</h3>
        <ul className='list-unstyled ul-habilidades'>
          <li>
            Github <ProgressBar width='80' />
          </li>
          <li>
            Arduino
            <ProgressBar width='65' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Habilidades