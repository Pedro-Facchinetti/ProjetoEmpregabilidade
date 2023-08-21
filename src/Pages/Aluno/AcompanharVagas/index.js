import React from 'react';
import styles from './AcompanharVagas.module.scss';
import Nav from './Nav';
import VagaInfo from './VagaInfo';

function AcompanharVagas() {
  return (
    <main className={styles.main}>
      <Nav className={styles.nav} />
      <VagaInfo className={styles.vagaInfo} />
    </main>
  );
}

export default AcompanharVagas;
