// Escopo.jsx
import Apresentacao from './Apresentacao';
import Equipe from './Equipe';
import QuemSomos from './QuemSomos';
import styles from './Escopo.module.css'

function Escopo() {
    return (
        <div className={styles.escopo}>
            <Apresentacao />
            <div className={styles.fundo}>
                <QuemSomos />
                <Equipe/>
            </div>
        </div>
    )
}

export default Escopo;