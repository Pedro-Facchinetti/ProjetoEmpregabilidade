import React from 'react';
import styles from './EditarPerfil.module.scss'

import ScrollToSectionButton from 'Pages/Aluno/EditarPerfil/ScrollToSectionButton';

import renderSection1 from './Section1';
import renderSection2 from './Section2';

function EditarPerfil(props) {
    return (
        <div className={styles.main}>
            
            <div className={styles.container__left}>
                <nav className={styles.nav}>
                    <ScrollToSectionButton sectionId="section1" buttonLabel="Informações Pessoais" />
                    <ScrollToSectionButton sectionId="section2" buttonLabel="Pela Web" />
                    <ScrollToSectionButton sectionId="section3" buttonLabel="Seção 3" />
                    <ScrollToSectionButton sectionId="section4" buttonLabel="Seção 4" />
                    <ScrollToSectionButton sectionId="section5" buttonLabel="Seção 5" />
                    <ScrollToSectionButton sectionId="section6" buttonLabel="Seção 6" />
                </nav>
            </div>

            <div className={styles.container__rigth}>
                <div id='section1' className={styles.containers}>{renderSection1(props)}</div>
                <div id='section2' className={styles.containers}>{renderSection2(props)}</div>
                <div id='section3' className={styles.containers}>{renderSection2(props)}</div>
                <div id='section4' className={styles.containers}>{renderSection2(props)}</div>
                <div id='section5' className={styles.containers}>{renderSection2(props)}</div>
                <div id='section6' className={styles.containers}>{renderSection2(props)}</div>
            </div>
        </div>
    )
}

export default EditarPerfil;