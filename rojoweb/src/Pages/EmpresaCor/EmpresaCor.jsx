import '../../assets/css/CadastroCor.css';
//import Logo from '../../components/Logo/Logo.js'
import Rojologo from '../../assets/img/Rojo_imagem.png';
import LetraRojo from '../../assets/img/letter.svg';
import { useState, useEffect } from 'react';
import { Cabeca } from '../../components/Header/Header.jsx';
import Helmet from 'react-helmet';
import axios from 'axios';
import { parseJwt } from '../../Services/auth';
//import axios from 'axios';




export default function Login() {
  const [Cor1, setCor1] = useState('');
  const [Cor2, setCor2] = useState('');
  const [Cor3, setCor3] = useState('');
  const [Logo_Imagem, setLogo] = useState('');
  const [Banner, setBanner] = useState('');
  const [Islogind, setIslogind] = useState(false);
  const [ListarCor, setLisarCor] = useState([]);
  const [IdEmpresa, setIdEmpresa] = useState(0);
  const [MensagemErro, SetMensagemErro] = useState('');

  // console.log('agora a cor é ' + Cor1);
  function Mudarcor() {
    let colorPicker = document.getElementById("Cadastro_cor1");
    let box = document.getElementById("box");
    let burguer = document.getElementById("burguer");
    let burguer2 = document.getElementById("burguer2");
    let burguer3 = document.getElementById("burguer3");
    let menub = document.getElementById("menub");
    let borro = document.getElementById("borro");

    let label = document.getElementById("label");

    label.style.backgroundColor = colorPicker.value;
    // let output = document.getElementById("output");

    box.style.backgroundColor = colorPicker.value;
    burguer.style.backgroundColor = colorPicker.value;
    burguer2.style.backgroundColor = colorPicker.value;
    burguer3.style.backgroundColor = colorPicker.value;
    menub.style.backgroundColor = colorPicker.value;
    borro.style.backgroundColor = colorPicker.value;
    setCor1(colorPicker.value);


    colorPicker.addEventListener("input", function (event) {
      box.style.backgroundColor = event.target.value;
      burguer2.style.backgroundColor = event.target.value;
      burguer3.style.backgroundColor = event.target.value;
      menub.style.backgroundColor = event.target.value;
    }, false);

    let colorPicker2 = document.getElementById("Cadastro_cor2");
    let Header = document.getElementById("Header");

    let label2 = document.getElementById("label2");

    label2.style.backgroundColor = colorPicker2.value;

    Header.style.backgroundColor = colorPicker2.value;
    setCor2(colorPicker2.value);

    let colorPickerFonte = document.getElementById("Cadastro_cor3");
    let letras = document.getElementById("letras");

    let label3 = document.getElementById("label3");

    label3.style.backgroundColor = colorPickerFonte.value;

    letras.style.color = colorPickerFonte.value;
    setCor3(colorPickerFonte.value);

    // colorPicker.addEventListener("change", function(event) {
    // output.innerText = "Cor escolida " + colorPicker.value + ".";
    // }, false);
  }

  async function  FazerCadastro(event) {
    event.preventDefault();
    for (let index = 0; index < 3; index++) {
      


      switch (index) {
        case 0:
          BuscarCor();
          console.log(ListarCor);
          let VerificaCor = 0;

          ListarCor.map((item) => {

            if (item.nomeCor == Cor1)
              VerificaCor++;
          })

          if (VerificaCor === 0) {
            console.log("aqui")


            let Cor = {
              nomeCor: Cor1
            }

            await axios.post('http://3.234.116.203/api/Cor', Cor, {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
              }
            })
              .then((resposta) => {

                if (resposta.status === 201) {
                  console.log('Cor1 Cadastrada');
                }

              })
            VerificaCor = 0;
            setLisarCor([]);
          }
          else {
            console.log('Cor1 ja existente!');
            VerificaCor = 0;
            setLisarCor([]);
          }

          break;
        case 1:
          BuscarCor();
          console.log(ListarCor);
          let VerificaCor1 = 0;
          ListarCor.map((item) => {

            if (item.nomeCor == Cor2)
            VerificaCor1++;
          })

          if (VerificaCor1 === 0 && Cor1 != Cor2 && Cor1 != Cor3) {


            let Cor = {
              nomeCor: Cor2
            }

            await axios.post('http://3.234.116.203/api/Cor', Cor, {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
              }
            })
              .then((resposta) => {

                if (resposta.status === 201) {
                  console.log('Cor2 Cadastrada')
                }

              })
              VerificaCor1 = 0;
              setLisarCor([]);
          }
          else {
            console.log('Cor2 ja existente!')
            VerificaCor1 = 0;
            setLisarCor([]);
          }

          break;
        case 2:
          BuscarCor();
          console.log(ListarCor);
          let VerificaCor2 = 0;
          ListarCor.map((item) => {

            if (item.nomeCor == Cor3)
            VerificaCor2++;
          })

          if (VerificaCor2 === 0 && Cor1 != Cor2 && Cor1 != Cor3 && Cor2 != Cor3) {


            let Cor = {
              nomeCor: Cor3
            }

            await axios.post('http://3.234.116.203/api/Cor', Cor, {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
              }
            })
              .then((resposta) => {

                if (resposta.status === 201) {
                  console.log('Cor3 Cadastrada')
                }

              })
              VerificaCor2 = 0;
              setLisarCor([]);
          }
          else {
            console.log('Cor3 ja existente!')
            VerificaCor2 = 0;
            setLisarCor([]);
          }

          break;
        default:
          break;
      }
    }
    
  }

  function BuscarCor() {

    axios.get('http://3.234.116.203/api/Cor', {
      headers: {
        'Authirization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })
      .then((resposta) => {
        if (resposta.status == 200)
          setLisarCor(resposta.data)
      })
  }



  useEffect(() => {
    setIdEmpresa(parseJwt().emp);
    setCor1("#000000");
    setCor2("#000000");
    setCor3("#000000");
  }, []);


  return (
    <div>
      <Helmet title="Projeto Rojo - Cadastrar Cor" />
      <div className='container'>
        <Cabeca Cor={'Cadastro Cor'} />

        <div className='ContFormProt'>
          <div className='contF'>
            <div className='contTitulo'>
              <h2 className="Cadastrar_Cor">Cadastrar Cor</h2>
              <div className="EssaBarra1"></div>
            </div>

            <div className='contFormulario'>
              <form onSubmit={FazerCadastro} action="" className='ConteinerForm'>

                <div>
                  <div className='contA'>
                    <label id="label" className='NomeCor' for="Cadastro_cor1"></label>
                    <label id="label1" className='a' for="Cadastro_cor3">{Cor1}</label>
                  </div>
                  <input
                    onChange={(event) => Mudarcor()}
                    className="ImputCor"
                    type="Color"
                    name="Cor1"
                    id="Cadastro_cor1"
                    required="required" />
                </div>

                <div>
                  <div className='contA'>
                    <label id="label2" className='NomeCor' for="Cadastro_cor2"></label>
                    <label id="label2" className='a' for="Cadastro_cor3">{Cor2}</label>
                  </div>
                  <input
                    className="ImputCor"
                    onChange={(event) => Mudarcor()}
                    type="Color"
                    name="Cor2"
                    id="Cadastro_cor2"
                    required="required" />
                </div>

                <div>
                  <div className='contA'>
                    <label id="label3" className='NomeCor' for="Cadastro_cor3"></label>
                    <label id="label3" className='a' for="Cadastro_cor3">{Cor3}</label>
                  </div>
                  <input
                    className="ImputCor"
                    onChange={(event) => Mudarcor()}
                    type="Color"
                    name="Cor3"
                    id="Cadastro_cor3"
                    required="required" />
                </div>

                {/* <div>
                  <div className="EventFile">
                    <label className="ImputFile_" for="Logo">Logo:</label>
                  </div>
                  <input
                    className="ImputFile"
                    placeholder="Logo:"
                    type="file"
                    name="Logo_Img"
                    id="Logo"
                    required="required" />
                </div> */}

                {/* <div>
                  <div className="EventFile">
                    <label className="ImputFile_" for="Banner">Banner:</label>
                  </div>
                  <input
                    className="ImputFile"
                    placeholder="Banner"
                    type="file"
                    name="Banner"
                    id="Banner"
                    required="required" />
                </div> */}

                {/* <div className="mensagem">
              <p>{MensagemErro}</p>
            </div> */}

                <button className='BotãoCor' type="submit">Cadastrar</button>
              </form>
            </div>
          </div>
          {/* ------------------------------------------------PROTOTIPOS----------------------------------------------------------------------- */}
          <div className='ContLogoProt'>
            <div className="ContainerLogo_">
              <img className="Rojo_" src={Rojologo} alt="Logo da empresa" />
              <img className="Letra-logo_" src={LetraRojo} alt="Letra giratoria em volta do logo" />
            </div>

            <div className='PrototiposConteiner'>
              <div id="box" className='PrototipoEsq'>
                <div id="Header" className='HaderProt'>
                  <div className='ContHader'>

                    <div className='ContAmbur'>
                      <div id="burguer" className='Amburguer' />
                      <div id="burguer2" className='Amburguer' />
                      <div id="burguer3" className='Amburguer' />
                    </div>

                    <div className='ContPer'>
                      <div className='FotoPerfil' />
                    </div>

                  </div>
                </div>

                <div className='BannerProt' />

                <div className='MenuCont'>

                  <div className='BolinhaAlinhada'>
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                  </div>

                  <div className='BolinhaAlinhada'>
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                  </div>

                  <div className='BolinhaAlinhada'>
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                    <div className='Bolinha' />
                  </div>

                </div>

              </div>

              {/* -----------------------------------------PROTOTIPO DA DIREITA----------------------------------------------------------------------------------------------- */}

              <div id="borro" className='PrototipoDir'>
                <div id="menub" className='DentroMenuB'>
                  <div id="letras" className='ContMenuDentro'>

                    <div className='CimaMenu'>
                      <p>Menu</p>
                      <p>X</p>
                    </div>

                    <div className='BaixoMenu'>
                      <p>Meus Eventos</p>
                      <p>Agenda</p>
                      <p>Documentos</p>
                    </div>
                  </div>

                </div>

                <div className='BorroCinza' />

              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}
