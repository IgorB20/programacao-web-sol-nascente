import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function ConfirmModal({ isOpen, handleClose }){
    
    return (
        <Modal isOpen={isOpen}>
            <ModalHeader toggle={handleClose}>
                Tem certeza?
            </ModalHeader>
            <ModalBody>
                Tem certeza que deseja excluir este condomínio?
            </ModalBody>
            <ModalFooter>
                <Button color="link" onClick={handleClose}>Cancelar</Button>
                <Button color="primary">Confirmar</Button>
            </ModalFooter>
        </Modal>
    );
}