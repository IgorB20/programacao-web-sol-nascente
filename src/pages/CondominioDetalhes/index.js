import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import CreateResidentModal from './components/AddResidentModal';


export default function CondominioDetalhes() {
    const { id } = useParams();

    const [condominium, setCondominium] = useState(null);
    const [showCreateResidentModal, setShowCreateResidentModal] = useState(false);
    const [request, setRequest] = useState(true);
    console.log(condominium)

    useEffect(() => {
        async function getCondominium() {
            const request = await fetch(`https://api.zion.lucasbatista.me/condominiums/${id}`);
            const response = await request.json();

            setCondominium(response);
            setRequest(false);
        }

       if(request) getCondominium();

    }, [id, request])

    if(condominium === null) return "Carregando...";

    return (
       <>
         <section className="container">
            <div className="py-3 d-flex flex-column">
                <span style={{ fontWeight: "bold", color: "#3d3d3d" }}>{ condominium.name } </span>
                <span style={{ color: "#696969" }}>{condominium.document}</span>
            </div>

            <h3>Moradores: </h3>
            <ListGroup>
                {
                    condominium.residents.length > 0 ?
                    condominium.residents.map(resident=>
                        <Morador  resident={resident}/>
                    ):
                    <div>Nenhum morador cadastrado ainda</div>
                }
            </ListGroup>


            <Button color="primary" style={{
                    position: "absolute",
                    bottom: "32px",
                    right: "32px"
                }}
                onClick={()=>setShowCreateResidentModal(true)}
                >
                    Adicionar residente
                </Button>
        </section>

        <CreateResidentModal
                isOpen={showCreateResidentModal}
                handleClose={()=>setShowCreateResidentModal(false)}
                handleFinishSaving={()=>setRequest(true)}
                condominium={condominium}
            />
       </>
    );
}

function Morador({ resident }) {
    return (
        <>
            <ListGroupItem className="d-flex justify-content-between">


                <div className="d-flex align-items-center">
                    <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
                        className=""
                        style={{ width: "40px", height: "40px", marginRight: "12px", border: "1px solid #d4d4d4", borderRadius: "9999px" }}
                    />
                    <div>
                        <div>
                            <span style={{ fontWeight: "bold", color: "#3d3d3d" }}>{ resident.name }</span>
                            {/* <span style={{ color: "#696969" }}>125.688.039-67</span> */}
                        </div>
                        {/* <div>
                            <span style={{ color: "#696969" }}>apto: 301 B2</span>
                        </div> */}
                    </div>

                </div>

                <div className="d-flex gap-2">
                    <Button color="warning">
                        <i className="fas fa-pen"></i>
                    </Button>
                    <Button color="danger">
                        <i className="fas fa-trash-alt text-sm"></i>
                    </Button>
                    {/* <Button color="info text-white">Detalhes</Button> */}
                </div>
            </ListGroupItem>
            {/* <EditModal
            isOpen={showEditModal}
            handleClose={()=>setShowEditModal(false)}
        />
        <ConfirmModal
            isOpen={showConfirmModal}
            handleClose={()=>setShowConfirmModal(false)}
        /> */}
        </>
    );
}