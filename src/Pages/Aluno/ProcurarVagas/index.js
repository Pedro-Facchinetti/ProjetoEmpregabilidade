import React from 'react';
import styles from './ProcurarVagas.module.scss';
import Nav from './Nav';
import VagaInfo from './VagaInfo';

function ProcurarVagas() {
  return (
        <div className={styles.content}>
          <Nav />
          <div className={styles.procurarVagas__Content__spacer} />
          <VagaInfo />
        </div>
  );
}

export default ProcurarVagas;
