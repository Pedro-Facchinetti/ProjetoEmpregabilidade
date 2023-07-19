// QuemSomos.jsx
import styles from './QuemSomos.module.css';

function QuemSomos() {
    return (
        <div className={styles.quemSomos}>
            <h1 className={styles.titulo}>Quem somos?</h1>
            <p className={styles.texto1}>
                Somo alunos da própria UNICEPLAC, onde tivemos a iniciativa de melhorar a apresentação
                e implementação do projeto empregabilidade, que já existia, porém com pouca visibilidade.
                Formamos uma equipe com alguns alunos do curso de Engenharia de Software e o professor 
                responsável pelo projeto, para que a implementação desta ideia fosse possível, viável e 
                produzida de maneira profissíonal para benefício do nosso centro universitário e dos 
                alunos dos cursos de Tecnologia.</p>

                <p className={styles.texto2}>Buscamos aprimorar nossos conhecimentos de programação, criação e Design Web, para garantir 
                uma melhor experiência do usuário com nossos serviços, além de transoformar essa integração 
                do projeto em um trabalho que garanta sua segurança de informação.
            </p>
        </div>
    )
}

export default QuemSomos;
