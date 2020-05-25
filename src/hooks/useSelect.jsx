import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {

    //STATE INICIAL
    const [state, actualizatState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select 
            className="browser-default"
            value={state}
            onChange={e => actualizatState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )

    return [state, SelectNoticias];
}
 
export default useSelect;