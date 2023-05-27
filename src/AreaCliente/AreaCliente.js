import './AreaCliente.css';

const AreaCliente = ({bebida, setBebida, areaC, setAreaC}) => {

    return(
        <div>
            <ul className="ul">
                {areaC.map(areaC => (<li className="produto" key={areaC.id}>
                <div className="principal">
                        <div className="info">
                            <h3 className="nome-produto">{areaC.nome}</h3>
                            <p className="descricao-prod">{areaC.descricao}</p>
                            <div className="adic-bebida">
                                <span className="comp">preparando</span>
                            </div>
                        </div>
                        <div className="precoEimagem">
                            <div className="imgababebida">
                                <img className="ftoabaBebida" src={areaC.fotoUrl} alt="imagem do produto"/>
                            </div>
                                <p className="precobebida">R$ {areaC.valorUnitario}</p>
                        </div>
                    </div>
                </li>))}
            </ul>
        </div>
    );
}

export default AreaCliente;