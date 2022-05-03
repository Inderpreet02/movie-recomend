import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './Modal.scss'

import './Modal.scss'

const Modal = props => {

    const [active, setActive] = useState(false);

    useEffect(() => {

        setActive(props.active)

    }, [props.active])
    

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
        {props.childern}
    </div>
  )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props => {
    const contentRef = useRef(null);

    const closeModal = () =>{
        contentRef.current.parentMode.classList.remove('active')
        if(props.onClose) props.onClose();
    }
    return (
        <div className="modal__content">
            {props.childern}
            <div className="modla__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

ModalContent.prototype={
    onClose:PropTypes.func
}

export default Modal