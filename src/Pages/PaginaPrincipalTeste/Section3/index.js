import React from 'react';

import TituloSubtitulo from './TituloSubtitulo/index';
import Equipe from './Equipe/index';

import styles from './section3.module.scss';

function Section3() {

  const equipe = [
    {
      nome: 'André Félix',
      cargo: 'Professor',
      foto: require('Assets/André.png'),
    },
    {
      nome: 'Pedro Facchinetti',
      cargo: 'Dev. Full-Stack',
      foto: require('Assets/Pedro.png'),
    },
    {
      nome: 'João De Menezes',
      cargo: 'UX Designer',
      foto: require('Assets/João.png'),
    },
    {
      nome: 'Marcos Antônio',
      cargo: 'UX Designer',
      foto: require('Assets/Pedro.png'),
    },
  ];
      
  return (
    <section className={styles.apresentacao}>
      <img
        className={styles.apresentacao__Logo}
        src={require('Assets/LogoBackground.png')}
        alt="alt text"
      />

      <div className={styles.apresentacao__Conteudo}>
        <TituloSubtitulo 
          title="Quem somos?" 
          subtitle={`Somos alunos da própria UNICEPLAC, onde tivemos a iniciativa de melhorar a apresentação e implementação do
            projeto empregabilidade, que já existia, porém com pouca visibilidade. Formamos uma equipe com alguns alunos
            do curso de Engenharia de Software e o professor responsável pelo projeto, para que a implementação desta
            ideia fosse possível, viável e produzida de maneira profissional para benefício do nosso centro
            universitário e dos alunos dos cursos de Tecnologia.
            <br />
            <br />
            Buscamos aprimorar nossos conhecimentos de programação, criação e Design Web, para garantir uma melhor
            experiência do usuário com nossos serviços, além de transformar essa integração do projeto em um trabalho
            que garanta sua segurança de informação.`}
        />

        <Equipe title="Equipe de desenvolvedores" membros={equipe} />
      </div>
    </section>
  );
}

export default Section3;