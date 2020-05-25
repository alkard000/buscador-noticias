import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Noticia.module.css';


const Noticia = ({noticia}) => {


    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
            <a                
                data-position="top" 
                data-tooltip={`ir a ${source.name}`} 
                className={`btn tooltipped btn-floating halfway-fab waves-effect waves-light red ${styles.circle}`}  
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
            ><FontAwesomeIcon icon={faPlusCircle} className={styles.icon}/></a>
        </div>
    : null ;

    return (  
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3 className={styles.title}>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Noticia;