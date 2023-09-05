import React from "react";
import styles from './section1.module.scss'

import Button2 from 'Components/Button2';
import img from 'Assets/Aluno/Perfil/img.png'
import CustomInput from "../CustomInput";
import CustomDropdown from "../CustomDropwdawn";
import CustomTextInput from "../CustomTextInput";

function section1() {
    return (
        <section1 className={styles.section}>
            <div className={styles.info__top}>
                <h1>Informações pessoais</h1>
            </div>

            <div className={styles.info__bottom}>
                <div className={styles.info_pessoais_left}>
                    <img className={styles.img_left_container} src={img} alt='imagem' />
                    <Button2 label='Editar imagem'></Button2>
                </div>

                <div className={styles.info_pessoais_rigth}>{/** Componentizar os imputs dentro da página */}
                    <div className={styles.input_container}>
                        <CustomInput placeholder="Nome completo:"></CustomInput>
                    </div>
                    <div className={styles.input_container}>
                        <CustomDropdown></CustomDropdown>
                    </div>
                    <div className={styles.input_container}>
                        <CustomTextInput></CustomTextInput>
                    </div>
                    <div className={styles.input_container}>
                        <CustomInput placeholder='Localidade:'></CustomInput>
                    </div>
                    <div className={styles.input_container}>
                        <CustomInput type='email' placeholder='Email para conato:'></CustomInput>
                        <CustomInput placeholder='Telefone:'></CustomInput>
                    </div>

                </div>
            </div>
        </section1>

    )
}

export default section1;