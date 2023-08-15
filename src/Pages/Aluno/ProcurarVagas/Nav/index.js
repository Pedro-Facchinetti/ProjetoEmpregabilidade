// Nav.js
import React from 'react';
import styles from './Nav.module.scss';

function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.Nav__Pesquisa}>
        <h2 className={styles.Nav__Pesquisa__Titulo}>Pesquisar</h2>

        <div className={styles.Nav__Pesquisa__Barra}>
          <img
            className={styles.Nav__Pesquisa__Barra__Icone}
            src={require('assets/a83d14556b4cd385c52cf68854caee55.png')}
            alt="alt text"
          />
        </div>
      </div>

      <div className={styles.Nav__CardsContainer}>
        <div className={styles.Nav__CardsContainer__CardVaga}>
          <div className={styles.flex_col}>
            <img
              className={styles.image2}
              src={require('assets/dc97da933b01591cf3f8e44178898881.png')}
              alt="alt text"
            />

            <div className={styles.flex_col1}>
              <h3 className={styles.subtitle1}>Estágio de  Programação</h3>

              <div className={styles.flex_row}>
                <div className={styles.flex_col2}>
                  <div className={styles.flex_row1}>
                    <img
                      className={styles.image}
                      src={require('assets/83aabeb6ffbbc1752e7f691ff68f2a69.png')}
                      alt="alt text"
                    />
                    <div className={styles.flex_row1__cell}>
                      <h5 className={styles.highlight1}>Estágio</h5>
                    </div>
                  </div>

                  <div className={styles.flex_row1}>
                    <img
                      className={styles.image1}
                      src={require('assets/1f908871246494cf5cb31933a8344cf5.png')}
                      alt="alt text"
                    />
                    <div className={styles.flex_row1__cell1}>
                      <h5 className={styles.highlight11}>São Paulo - SP - Remoto</h5>
                    </div>
                  </div>
                </div>

                <div className={styles.flex_row__spacer} />

                <div className={styles.box1}>
                  <h5 className={styles.highlight}>Sobre a vaga</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Nav__CardsContainer__CardVaga}>
          <div className={styles.flex_col}>
            <img
              className={styles.image2}
              src={require('assets/3fdd9bd7531e7c60ec5f2446a91328ec.png')}
              alt="alt text"
            />

            <div className={styles.flex_col1}>
              <h3 className={styles.subtitle1}>Estágio de suporte</h3>

              <div className={styles.flex_row}>
                <div className={styles.flex_col2}>
                  <div className={styles.flex_row1}>
                    <img
                      className={styles.image}
                      src={require('assets/83aabeb6ffbbc1752e7f691ff68f2a69.png')}
                      alt="alt text"
                    />
                    <div className={styles.flex_row1__cell2}>
                      <h5 className={styles.highlight1}>Estágio</h5>
                    </div>
                  </div>

                  <div className={styles.flex_row1}>
                    <img
                      className={styles.image1}
                      src={require('assets/1f908871246494cf5cb31933a8344cf5.png')}
                      alt="alt text"
                    />
                    <div className={styles.flex_row1__cell3}>
                      <h5 className={styles.highlight11}>Brasília - DF - Presencial</h5>
                    </div>
                  </div>
                </div>

                <div className={styles.flex_row__spacer1} />

                <div className={styles.box1}>
                  <h5 className={styles.highlight}>Sobre a vaga</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Nav__CardsContainer__CardVaga}>
          <div className={styles.flex_col}>
            <img
              className={styles.image2}
              src={require('assets/3c3d099ea36810a4fb9bf76575e6cf6d.png')}
              alt="alt text"
            />

            <div className={styles.flex_col1}>
              <h3 className={styles.subtitle1}>Estágio de Analise de Dados</h3>

              <div className={styles.flex_row}>
                <div className={styles.flex_col3}>
                  <div className={styles.flex_row1}>
                    <img
                      className={styles.image}
                      src={require('assets/83aabeb6ffbbc1752e7f691ff68f2a69.png')}
                      alt="alt text"
                    />
                    <div className={styles.flex_row1__cell4}>
                      <h5 className={styles.highlight1}>Estágio</h5>
                    </div>
                  </div>

                  <div className={styles.flex_row1}>
                    <img
                      className={styles.image1}
                      src={require('assets/1f908871246494cf5cb31933a8344cf5.png')}
                      alt="alt text"
                    />
                    <div className={styles.flex_row1__cell5}>
                      <h5 className={styles.highlight11}>Brasília - DF - Hibrido</h5>
                    </div>
                  </div>
                </div>

                <div className={styles.flex_row__spacer2} />

                <div className={styles.box1}>
                  <h5 className={styles.highlight}>Sobre a vaga</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;