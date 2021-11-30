import React from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function CreateModal({ isOpen, handleClose }){
    
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

                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>CNPJ: </Label>
                        <Input
                            
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Rua: </Label>
                        <Input
                          
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Número: </Label>
                        <Input

                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Bairro: </Label>
                        <Input

                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Cidade: </Label>
                        <Input

                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>CEP: </Label>
                        <Input

                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="link" onClick={handleClose}>Cancelar</Button>
                <Button color="primary">Salvar</Button>
            </ModalFooter>
        </Modal>
    );
}