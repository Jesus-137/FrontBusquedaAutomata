import React from "react";
import styled from "styled-components";
import Trb from "./Tb";

const Tbody = styled.tbody`
    th, td { 
        padding: 12px 15px;
    }
    tr { 
        border-bottom: 1px solid #dddddd; 
    }
    tr:nth-of-type(even) { 
        background-color: #f3f3f37b; 
    }
    tr:last-of-type { 
        border-bottom: 2px solid #009879;
    }
`;

function Tbodys({array}) {
    if (!array || !Array.isArray(array)) { // Verificar si array es null, undefined o no es una matriz
        return null; // O puedes devolver un mensaje de error u otra lógica según tu necesidad
    }

    return (
        <Tbody>
            {
                array.map((cliente)=>(
                    <Trb id={cliente.id} correo={cliente.correo} nombre={cliente.nombre} telefono={cliente.telefono}/>
                ))
            }
        </Tbody>
    );
}

export default Tbodys;