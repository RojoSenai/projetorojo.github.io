import '../../assets/css/CadastrarEmpresa.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { parseJwt } from '../../Services/auth';
import Logo from '../../components/Logo/Logo.js';
import {Cabeca} from '../../components/Header/Header.jsx'
//import Pirulas from '../../components/Pirulas/Pirulas.js';
import Helmet from 'react-helmet';

export default function Empresa() {

  //States
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeFantasia, setNome] = useState('');
  const [razaoSocial, setRazao] = useState('');
  const [fundaçãoAniversario, setFundacao] = useState(new Date());
  const [endereço, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [TotalFuncionarios, setTotalFuncionarios] = useState(0);
  // const [IdEmpresa, setIdEmpresa] = useState([]);
  const [MensagemErro, SetMensagemErro] = useState('');
  const [isLoding, setIsLoding] = useState(false);
  // function Overflow() {
  //   let all = document.getElementById("all");
  //   all.style.all.Ove  
  // }

  //Cadastrar empresa
  function CadastrarEmpresa(event) {
    event.preventDefault();

    setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
    let empresa = {
      cnpj: cnpj,
      email: email,
      senha: senha,
      nomeFantasia: nomeFantasia,
      razaoSocial: razaoSocial,
      fundaçãoAniversario: fundaçãoAniversario,
      endereço: endereço,
      telefone: telefone,
      TotalFuncionarios: TotalFuncionarios.toString()
      //  IdEmpresa: IdEmpresa,
    }

    axios.post('http://3.234.116.203/api/Empresa', empresa, {

      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then((resposta) => {
        if (resposta.status === 201) {
          setIsLoding(false)
          console.log('Empresa cadastrada');
          SetMensagemErro('Empresa Cadastrada com sucesso!')

        }
        else
        SetMensagemErro('Oops! algo deu errado :(')


      })

      .then(erro => console.log(erro))
  }


  return (
    <div id="all" className="all">
      <Helmet title="Projeto Rojo - Cadastro Usuario ADM" />
      <main className='mano'>
        <div className="cima">
          <Cabeca Cor={'Cadastrar Empresa'} />
          <Logo />
        </div>

        <form onSubmit={CadastrarEmpresa} action="" className="cadastrar_Ev">
          <div className="divm">
            <div className="div1">
              <input
                className="Name_AdmE"
                placeholder="Cnpj:"
                type="text"
                onChange={(event) => setCnpj(event.target.value)}
                name="nome"
                id="cadastar__Nome"
                required="required" 
                maxlength="14"/>


              <input
                className="Name_AdmE"
                placeholder="Nome:"
                type="text"
                onChange={(event) => setNome(event.target.value)}
                name="nome"
                id="cadastar__Nome"
                required="required" 
                maxlength="50"/>


              <input
                className="Name_AdmE"
                placeholder="Email:"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                name="Cnpj"
                id="cadastar__Cnpj"
                required="required" 
                maxlength="256"/>

              <input
                className="Name_AdmE"
                placeholder="Senha:"
                type="password"
                onChange={(event) => setSenha(event.target.value)}
                name="Senha"
                id="cadastar__Senha"
                required="required" />

              <input
                className="Name_AdmE"
                placeholder="RazaoSocial:"
                type="text"
                onChange={(event) => setRazao(event.target.value)}
                name="Senha"
                id="cadastar__Senha"
                required="required" />
            </div>

            <div className="div2">


              <input
                className="Name_AdmE"
                placeholder="Fundação:"
                type="date"
                onChange={(event) => setFundacao(event.target.value)}
                name="Senha"
                id="cadastar__Senha"
                required="required" />

              <input
                className="Name_AdmE"
                placeholder="Endereço:"
                type="text"
                onChange={(event) => setEndereco(event.target.value)}
                name="Senha"
                id="cadastar__Senha"
                required="required" />

              <input
                className="Name_AdmE"
                placeholder="Telefone:"
                type="tel"
                onChange={(event) => setTelefone(event.target.value)}
                name="Senha"
                id="cadastar__Senha"
                required="required" 
                maxlength="11"/>

              <input
                className="Name_AdmE"
                placeholder="Total De Funcionarios:"
                type="number"
                min="1"
                onChange={(event) => setTotalFuncionarios(event.target.value)}
                name="Senha"
                id="cadastar__Senha"
                required="required" />
            </div>
          </div>
          <div className="mensagem">
            <p>{MensagemErro}</p>
          </div>
          <button className='BotãoCadastrarEmpresa' type="submit">Cadastrar</button>
        </form>
        {/* <div className='Div_Matrix'>
        <h2 className='CorAzul'>FAÇA SUA ESCOLHA</h2>
        <h2 className='CorVermelha'>, SAIA DA MATRIX</h2>
      </div>
      <Pirulas /> */}
      </main>
    </div >
  );
}
