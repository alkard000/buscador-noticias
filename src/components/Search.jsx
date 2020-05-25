import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const Search = ({ onChangeSearch }) => {
    const [ search, setSearch ] = useState('');
    const thisinput = useRef(null)

    useLayoutEffect( () => {
        document.title = search ? search : `Buscando`;
    }, [search]);

    useEffect(() => {
        thisinput.current.focus();
    })

    return (
        <div>
            <span>Búsqueda</span>
            <input type="text" 
                ref={thisinput}
                value={search} 
                onChange={e => { 
                    const { value } = e.target;
                    setSearch(value);
                    onChangeSearch(value);
                }} />
        </div>
    );
};

export default Search;