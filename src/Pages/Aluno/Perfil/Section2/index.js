import React from "react";
import styles from './Section2.module.scss'

function renderSection2(props){
    return(
        <section className={styles.main}>
            <div className={styles.sobre__mim}>
                <h1>Sobre mim</h1>
                <p>Busco iniciar minha carreira profissional, adquirindo experiência e melhorando meu desenvolvimento pessoal. Tenho disposição para aprender conteúdos novos e melhorar minhas competências. Me destaco em tecnologia por aprender rápido sobre qualquer conteúdo da área, além de ter facilidade de trabalhar em grupo, sendo em exercer cargos quanto gerenciamento. Organização pessoal para mim não é um problema.</p>
            </div>
        </section>
    )
}

export default renderSection2;