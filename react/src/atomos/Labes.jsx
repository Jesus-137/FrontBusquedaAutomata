import React from "react";
import styled from 'styled-components';

const Label = styled.label`
    font-size: 1.5rem;
    margin-top: 4%;
`

function Labels({msn, col}) {
    return (
        <Label color={col}>{msn}</Label>
    );
}

export default Labels;