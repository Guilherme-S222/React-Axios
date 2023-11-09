import NavBar from './components/NavBar'

import { Outlet } from 'react-router-dom' //O Outlet é usado para renderizar os componentes correspondentes com base nas rotas definidas no roteador.

import './App.css'

function App() { // Este é o componente principal chamado App. Ele é uma função que retorna JSX, definindo a estrutura do aplicativo.

  return (
    <div className='App'>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

//<Outlet /> é onde o roteamento entra em ação. O Outlet é um ponto de saída que corresponderá e renderizará os componentes com base nas rotas definidas anteriormente no objeto router. Os componentes específicos a serem renderizados serão determinados pela URL atual do aplicativo.

export default App
//O componente App é exportado no final do arquivo e é o ponto de entrada do seu aplicativo, que envolve outros componentes, como a barra de navegação, e usa o Outlet para exibir o conteúdo apropriado com base nas rotas.
