import Header from './components/Header'
import MainSobre from './components/MainSobre/index'
import MainCardapio from './components/MainCardapio/index'
import FooterInformacoes from './components/FooterInformacoes/index'
import MainSociedade from './components/MainSociedade/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainSobre />
        <MainCardapio />
        <MainSociedade />
        <FooterInformacoes />
      </header>
    </div>
  );
}

export default App;
