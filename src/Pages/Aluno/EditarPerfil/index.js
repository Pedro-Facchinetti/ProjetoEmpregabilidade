import React from 'react';
import styles from './EditarPerfil.module.scss'

import img from 'Assets/Aluno/Perfil/img.png'
import NavButton from './NavButton';
import Button2 from 'Components/Button2';
import Input from './Input'

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

            <div className={styles.container__rigth}>{/** Futuramente pode ser melhor transfirmar estas div's em sections */}
                <div id='informacoes-pessoais' className={styles.containers}>
                    <div className={styles.firt_container_info}>
                        <div className={styles.info__top}>
                            <h1>Informações pessoais</h1>
                        </div>
                        
                        <div className={styles.info__bottom}>
                            <div className={styles.info_pessoais_left}>
                                <img className={styles.img_left_container} src={img} alt='imagem' />
                                <Button2 label='Editar imagem'></Button2>
                            </div>

                            <div className={styles.info_pessoais_rigth}>{/** Componentizar os imputs dentro da página */}
                                <Input></Input>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='pela-web' className={styles.containers}>

                </div>

                <div id='sobre-mim' className={styles.containers}>

                </div>

                <div id='experiencias' className={styles.containers}>

                </div>

                <div id='linguas' className={styles.containers}>

                </div>
            </div>
        </div>
    )
}

export default EditarPerfil;