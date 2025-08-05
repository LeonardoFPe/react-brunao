import MaraImg from '../../img/icon-mara.jpg';
import BrockImg from '../../img/icon-brock.avif';
import SteffiImg from '../../img/icon-steffi.jfif';

function NossaSociedade() {
  return (
    <section className="nossa-sociedade">
      <h1>
        Nossa&nbsp;
        <span className="sociedade-yellow">Sociedade</span>
      </h1>

      <div className="sociedade-cards">
        <figure className="mara">
          <img src={MaraImg} alt="Mara, Fundadora" />
          <h4>Mara, Fundadora.</h4>
          <p>
            "O restaurante é uma parte importante da
            <br /> minha vida, e não
            <br /> é só um trabalho."
          </p>
        </figure>

        <figure className="brock">
          <img src={BrockImg} alt="Brock, filho da mara, CO - Fundador" />
          <h4>Brock, filho da mara, CO - Fundador.</h4>
          <p>
            "Cresci vendo minha
            <br /> mãe dando a vida
            <br /> por esse negocio e também criei paixão."
          </p>
        </figure>

        <figure className="steffi">
          <img src={SteffiImg} alt="Roberto, cliente" />
          <h4>Roberto, cliente.</h4>
          <p>
            "Como no mesmo lugar quase
            <br /> todos os dias desde 2001."
          </p>
        </figure>
      </div>
    </section>
  );
}

export default NossaSociedade;
