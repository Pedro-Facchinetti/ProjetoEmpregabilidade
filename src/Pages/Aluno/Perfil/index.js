import React from 'react';

//Sessões da página
import renderSection1 from 'Pages/Aluno/Perfil/Section1/index';

import styles from './Perfil.module.scss'

function Perfil(props) {
    return(
        <main className={styles.main}>
            <div id='section1' className={styles.main_section}>{renderSection1(props)}</div>
        </main>
    )
}

export default Perfil;