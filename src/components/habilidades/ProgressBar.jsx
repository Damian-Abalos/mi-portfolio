import React from 'react'

const ProgressBar = (props) => {
    let miWidth = props.width + '%'
    return (
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{ width: miWidth }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )

}

export default ProgressBar