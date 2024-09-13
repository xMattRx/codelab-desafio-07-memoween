import React, { useState } from 'react';
import './index.scss';

type CartaProps = {
    imagem: string;
};

const Carta: React.FC<CartaProps> = ({ imagem }) => {
    const [virada, setVirada] = useState(false);

    const handleClick = () => {
        setVirada(!virada); // Alterna o estado de frente e verso
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
