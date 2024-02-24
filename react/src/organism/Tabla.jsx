import React from "react";
import styled from "styled-components";
import Theads from "../atomos/Thead";
import Tbodys from "../atomos/Tbody";

const StyleTable = styled.table`
    border-collapse: collapse;
    margin: 25px 0; font-size: 1em; 
    font-family: sans-serif; 
    min-width: 450px; 
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
`;

function Tabla({array}) {
    return (
        <StyleTable>
            <Theads></Theads>
            <Tbodys array={array}></Tbodys>
        </StyleTable>
    );
}

export default Tabla;