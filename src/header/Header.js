import './header.css';
import {Link} from "react-router-dom";
import logo from './logo.png';
import { MdShoppingCart } from "react-icons/md";


const Header = () => {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"/>
    </>


    return(
        <header className="head">
            <div>
                <img src={logo} alt="logo restaurante" className="imagem"/>
            </div>
            <div>
                <nav className="navigate">
                    <Link to="/home" className="categorias">Home</Link>
                    <Link to="/" className="categorias">Cardápio</Link>
                    <Link to="/Carrinho" className="categorias-carrinho"><MdShoppingCart/></Link>
                    <Link to="/AreaCliente" className="categorias-cliente">Área do Cliente</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;