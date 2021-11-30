import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function ConfirmModal({ condominium, isOpen, handleClose, handleFinishSaving  }){
    
    async function deleteCondominium(){
        const request = await fetch(`https://api.zion.lucasbatista.me/condominiums/${condominium.id}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' }
        });
        const response = await request.text();
        console.log(response);
        handleClose();
        handleFinishSaving();
    }

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
                <Button color="primary" onClick={deleteCondominium}>Confirmar</Button>
            </ModalFooter>
        </Modal>
    );
}