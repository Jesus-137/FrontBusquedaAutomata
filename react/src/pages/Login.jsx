import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import FromLogin from "../organism/From";
import Bottons from "../atomos/Botton";
import styled from "styled-components";
import Alert from "../atomos/Alert";
import Links from "../atomos/Links";

const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    background-color: #00ffbf;
    box-shadow: 0 0 8px #000000;
`;

function Login() {
    const navigate = useNavigate()
    const form = useRef();
    const soloLetras=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    const [state, setState]= useState([]);
    const unirse = async () =>{
        const Form = new FormData(form.current);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        
        const raw = JSON.stringify({
            "nombre": Form.get('nombre'),
            "password": Form.get('contra')
        });
        
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const body = JSON.parse(raw)

        if (body.nombre!=""){
            if(body.nombre.search(soloLetras)===0){
                if(body.password!=""){
                    if(regex.test(body.password)){
                        await fetch("http://localhost:3003/admin/login", requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            if(JSON.parse(result).status=="error"){
                                setState(JSON.parse(result).msn);
                            }else if(JSON.parse(result).status=="ok"){
                                navigate('/home')
                            }
                        })
                        .catch(error => alert (`error: ${error}`));
                    }else{
                        setState("La contraseña tiene que tener almenos uno de lo siguente 0-9, A-Z, #{[+*´¨... y tener mas de 8 y menos de 15 digitos sin espacios")
                    }
                }else{
                    setState("Hay un campo vacio");
                }
            }else{
                setState("El nombre solo puede tener letras")
            }
        }else{
            setState("Hay un campo vacio");
        }
    }
    return (
        <StyleForm ref={form}>
            <h1>Login</h1>
            <FromLogin nom={"nombre"} type={"text"}></FromLogin>
            <FromLogin nom={"contra"} type={"password"}></FromLogin>
            <Alert msn={state}></Alert>
            <Bottons value={"Login"} acction={unirse}></Bottons>
            <Links redirect={'/register'} msn={'Registrar'}></Links>
        </StyleForm>
    );
}

export default Login;