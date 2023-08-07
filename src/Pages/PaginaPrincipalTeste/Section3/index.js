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
      foto: require('Assets/Marcos.png'),
    },
  ];

  return (
    <section
      className={styles.apresentacao}
      style={{
        backgroundImage: `url(${require('Assets/LogoBackground.png')})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}      
    >
      <div className={styles.apresentacao__Conteudo}>
        <TituloSubtitulo />
        <Equipe title="Equipe de desenvolvedores" membros={equipe} />
      </div>
    </section>
  );
}

export default Section3;