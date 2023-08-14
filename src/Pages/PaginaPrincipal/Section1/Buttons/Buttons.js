import React from 'react';
import Button from 'Components/Button/index'
import styles from './Buttons.module.scss';

function Buttons() {
  return (
    <div className={styles.topo_Pagina__Conteudo__Botoes}>
      <Button label="Cadastrar-se" />
      <h2 className={styles.titulos_Subtitulo_Cabecalho__Cadastrar__JaSou}>Já sou cadastrado</h2>
    </div>
  );
}

export default Buttons;
