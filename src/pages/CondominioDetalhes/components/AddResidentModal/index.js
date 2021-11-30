import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function CreateResidentModal({ isOpen, handleClose, handleFinishSaving, condominium }) {

    const [values, setValues] = useState({
        name: ""
    })

    function handleInputChange(ev) {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        })
    }

    async function save() {
        if (hasEmptyFields()) {
            alert("Por favor preencha todos os campos");
            return;
        }

        const request = await fetch("https://api.zion.lucasbatista.me/residents", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                "name": values.name,
                "email": `${values.name.split(" ")[0]}@gmail.com`,
                "condominium": {
                    "id": condominium.id
                }
            })
        });
        const response = await request.json();
        console.log(response);
        clearFields();
        handleClose();
        handleFinishSaving();
    }

    function hasEmptyFields() {
        for (var item in values) {
            console.log(values[item])
            if (values[item] === "") return true;
        }

        return false;
    }

    function clearFields(){
       setValues({
        name: ""
    })
    }

    return (
        <Modal isOpen={isOpen} size='lg'>
            <ModalHeader toggle={handleClose}>
                Adicionar residente
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nome: </Label>
                        <Input
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                   
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="link" onClick={handleClose}>Cancelar</Button>
                <Button color="primary" onClick={save}>Salvar</Button>
            </ModalFooter>
        </Modal>
    );
}