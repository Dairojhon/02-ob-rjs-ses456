import React, { useEffect, useState } from 'react';

const Clock = () => {

    const fechaInicial = {
        fecha : new Date(),
        edad: 0,
        nombre : 'Jhon',
        apellidos : 'Rodriguez'
    }

    const [state, setState] = useState(fechaInicial);

    const tick = () =>{
        let edad = state.edad +1;
        setState(
            {
                ...fechaInicial,
                fecha: new Date(),
                edad
            }           
        );
    }

    useEffect(() => {
        setInterval(tick,1000)
    });

    useEffect(() => {
        clearInterval();
    });
    
    

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );

    

}

export default Clock;
