import Header from './components/Header'
import MainSobre from './components/MainSobre/index'
import MainCardapio from './components/MainCardapio/index'
import FooterInformacoes from './components/FooterInformacoes/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainSobre />
        <MainCardapio />
        <FooterInformacoes />
      </header>
    </div>
  );
}

export default App;
