import React, {useState, useEffect, Fragment} from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import Pagination from './components/Pagination';
// import Search from './components/Search';

function App() {

  //DEFINIR LA CATEGORI
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);


  useEffect(() => {
    const consultarAPI = async () => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=ee117552f5aa41f28b1a997e0035032d`;

      const respuesta = await fetch(proxyurl + url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles)
      console.log(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  // console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  // console.log("indexOfLastPost: ", indexOfLastPost);

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // console.log("indexOfFirstPost: ", indexOfFirstPost);

  const currentPosts = noticias.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const onChangeSearch = value => {
  //   const newItems = noticias.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
  //   guardarNoticias(noticias);
  // }

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />
      {/* <Search onChangeSearch={onChangeSearch} /> */}
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={currentPosts}
        />
      </div>
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={noticias.length}
      />
    </Fragment>

  );
}

export default App;
