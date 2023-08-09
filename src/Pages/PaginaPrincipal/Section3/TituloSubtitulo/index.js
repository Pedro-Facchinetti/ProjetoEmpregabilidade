import React from 'react';
import styles from './TituloSubtitulo.module.scss';

const TituloSubtitulo = () => {
  return (
    <div className={styles.tituloSubtitulo}>
      <h1 className={styles.titulo}>Quem somos?</h1>
      <h2 className={styles.subtitulo}>
        Somos alunos da própria UNICEPLAC, onde tivemos a iniciativa de melhorar a apresentação e implementação do
        projeto empregabilidade, que já existia, porém com pouca visibilidade. Formamos uma equipe com alguns alunos
        do curso de Engenharia de Software e o professor responsável pelo projeto, para que a implementação desta
        ideia fosse possível, viável e produzida de maneira profissional para benefício do nosso centro
        universitário e dos alunos dos cursos de Tecnologia.
        <br />
        <br />
        Buscamos aprimorar nossos conhecimentos de programação, criação e Design Web, para garantir uma melhor
        experiência do usuário com nossos serviços, além de transformar essa integração do projeto em um trabalho
        que garanta sua segurança de informação.
      </h2>
    </div>
  );
};

export default TituloSubtitulo;
