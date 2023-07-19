// Apresentacao.jsx
import styles from './Apresentacao.module.css';
import Cards from './Cards';

function Apresentacao() {
    return (
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Projeto empregabilidade</h1>
            <p className={styles.texto}>
                Este projeto foi criado com o objetivo de ajudar os alunos dos cursos de tecnologia,
                com vagas e estágios na area com empresas parceiras da UNICEPLAC, como um incentivo 
                de fortalecer ou iniciar sua carreira profíssional. Organizamos suas competências 
                como um breve currículo, e montamos uma “vitrine de alunos” para as nossas empresas 
                parceiras que precisam de funcionarios possam ter maior visualização de alunos desta 
                universidade interessados em vagas propostas por elas.
            </p>
            <Cards />
        </div>
    )
}

export default Apresentacao;