import React from "react";
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 5px;
    padding: 1%;
    border: 0px;
    background-color: #8080808d;
    text-align: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

function Inputs({tipo, name}) {
    return (
        <Input type={tipo} name={name}></Input>
    );
}

export default Inputs;