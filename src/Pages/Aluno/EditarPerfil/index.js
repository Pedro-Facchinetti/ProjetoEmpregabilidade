import React from 'react';
import styles from './EditarPerfil.module.scss'

import ScrollToSectionButton from 'Pages/Aluno/EditarPerfil/ScrollToSectionButton';

import renderSection1 from './Section1';
import renderSection2 from './Section2';
import renderSection3 from './Section3';
import renderSection4 from './Section4';

function EditarPerfil(props) {
    return (
        <div className={styles.main}>
            
            <div className={styles.container__left}>
                <nav className={styles.nav}>
                    <ScrollToSectionButton sectionId="section1" buttonLabel="Informações Pessoais" />
                    <ScrollToSectionButton sectionId="section2" buttonLabel="Pela Web" />
                    <ScrollToSectionButton sectionId="section3" buttonLabel="Sobre mim" />
                    <ScrollToSectionButton sectionId="section4" buttonLabel="Experiências" />
                    <ScrollToSectionButton sectionId="section5" buttonLabel="Idiomas" />
                </nav>
            </div>

            <div className={styles.container__rigth}>
                <div id='section1' className={styles.containers}>{renderSection1(props)}</div>{/** Informações pessoais */}
                <div id='section2' className={styles.containers}>{renderSection2(props)}</div>{/** Pela web */}
                <div id='section3' className={styles.containers}>{renderSection3(props)}</div>{/** Sobre mim */}
                <div id='section4' className={styles.containers}>{renderSection4(props)}</div>{/** Eperiências */}
                <div id='section5' className={styles.containers}>{renderSection2(props)}</div>{/** Idiomas */}
            </div>
        </div>
    )
}

export default EditarPerfil;