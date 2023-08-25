import React from "react";
import styles from './Section1.module.scss'

/**Imagens*/
import background from 'Assets/Aluno/Perfil/fundo_placeholder.jpg'
import profile from 'Assets/Aluno/Perfil/img PessoaPerfil.png'
import linkedinIco from 'Assets/Aluno/Perfil/LinkedinIcones.png'
import githubIco from 'Assets/Aluno/Perfil/githubIcones.png'
import instagramIco from 'Assets/Aluno/Perfil/InstagramIcones.png'

//a primeira section contém a Apresentação do perfil do aluno. Componente "Apresentação" no Figma.
function renderSection1(props) {
    return (
        <section className={styles.main}>
            <div className={styles.apresentacao}>
                <div className={styles.apresentacao__top}>
                    <img className={styles.background__img} src={background} alt="Imagem de fundo" />
                    <img className={styles.profile__img} src={profile} alt="Imagem de perfil" />
                </div>

                <div className={styles.apresentacao__bottom}>

                    <div className={styles.apresentacao__bottom__left}>{/*Nome do aluno, curso/info e contatos*/}
                        <h1>Aluno fulado de Tal</h1>
                        <h2>Curso do aluno - período | Anotação que o aluno ou tecnologia que estua, área de atução, etc. </h2>
                        <p>Localidade: Local onde mora</p>
                        <p>E-mail: fulanodetal@gmail.com</p>
                        <p>Telefone: (61) 99999-9999</p>

                        <h3>Pela Web</h3>
                        <div className={styles.wrap_botoes}>
                            <div className={styles.button__linkedin}>
                                <img className={styles.button__linkedin__ico} src={linkedinIco} alt="Linkedin" />
                            </div>
                            <div className={styles.button__github}>
                                <img className={styles.button__github__ico} src={githubIco} alt="GitHub" />
                            </div>
                            <div className={styles.button__instagram}>
                                <img className={styles.button__instagram__ico} src={instagramIco} alt="Instagram" />
                            </div>
                        </div>

                    </div>

                    <div className={styles.apresentacao__bottom__rigth}>{/*Resumo de competências*/}
                        <h1>Competências</h1>
                        <div className={styles.competencias}>
                            <span className={styles.button__competencias}>Competência</span>
                            <span className={styles.button__competencias}>Teste</span>
                            <span className={styles.button__competencias}>Competência</span>
                            <span className={styles.button__competencias}>Competência</span>
                            <span className={styles.button__competencias}>Competência</span>
                            <span className={styles.button__competencias}>Competência</span>
                            <span className={styles.button__competencias}>Competência</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}

export default renderSection1;