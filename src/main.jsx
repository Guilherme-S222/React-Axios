import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom' //Com essas importações, você pode definir rotas e renderizar o aplicativo com base na URL atual.
//createBrowserRouter: Um utilitário de criação de roteador que é usado para configurar o roteamento no aplicativo. 
//RouterProvider: Um componente que envolve o aplicativo e fornece o contexto de roteamento para os componentes do aplicativo.
//Route: Um componente que define as rotas e as correspondências entre URLs e componentes a serem renderizados quando a URL corresponde à rota.

//importação das páginas
import Home from './routes/Home.jsx';
import NewPost from './routes/NewPost.jsx';
import Post from './routes/Post.jsx';
import Admin from './routes/Admin.jsx';
import EditPost from './routes/EditPost.jsx';

import './index.css' //importando arquivo CSS

// criando uma função createBrowserRouter que define a estrutura de roteamento do seu aplicativo.
const router = createBrowserRouter([
  {
    element: <App />, //definido como o elemento principal que envolve todas as outras rotas.
    children: [ //definindo rotas usando PATH(caminhos)
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      },
      {
        path: "/posts/:id",
        element: <Post />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( //usando o método createRoot de ReactDOM para criar um novo "root" React que será usado para renderizar o aplicativo. O argumento document.getElementById('root') refere-se a um elemento HTML com o ID "root" no seu documento HTML onde o aplicativo será renderizado.

  //O React.StrictMode é usado para verificar e alertar sobre práticas desatualizadas e problemas potenciais no aplicativo durante o desenvolvimento.
  //O componente <RouterProvider> é renderizado, e o objeto router criado anteriormente é passado como uma propriedade router. O RouterProvider envolve o aplicativo e fornece o contexto de roteamento para que as rotas funcionem corretamente.
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

//No geral, esse código define as rotas do seu aplicativo e, em seguida, renderiza o aplicativo dentro do elemento HTML com o ID "root", garantindo que o roteamento funcione adequadamente com base nas URLs acessadas.
