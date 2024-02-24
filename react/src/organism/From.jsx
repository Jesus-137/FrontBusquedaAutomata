import React from "react";
import Inputs from "../atomos/Inputs";
import Labels from "../atomos/Labes";

function FromLogin({nom, type}) {
    return (
        <>
            <Labels msn={nom} col={"black"}></Labels>
            <Inputs tipo={type} name={nom}></Inputs>
        </>
    );
}

export default FromLogin;