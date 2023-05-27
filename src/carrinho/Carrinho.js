import './carrinho.css';
import {Link} from "react-router-dom";

function Carrinho ({bebida, setBebida, areaC, setAreaC, quantidade, setQuantidade}) {


    return(
        <div>
            <h2>Produtos no carrinho: {quantidade}</h2>
            <ul className="ul-carrinho">
                {areaC.map(areaC => (<li className="produto-bebida" key={areaC.id}>
                <div className="div-principal">
                        <div className="informacao">
                            <h3 className="nomedoproduto">{areaC.nome}</h3>
                            <p className="descricaodoprod">{areaC.descricao}</p>
                            <div className="adicionarbebida">
                            </div>
                        </div>
                        <div className="precoImagem">
                            <div className="img-ababebida">
                                <img className="fto-abaBebida" src={areaC.fotoUrl} alt="imagem do produto"/>
                            </div>
                                <p className="precoda-bebida">R$ {areaC.valorUnitario}</p>
                        </div>
                    </div>
                </li>))}
            </ul>
            <h5 className="pagar"><Link to="/Pagamento">Efetuar pagamento</Link></h5>
        </div>
    );
}

export default Carrinho;