//Botao.jsx
import React from 'react';
import styles from './Botao.module.css';

function Botao({ children }) {
    return <button className={styles.botao}>{children}</button>
}

export default Botao;
