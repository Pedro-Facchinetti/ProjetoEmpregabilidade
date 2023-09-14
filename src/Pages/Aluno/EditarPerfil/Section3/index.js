import React from "react"
import styles from './Section3.module.scss'
import CustomTextInput from "../CustomTextInput";

function renderSection3(props) {
    return (
        <section3 className={styles.section3}>
            <div className={styles.info_top}>
                <h1>Sobre mim</h1>
            </div>

            <div className={styles.info_bottom}>
                <div className={styles.CustomTextInput}>
                    <CustomTextInput label="Máximo de 500 caracteres:" />
                </div>
            </div>
        </section3>
    )
}

export default renderSection3;