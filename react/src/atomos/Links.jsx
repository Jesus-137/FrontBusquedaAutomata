import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const StyleLink = styled (Link)`
    margin: 2%;
    text-decoration: none;
    color: #585858;
`;

function Links({redirect, msn}) {
    return (
        <StyleLink to={redirect}>{msn}</StyleLink>
    );
}

export default Links;