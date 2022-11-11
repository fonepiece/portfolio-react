import { useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function PreviewImage({src, link, message}) {
    const [show, setShow] = useState(false);
    return (
        <>
            <Modal show={show} fullscreen onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><img src={src}/></Modal.Body>
            </Modal>
            <Overlay message={message}>
                {link ? (
                    <a className="preview-image-link" href={link} target={'_blank'}>
                        <img src={src}/>
                    </a>
                ) : (
                    <a className="preview-image-link" onClick={setShow}>
                        <img className="preview-image" src={src}/>
                    </a>
                )}
            </Overlay>
        </>
    )
}

function Overlay({children, message}) {
    return !!message ? (
        <OverlayTrigger overlay={<Tooltip>{message}</Tooltip>}>
            {children}
        </OverlayTrigger>
    ) : children;
}