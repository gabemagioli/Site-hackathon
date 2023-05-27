import './App.css';
import Cardapio from './cardapio/Cardapio';
import Header from './header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home/home';
import Bebidas from './bebidas/Bebidas';
import Footer from './footer/Footer';
import AreaCliente from './AreaCliente/AreaCliente';
import { useState } from 'react';
import Carrinho from './carrinho/Carrinho';
import Pagamento from './pagamento/Pagamento';


function App() {

  const [bebida, setBebida] = useState([{
    nome: 'Suco de Laranja',
    fotoUrl:'https://s2.glbimg.com/E1WXXtiXeTi1DyT5Y1O3uf2DICs=/e.glbimg.com/og/ed/f/original/2019/01/15/31617293018_896bf29d55_k.jpg',
    id: Math.trunc(Math.random() * 1000),
    descricao: 'Um delicioso e refrescante suco de laranja natural.',
    valorUnitario: 7.92,
},{
    nome: 'Suco de Abacaxi',
    fotoUrl:'https://static.tuasaude.com/media/article/db/bc/suco-de-abacaxi-para-evitar-o-colesterol-alto_19785_l.jpg',
    id: Math.trunc(Math.random() * 1000),
    descricao: 'Um delicioso e refrescante suco de abacaxi natural.',
    valorUnitario:  7.9
},{
  nome: 'Suco de Acerola',
  fotoUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-suco-de-acerola.jpg',
  id: Math.trunc(Math.random() * 1000),
  descricao: 'Um delicioso e refrescante suco de acerola natural.',
  valorUnitario: 7.9,
}]);

  const [areaC, setAreaC] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [pessoasFrente, setPessoasFrente] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes>
                <Route path="/" element={<Cardapio/>}></Route>
                <Route path="home" element={<Home/>}></Route>
                <Route path="/bebidas" element={<Bebidas bebida={bebida} setBebida={setBebida} areaC={areaC} setAreaC={setAreaC}  quantidade={quantidade} setQuantidade={setQuantidade} pessoasFrente={pessoasFrente} setPessoasFrente={setPessoasFrente}/>}></Route>
                <Route path="/AreaCliente" element={<AreaCliente bebida={bebida} setBebida={setBebida} areaC={areaC} setAreaC={setAreaC}/>}></Route>
                <Route path="/Carrinho" element={<Carrinho bebida={bebida} setBebida={setBebida} areaC={areaC} setAreaC={setAreaC} quantidade={quantidade} setQuantidade={setQuantidade}/>}></Route>
                <Route path="/Pagamento" element={<Pagamento/>}></Route>
                <Route path="/Cardapio" element={<Cardapio pessoasFrente={pessoasFrente} setPessoasFrente={setPessoasFrente}/>}></Route>
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
