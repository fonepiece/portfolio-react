import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function PreviewImage({src}) {
    const [show, setShow] = useState(false);
    return (
        <>
        <Modal show={show} fullscreen onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body><img src={src}/></Modal.Body>
        </Modal>
        <a className="preview-image-link" onClick={setShow}>
            <img className="preview-image" src={src}/>
        </a>
        </>
    )
}