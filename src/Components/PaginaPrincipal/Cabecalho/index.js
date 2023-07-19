import logo from './logo.png';
import styles from './Cabecalho.module.css';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} className={styles.logo} alt="Logo da Uniceplac"></img>
            <nav className={styles.nav}>
                <h2 className={styles.texto}>Sobre</h2>
                <h2 className={styles.texto}>Quem Somos?</h2>
            </nav>
        </header>
    )
}

export default Cabecalho;
