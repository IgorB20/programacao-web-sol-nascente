import React from 'react';
import { useParams } from 'react-router';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';


export default function CondominioDetalhes() {
    const { id } = useParams();

    return (
        <section className="container">
            <div className="py-3 d-flex flex-column">
                <span style={{ fontWeight: "bold", color: "#3d3d3d" }}>Condominio Ouro Brasil</span>
                <span style={{ color: "#696969" }}>14.927.102/0001-61</span>
            </div>

            <h3>Moradores: </h3>
            <ListGroup>
                <Morador />
                <Morador />
                <Morador />
                <Morador />
            </ListGroup>
        </section>
    );
}

function Morador() {
    return (
        <>
            <ListGroupItem className="d-flex justify-content-between">


                <div className="d-flex align-items-center">
                    <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
                        className=""
                        style={{ width: "40px", height: "40px", marginRight: "12px", border: "1px solid #d4d4d4", borderRadius: "9999px"}}
                    />
                    <div>
                        <div>
                            <span style={{ fontWeight: "bold", color: "#3d3d3d" }}>Igor Benedet - </span>
                            <span style={{ color: "#696969" }}>125.688.039-67</span>
                        </div>
                        <div>
                            <span style={{ color: "#696969" }}>apto: 301 B2</span>
                        </div>
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