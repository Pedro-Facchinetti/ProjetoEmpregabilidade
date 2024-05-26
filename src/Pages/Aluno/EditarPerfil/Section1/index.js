import React from "react";
import styles from './section1.module.scss'

import Button2 from 'Components/Button2';
import img from 'Assets/Aluno/Perfil/img.png'
import CustomInput from "../CustomInput";
import CustomDropdawn from "../CustomDropwdawn";

function section1() {
    /* Opções do dropdawn */
    const dropdownOptions1 = ['ADS', 'Engenharia de Software', 'Sistema da Informação'];
    const dropdownOptions2 = ['1°', '2°', '3°', '4°', '5°', '6°', '7°', '8°'];

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
                        <CustomDropdawn options={dropdownOptions1} label="Seu curso" />
                        <CustomDropdawn options={dropdownOptions2} label="Período" />
                    </div>
                    <div className={styles.input_container}>
                        <div className={styles.input_container_text}>
                            <p>Aqui ficarão as competências do título!!!</p>
                        </div>
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