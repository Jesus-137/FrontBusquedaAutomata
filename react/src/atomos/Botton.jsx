import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    background: radial-gradient(circle, #73e382, #4fbed2);
    font-size: medium;
    border-radius: 20px;
    margin-top: 4%;
    width: 90%;
    padding: 0%;
    border: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    animation: animacion-borde 5s infinite;

    @keyframes animacion-borde {
        0% {
            background: radial-gradient(circle, #73e382, #4fbed2); /* Cambio de color de fondo cuando se pasa el cursor */
        }
        50% {
            box-shadow: 0 0 8px #000000ae;
            background: #c295f2; /* Cambio de color de fondo cuando se pasa el cursor */
        }
        100% {
            background: radial-gradient(circle, #73e382, #4fbed2); /* Cambio de color de fondo cuando se pasa el cursor */
        }
    }
`;

function Bottons({value, acction}) {
    return (
        <Button onClick={acction} id='boton' type={"button"}> {value} </Button>
    );
}

export default Bottons;