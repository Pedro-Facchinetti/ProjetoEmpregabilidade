//introducao.jsx
import styles from './Introducao.module.css';
import Botao from "../Botao";

function Introducao() {
    return (
        <div className={styles.introducao}>
            <h1 className={styles.tituloGrande}>Empregabilidade e Estágios nas Áreas de T.I.</h1>
            <p className={styles.textoMenor}>
                Amplie sua possibilidade de Empregabilidade e Estágio nas se cadastrando no nosso projeto de Empregabilidade do Centro Universitário UNICEPLAC.
            </p>
            <div className={styles.buttonContainer}>
                <Botao className={styles.Botao}>
                    Cadastrar-se
                </Botao>
                <p className={styles.jaCadastrado}>Já sou cadastrado</p>
            </div>
        </div>
    )
}

export default Introducao;