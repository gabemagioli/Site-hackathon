import { useState } from 'react';
import './cardapio.css';
import {Link} from "react-router-dom";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import Logo from "./Logo.png";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";




const Cardapio = ({pessoasFrente, setPessoasFrente}) => {

    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"/>
    </>

    const [executivos, setExecutivos] = useState([{}]);//escrever os pratos executivos aqui, iterar em uma ul e dps adicionar evento p ir p carrinho o produto.
    
    const [indicacao, setIndicacao] = useState(["https://www.saudedr.com.br/wp-content/uploads/2018/04/beneficio-da-tapioca.jpg"]);

    
    const mudarDireita = () => {
        setIndicacao("https://www.boqnews.com/wp-content/uploads/2017/04/Executivo-file-frango.jpg");
    }
    const mudarEsquerda = () => {
        setIndicacao("https://www.saudedr.com.br/wp-content/uploads/2018/04/beneficio-da-tapioca.jpg");
    }

    const categoriasDisponiveis = [{categoriaNome:'Sucos', link:"/Bebidas"}, {categoriaNome: 'Tapioca Salgada', link: "/TapiocaSalgada"}, {categoriaNome:'Tapioca Doce', link: "/TapiocaDoce"}, {categoriaNome:'CusCuz', link:"/CusCuz"}, {categoriaNome:'Crepe Salgado', link:"/CrepeSalgado"}, {categoriaNome:'Crepe Doce', link:"/CrepeDoce"}, {categoriaNome:'Omelete', link:"/Omelete"}, {categoriaNome:'Pratos Executivos', link:"/Pratos"}];

    return(
        <>
        <div className="cardapio">
            <div className="header-cardapio">
                <img className="imagem-logo" src={Logo} alt="imagem" />
                <div className="informacoes-locais">
                    <h2 className="localidade">FastGrill - IDP Asa Norte</h2>
                    <p className="endereco">SGAN 609 Módulo A - Asa Norte, Brasília - DF, 70830-401</p>
                    <p className="endereco">Aberto até as 18:00hrs</p>
                </div>
                <span className="outras-unidades"><HiOutlineBuildingStorefront/> Ver outras unidades</span>
            </div>
            <div className="sub-div">
                <h3 className="naFrente"><BsBoxSeam/> <p className="pedidos-na-frente">Pedidos na sua frente: #0004</p></h3>
                <h3 className="naFrente2"><AiOutlineClockCircle/> <p className="pedidos-na-frente">Tempo médio de espera: 12 minutos</p></h3>
            </div>
            <div className="categoria">
                <h2 className="titulo-categoria">CATEGORIAS</h2>
                <ul className="ul-categorias">
                    {categoriasDisponiveis.map(categorias => (<Link to={categorias.link} className="li-categorias" key={categorias.id}>
                        <h3 className="nome-categorias">{categorias.categoriaNome}</h3>
                    </Link>))}
                </ul>  
                <h2 className="Recomendacoes-diarias">Recomendações Diárias &#x2B50;</h2>
                <p className="paragrafo-recomendacao">Os pratos que estão fazendo sucesso entre nossos clientes hoje.</p>
                <ul className="ul-indicacoes">
                    <li key={9090} className="indicados">
                        <div className="texto-dos-indicados">
                            <Link to="/Cardapio" className="botao-indicado">Fazer Pedido</Link>
                            <p className="descricao-indicado">Nossas tapiocas são preparadas na hora, quentinha, sempre com ingredientes frescos.</p>
                            <h3 className="nome-indicado">Manteiga</h3>
                        </div>
                        <img className="img-indicado" src="https://caixacolonial.club/blog/wp-content/uploads/2018/01/tapioca-organica-destaque-1170x779.jpg" alt="foto prato"/>
                    </li>
                    <li key={9091} className="indicados">
                        <div className="texto-dos-indicados">
                            <Link to="/Cardapio" className="botao-indicado">Fazer Pedido</Link>
                            <p className="descricao-indicado">Nossas tapiocas são preparadas na hora, quentinha, sempre com ingredientes frescos.</p>
                            <h3 className="nome-indicado">Manteiga</h3>
                        </div>
                        <img className="img-indicado" src="https://caixacolonial.club/blog/wp-content/uploads/2018/01/tapioca-organica-destaque-1170x779.jpg" alt="foto prato"/>
                    </li>
                    <li key={9092} className="indicados">
                        <div className="texto-dos-indicados">
                            <Link to="/" className="botao-indicado">Fazer Pedido</Link>
                            <p className="descricao-indicado">Nossas tapiocas são preparadas na hora, quentinha, sempre com ingredientes frescos.</p>
                            <h3 className="nome-indicado">Queijo Minas</h3>
                        </div>
                        <img className="img-indicado" src="https://caixacolonial.club/blog/wp-content/uploads/2018/01/tapioca-organica-destaque-1170x779.jpg" alt="foto prato"/>
                    </li>
                </ul>

                <h2 className="Recomendacoes-diarias">Pratos Executivos</h2>
            </div>
        </div>
        </>
    );
}

export default Cardapio;