import React from 'react';
import styles from './Perfil.module.scss'
import Nav from '../ProcurarVagas/Nav/index'

//Sessões da página
import renderSection1 from './Section1/index';
import renderSection2 from './Section2/index';
import renderSection3 from './Section3/index';

function Perfil(props) {
    return(
        <main className={styles.main}>
            <div id='header'></div>
            <div id='section1' className={styles.main_section}>{renderSection1(props)}</div>
            <div id='section2' className={styles.main_section}>{renderSection2(props)}</div>
            <div id='section3' className={styles.main_section}>{renderSection3(props)}</div>
        </main>
    )
}

export default Perfil;