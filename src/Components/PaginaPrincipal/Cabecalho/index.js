import logo from './logo.png';
import styles from './Cabecalho.module.css';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
                <img src={logo} alt="Logo da Uniceplac"></img>
            <nav>
                <h2>Sobre</h2>
                <h2>Quem Somos?</h2>
            </nav>
        </header>
    )
}

export default Cabecalho;