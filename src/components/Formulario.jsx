import React from 'react';

import styles from './Formulario.module.css';

import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    //OPCIONES CATEGORIAS
    const OPCIONES = [
        {value : 'general', label : 'General'}, 
        {value : 'business', label : 'Negocios'}, 
        {value : 'entertaiment', label : 'Entretenimiento'}, 
        {value : 'health', label : 'Salud'}, 
        {value : 'science', label : 'Ciencia'}, 
        {value : 'technology', label : 'Tecnologia'}
    ]

    ///CUSTOM SELECT
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //SUBMIT AL FORM, PASAR CATEGORIA A APP.JS 
    const buscarNoticia = e => {
        e.preventDefault();
        
        guardarCategoria(categoria);
    }

    return (  
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticia}
                >
                    <h2 className={styles.heading}>Encuentra una noticias por categoria</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            value="Buscar" 
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;