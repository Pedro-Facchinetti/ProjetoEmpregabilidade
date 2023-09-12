import React from 'react';
import Button from 'Components/Button/index';
import { Link } from 'react-router-dom';
import styles from './Buttons.module.scss';

function Buttons() {
  return (
    <div className={styles.topo_Pagina__Conteudo__Botoes}>
      <Link to="/cadastro">
        <Button label="Cadastrar-se" />
      </Link>
      <h2 className={styles.titulos_Subtitulo_Cabecalho__Cadastrar__JaSou}>
        <Link to="/login">Já sou cadastrado</Link>
      </h2>
    </div>
  );
}

export default Buttons;