import tijela from "./tijela.png";
import './home.css';
import {Link} from "react-router-dom";

const Localizacao = () => {

    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <div className="divLoc">
            <div className="divisao">
                <div className="titulo">
                    <h1 className="titulo-principal">
                    Pedidos direto da sala de aula!
                    </h1>
                    <p className="introducao">Faça seu pedido pelo site ou aplicativo e retire diretamente no balcão em nossa lanchonete no IDP!
    Já imaginou você fazer o seu pedido nos 5 minutos antes da aula acabar e retirar o seu lanche assim que sair da sala sem enfrentar nenhuma fila quilométrica</p>
                     <Link to="/Cardapio" className="botao" type="submit">Fazer Pedido</Link>
                </div>
                <img src={tijela} alt="imagem comida" className="img"/>
            </div>
            
        </div>
    );
}

export default Localizacao;