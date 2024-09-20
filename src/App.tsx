import { useEffect, useState } from 'react';
import './App.scss';
import Carta from './components/Carta';

const App: React.FC = () => {
  const imagens = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png"
  ];

  const [cartas, setCartas] = useState<string[]>([]);
  const [viradas, setViradas] = useState<number[]>([]);
  const [paresEncontrados, setParesEncontrados] = useState<number[]>([]);
  const [jogoGanho, setJogoGanho] = useState(false);

  useEffect(() => {
    embaralharCartas();
  }, []);

  useEffect(() => {
    if (paresEncontrados.length === cartas.length && cartas.length > 0) {
      setJogoGanho(true);
    }
  }, [paresEncontrados, cartas]);

  const embaralharCartas = () => {
    const cartasDuplicadas = [...imagens, ...imagens];
    const cartasEmbaralhadas = cartasDuplicadas.sort(() => 0.5 - Math.random());
    setCartas(cartasEmbaralhadas);
    setViradas([]);
    setParesEncontrados([]);
    setJogoGanho(false);
  };

  const virarCarta = (index: number) => {
    if (viradas.length === 2 || paresEncontrados.includes(index)) return;

    setViradas((prev) => [...prev, index]);

    if (viradas.length === 1) {
      const primeiraCarta = viradas[0];
      if (cartas[primeiraCarta] === cartas[index]) {
        setParesEncontrados((prev) => [...prev, primeiraCarta, index]);
      }
      setTimeout(() => setViradas([]), 1000);
    }
  };

  return (
    <div className="memoween">
      <div className="memoween__content">
        <h1 className="memoween__title">Jogo da Memória</h1>
        <div className="memoween__container">
          {cartas.map((imagem, index) => (
            <Carta
              key={index}
              imagem={imagem}
              index={index}
              virarCarta={virarCarta}
              virada={viradas.includes(index) || paresEncontrados.includes(index)}
            />
          ))}
        </div>
      </div>

      {(jogoGanho &&
        <div className="modal">
          <div className="modal__content">
            <img className="modal__web" src="/Web.png" />
            <h2>Buuh!</h2>
            <p>Parabéns! Você completou este jogo da memória. Que tal experimentar uma dificuldade diferente ou jogar novamente na mesma dificuldade?</p>
            <button className="modal__button" onClick={embaralharCartas}>Jogar novamente</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
