import { Children } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'



  

function ImageModal(isOpen, onClose){
    <Modal
    isOpen={isOpen}
    className={css.modal}
    onRequestClose={() => onClose()}
    shouldCloseOnEsc={true}
    >
        {Children}
    </Modal>
}

export default ImageModal;