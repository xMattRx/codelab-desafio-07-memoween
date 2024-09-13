import { useEffect, useState } from 'react';
import './App.scss';
import Carta from './components/Carta';

const App: React.FC = () => {
  const imagens = [
    "/src/assets/1.png",
    "/src/assets/2.png",
    "/src/assets/3.png",
    "/src/assets/4.png",
    "/src/assets/5.png",
    "/src/assets/6.png",
    "/src/assets/7.png",
    "/src/assets/8.png",
    "/src/assets/9.png"
  ];

  const [cartas, setCartas] = useState<string[]>([]);
  const [viradas, setViradas] = useState<number[]>([]);
  const [paresEncontrados, setParesEncontrados] = useState<number[]>([]);

  useEffect(() => {
    const cartasDuplicadas = [...imagens, ...imagens];
    const cartasEmbaralhadas = cartasDuplicadas.sort(() => 0.5 - Math.random());
    setCartas(cartasEmbaralhadas);
  }, []);

  const virarCarta = (index: number) => {
    if (viradas.length === 2) return;

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
    </div>
  );
};

export default App;
