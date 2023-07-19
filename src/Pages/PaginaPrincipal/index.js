//PaginaPrincipal.jsx
import Cabecalho from "Components/PaginaPrincipal/Cabecalho";
import styles from './PaginaPrincipal.module.css';
import Introducao from "./Introducao";
import Estudante from './Assets/Estudante.png'
import Divisoria from './Assets/Divisoria.png'
import Escopo from "./Escopo";

function PaginaPrincipal() {
    return (
        <div className={styles.PaginaPrincipal}>
            <header>
                <div className={styles.conteudoInicial}>
                    <div className={`${styles.conteudoInicial} ${styles.esquerda}`}>
                        <Cabecalho />
                        <Introducao />
                    </div>
                    <div className={`${styles.conteudoInicial} ${styles.direita}`}>
                        <img src={Estudante} className={styles.estudante} alt="Estudante" />
                    </div>
                </div>
            </header>
            <img src={Divisoria} className={styles.Divisoria} alt="Divisória" />
            <Escopo className={styles.Escopo}/>
        </div>
    )
}

export default PaginaPrincipal;