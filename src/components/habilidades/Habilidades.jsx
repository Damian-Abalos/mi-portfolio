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
            <ProgressBar width='90'/>
          </li>
          <li>
            Sass
            <ProgressBar width='85'/>
          </li>
          <li>
            React-js
            <ProgressBar width='80'/>
          </li>
          <li>
            Bootstrap
            <ProgressBar width='95'/>
          </li>
          <li>
            Javascript
            <ProgressBar width='90'/>
          </li>
        </ul>
      </div>
      <div>
        <h3>Back-end</h3>
        <ul className='list-unstyled ul-habilidades'>
          <li>
            Node-js
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
          <li>
            Express-js
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
          <li>
            Mongo-DB
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
          <li>
            Firebase
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
          <li>
            MySql
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3>Otros</h3>
        <ul className='list-unstyled ul-habilidades'>
          <li>
            Github
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
          <li>
            Arduino
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Habilidades