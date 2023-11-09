import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
    
    const [posts, setPosts] = useState([]) //Aqui, você está usando o hook useState para criar um estado chamado posts e uma função setPosts para atualizá-lo. Inicialmente, o estado posts é definido como um array vazio.
    
    const getPosts = async() => { //Esta função getPosts é assíncrona e é usada para buscar os posts do blog. Ela faz uma solicitação HTTP para o endpoint "/posts" usando o cliente Axios blogFetch, obtém os dados e, em seguida, atualiza o estado posts com os dados recebidos.
        
        try {
            const response = await blogFetch.get("/posts");
            const data = response.data;
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => { //Você está usando o hook useEffect para executar a função getPosts quando o componente Home é montado. O segundo argumento, um array vazio [], garante que a função seja executada apenas uma vez, quando o componente é montado.
        getPosts();
    }, [])

  return ( 
    <div className="home">
        <h1>Últimos posts</h1>
        {posts.length === 0 ? (<p>Carregando...</p>) : (
            posts.map((post) => ( //Mapeia os posts no array posts e gera um div para cada post. O key é definido como post.id para ajudar o React a identificar os elementos da lista de maneira eficiente.
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="btn"> 
                        Ler mais 
                    </Link>
                </div>
                //Cria um link para a página de detalhes do post com base no post.id.
            ))
        )}
    </div>
)};

export default Home
//No geral, este componente Home busca e exibe os últimos posts do blog quando é montado e renderiza esses posts na página. Ele é uma parte fundamental de uma aplicação de blog que utiliza o roteamento para navegar entre diferentes páginas de conteúdo.
