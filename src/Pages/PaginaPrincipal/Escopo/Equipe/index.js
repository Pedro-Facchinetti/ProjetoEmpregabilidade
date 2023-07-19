// Equipe.jsx
import styles from './Equipe.module.css';
import EquipeCard from './EquipeCard';
import Andre from './Assets/André.png'
import Pedro from './Assets/Pedro.png'
import Joao from './Assets/João.png'

function Equipe() {
    const equipe = [
        { nome: 'André Félix', cargo: 'Professor', imagem: Andre, linkedin: 'https://www.linkedin.com/in/andré-felix-freitas-05200521' },
        { nome: 'Pedro Facchinetti', cargo: 'Dev. Full-Stack', imagem: Pedro, linkedin: 'https://www.linkedin.com/in/pedrofacchinetti' },
        { nome: 'João de Menezes', cargo: 'Designer', imagem: Joao, linkedin: 'https://www.linkedin.com/in/joão-de-menezes' },
    ];

    return (
        <div className={styles.equipe}>
            <h2 className={styles.titulo}>Equipe de Desenvolvedores</h2>
            <div className={styles.cardContainer}>
                {equipe.map((membro, i) => <EquipeCard key={i} {...membro} />)}
            </div>
        </div>
    );
}

export default Equipe;