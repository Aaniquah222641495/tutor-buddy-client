import React from 'react';
import './modal.css'; 


const Modal = ({ show, onClose, FormComponent, formProps }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">X</button>
                <FormComponent {...formProps} closeModal={onClose} />
            </div>
        </div>
    );
};

export default Modal;
