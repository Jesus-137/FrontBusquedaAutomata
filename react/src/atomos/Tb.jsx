import React from "react";
import Td from "./Td";

function Trb({id, nombre, correo, telefono}) {
    return (
        <tr>
            <Td msn={id}></Td>
            <Td msn={nombre}></Td>
            <Td msn={correo}></Td>
            <Td msn={telefono}></Td>
        </tr>
    );
}

export default Trb;