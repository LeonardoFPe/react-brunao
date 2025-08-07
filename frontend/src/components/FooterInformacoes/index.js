import EnderecoIcon from '../../img/icons8-nova-mensagem-50 (1).png';
import TelefoneIcon from '../../img/icons8-telefone-50.png';
import EmailIcon from '../../img/icons8-endereço-50.png';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  footer{
    background-color: #ffd130;
    padding:90px;
}
footer h1{
    font-size: 70px;
    display: flex;
    justify-content: center;
    padding-top: 80px;
}
footer h2,p{
    padding: 10px;
    display: flex;
    justify-content: center;
}

.icons{
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <h1>Informações</h1>

        <div className="endereco">
          <h2>Nosso endereço</h2>
          <p>R. Dr. Antônio Bento, 393 - Santo Amaro, São Paulo - SP, 04750-000</p>
        </div>

        <div className="email">
          <h2>Nosso email</h2>
          <p>burgerlab@gmail.com</p>
        </div>

        <div className="number">
          <h2>Número de Telefone</h2>
          <p>2942-3910</p>
        </div>

        <div className="icons">
          <figure>
            <a
              href="https://www.google.com/maps?rlz=1C1GCEU_pt-BRBR1170BR1170&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigAT
                      IHCAEQIRigATIHCAIQIRigAdIBCTEzNDU1ajBqN6gCALACAA&um
                      =1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kdvfdqz4UM6UMT3JngV_qGDB&daddr=R.+Dr.+Ant%C3%B4nio+Bento,+393+-+
                      Santo+Amaro,+S%C3%A3o+Paulo+-+SP,+04750-000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EnderecoIcon} alt="Endereço" />
            </a>

            <a
              href="https://www.google.com/search?q=senac+largo+treze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TelefoneIcon} alt="Telefone" />
            </a>

            <a
              href="https://www.sp.senac.br/senac-largo-treze?utm_campaign=L13_Institucional&utm_source=link&utm_medium=GoogleMeuNegocio&utm_content=linkunidade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} alt="Email" />
            </a>
          </figure>
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
