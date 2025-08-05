import SobreImg from '../../img/f26dc45e0e3a8be2dc0d35390c9cacb6.jpg';

function MainSobre() {
  return (
    <section className="sobre">
      <div className="sobre-img">
        <img src={SobreImg} alt="foto-hamburguer" />
      </div>
      <div className="sobre-texto">
        <h2>
          Sobre <br />
          <span className="destaque-brunao">Brunão</span>
        </h2>
        <p>
          Servimos hambúrguer caseiro irresistível desde 2011.
          <br />
          Nossa missão é manter você sorrindo a cada mordida.
          <br />
          Presenteie-se com uma refeição reconfortante hoje mesmo!
        </p>
      </div>
    </section>
  );
}

export default MainSobre;
