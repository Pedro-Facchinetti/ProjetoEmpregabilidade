import React from 'react';
import styles from './Conclusao.module.scss';
import Button from 'Components/Button/index';

export function Conclusao() {
  return (
    <div className={styles.conclusao}>
      <h1 className={styles.titulo}>Faça parte dessa história</h1>
      <h2 className={styles.subtitulo}>
        Venha fazer parte de uma colaboração dinâmica que transcende 
        barreiras educacionais e impulsiona o sucesso profissional. 
        A UNICEPLAC está buscando parceiros empresariais inovadores, 
        como você, para criar uma sinergia única entre o mundo acadêmico 
        e o setor empresarial.
        <br />
        <br />
        Clique no botão abaixo para que possamos conhecer você!
      </h2>
      <div className={styles.buttonContainer}>
      <Button label="Cadastre sua empresa" />
      </div>
    </div>
  );
}