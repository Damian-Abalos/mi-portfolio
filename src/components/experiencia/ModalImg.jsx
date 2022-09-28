import React from 'react'

const ModalImg = ({ imgSrc,id }) => {
  return (
    <div className='w-50 p-1'>
      <img src={imgSrc} alt="certificado-coder" data-bs-toggle="modal" cursor
        className='w-100 cursor-pointer' data-bs-target={"#"+id} style={{ cursor: "pointer" }} />

      <div className='modal fade modal-image' id={id} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog" style={{ maxWidth: "50%" }}>
          <div className="modal-content">
            <div className="modal-body">
              <button type='button' className='btn-close'
                data-bs-dismiss="modal" aria-label='Close'></button>
              <img src={imgSrc} alt="" className='d-block w-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalImg