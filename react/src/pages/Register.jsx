import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import FromLogin from "../organism/From";
import Bottons from "../atomos/Botton";
import styled from "styled-components";
import Alert from "../atomos/Alert";

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

function Register() {
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
            "password": Form.get('contra'),
            "correo": Form.get('correo'),
            "telefono": Form.get('telefono')
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
                        if(body.correo!=""){
                            if (/^.+@.+\.(com|mx)$/.test(body.correo)){
                                if (body.telefono.length==10){
                                    if (body.telefono!=""){
                                        await fetch("http://localhost:3003/admin/crear", requestOptions)
                                        .then(response => response.text())
                                        .then(result => {
                                            setState('')
                                            const resultado = JSON.parse(result);
                                            alert (result)
                                            if (resultado.status=="error"||resultado.status=="success"){
                                                if(resultado.status=="error"){
                                                    setState(resultado.data);
                                                }else{
                                                    navigate('/');
                                                }
                                            }else{
                                                setState(resultado.status);
                                            }
                                        })
                                        .catch(error => console.log('error', error));
                                    }else{
                                        setState("Hay un campo vacio");
                                    }
                                }else{
                                    setState("El telefono tiene que tener 10 número");
                                }
                            }else{
                                setState("El correo tiene que tener un @ y terminar en .com o .mx");
                            }
                        }else{
                            setState("Hay un campo vacio");
                        }
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
            <FromLogin nom={"nombre"} type={"text"}/>
            <FromLogin nom={"contra"} type={"password"}/>
            <FromLogin nom={"correo"} type={"email"}/>
            <FromLogin nom={"telefono"} type={"number"}/>
            <Alert msn={state}></Alert>
            <Bottons value={"Registre"} acction={unirse}></Bottons>
        </StyleForm>
    );
}

export default Register;