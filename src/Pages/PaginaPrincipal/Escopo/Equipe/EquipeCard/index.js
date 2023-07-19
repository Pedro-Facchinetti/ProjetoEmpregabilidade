// EquipeCard.jsx
import styles from './EquipeCard.module.css';

function EquipeCard({ nome, cargo, imagem, linkedin }) {
    const handleClick = () => {
        window.open(linkedin, '_blank'); // Abre o link em uma nova janela ou aba
    };

    return (
        <div className={styles.equipeCard} onClick={handleClick}>
            <img className={styles.imagemPerfil} src={imagem} alt={`Imagem de ${nome}`} />
            <h3 className={styles.nome}>{nome}</h3>
            <p className={styles.cargo}>{cargo}</p>
            <hr />
        </div>
    );
}

export default EquipeCard;