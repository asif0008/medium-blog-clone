import React from 'react'

const Modal = ({ children, modal, setModal, hideModal }) => {
  return (
    <>
      <div 
      onClick={() => setModal(false)}
      className={`bg-black/30 fixed inset-0 z-10 ${hideModal} transition-all duration-500`} />
      {children}
    </>
  )
}

export default Modal
