import { Link } from "react-router-dom" //O Link é usado para criar links de navegação em um aplicativo React que se integram ao sistema de roteamento para navegar entre diferentes páginas ou rotas.

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">
                    Novo Post
                </Link>
            </li>
            <li>
                <Link to={`/admin`} >
                    Gerenciar
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar

//No geral, o componente NavBar cria uma barra de navegação com links que permitem a navegação dentro do aplicativo. Os links são gerenciados pelo sistema de roteamento do react-router-dom, permitindo que o usuário acesse diferentes partes do aplicativo com base nas URLs fornecidas. Os estilos específicos para a barra de navegação são definidos no arquivo "NavBar.css".
