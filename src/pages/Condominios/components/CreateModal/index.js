import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function CreateModal({ isOpen, handleClose, handleFinishSaving }) {

    const [values, setValues] = useState({
        name: "",
        cnpj: "",
        street: "",
        neighborhood: "",
        number: "",
        zipCode: "",
        city: ""
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

        const request = await fetch("https://api.zion.lucasbatista.me/condominiums", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                "name": values.name,
                "document": values.cnpj,
                "address": {
                    "street": values.street,
                    "neighborhood": values.neighborhood,
                    "number": values.number,
                    "zipCode": values.zipCode,
                    "city": values.zipCode
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
            if (values[item] == "") return true;
        }

        return false;
    }

    function clearFields(){
        for (var item in values) {
           setValues({
               ...values,
               [item]: ""
           })
        }
    }

    return (
        <Modal isOpen={isOpen} size='lg'>
            <ModalHeader toggle={handleClose}>
                Adicionar condomínio
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
                    <FormGroup>
                        <Label>CNPJ: </Label>
                        <Input
                            name="cnpj"
                            value={values.cnpj}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Rua: </Label>
                        <Input
                            name="street"
                            value={values.street}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Número: </Label>
                        <Input
                            name="number"
                            value={values.number}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Bairro: </Label>
                        <Input
                            name="neighborhood"
                            value={values.neighborhood}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Cidade: </Label>
                        <Input
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>CEP: </Label>
                        <Input
                            name="zipCode"
                            value={values.zipCode}
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