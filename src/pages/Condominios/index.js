import React, { useEffect, useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import ConfirmModal from './components/ConfirmModal';
import EditModal from './components/EditModal';
import './condominios.css';
import { useNavigate } from 'react-router-dom';
import CreateModal from './components/CreateModal';


export default function Condominios() {

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [condominiums, setCondominiums] = useState([]); 
    const [request, setRequest] = useState(true);

    console.log(condominiums);
    useEffect(()=>{
        async function getCondominiums(){
            const request = await fetch("https://api.zion.lucasbatista.me/condominiums");
            const response = await request.json();

            setCondominiums(response);
            setRequest(false);
        
        }

        if(request) getCondominiums();

    }, [request])

    return (
        <>
            <section className="container mt-4">
                <div>
                    <input
                        className="w-100 px-3 py-2 mb-4"
                        placeholder="Pesquise por um condomínio"
                        style={{ borderRadius: "9999px", border: "1px solid #d4d4d4" }}
                    />
                </div>

                <ListGroup>
                   
                    { 
                        condominiums.map(condominium=>
                          <CondominioItem condominium={condominium} />
                        )
                    }
                </ListGroup>

                <Button color="primary" style={{
                    position: "absolute",
                    bottom: "32px",
                    right: "32px"
                }}
                onClick={()=>setShowCreateModal(true)}
                >
                    Adicionar condomínio
                </Button>
            </section>

            <CreateModal
                isOpen={showCreateModal}
                handleClose={()=>setShowCreateModal(false)}
                handleFinishSaving={()=>setRequest(true)}
            />
        </>
    );
}

function CondominioItem({ condominium }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    let navigate = useNavigate();

    function handleClick(){
        navigate(`/condominio/${condominium.id}`)
    }

    function handleEditClick(ev){
        ev.stopPropagation();
        setShowEditModal(true);
    }

    function handleDeleteClick(ev){
        ev.stopPropagation();
        setShowConfirmModal(true);
    }

    return (
        <>
            <ListGroupItem className="d-flex justify-content-between" onClick={handleClick}>
                <div>
                    <span style={{ fontWeight: "bold", color: "#3d3d3d" }}>{condominium.name} - </span>
                    <span style={{ color: "#696969" }}>{condominium.document}</span>
                </div>

                <div className="d-flex gap-2">
                    <Button color="warning" onClick={handleEditClick}>
                        <i className="fas fa-pen"></i>
                    </Button>
                    <Button color="danger" onClick={handleDeleteClick}>
                        <i className="fas fa-trash-alt text-sm"></i>
                    </Button>
                    {/* <Button color="info text-white">Detalhes</Button> */}
                </div>
            </ListGroupItem>
            <EditModal
                isOpen={showEditModal}
                handleClose={()=>setShowEditModal(false)}
            />
            <ConfirmModal
                isOpen={showConfirmModal}
                handleClose={()=>setShowConfirmModal(false)}
            />
        </>

    );
}