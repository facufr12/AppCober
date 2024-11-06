import React, { useEffect } from 'react';
import { Toast, ToastContainer, Image } from 'react-bootstrap';
import Logo from "../../../assets/images/logo-cober.svg";

const CustomToast = ({ show, onClose, message, title, duration = 3000, variant }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    // Define el color de fondo según `variant`
    const backgroundColor = variant === "danger" ? "#dc3545" : "#754ffe"; // Rojo para error, azul para éxito

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={show} onClose={onClose} style={{ backgroundColor }}>
                <Toast.Header closeButton={false}>
                    <Image 
                        src={Logo}
                        className="rounded me-2"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <strong className="me-auto">{title}</strong>
                    <small>Justo Ahora</small>
                </Toast.Header>
                <Toast.Body className="text-white">{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default CustomToast;
