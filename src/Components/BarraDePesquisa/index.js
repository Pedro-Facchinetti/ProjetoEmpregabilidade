import React from 'react';
import styles from './BarraDePesquisa.module.scss';

function BarraDePesquisa() {
    return (
        <div className={styles.Pesquisa}>
            <h2 className={styles.Pesquisa__Titulo}>Pesquisar</h2>

            <div className={styles.Pesquisa__Barra}>
                <img
                    className={styles.Pesquisa__Barra__Icone}
                    src={require('Assets/ProcurarVagas/Nav/Lupa.png')}
                    alt="Lupa da barra de pesquisa"
                />
            </div>
        </div>
    );
}

export default BarraDePesquisa;