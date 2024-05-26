import React from "react";
import styles from './Section2.module.scss';

import linkedinIco from 'Assets/Aluno/Perfil/LinkedinIcones.png'
import githubIco from 'Assets/Aluno/Perfil/githubIcones.png'
import instagramIco from 'Assets/Aluno/Perfil/InstagramIcones.png'
import CustomInput from "../CustomInput";

function Section2() {
    return (
        <section2 className={styles.section}>
            <div className={styles.info__top}>
                <h1>Pela Web</h1>
            </div>

            <div className={styles.info__bottom}>
                <div className={styles.container_inputs}>

                    <div className={styles.button}>
                        <img src={linkedinIco} alt="Icone do Linkedin" />
                    </div>
                    <CustomInput placeholder='Coloque URL do seu Linkedin' />
                </div>
                <div className={styles.container_inputs}>
                    <div className={styles.button}>
                        <img src={githubIco} alt="Icone do Github" />
                    </div>
                    <CustomInput placeholder='Coloque URL do seu GitHub' />
                </div>
                <div className={styles.container_inputs}>
                    <div className={styles.button}>
                        <img src={instagramIco} alt="Icone do Instagram" />
                    </div>
                    <CustomInput placeholder='Coloque URL do seu Instagram profissional' />
                </div>
            </div>
        </section2>
    )
}

export default Section2;