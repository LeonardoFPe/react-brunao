import Hamburguer from '../../img/hamburguer.jpg';

function Header() {
    return (
        <header>
            <h1>Brunão Restaurant</h1>
            <p>Venha provar o melhor hambúrguer do Brasil!</p>
            <figure className="header-img">
                <img src={Hamburguer} alt="foto-hamburguer" />
            </figure>
            <button>RESERVE UMA MESA</button>
        </header>
    );
}

export default Header;
