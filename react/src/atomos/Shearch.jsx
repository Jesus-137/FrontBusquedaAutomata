import React from "react";
import styled from "styled-components";

const StyleShearch = styled.input`
    margin-left: 32%;
    width: 35%;
    margin-top: 2%;
    border-color: greenyellow;
    box-shadow: 0 0 5px greenyellow;
    font-size: large;
    .contenedor{
        width: 100%;
    }
`;

function Shearch({change}) {
    return (
        <div className="contenedor">
            <StyleShearch type="text" onChange={change} placeholder="Buscar por correo" name="buscar"></StyleShearch>
        </div>
    );
}

export default Shearch;