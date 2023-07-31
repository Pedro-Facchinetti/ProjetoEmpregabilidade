import React from 'react';
import cn from 'classnames';

import renderSection1 from './Section1/index';
import renderSection2 from './Section2/index';
import renderSection3 from './Section3/index';

import styles from './PaginaPrincipal.module.scss';

function PaginaPrincipal(props) {
  return (
    <main className={cn(styles.main, 'pagina-principal')}>
      <div className={styles.main__cell}>{renderSection1(props)}</div>
      <div className={styles.main__cell}>{renderSection2(props)}</div>
      <div className={styles.main__cell}>{renderSection3(props)}</div>
      <img className={styles.icon} src={require('Assets/Seta.png')} alt="Seta guia" />
    </main>
  );
}

export default PaginaPrincipal;