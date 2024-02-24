import React from "react";
import styled from "styled-components";

const Thead = styled.thead`
    background-color: #980081; 
    color: #ffffff;
    text-align: middle;
    font-size: x-large;
    th{
        border: 2.5px solid;
        border-color: black;
    }
`;

function Theads() {
    return (
        <Thead>
            <tr> 
                <th>Clave Cliente</th> 
                <th>Nombre</th> 
                <th>Correo</th> 
                <th>Telefono</th> 
            </tr>
        </Thead>
    );
}

export default Theads;