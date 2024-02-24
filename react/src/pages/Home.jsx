import React, { useEffect, useRef, useState } from "react";
import Tabla from "../organism/Tabla";
import Shearch from "../atomos/Shearch";
import { Automaton } from "./automata";
import Alert from "../atomos/Alert";

function Home() {
    const [cliente, setCliente] = useState([]);
    let resultado= new Array();
    const form = useRef()

    const Get = () => {
        async function fetchData() {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            try {
                const response = await fetch("http://localhost:3003/cliente/getAll", requestOptions);
                const result = await response.json();
                console.log('hola')
                await result.map((cliente)=>{
                    resultado[resultado.length]=cliente
                })
                setCliente(resultado);
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        }

        fetchData();
    }

    useEffect(Get, []);
    
    const mensaje = (msn) =>{
        setMostrar(msn)
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const [mostrar, setMostrar] = useState([]);
    const buscar = async () => {
        Get()
        mensaje('Actualizando para buscar')
        await delay(800);
        const Form = new FormData(form.current);
        if (Form.get('buscar')!=''){
            const trans = Form.get('buscar');
            const automaton = new Automaton(trans);
            
            mensaje('buscando...')
            const foundPersons = await automaton.findSubstringInArrayObjects(cliente);
            await delay(2000);
            mensaje('')
            if (foundPersons.length > 0) {
                setCliente(foundPersons);
            } else {
                setMostrar("No se encontraron personas con esa letra o palabra.");
            }
        }else{
            setMostrar('')
        }
    }

    return (
        <>
            <form ref={form}>
                <Shearch change={buscar}/>
            </form>
            <Alert msn={mostrar}/>
            <Tabla array={cliente} />
            <p>{resultado}</p>
        </>
    );
}

export default Home;