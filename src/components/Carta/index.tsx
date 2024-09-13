import React from 'react';
import './index.scss';

type CartaProps = {
    imagem: string;
    index: number;
    virarCarta: (index: number) => void;
    virada: boolean;
};

const Carta: React.FC<CartaProps> = ({ imagem, index, virarCarta, virada }) => {
    const handleClick = () => {
        if (!virada) {
            virarCarta(index); // Vira a carta se ela ainda não estiver virada
        }
    };

    return (
        <div className="carta-container" onClick={handleClick}>
            <div className={`carta ${virada ? 'virada' : ''}`}>
                <div className="frente">
                    <img src={imagem} />
                </div>
                <div className="verso">
                    Buuh!
                </div>
            </div>
        </div>
    );
};

export default Carta;
