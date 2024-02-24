import React from "react";
import styled from 'styled-components';

const Label = styled.label`
    font-size: 0.8rem;
    color: red;
    margin-top: 2%;
    width: 100%;
    text-align: center;
    margin-left: 47%;
`

function Alert({msn, col}) {
    return (
        <Label>{msn}</Label>
    );
}

export default Alert;