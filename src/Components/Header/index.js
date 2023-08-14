import React from 'react';
import styles from './Header.module.scss';
import { LogoUni } from 'Components/PaginaPrincipal/Header/LogoUni/index';
import { MinhasVagas } from './MinhasVagas';
import { ProcurarVagas } from './ProcurarVagas';
import { FotoPerfil } from './FotoDePerfil/index';
import { NotificacaoSino } from './Sino/index';
import perfil from 'Assets/André.png';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__conteudo}>
        
        <div className={styles.leftContainer}>
          <LogoUni className={styles.uniLogo}/>
        </div>
        
        <div className={styles.rightContainer}>
          <div className={styles.header__conteudo__container}>
            <div className={styles.header__conteudo__container__nav}>
              <ProcurarVagas className={styles.header__conteudo__container__nav__procurar} />
              <div className={styles.header__conteudo__container__nav__spacer} />
              <MinhasVagas className={styles.header__conteudo__container__nav__minhas} />
            </div>

            <div className={styles.header__conteudo__container__spacer} />

            <div className={styles.header__conteudo__container__usuario}>
              <NotificacaoSino className={styles.header__conteudo__container__usuario__notificacao}/>
              <div className={styles.header__conteudo__container__usuario__spacer} />
              <FotoPerfil perfil={perfil} className={styles.header__conteudo__container__usuario__perfil}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;