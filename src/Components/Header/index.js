import React from 'react';
import styles from './Header.module.scss';
import { LogoUni } from 'Components/PaginaPrincipal/Header/LogoUni/index'
import { MinhasVagas } from './MinhasVagas';
import { ProcurarVagas } from './ProcurarVagas'; 

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__conteudo}>
        <LogoUni />
        <div className={styles.header__conteudo__spacer} />

        <div className={styles.header__conteudo__container}>
          <div className={styles.header__conteudo__container__nav}>
            <ProcurarVagas className={styles.header__conteudo__container__nav__procurar} />
            <div className={styles.header__conteudo__container__nav__spacer} />
            <MinhasVagas className={styles.header__conteudo__container__nav__minhas} />
          </div>

          <div className={styles.header__conteudo__container__spacer} />

          <div className={styles.header__conteudo__container__usuario}>
            <img
              className={styles.header__conteudo__container__usuario__notificacao}
              src={require('Assets/Sino.png')}
              alt="ícone de notificação"
            />
            <div className={styles.header__conteudo__container__usuario__spacer} />
            <img
              className={styles.header__conteudo__container__usuario__perfil}
              src={require('Assets/Icone_perfil.png')}
              alt="foto de perfil do aluno"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;