import MaraImg from '../../img/icon-mara.jpg';
import BrockImg from '../../img/icon-brock.avif';
import SteffiImg from '../../img/icon-steffi.jfif';
import styled from 'styled-components';

const StyledSociedade = styled.section`
  .sociedade-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;}

.nossa-sociedade h1{
    padding-top: 70px;
    font-size: 60px;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
}
.sociedade-yellow{
    color: #ffd130;
}

.mara,
.brock,
.steffi {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
}

.mara img,
.brock img,
.steffi img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.mara h4,
.brock h4,
.steffi h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  max-width: 300px;
}

.mara p,
.brock p,
.steffi p {
  font-size: 0.95rem;
  color: #444;
  padding-bottom: 60px;
}

`

function NossaSociedade() {
  return (
    <StyledSociedade>
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
    </StyledSociedade>
  );
}

export default NossaSociedade;
