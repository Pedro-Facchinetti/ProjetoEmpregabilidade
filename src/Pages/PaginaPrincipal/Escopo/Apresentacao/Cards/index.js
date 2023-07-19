// Cards.jsx
import styles from './Cards.module.css';
import cardLikedin from '../Assets/CardLikedin.png';
import cardVisibilidade from '../Assets/CardVisibilidade.png'
import cardRecomendacao from '../Assets/CardRecomendacao.png'
import Divisoria from '../Assets/Divisoria.png'

function Cards() {
    return (
        <div className={styles.cards}>
            <img src={cardLikedin} className={styles.card} alt="Card Likedin" />
            <img src={cardVisibilidade} className={styles.card} alt="Card Visibilidade" />
            <img src={cardRecomendacao} className={styles.card} alt="Card Recomendacao" />
            <img src={Divisoria} className={styles.divisoria} alt="Divisória" />
        </div>
    )
}

export default Cards;
