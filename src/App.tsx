import './App.scss';
import Carta from './components/Carta';

const App: React.FC = () => {
  return (
    <div className="memoween">
      <div className="memoween__content">
        <h1 className="memoween__title">Jogo da Memória</h1>
        <div className="memoween__container">
          <Carta imagem="/src/assets/1.png" />
          <Carta imagem="/src/assets/2.png" />
          <Carta imagem="/src/assets/3.png" />
          <Carta imagem="/src/assets/4.png" />
          <Carta imagem="/src/assets/5.png" />
          <Carta imagem="/src/assets/6.png" />
          <Carta imagem="/src/assets/7.png" />
          <Carta imagem="/src/assets/8.png" />
          <Carta imagem="/src/assets/9.png" />
        </div>
      </div>
    </div>
  );
};

export default App;
