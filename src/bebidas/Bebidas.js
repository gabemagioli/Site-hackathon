import './bebidas.css';


const Bebidas = ({bebida, setBebida, areaC, setAreaC, quantidade, setQuantidade, pessoasFrente, setPessoasFrente}) => {


    const adicionarCarrinho = (id, nome, descricao, valorUnitario, fotoUrl) => {
        setBebida(bebida.filter(bebida => id !== bebida.id));
        const date = new Date();
        const add = {
            id: id,
            nome: nome,
            descricao: descricao,
            valorUnitario: valorUnitario,
            fotoUrl: fotoUrl,
            date: date.toLocaleDateString(),
            date2: date.toLocaleTimeString()
        };
        setAreaC([...areaC, add]);
        setQuantidade(prevQuantidade => prevQuantidade +1);
        setPessoasFrente(prevPessoasFrente => prevPessoasFrente +1);
    }

    return(
        <div>
            <ul className="ul-bebida">
                {bebida.map(bebida => (
                <li className="produto-aba-bebida" key={bebida.id}> 
                <div className="main">
                        <div className="info-sec">
                            <h3 className="nome-produto">{bebida.nome}</h3>
                            <p className="descricao">{bebida.descricao}</p>
                            <div className="add-bebida">
                                <span className="buy" onClick={() => adicionarCarrinho(bebida.id, bebida.nome, bebida.descricao, bebida.valorUnitario, bebida.fotoUrl)}>Adicionar ao Carrinho</span>
                            </div>
                        </div>
                        <div className="preco-imagem">
                            <div className="img-aba-bebida">
                                <img className="fto-aba-Bebida" src={bebida.fotoUrl} alt="imagem do produto"/>
                            </div>
                                <p className="preco-da-bebida">R$ {bebida.valorUnitario}</p>
                        </div>
                    </div>
                </li>))}
            </ul>
        </div>
    );
}

export default Bebidas;