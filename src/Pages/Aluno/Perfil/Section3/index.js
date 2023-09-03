import React from "react";
import styles from './Section3.module.scss'
import Button from "Components/Button";

function renderSection3(props) {
    return (
        <section className={styles.main}>
            <div className={styles.info_container}>
                <div className={styles.container__left}>
                    <h1>Experiências</h1>
                    <div className={styles.container__left__info}>{/**Experiência de trabalho ou projeto*/}
                        <div>
                            <h3>
                                Projeto startup | UNIECPLAC
                            </h3>
                            <p>
                                Participei de uma startup como desenvolvedor back-end dentro do centro universitário Uniceplac por 3 meses.
                            </p>
                            <img>
                            </img>
                        </div>
                    </div>
                </div>

                <div className={styles.container__rigth}>
                    <h1>Línguas</h1>
                    <div className={styles.container__rigth__info}>{/**Linguas*/}
                        <p className={styles.language}>Inglês (Intermediario)</p>
                        <p className={styles.language}>Portugês (Nativo)</p>
                    </div>
                </div>
            </div>

            <div className={styles.Button}>
                <Button label="Gerar currículo"></Button>
            </div>
        </section>
    )
}

export default renderSection3;