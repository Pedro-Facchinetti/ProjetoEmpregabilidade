import React from 'react';
import styles from './EditarPerfil.module.scss'

import NavButton from './NavButton';

import renderSection1 from './Section1';
import renderSection2 from './Section2';

function EditarPerfil(props) {
    return (
        <div className={styles.main}>
            <div className={styles.container__left}>
                <nav className={styles.nav}>
                    <NavButton label='Informações pessoais' />
                    <NavButton label='Pela WEB' />
                    <NavButton label='Sobre mim' />
                    <NavButton label='Experiências' />
                    <NavButton label='Linguas' />
                </nav>
            </div>

            <div className={styles.container__rigth}>
                <div id='section1' className={styles.containers}>{renderSection1(props)}</div>
                <div id='section2' className={styles.containers}>{renderSection2(props)}</div>
                <div id='section3' className={styles.containers}>{renderSection2(props)}</div>
            </div>
        </div>
    )
}

export default EditarPerfil;