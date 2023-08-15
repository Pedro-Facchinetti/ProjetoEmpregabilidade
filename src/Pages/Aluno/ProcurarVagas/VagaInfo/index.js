//VagaInfo.js
import React from 'react';
import styles from './VagaInfo.module.scss';

function VagaInfo() {
  return (
    <div className={styles.procurarVagas__Content__VagaInfo}>
    <div className={styles.procurarVagas__Content__VagaInfo__BotaoInscrever}>
      <h5 className={styles.procurarVagas__Content__VagaInfo__BotaoInscrever__Texto}>Enviar currículo</h5>
    </div>

    <h2 className={styles.procurarVagas__Content__VagaInfo__Content_box}>
      <span className={styles.procurarVagas__Content__VagaInfo__Content}>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span0}>
          Sobre a vaga:
          <br />
        </span>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span1}>
          Buscamos um estagiário que esteja apto a trabalhar e aprender dentro de um novo âmbito de trabalho,
          trabalhamos diretamente com a produção de sites para outras empresas, então como requerimento queremos
          alguém que queira seguir trabalho com produção WEB.
          <br />
          <br />
        </span>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span2}>
          Requisitos:
          <br />
        </span>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span3}>
          Estar cursando ensino superior na área de tecnologia, Engenharia de Software, ADS e afins;
          <br />
          {`Saber trabalhar com JavaScript, HTML & CSS seria um diferencial;`}
          <br />
          Ter facilidade de trabalhar em equipe de forma colaborativa;
          <br />
          Perfil autogerenciável, transparência na comunicação e proatividade.
          <br />
          <br />
        </span>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span4}>
          O que oferecemos:
          <br />
        </span>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span5}>
          Bolsa-auxílio: R$1.200;
          <br />
          Vale refeição;
          <br />
          Day off no aniversário;
          <br />
          Acesso a cursos dentro da empresa.
          <br />
          <br />
        </span>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span6}>
          Sobre a empresa:
          <br />
        </span>
        <span className={styles.procurarVagas__Content__VagaInfo__Content_span7}>
          Nós da WebMakers trabalhamos a mais de 5 anos dentro do mercado WEB, desenvolvendo sites para empresas
          como LG - Lugar de Gente, Asa Tecnologia, INPUT TECNOLOGIA e AZ Serviços. Produzimos todo o escopo do
          tie, desde o Design ao Back-end, e entregamos um ótimo domínio para sua hospedagem. Estamos sempre
          dispostos a contratar mais funcionários e deixa-los preparados para nosso mercado de trabalho. <br />
          Somos uma empresa focada e especializada em produção, onde todos os nossos funcionários trabalham dentro
          ode um âmbito de trabalho saudável
        </span>
      </span>
    </h2>

    <div className={styles.group}>
      <div className={styles.flex_col4}>
        <div className={styles.procurarVagas__Content__VagaInfo__BannerContainer}>
          <img
            className={styles.procurarVagas__Content__VagaInfo__Banner}
            src={require('assets/18a8c2c803ff05fdf8e8cb8155aa5b09.png')}
            alt="alt text"
          />

          <div className={styles.procurarVagas__Content__VagaInfo__BotaoVoltar}>
            <h3 className={styles.procurarVagas__Content__VagaInfo__BotaoVoltar__Texto}>Voltar</h3>
          </div>
        </div>

        <div className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo}>
          <div className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header}>
            <h1 className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__Titulo}>
              Estágio para programador Web
            </h1>
            <h3 className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__Subtitulo}>
              Publicada em 16 de março de 2023
            </h3>

            <div className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__Localidade}>
              <img
                className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__Localidade__Icone}
                src={require('assets/e0856e66b412822909d83770a3e6ded4.png')}
                alt="alt text"
              />
              <h3 className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__Localidade__Texto}>
                Brasília - DF - Remoto
              </h3>
            </div>

            <div className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__TipoVaga}>
              <img
                className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__TipoVaga__Icone}
                src={require('assets/347ab385d45ec991131cebf9017ead31.png')}
                alt="alt text"
              />
              <h3 className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__Header__TipoVaga__Texto}>
                Estágio
              </h3>
            </div>
          </div>

          <hr className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__LinhaDivisoria} size={1} />
          <h1 className={styles.procurarVagas__Content__VagaInfo__TituloSubtitulo__DescricaoTitulo}>
            Descrição da vaga{' '}
          </h1>
        </div>
      </div>

      <img
        className={styles.procurarVagas__Content__VagaInfo__Icone}
        src={require('assets/17606f8c1457ac5785c5dd7cc001fc0f.png')}
        alt="alt text"
      />
    </div>
  </div>
  );
}

export default VagaInfo;
