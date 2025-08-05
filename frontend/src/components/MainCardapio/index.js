import HamburguerImg from '../../img/hamburguer.jfif';
import FriturasImg from '../../img/frituras.avif';
import BebidaImg from '../../img/bebida.webp';

function MainCardapio() {
  return (
    <section className="cardapio">
      <div className="cardapio-info">
        <h1>
          Nosso
          <br />
          cardápio
        </h1>
        <button>VER TODO CARDÁPIO</button>
      </div>

      <div className="cardapio-itens">
        <div className="card">
          <img src={HamburguerImg} alt="Hamburguer Gourmet" />
          <div className="card-texto">
            <h4>
              Hamburguer
              <br />
              Gourmet
            </h4>
            <p>Um saboroso hamburguer.</p>
          </div>
        </div>

        <div className="card">
          <img src={FriturasImg} alt="Frituras" />
          <div className="card-texto">
            <h4>Frituras</h4>
            <p>Prove nossas frituras e não se arrependa.</p>
          </div>
        </div>

        <div className="card">
          <img src={BebidaImg} alt="Bebidas" />
          <div className="card-texto">
            <h4>Bebidas</h4>
            <p>As melhores bebidas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainCardapio;
